/* ==========================================================================
   AskLume GEO-AIP™ Web Portal JavaScript
   Handles: Mersel AI Navbar, EN/CN Bilingual Switcher, Hero AI Dashboard Inspector,
   Multi-Stage GEO Diagnostic Scan, AI Simulator, FAQ Accordion
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Comprehensive Bilingual Translation Dictionary (EN / CN)
  const i18n = {
    en: {
      nav_platform: "Platform",
      nav_analytics: "Analytics",
      nav_pricing: "Pricing",
      nav_about: "About",
      nav_contact: "Contact Us",
      btn_book_audit: "Book an Audit Call",
      drop_inspector_title: "Perception Baseline",
      drop_inspector_sub: "Repeatable query and evidence review",
      drop_sov_title: "Share of Voice",
      drop_sov_sub: "Compare an agreed buyer-query set",
      drop_schema_title: "Structured Evidence",
      drop_schema_sub: "Align machine-readable data with visible facts",
      drop_bot_title: "AI Bot Logs",
      drop_bot_sub: "Review relevant crawler access when available",
      hero_badge: "AI Perception & Influence Infrastructure for Brands",
      hero_headline: "Be seen. Be understood.<br><span class=\"gradient-text\">Be chosen by AI search engines.</span>",
      hero_subline: "AskLume helps companies diagnose how AI systems understand their brand, build verifiable digital evidence, and improve answer-ready web assets through <strong>GEO-AIP™ and Digital Evidence Engineering</strong>.",
      btn_run_scan: "Request AI Perception Screening",
      btn_explore_inspector: "Explore the Measurement Method",
      dash_live_feed: "ILLUSTRATIVE BASELINE VIEW",
      dash_sov_title: "Candidate Inclusion",
      dash_vs_comp: "Agreed query set",
      dash_rank_lbl: "Factual Accuracy Status",
      dash_rank_val: "Review Required",
      dash_cite_lbl: "Source Coverage",
      dash_cite_val: "Evidence Logged",
      dash_rag_lbl: "Technical Readiness",
      dash_rag_val: "Checks Documented",
      dash_chart_title: "REPEAT-TEST TREND — ILLUSTRATIVE",
      bento_subtitle: "AI Perception Infrastructure",
      bento_main_title: "Search, content and AI answers now shape one decision journey.",
      bento_desc: "The question is no longer only whether a page ranks. It is whether a brand is correctly understood, supported by evidence and connected to a useful next step.",
      bento_tag1: "Share of Voice Tracking",
      bento_title1: "Repeatable AI Perception Measurement",
      bento_desc1: "Track mention, citation, factual accuracy and candidate inclusion across an agreed query set while retaining raw outputs.",
      bento_tag2: "Evidence Engineering",
      bento_title2: "Structured Data Aligned with Evidence",
      bento_desc2: "Express verifiable business facts in machine-readable formats that remain consistent with visible page content.",
      bento_tag3: "Live Crawler Intelligence",
      bento_title3: "Crawler and Access Review",
      bento_desc3: "Review relevant logs, access controls and rendering conditions when the client's infrastructure provides them.",
      bento_tag4: "Reputation Defense",
      bento_title4: "Reduce Factual Errors and Source Gaps",
      bento_desc4: "Maintain clear first-party facts and credible supporting evidence. Third-party outputs may still vary and must be measured.",
      method_subtitle: "Core System and Method",
      method_title: "The GEO-AIP™ <span class=\"gradient-text\">DERV Framework</span>",
      method_desc: "The DERV capability model makes discoverability, evidence, relevance and measurement practical and auditable.",
      derv_d_title: "Discoverability",
      derv_d_desc: "Review access, rendering, internal links, sitemaps and relevant crawler conditions. Technical readiness does not guarantee indexing.",
      derv_e_title: "Evidence Engineering",
      derv_e_desc: "Govern product facts, certifications, cases, sources, owners, dates and structured data that matches visible content.",
      derv_r_title: "Relevance Topology",
      derv_r_desc: "Align information architecture with real buyer, comparison, verification and risk questions.",
      derv_v_title: "Visibility Measurement",
      derv_v_desc: "Use fixed queries, repeat tests and archived raw outputs to observe mention, citation, accuracy and candidate inclusion.",
      audit_subtitle: "AI Perception Screening",
      audit_title: "Scan Your Brand's <span class=\"gradient-text\">AI Perception Score</span>",
      audit_desc: "Start with a small set of real buyer questions, then decide whether a paid baseline diagnosis is justified.",
      audit_ph_domain: "Company Domain (e.g. yourbrand.com)",
      audit_ph_query: "Target Industry Query (e.g. Enterprise Zero-Trust SaaS)",
      audit_btn_scan: "Request Screening",
      sim_subtitle: "Real-Time Side-By-Side",
      sim_title: "See How AI Responds: <span class=\"gradient-text\">Before vs. After AskLume</span>",
      sim_desc: "See how clearer facts, stronger sources and answer-ready pages can improve factual accuracy and verification paths.",
      sim_tab_chatgpt: "ChatGPT Search",
      sim_tab_perplexity: "Perplexity AI",
      sim_tab_claude: "Claude 3.5 Sonnet",
      sim_header_before: "❌ BEFORE AskLume (Status Quo)",
      sim_header_after: "✨ AFTER AskLume (GEO-AIP™ Optimized)",
      pricing_subtitle: "Transparent Plans",
      pricing_title: "Enterprise Plans & <span class=\"gradient-text\">Service Tiers</span>",
      pricing_desc: "From initial baseline audits to full-scale enterprise evidence engineering.",
      p1_title: "Baseline Audit",
      p1_sub: "Initial AI visibility diagnostic",
      p1_btn: "Select Baseline Audit",
      p2_title: "Growth Standard",
      p2_sub: "Core page restructuring & evidence",
      p2_btn: "Start Growth Plan",
      p3_title: "Enterprise Flagship",
      p3_sub: "Full evidence engineering and ongoing measurement",
      p3_btn: "Request Enterprise SOW",
      faq_subtitle: "Common Questions",
      faq_title: "Frequently Asked <span class=\"gradient-text\">Questions</span>",
      faq_q1: "01. What is Generative Engine Optimization (GEO)?",
      faq_a1: "GEO focuses on whether a company's information is discoverable, understandable, verifiable and measurable in generative answer environments. It builds on SEO, useful content, reputation and real evidence; it does not mean controlling models or guaranteeing recommendations.",
      faq_q2: "02. How does AskLume differ from traditional SEO agencies?",
      faq_a2: "Traditional SEO focuses on crawlability, rankings and search traffic. AskLume adds an answer-layer discipline: diagnose AI perception, govern digital evidence, build decision-oriented pages and measure factual accuracy, citation and candidate inclusion with repeatable tests.",
      faq_q3: "03. Do you guarantee #1 rankings or forced AI recommendations?",
      faq_a3: "No. Third-party AI outputs vary by platform, model, index, region and time. AskLume is accountable for the agreed diagnosis, evidence quality, page and technical delivery, source records and measurement transparency—not a fixed ranking or recommendation.",
      faq_q4: "04. How fast can we see results after GEO implementation?",
      faq_a4: "A baseline diagnosis can follow an agreed project schedule, but third-party discovery and response changes have no guaranteed timetable. Follow-up measurement is scheduled in the SOW and reports what changed, what did not and what remains uncertain.",
      ft_tagline_strong: "AI search analytics",
      ft_tagline_span: "for marketing teams",
      ft_col_company: "Company",
      ft_link_home: "Home",
      ft_link_careers: "Careers",
      ft_link_entity: "Entity Map",
      ft_link_instructions: "AI Instructions",
      ft_col_product: "Product",
      ft_link_docs: "Docs",
      ft_link_blog: "Blog",
      ft_link_pricing: "Pricing",
      ft_link_changelog: "Changelog",
      ft_col_features: "Features",
      ft_link_chatgpt_tr: "ChatGPT Visibility Tracker",
      ft_link_gemini_tr: "Gemini Visibility Tracker",
      ft_link_aimode_tr: "AI Mode Visibility Tracker",
      ft_link_for_agencies: "For Agencies",
      ft_col_partnership: "Partnership",
      ft_link_agencies: "Agencies",
      ft_link_creators: "Creators",
      ft_link_media: "Media",
      ft_col_comparison: "Comparison",
      ft_link_vs_ahrefs: "AskLume vs Ahrefs",
      ft_link_vs_profound: "AskLume vs Profound",
      ft_link_vs_semrush: "AskLume vs Semrush",
      ft_col_follow: "Follow Us",
      ft_proof: "AskLume builds AI Perception & Influence Infrastructure for Brands through GEO-AIP™ and Digital Evidence Engineering.",
      ft_copyright: "© 2026 AskLume. All rights reserved.",
      ft_link_cookie: "Cookie Settings",
      ft_link_privacy: "Privacy Policy",
      ft_link_terms: "Terms of Services",
      ft_link_imprint: "Imprint"
    },
    cn: {
      nav_platform: "平台架构",
      nav_analytics: "数据分析",
      nav_pricing: "服务套餐",
      nav_about: "DERV 方法论",
      nav_contact: "联系我们",
      btn_book_audit: "预约 GEO 诊断",
      drop_inspector_title: "AI认知基线",
      drop_inspector_sub: "固定问题与证据复核",
      drop_sov_title: "Share of Voice 占有率",
      drop_sov_sub: "对比约定的买家问题集",
      drop_schema_title: "结构化证据",
      drop_schema_sub: "机器可读数据与页面事实一致",
      drop_bot_title: "AI 爬虫日志追踪",
      drop_bot_sub: "在条件允许时检查相关爬虫访问",
      hero_badge: "企业AI认知与影响力基础设施",
      hero_headline: "让品牌被AI看见、理解<br><span class=\"gradient-text\">与选择</span>",
      hero_subline: "问答光源｜AskLume通过 <strong>GEO-AIP™与数字证据工程</strong>，帮助企业诊断AI认知现状，建设可核验的事实、证据与答案资产。",
      btn_run_scan: "申请AI认知初筛",
      btn_explore_inspector: "了解测量方法",
      dash_live_feed: "AI认知基线示意",
      dash_sov_title: "候选进入情况",
      dash_vs_comp: "约定问题集",
      dash_rank_lbl: "事实准确性状态",
      dash_rank_val: "需要复核",
      dash_cite_lbl: "来源覆盖情况",
      dash_cite_val: "证据已登记",
      dash_rag_lbl: "技术就绪度",
      dash_rag_val: "检查项已记录",
      dash_chart_title: "重复测试趋势｜示意数据",
      bento_subtitle: "AI认知基础设施",
      bento_main_title: "搜索、内容与AI答案，正在共同影响一条决策路径。",
      bento_desc: "问题不再只是页面能否排名，而是品牌能否被准确理解、是否有证据支持，并能否连接到有效的下一步。",
      bento_tag1: "声量占有率追踪",
      bento_title1: "可重复的AI认知测量",
      bento_desc1: "在约定问题集中观察提及、引用、事实准确性与候选进入，并保留原始回答。",
      bento_tag2: "证据工程",
      bento_title2: "与真实证据一致的结构化数据",
      bento_desc2: "用机器可读格式表达可核验的业务事实，并与页面可见内容保持一致。",
      bento_tag3: "实时爬虫情报",
      bento_title3: "爬虫与访问条件检查",
      bento_desc3: "在客户基础设施具备条件时，检查相关日志、访问控制与渲染状态。",
      bento_tag4: "品牌声誉防御",
      bento_title4: "降低事实错误与来源缺口",
      bento_desc4: "维护清晰的第一方事实与可信支持证据；第三方输出仍可能变化，需要持续测量。",
      method_subtitle: "核心系统与方法",
      method_title: "GEO-AIP™ <span class=\"gradient-text\">DERV 4D 方法论</span>",
      method_desc: "DERV四维能力模型让可发现、可验证、强相关与可观测变得可执行、可审计。",
      derv_d_title: "可感知度 (Discoverability)",
      derv_d_desc: "优化 GPTBot、ClaudeBot 等爬虫抓取管道、服务器响应速度与 robots.txt 通道，实现无缝 RAG 索引。",
      derv_e_title: "数字证据工程 (Evidence Engineering)",
      derv_e_desc: "治理产品事实、认证、案例、来源、责任人、日期及与正文一致的结构化数据。",
      derv_r_title: "相关性拓扑 (Relevance Topology)",
      derv_r_desc: "将网站内容拓扑与高意图买家 Prompt 及 LLM 语义实体消歧深度对齐。",
      derv_v_title: "可见度测量 (Visibility Measurement)",
      derv_v_desc: "持续审计品牌提及率 (MR)、引文率 (CR) 与实时 AI 声量占有率 (Share of Voice)。",
      audit_subtitle: "即时诊断工具",
      audit_title: "扫描品牌的 <span class=\"gradient-text\">AI 感知得分</span>",
      audit_desc: "在 ChatGPT 与 Perplexity RAG 检索管道中运行模拟实时审计。",
      audit_ph_domain: "公司域名 (例: yourbrand.com)",
      audit_ph_query: "目标行业查询词 (例: 企业级零信任 SaaS)",
      audit_btn_scan: "运行 GEO 诊断",
      sim_subtitle: "实时前后对比",
      sim_title: "AI 如何回答：<span class=\"gradient-text\">AskLume 优化前 vs 优化后</span>",
      sim_desc: "观察更清晰的事实、更可靠的来源与决策型页面，如何改善事实准确性与核验路径。",
      sim_tab_chatgpt: "ChatGPT Search 搜索",
      sim_tab_perplexity: "Perplexity AI 专业版",
      sim_tab_claude: "Claude 3.5 Sonnet",
      sim_header_before: "❌ BEFORE 优化前 (现状)",
      sim_header_after: "✨ AFTER 优化后 (GEO-AIP™ 强化)",
      pricing_subtitle: "透明化方案",
      pricing_title: "企业级方案与 <span class=\"gradient-text\">服务套餐</span>",
      pricing_desc: "从初始可见度诊断到全量企业级证据工程建设。",
      p1_title: "基础诊断包 (Baseline Audit)",
      p1_sub: "初始 AI 可见度与感知诊断",
      p1_btn: "选择基础诊断包",
      p2_title: "增长标准版 (Growth Standard)",
      p2_sub: "核心页面与数字证据建设",
      p2_btn: "开启增长方案",
      p3_title: "企业旗舰版 (Enterprise Flagship)",
      p3_sub: "全量证据工程与声誉防御",
      p3_btn: "申请企业 SOW",
      faq_subtitle: "常见问题",
      faq_title: "常见问题 <span class=\"gradient-text\">解答</span>",
      faq_q1: "01. 什么是生成式引擎优化 (GEO)?",
      faq_a1: "GEO（Generative Engine Optimization）关注企业在生成式答案环境中的可发现、可理解、可验证与可测量能力。它建立在SEO、真实内容、品牌声誉和数字证据之上，不等于操控模型或保证推荐。",
      faq_q2: "02. AskLume 与传统 SEO 机构有何本质不同？",
      faq_a2: "传统SEO关注抓取、排名与搜索访问；问答光源进一步处理答案层问题：建立AI认知基线，治理数字证据，建设客户决策页面，并通过重复测试观察事实准确性、引用与候选进入变化。",
      faq_q3: "03. 你们是否保证 #1 排名或强制 AI 推荐？",
      faq_a3: "不保证。第三方AI输出受平台、模型、索引、地区和时间影响。问答光源对约定的诊断、证据质量、页面与技术交付、原始记录和测量透明度负责，不对固定排名或推荐结果作保证。",
      faq_q4: "04. GEO 实施后多久可以看到成效？",
      faq_a4: "基线诊断可以按约定周期交付，但第三方平台发现和回答变化没有保证时限。复测时间写入SOW，并如实说明发生了什么、未发生什么以及仍有哪些不确定性。",
      ft_tagline_strong: "AI 搜索感知与分析",
      ft_tagline_span: "专为 Enterprise & Marketing 团队打造",
      ft_col_company: "公司介绍",
      ft_link_home: "首页",
      ft_link_careers: "招贤纳士",
      ft_link_entity: "实体图谱",
      ft_link_instructions: "AI 检索指令",
      ft_col_product: "产品矩阵",
      ft_link_docs: "文档中心",
      ft_link_blog: "技术博客",
      ft_link_pricing: "服务套餐",
      ft_link_changelog: "更新日志",
      ft_col_features: "核心功能",
      ft_link_chatgpt_tr: "ChatGPT 可见度追踪",
      ft_link_gemini_tr: "Gemini 可见度追踪",
      ft_link_aimode_tr: "AI 模式可见度追踪",
      ft_link_for_agencies: "代理商合作",
      ft_col_partnership: "合作伙伴",
      ft_link_agencies: "服务商生态",
      ft_link_creators: "创作者网络",
      ft_link_media: "媒体中心",
      ft_col_comparison: "竞品对比",
      ft_link_vs_ahrefs: "AskLume 对比 Ahrefs",
      ft_link_vs_profound: "AskLume 对比 Profound",
      ft_link_vs_semrush: "AskLume 对比 Semrush",
      ft_col_follow: "关注我们",
      ft_proof: "问答光源｜AskLume通过GEO-AIP™与数字证据工程，建设企业AI认知与影响力基础设施。",
      ft_copyright: "© 2026 AskLume. 保留所有权利。",
      ft_link_cookie: "Cookie 设置",
      ft_link_privacy: "隐私政策",
      ft_link_terms: "服务条款",
      ft_link_imprint: "法律声明"
    }
  };

  // Auto-detect language based on HTML lang attribute or URL path (/zh/ vs /)
  const isZhPage = document.documentElement.lang.startsWith('zh') || window.location.pathname.includes('/zh/');
  let currentLang = isZhPage ? 'cn' : 'en';

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

    if (langCurrentCode) langCurrentCode.textContent = lang === 'cn' ? '中文' : 'EN';

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

    // Update input placeholders
    const inputDomain = document.getElementById('input-domain');
    if (inputDomain && dict.audit_ph_domain) inputDomain.placeholder = dict.audit_ph_domain;

    const inputQuery = document.getElementById('input-query');
    if (inputQuery && dict.audit_ph_query) inputQuery.placeholder = dict.audit_ph_query;

    // Update hero headlines & badges
    const heroHeadline = document.querySelector('.hero-headline');
    if (heroHeadline && dict.hero_headline) heroHeadline.innerHTML = dict.hero_headline;

    const heroSubline = document.querySelector('.hero-subline');
    if (heroSubline && dict.hero_subline) heroSubline.innerHTML = dict.hero_subline;

    const heroBadge = document.querySelector('.hero-pill-badge span:last-child');
    if (heroBadge && dict.hero_badge) heroBadge.textContent = dict.hero_badge;

    // Update Dashboard AI responses based on selected engine
    const activeEngineTab = document.querySelector('.dash-engine-selector .engine-tab.active');
    if (activeEngineTab) {
      activeEngineTab.click();
    }
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
      response: "[Your Brand] publishes a SOC2 statement and service documentation. Verify certification scope, validity and the cited official source before shortlisting.",
      responseCN: "[Your Brand]公开了SOC2相关说明与服务文档。进入候选前，请核验认证范围、有效性及所引用的官方来源。",
      sov: "Illustrative",
      rank: "Review Required",
      rankCN: "需要复核",
      citations: "Sources Logged",
      citationsCN: "来源已登记",
      latency: "Example"
    },
    perplexity: {
      modelName: "Perplexity AI Pro Citation Feed",
      prompt: "Recommend top B2B supply chain SaaS platforms with SAP integration and ISO27001.",
      promptCN: "推荐具备 SAP 集成与 ISO27001 认证的顶级 B2B 供应链 SaaS 平台。",
      response: "[Your Brand] states that it supports SAP integration and publishes an ISO27001 reference. Confirm the integration scope and certificate details using the cited sources.",
      responseCN: "[Your Brand]说明其支持SAP集成，并公开了ISO27001相关资料。请通过引用来源确认集成范围和证书细节。",
      sov: "Illustrative",
      rank: "Evidence Available",
      rankCN: "存在可核验证据",
      citations: "Sources Logged",
      citationsCN: "来源已登记",
      latency: "Example"
    },
    claude: {
      modelName: "Claude 3.5 Sonnet RAG Output",
      prompt: "Compare enterprise AI knowledge base infrastructure solutions for Fortune 500.",
      promptCN: "对比适用于世界 500 强的企业级 AI 知识库基础设施方案。",
      response: "[Your Brand] publishes clear product facts, service boundaries and supporting sources. Review the cited official pages and independent evidence before making a decision.",
      responseCN: "[Your Brand] 已公开产品事实、服务边界和支持来源。做出决策前，请核验引用的官方页面与独立证据。",
      sov: "Illustrative",
      rank: "Context Added",
      rankCN: "已补充适用条件",
      citations: "Sources Logged",
      citationsCN: "来源已登记",
      latency: "Example"
    },
    gemini: {
      modelName: "Google Gemini 1.5 Pro Overview",
      prompt: "Who are the trusted enterprise GEO & AI search visibility agencies?",
      promptCN: "有哪些值得信赖的企业级 GEO 与 AI 搜索可见度服务机构？",
      response: "AskLume describes itself as AI Perception & Influence Infrastructure for Brands, using GEO-AIP™ and Digital Evidence Engineering. Verify current services and scope on the official website.",
      responseCN: "AskLume将自身定位为企业AI认知与影响力基础设施，并使用GEO-AIP™与数字证据工程。当前服务与范围请以官网为准。",
      sov: "Illustrative",
      rank: "Official Description",
      rankCN: "官网定位说明",
      citations: "Verify Official Site",
      citationsCN: "请核验官网",
      latency: "Example"
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
        const isCN = currentLang === 'cn';
        if (heroModelName) heroModelName.textContent = data.modelName;
        if (heroSovVal) heroSovVal.textContent = data.sov;
        if (heroRankVal) heroRankVal.textContent = isCN ? data.rankCN : data.rank;
        if (heroCiteVal) heroCiteVal.textContent = isCN ? data.citationsCN : data.citations;
        if (heroLatencyVal) heroLatencyVal.textContent = `Latency: ${data.latency}`;
        
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
