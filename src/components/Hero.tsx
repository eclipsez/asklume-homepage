import { useState } from 'react'
import bannerUrl from '../assets/asklume-banner.png'
import { GlassDashboard } from './GlassDashboard'
import { Icon } from './Icon'
import styles from './Hero.module.css'

const values = [
  '让事实被看见',
  '让能力被理解',
  '让品牌被选择',
  '让价值被放大',
] as const

export function Hero() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <section aria-labelledby="hero-title" className={styles.hero}>
      {showBanner ? (
        <img
          alt=""
          className={styles.banner}
          height="896"
          onError={() => setShowBanner(false)}
          src={bannerUrl}
          width="1195"
        />
      ) : null}

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>企业AI认知与影响力基础设施</p>
          <h1
            aria-label="让品牌被AI看见、理解与选择。"
            className={styles.title}
            id="hero-title"
          >
            <span>让品牌被AI</span><span className={styles.gradientText}>看见、理解与选择。</span>
          </h1>
          <p className={styles.description}>
            问答光源通过 GEO-AIP™ 数字证据工程，帮助企业把真实能力转化为 AI
            可发现、可理解、可检验、可引用的认知资产。
          </p>

          <ul className={styles.values}>
            {values.map((value, index) => (
              <li key={value}>
                <span aria-hidden="true" className={styles.valueIcon}>
                  {index === 3 ? 'i' : '✓'}
                </span>
                {value}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#diagnostic">
              开始AI认知基线诊断
              <Icon name="arrow" size={17} />
            </a>
            <a className={styles.secondaryAction} href="#capabilities">
              了解产品
              <span aria-hidden="true" className={styles.secondaryArrow}>
                <Icon name="arrow" size={12} />
              </span>
            </a>
          </div>
        </div>

        <GlassDashboard className={styles.dashboard} />
      </div>
    </section>
  )
}
