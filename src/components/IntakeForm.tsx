import { useState, useEffect, useRef } from 'react'
import styles from './IntakeForm.module.css'

const INTENT_MAP: Record<string, string> = {
  'general':      'free-assessment',
  'base-plan':    'base-plan',
  'growth-plan':  'growth-plan',
  'global-geo':   'global-geo',
  'custom':       'custom',
  'monitoring':   'monitoring',
}

const SERVICE_OPTIONS = [
  { value: 'free-assessment', label: '免费需求评估（先了解，不购买）' },
  { value: 'base-plan',       label: 'AI 认知基础建设 ¥39,800' },
  { value: 'growth-plan',     label: 'AI 认知增长建设 ¥69,800' },
  { value: 'global-geo',      label: '品牌出海 / 海外 GEO 建设' },
  { value: 'custom',          label: '企业定制项目' },
  { value: 'monitoring',      label: '持续监测与迭代' },
] as const

type ServiceValue = typeof SERVICE_OPTIONS[number]['value']
type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  company: string
  website: string
  contact: string
  email: string
  product: string
  aiProblem: string
  market: string
  service: ServiceValue | ''
  privacy: boolean
}

const EMPTY: FormData = {
  company: '', website: '', contact: '', email: '',
  product: '', aiProblem: '', market: '',
  service: '', privacy: false,
}

function track(event: string, props?: Record<string, string>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', event, props)
  } else {
    console.debug('[AskLume Analytics]', event, props)
  }
}

function buildMailto(data: FormData): string {
  const svcLabel = SERVICE_OPTIONS.find(o => o.value === data.service)?.label ?? data.service
  const body = [
    `公司名称：${data.company}`,
    `官网：${data.website}`,
    `联系人：${data.contact}`,
    `邮箱：${data.email}`,
    `核心产品或服务：${data.product}`,
    `最想解决的 AI 问题：\n${data.aiProblem}`,
    `目标市场与语言：${data.market || '未填写'}`,
    `意向服务：${svcLabel}`,
  ].join('\n\n')
  return 'mailto:hello@asklume.com?subject=' + encodeURIComponent('需求评估申请 · ' + data.company) + '&body=' + encodeURIComponent(body)
}

export function IntakeForm() {
  const [form, setForm] = useState<FormData>(EMPTY)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const intent = params.get('intent') ?? ''
    const serviceValue = INTENT_MAP[intent] as ServiceValue | undefined
    if (serviceValue) setForm(prev => ({ ...prev, service: serviceValue }))
  }, [])

  function setField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!form.company.trim())   e.company   = '请填写公司名称'
    if (!form.website.trim())   e.website   = '请填写官网地址'
    if (!form.contact.trim())   e.contact   = '请填写联系人姓名'
    if (!form.email.trim())     e.email     = '请填写企业邮箱'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = '邮箱格式不正确'
    if (!form.product.trim())   e.product   = '请描述核心产品或服务'
    if (!form.aiProblem.trim()) e.aiProblem = '请描述你最想解决的 AI 问题'
    if (!form.service)          e.service   = '请选择意向服务'
    if (!form.privacy)          e.privacy   = '请阅读并同意隐私政策'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    track('form_submit_attempt', { service: form.service })
    setStatus('submitting')
    try {
      const ENDPOINT = (import.meta as any).env?.VITE_INTAKE_ENDPOINT as string | undefined
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            ...form,
            source: document.referrer || 'direct',
            page: window.location.pathname,
            intent: new URLSearchParams(window.location.search).get('intent') ?? '',
          }),
        })
        if (!res.ok) throw new Error('HTTP ' + res.status)
        track('form_submit_success', { service: form.service })
        setStatus('success')
      } else {
        window.location.href = buildMailto(form)
        track('form_submit_mailto', { service: form.service })
        setStatus('success')
      }
    } catch {
      track('form_submit_error', { service: form.service })
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.successCard} role="status" aria-live="polite">
        <div className={styles.successIcon} aria-hidden="true">✓</div>
        <h3>需求已收到</h3>
        <p>我们通常在 <strong>1 个工作日内</strong>回复，确认问题属于诊断、建设还是定制范围。</p>
        <p className={styles.successNote}>
          如未收到回复，可直接发送邮件至 <a href="mailto:hello@asklume.com">hello@asklume.com</a>
        </p>
      </div>
    )
  }

  const busy = status === 'submitting'

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate aria-label="需求评估申请表单">
      <div className={styles.row}>
        <Field id="intake-company" label="公司名称" required error={errors.company}>
          <input id="intake-company" type="text" autoComplete="organization" value={form.company}
            onChange={e => setField('company', e.target.value)} placeholder="AskLume Inc."
            className={errors.company ? styles.inputError : ''} disabled={busy} />
        </Field>
        <Field id="intake-website" label="官网地址" required error={errors.website}>
          <input id="intake-website" type="url" autoComplete="url" value={form.website}
            onChange={e => setField('website', e.target.value)} placeholder="https://example.com"
            className={errors.website ? styles.inputError : ''} disabled={busy} />
        </Field>
      </div>
      <div className={styles.row}>
        <Field id="intake-contact" label="联系人姓名" required error={errors.contact}>
          <input id="intake-contact" type="text" autoComplete="name" value={form.contact}
            onChange={e => setField('contact', e.target.value)} placeholder="张三"
            className={errors.contact ? styles.inputError : ''} disabled={busy} />
        </Field>
        <Field id="intake-email" label="企业邮箱" required error={errors.email}>
          <input id="intake-email" type="email" autoComplete="email" value={form.email}
            onChange={e => setField('email', e.target.value)} placeholder="zhang@example.com"
            className={errors.email ? styles.inputError : ''} disabled={busy} />
        </Field>
      </div>
      <Field id="intake-product" label="核心产品或服务" required hint="用一两句话描述你们做什么" error={errors.product}>
        <input id="intake-product" type="text" value={form.product}
          onChange={e => setField('product', e.target.value)}
          placeholder="例：面向中小企业的 SaaS 财务管理平台"
          className={errors.product ? styles.inputError : ''} disabled={busy} />
      </Field>
      <Field id="intake-ai-problem" label="你最想解决的 AI 问题" required
        hint="描述当前 AI 对你们品牌的误解、缺失或不准确，或你最希望改善的场景"
        error={errors.aiProblem}>
        <textarea id="intake-ai-problem" rows={4} value={form.aiProblem}
          onChange={e => setField('aiProblem', e.target.value)}
          placeholder="例：ChatGPT 提到竞品时从不提到我们，或 AI 对我们的产品价格描述有误…"
          className={errors.aiProblem ? styles.inputError : ''} disabled={busy} />
      </Field>
      <Field id="intake-market" label="目标市场与语言"
        hint="可选。例：中国大陆（中文）、北美（英文）、东南亚（多语言）">
        <input id="intake-market" type="text" value={form.market}
          onChange={e => setField('market', e.target.value)} placeholder="中国大陆（中文）" disabled={busy} />
      </Field>

      <fieldset className={styles.fieldset} aria-describedby={errors.service ? 'service-error' : undefined}>
        <legend className={styles.legend}>意向服务 <span className={styles.required} aria-hidden="true">*</span></legend>
        <div className={styles.radioGroup}>
          {SERVICE_OPTIONS.map(opt => (
            <label key={opt.value}
              className={[styles.radioCard, form.service === opt.value ? styles.radioCardSelected : '', busy ? styles.radioCardDisabled : ''].filter(Boolean).join(' ')}>
              <input type="radio" name="service" value={opt.value}
                checked={form.service === opt.value}
                onChange={() => setField('service', opt.value)} disabled={busy} />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.service && <p id="service-error" className={styles.errorMsg} role="alert">{errors.service}</p>}
      </fieldset>

      <div className={styles.privacyRow}>
        <label className={[styles.checkLabel, busy ? styles.checkLabelDisabled : ''].filter(Boolean).join(' ')}>
          <input type="checkbox" checked={form.privacy}
            onChange={e => setField('privacy', e.target.checked)} disabled={busy} className={styles.checkbox} />
          <span>
            我已阅读并同意 <a href="./privacy.html" target="_blank" rel="noopener noreferrer">隐私政策</a>，AskLume 将仅使用上述信息评估服务范围并与我联系。
          </span>
        </label>
        {errors.privacy && <p className={styles.errorMsg} role="alert">{errors.privacy}</p>}
      </div>

      {status === 'error' && (
        <div className={styles.errorBanner} role="alert">
          <strong>提交遇到问题</strong>，请重试，或直接发送邮件至 <a href="mailto:hello@asklume.com">hello@asklume.com</a>
        </div>
      )}

      <button type="submit" className={styles.submitBtn} disabled={busy} aria-busy={busy}>
        {busy ? (
          <span className={styles.loadingInner}>
            <span className={styles.spinner} aria-hidden="true" />提交中…
          </span>
        ) : '提交需求评估申请 →'}
      </button>
      <p className={styles.formNote}>提交后我们通常在 1 个工作日内回复，确认问题属于诊断、建设还是定制范围。</p>
    </form>
  )
}

function Field({ id, label, required, hint, error, children }: {
  id: string; label: string; required?: boolean; hint?: string; error?: string; children: React.ReactNode
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}{required && <span className={styles.required} aria-hidden="true"> *</span>}
      </label>
      {hint && <p className={styles.hint} id={id + '-hint'}>{hint}</p>}
      {children}
      {error && <p className={styles.errorMsg} role="alert">{error}</p>}
    </div>
  )
}
