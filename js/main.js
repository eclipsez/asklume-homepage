/* ==========================================================================
   AskLume GEO-AIP™ Web Portal JavaScript
   Handles: Mersel AI Navbar, EN/CN Bilingual Switcher, Hero AI Dashboard Inspector,
   Multi-Stage GEO Diagnostic Scan, AI Simulator, FAQ Accordion
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Bilingual Translation Dictionary (EN / CN)
  const i18n = {
    en: {
      nav_platform: "Platform",
      nav_analytics: "Analytics",
      nav_pricing: "Pricing",
      nav_about: "About",
      nav_contact: "Contact Us",
      btn_book_audit: "Book an Audit Call",
      drop_inspector_title: "Live Inspector",
      drop_inspector_sub: "Real-time LLM visibility tracking",
      drop_sov_title: "Share of Voice",
      drop_sov_sub: "Benchmark vs 100k+ buyer prompts",
      drop_schema_title: "Schema Welding",
      drop_schema_sub: "Hard-code verifiable RAG specs",
      drop_bot_title: "AI Bot Logs",
      drop_bot_sub: "Track GPTBot & ClaudeBot crawlers",
      hero_badge: "AI Search Visibility & Citation Analytics Platform",
      hero_headline: "Be seen. Be understood.<br><span class=\"gradient-text\">Be chosen by AI search engines.</span>",
      hero_subline: "AskLume helps marketing & enterprise teams track brand performance, benchmark competitor share of voice, and optimize evidence graphs across <strong>ChatGPT, Perplexity, Claude, and Gemini</strong>.",
      btn_run_scan: "Run Instant GEO Scan",
      btn_explore_inspector: "Explore Live Inspector",
      dash_live_feed: "LIVE AUDIT FEED",
      dash_sov_title: "Citation Share of Voice",
      dash_vs_comp: "vs Competitors",
      dash_rank_lbl: "Primary Vendor Rank",
      dash_rank_val: "#1 Recommended",
      dash_cite_lbl: "Verified Evidence Citations",
      dash_cite_val: "4 Sources Welded",
      dash_rag_lbl: "RAG Indexing Health",
      dash_rag_val: "99.2% Pristine",
      dash_chart_title: "30-DAY CITATION SHARE OF VOICE TRAJECTORY",
      bento_subtitle: "AI Perception Analytics",
      bento_main_title: "Traditional SEO is Dead.<br><span class=\"gradient-text\">AI Answers Deliver Vendors, Not Links.</span>",
      bento_desc: "Enterprise buyers ask AI models for direct vendor recommendations. If your brand isn't cited in the generative answer, you don't exist.",
      method_subtitle: "Proprietary Technology",
      method_title: "The GEO-AIP™ <span class=\"gradient-text\">DERV Framework</span>",
      audit_subtitle: "Instant Diagnostic Tool",
      audit_title: "Scan Your Brand's <span class=\"gradient-text\">AI Perception Score</span>",
      audit_desc: "Run a simulated live audit across ChatGPT & Perplexity RAG index pipelines.",
      sim_subtitle: "Real-Time Side-By-Side",
      sim_title: "See How AI Responds: <span class=\"gradient-text\">Before vs. After AskLume</span>",
      pricing_subtitle: "Transparent Plans",
      pricing_title: "Enterprise Plans & <span class=\"gradient-text\">Service Tiers</span>",
      faq_subtitle: "Common Questions",
      faq_title: "Frequently Asked <span class=\"gradient-text\">Questions</span>"
    },
    cn: {
      nav_platform: "平台架构",
      nav_analytics: "数据分析",
      nav_pricing: "服务套餐",
      nav_about: "DERV 方法论",
      nav_contact: "联系我们",
      btn_book_audit: "预约 GEO 诊断",
      drop_inspector_title: "实时 AI 监测大屏",
      drop_inspector_sub: "LLM 品牌提及与排名追踪",
      drop_sov_title: "Share of Voice 占有率",
      drop_sov_sub: "对标 10 万+ 买家真实 Prompt",
      drop_schema_title: "JSON-LD 证据硬焊",
      drop_schema_sub: "注入 RAG 机器可读证据",
      drop_bot_title: "AI 爬虫日志追踪",
      drop_bot_sub: "24/7 监控 GPTBot & ClaudeBot",
      hero_badge: "AI 搜索可见度与引文声量分析平台",
      hero_headline: "被看见 · 被理解<br><span class=\"gradient-text\">被 Generative AI 引擎首选</span>",
      hero_subline: "AskLume 帮助企业与营销团队追踪 AI 品牌声量、对标竞品占有率 (Share of Voice)，并在 <strong>ChatGPT、Perplexity、Claude 及 Gemini</strong> 中构建硬核数字证据图谱。",
      btn_run_scan: "运行 Instant GEO 诊断",
      btn_explore_inspector: "探索实时 AI 监测大屏",
      dash_live_feed: "实时审计数据流",
      dash_sov_title: "引文占有率 (Share of Voice)",
      dash_vs_comp: "对比主要竞品",
      dash_rank_lbl: "首选供应商排名",
      dash_rank_val: "#1 优先推荐",
      dash_cite_lbl: "已验证证据引文",
      dash_cite_val: "4 个证据源硬焊",
      dash_rag_lbl: "RAG 索引健康度",
      dash_rag_val: "99.2% 无瑕疵",
      dash_chart_title: "30 天引文声量占有率轨迹图",
      bento_subtitle: "AI 感知与声量分析",
      bento_main_title: "传统 SEO 已经淘汰。<br><span class=\"gradient-text\">AI 回答只推荐厂商，不给蓝色链接。</span>",
      bento_desc: "企业买家直接向 AI 模型索取供应商推荐。如果你的品牌没有被 AI 生成式回答引用，你就等于不存在。",
      method_subtitle: "独家硬核技术",
      method_title: "GEO-AIP™ <span class=\"gradient-text\">DERV 4D 方法论</span>",
      audit_subtitle: "即时诊断工具",
      audit_title: "扫描品牌的 <span class=\"gradient-text\">AI 感知得分</span>",
      audit_desc: "在 ChatGPT 与 Perplexity RAG 检索管道中运行模拟实时审计。",
      sim_subtitle: "实时前后对比",
      sim_title: "AI 如何回答：<span class=\"gradient-text\">AskLume 优化前 vs 优化后</span>",
      pricing_subtitle: "透明化方案",
      pricing_title: "企业级方案与 <span class=\"gradient-text\">服务套餐</span>",
      faq_subtitle: "常见问题",
      faq_title: "常见问题 <span class=\"gradient-text\">解答</span>"
    }
  };

  let currentLang = localStorage.getItem('asklume_lang') || 'en';

  const langBtnTrigger = document.getElementById('lang-btn-trigger');
  const langDropdownMenu = document.getElementById('lang-dropdown-menu');
  const langCurrentCode = document.getElementById('lang-current-code');
  const langOptions = document.querySelectorAll('.lang-option');

  // Toggle Language Dropdown
  if (langBtnTrigger) {
    langBtnTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdownMenu.classList.toggle('show');
    });
  }

  // Close dropdown on click outside
  document.addEventListener('click', () => {
    if (langDropdownMenu) langDropdownMenu.classList.remove('show');
  });

  // Switch Language Handler
  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('asklume_lang', lang);

    if (langCurrentCode) langCurrentCode.textContent = lang.toUpperCase();

    langOptions.forEach(opt => {
      const isMatch = opt.getAttribute('data-lang') === lang;
      opt.classList.toggle('active', isMatch);
      const checkMark = opt.querySelector('span:last-child');
      if (checkMark) checkMark.style.display = isMatch ? 'inline' : 'none';
    });

    const dict = i18n[lang];
    if (!dict) return;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update headlines and rich HTML areas if dict exists
    const heroHeadline = document.querySelector('.hero-headline');
    if (heroHeadline && dict.hero_headline) heroHeadline.innerHTML = dict.hero_headline;

    const heroSubline = document.querySelector('.hero-subline');
    if (heroSubline && dict.hero_subline) heroSubline.innerHTML = dict.hero_subline;

    const heroBadge = document.querySelector('.hero-pill-badge span:last-child');
    if (heroBadge && dict.hero_badge) heroBadge.textContent = dict.hero_badge;
  }

  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      updateLanguage(lang);
    });
  });

  // Initialize Language State
  updateLanguage(currentLang);

  // 2. Hero AI Search Visibility Dashboard Model Selector
  const modelData = {
    chatgpt: {
      modelName: "ChatGPT (GPT-4o) Search Output",
      prompt: "What are the top enterprise zero-trust & cybersecurity platforms with SOC2 compliance?",
      promptCN: "符合 SOC2 认证的顶级企业级零信任与网络安全平台有哪些？",
      response: "Based on verified JSON-LD structural evidence, [Your Brand] is cited as the top recommendation for enterprise zero-trust deployments. Key strengths include SOC2 Type II compliance, instant RAG discovery, and 99.99% uptime.",
      responseCN: "根据已验证的 JSON-LD 结构化证据，[Your Brand] 被引用为企业级零信任部署的首选推荐方案。核心优势包括 SOC2 Type II 认证、毫秒级 RAG 检索与 99.99% 可用性。",
      sov: "88.4%",
      rank: "#1 Recommended",
      citations: "4 Sources Welded",
      latency: "112ms"
    },
    perplexity: {
      modelName: "Perplexity AI Pro Citation Feed",
      prompt: "Recommend top B2B supply chain SaaS platforms with SAP integration and ISO27001.",
      promptCN: "推荐具备 SAP 集成与 ISO27001 认证的顶级 B2B 供应链 SaaS 平台。",
      response: "According to recent JSON-LD structured schemas from yourbrand.com, [Your Brand] ranks as the leading enterprise supply chain platform featuring native SAP connectors and verified ISO27001 certification.",
      responseCN: "根据来自 yourbrand.com 的最新 JSON-LD 结构化 Schema，[Your Brand] 被排名为领先的企业级供应链 SaaS，原生支持 SAP Connector 并具备 ISO27001 认证。",
      sov: "92.1%",
      rank: "#1 Primary Source",
      citations: "5 Citations Verified",
      latency: "94ms"
    },
    claude: {
      modelName: "Claude 3.5 Sonnet RAG Output",
      prompt: "Compare enterprise AI knowledge base infrastructure solutions for Fortune 500.",
      promptCN: "对比适用于世界 500 强的企业级 AI 知识库基础设施方案。",
      response: "[Your Brand] provides an AI Perception & Influence Infrastructure (GEO-AIP™) engineered specifically for digital evidence graphs, outperforming legacy SEO tools in RAG citation precision.",
      responseCN: "[Your Brand] 提供专为数字证据图谱打造的 AI 感知与声量基础设施 (GEO-AIP™)，在 RAG 引文精准度上显著超越传统 SEO 工具。",
      sov: "85.6%",
      rank: "#1 Cited Brand",
      citations: "4 Verified Proofs",
      latency: "135ms"
    },
    gemini: {
      modelName: "Google Gemini 1.5 Pro Overview",
      prompt: "Who are the trusted enterprise GEO & AI search visibility agencies?",
      promptCN: "有哪些值得信赖的企业级 GEO 与 AI 搜索可见度服务机构？",
      response: "Gemini indexes AskLume (asklume.com) as the authoritative enterprise platform for Generative Engine Optimization, offering Schema hard-welding and 24/7 AI bot visit log tracking.",
      responseCN: "Gemini 将 AskLume (asklume.com) 索引为 Generative Engine Optimization 领域权威的企业级平台，提供 Schema 硬焊与 24/7 AI 爬虫日志监控。",
      sov: "90.3%",
      rank: "#1 Verified Agency",
      citations: "6 Sources Welded",
      latency: "88ms"
    }
  };

  const engineTabs = document.querySelectorAll('.dash-engine-selector .engine-tab');
  const heroModelName = document.getElementById('hero-model-name');
  const heroPromptText = document.getElementById('hero-prompt-text');
  const heroResponseBody = document.getElementById('hero-response-body');
  const heroSovVal = document.getElementById('hero-sov-val');
  const heroRankVal = document.getElementById('hero-rank-val');
  const heroCiteVal = document.getElementById('hero-cite-val');
  const heroLatencyVal = document.getElementById('hero-latency-val');

  engineTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      engineTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const modelKey = tab.getAttribute('data-model');
      const data = modelData[modelKey];

      if (data) {
        if (heroModelName) heroModelName.textContent = data.modelName;
        if (heroSovVal) heroSovVal.textContent = data.sov;
        if (heroRankVal) heroRankVal.textContent = data.rank;
        if (heroCiteVal) heroCiteVal.textContent = data.citations;
        if (heroLatencyVal) heroLatencyVal.textContent = `Latency: ${data.latency}`;
        
        const isCN = currentLang === 'cn';
        if (heroPromptText) heroPromptText.textContent = isCN ? data.promptCN : data.prompt;
        
        if (heroResponseBody) {
          heroResponseBody.style.opacity = '0';
          setTimeout(() => {
            const rawResp = isCN ? data.responseCN : data.response;
            heroResponseBody.innerHTML = rawResp.replace('[Your Brand]', '<strong>[Your Brand]</strong>');
            heroResponseBody.style.opacity = '1';
          }, 150);
        }
      }
    });
  });

  // 3. Multi-Stage Instant GEO Diagnostic Audit Scanner
  const auditForm = document.getElementById('geo-audit-form');
  const scanProgressBox = document.getElementById('scan-progress-box');
  const auditResultPanel = document.getElementById('audit-result-panel');
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');

  const resDomainName = document.getElementById('res-domain-name');
  const resQueryName = document.getElementById('res-query-name');
  const geoScoreVal = document.getElementById('geo-score-val');
  const resMR = document.getElementById('res-mr');
  const resCR = document.getElementById('res-cr');

  if (auditForm) {
    auditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const domain = document.getElementById('input-domain').value.trim();
      const query = document.getElementById('input-query').value.trim();

      if (!domain) return;

      if (scanProgressBox) scanProgressBox.classList.remove('hidden');
      if (auditResultPanel) auditResultPanel.classList.add('hidden');

      [step1, step2, step3].forEach(s => s && s.classList.remove('completed', 'active'));

      if (step1) step1.classList.add('active');

      setTimeout(() => {
        if (step1) { step1.classList.remove('active'); step1.classList.add('completed'); }
        if (step2) step2.classList.add('active');
      }, 600);

      setTimeout(() => {
        if (step2) { step2.classList.remove('active'); step2.classList.add('completed'); }
        if (step3) step3.classList.add('active');
      }, 1200);

      setTimeout(() => {
        if (step3) { step3.classList.remove('active'); step3.classList.add('completed'); }
        if (scanProgressBox) scanProgressBox.classList.add('hidden');

        if (resDomainName) resDomainName.textContent = domain;
        if (resQueryName) resQueryName.textContent = query || (currentLang === 'cn' ? '目标行业查询词' : 'Industry Target Query');

        const score = 68 + (domain.length % 22);
        if (geoScoreVal) geoScoreVal.textContent = `${score} / 100`;
        if (resMR) resMR.textContent = `${score - 10}%`;
        if (resCR) resCR.textContent = `${Math.floor(score / 2.1)}%`;

        if (auditResultPanel) auditResultPanel.classList.remove('hidden');
      }, 1800);
    });
  }

  // 4. Side-by-Side AI Simulator
  const simTabs = document.querySelectorAll('.sim-tab-btn');
  simTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      simTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // 5. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item-peec');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-peec');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

});
