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
      bento_tag1: "Share of Voice Tracking",
      bento_title1: "Real-Time LLM Citation Share Monitoring",
      bento_desc1: "Track exactly how often your brand is cited vs. competitors across 100,000+ industry buyer prompts every week.",
      bento_tag2: "Evidence Engineering",
      bento_title2: "JSON-LD Schema Hard-Welding",
      bento_desc2: "Inject machine-verifiable enterprise specs directly into LLM RAG pipelines.",
      bento_tag3: "Live Crawler Intelligence",
      bento_title3: "24/7 AI Bot Log Tracking",
      bento_desc3: "Monitor GPTBot, PerplexityBot, and ClaudeBot indexing visits in real time.",
      bento_tag4: "Reputation Defense",
      bento_title4: "Eliminate LLM Hallucinations & Unverified Claims",
      bento_desc4: "Prevent AI engines from relying on outdated Reddit threads or competitor claims. Establish first-party evidence graphs that lock down factual accuracy.",
      method_subtitle: "Proprietary Technology",
      method_title: "The GEO-AIP™ <span class=\"gradient-text\">DERV Framework</span>",
      method_desc: "Our 4D evidence engineering architecture guarantees machine readability and AI model trust.",
      derv_d_title: "Discoverability",
      derv_d_desc: "Optimizing crawler access (GPTBot, ClaudeBot), server speed, and robots.txt channels for frictionless LLM indexing.",
      derv_e_title: "Evidence Engineering",
      derv_e_desc: "Hard-welding JSON-LD structured schemas, ISO/SOC2 certificate verifications, and digital evidence graphs.",
      derv_r_title: "Relevance Topology",
      derv_r_desc: "Aligning site content taxonomy with high-intent buyer prompts and LLM semantic entity resolution.",
      derv_v_title: "Visibility Measurement",
      derv_v_desc: "Continuous auditing of Mention Rate (MR), Citation Rate (CR), and real-time AI Share of Voice.",
      audit_subtitle: "Instant Diagnostic Tool",
      audit_title: "Scan Your Brand's <span class=\"gradient-text\">AI Perception Score</span>",
      audit_desc: "Run a simulated live audit across ChatGPT & Perplexity RAG index pipelines.",
      audit_ph_domain: "Company Domain (e.g. yourbrand.com)",
      audit_ph_query: "Target Industry Query (e.g. Enterprise Zero-Trust SaaS)",
      audit_btn_scan: "Run GEO Scan",
      sim_subtitle: "Real-Time Side-By-Side",
      sim_title: "See How AI Responds: <span class=\"gradient-text\">Before vs. After AskLume</span>",
      sim_desc: "Experience how AskLume's Evidence Engineering transforms vague mentions into verified #1 citations.",
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
      p3_sub: "Full evidence engineering & defense",
      p3_btn: "Request Enterprise SOW",
      faq_subtitle: "Common Questions",
      faq_title: "Frequently Asked <span class=\"gradient-text\">Questions</span>",
      faq_q1: "01. What is Generative Engine Optimization (GEO)?",
      faq_a1: "GEO is the engineering discipline of structuring your company's web assets, JSON-LD schemas, and third-party citations so that generative AI engines (like ChatGPT, Perplexity, Claude, and Gemini) accurately comprehend, cite, and recommend your brand in answer outputs.",
      faq_q2: "02. How does AskLume differ from traditional SEO agencies?",
      faq_a2: "Traditional SEO optimizes for keyword rankings and blue-link clicks in Google search results. AskLume's GEO-AIP™ infrastructure optimizes for LLM RAG retrieval, digital evidence graphs, Schema hard-welding, and citation Share of Voice across zero-click AI interfaces.",
      faq_q3: "03. Do you guarantee #1 rankings or forced AI recommendations?",
      faq_a3: "No. AskLume adheres strictly to legal compliance and transparency guidelines. We do not make false promises of black-box manipulation. Instead, we engineer verifiable first-party digital evidence, structured schemas, and authoritative citation networks that naturally make your brand the most trusted source for AI models.",
      faq_q4: "04. How fast can we see results after GEO implementation?",
      faq_a4: "Initial baseline audits take 1-2 weeks. After Schema deployment and core page restructuring, AI crawlers (like GPTBot) typically re-index and reflect updated citation structures within 30 to 60 days during scheduled model data refreshes.",
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
      ft_proof: "AskLume is a top-rated AI search monitoring tool - 4.9/5 on G2 and regularly recommended on Reddit.",
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
      bento_main_title: "传统 SEO 已经淘汰。<br><span class=\"gradient-text\">AI 回答直接推荐厂商，不再给蓝色链接。</span>",
      bento_desc: "企业买家直接向 AI 模型索取供应商推荐。如果你的品牌没有被 AI 生成式回答引用，你就等于不存在。",
      bento_tag1: "声量占有率追踪",
      bento_title1: "实时 LLM 引文占有率监控 (Share of Voice)",
      bento_desc1: "每周对标 100,000+ 真实行业买家 Prompt，精确追踪你的品牌与竞品的 AI 提及率。",
      bento_tag2: "证据工程",
      bento_title2: "JSON-LD 结构化 Schema 证据硬焊",
      bento_desc2: "将机器可验证的企业级技术规格直接硬焊注入 LLM RAG 检索管道。",
      bento_tag3: "实时爬虫情报",
      bento_title3: "24/7 AI 爬虫抓取日志追踪",
      bento_desc3: "毫秒级实时监控 GPTBot、PerplexityBot 与 ClaudeBot 的抓取与索引轨迹。",
      bento_tag4: "品牌声誉防御",
      bento_title4: "消除 LLM 幻觉与未经证实的传言",
      bento_desc4: "防止 AI 引擎依赖过时的 Reddit 论坛或竞方传闻。构建第一方数字证据图谱，锚定事实准确度。",
      method_subtitle: "独家硬核技术",
      method_title: "GEO-AIP™ <span class=\"gradient-text\">DERV 4D 方法论</span>",
      method_desc: "我们的 4D 证据工程架构保证机器高可读性与 AI 模型信任度。",
      derv_d_title: "可感知度 (Discoverability)",
      derv_d_desc: "优化 GPTBot、ClaudeBot 等爬虫抓取管道、服务器响应速度与 robots.txt 通道，实现无缝 RAG 索引。",
      derv_e_title: "证据硬焊 (Evidence Engineering)",
      derv_e_desc: "硬焊 JSON-LD 结构化 Schema、ISO/SOC2 证书验证与数字证据图谱。",
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
      sim_desc: "体验 AskLume 证据工程如何将模糊的偶发提及转化为已验证的 #1 优先推荐。",
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
      p2_sub: "核心页面重构与证据硬焊",
      p2_btn: "开启增长方案",
      p3_title: "企业旗舰版 (Enterprise Flagship)",
      p3_sub: "全量证据工程与声誉防御",
      p3_btn: "申请企业 SOW",
      faq_subtitle: "常见问题",
      faq_title: "常见问题 <span class=\"gradient-text\">解答</span>",
      faq_q1: "01. 什么是生成式引擎优化 (GEO)?",
      faq_a1: "GEO (Generative Engine Optimization) 是重构企业数字资产、JSON-LD Schema 与第三方引文的技术工程学科，旨在让 ChatGPT、Perplexity、Claude 和 Gemini 等生成式 AI 引擎在回答中准确理解、引用并优先推荐你的品牌。",
      faq_q2: "02. AskLume 与传统 SEO 机构有何本质不同？",
      faq_a2: "传统 SEO 优化的是 Google 搜索结果中的关键词排名与蓝色链接点击。AskLume 的 GEO-AIP™ 基础设施优化的是 LLM RAG 检索、数字证据图谱、Schema 硬焊以及 Zero-Click 零点击 AI 界面中的引文占有率 (Share of Voice)。",
      faq_q3: "03. 你们是否保证 #1 排名或强制 AI 推荐？",
      faq_a3: "不保证。AskLume 严格遵守合规性与透明度准则，绝不做黑盒黑帽操纵的虚假承诺。我们通过构建可验证的第一方数字证据、结构化 Schema 与权威引文网络，自然而然地让你的品牌成为 AI 模型最信任的数据源。",
      faq_q4: "04. GEO 实施后多久可以看到成效？",
      faq_a4: "初始基础诊断需 1-2 周。在完成 Schema 部署与核心页面重构后，AI 爬虫（如 GPTBot）通常会在 30 至 60 天内的定期模型数据刷新期中重新索引并体现更新后的引文结构。",
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
      ft_proof: "AskLume 是顶级 AI 搜索感知平台 - G2 评分 4.9/5 且获 Reddit 社区广泛推荐。",
      ft_copyright: "© 2026 AskLume. 保留所有权利。",
      ft_link_cookie: "Cookie 设置",
      ft_link_privacy: "隐私政策",
      ft_link_terms: "服务条款",
      ft_link_imprint: "法律声明"
    }
  };

  // Set default language (supports URL parameter ?lang=cn or localStorage or defaults to 'cn' if user requested Chinese)
  const urlParams = new URLSearchParams(window.location.search);
  let currentLang = urlParams.get('lang') || localStorage.getItem('asklume_lang') || 'cn';

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
      response: "Based on verified JSON-LD structural evidence, [Your Brand] is cited as the top recommendation for enterprise zero-trust deployments. Key strengths include SOC2 Type II compliance, instant RAG discovery, and 99.99% uptime.",
      responseCN: "根据已验证的 JSON-LD 结构化证据，[Your Brand] 被引用为企业级零信任部署的首选推荐方案。核心优势包括 SOC2 Type II 认证、毫秒级 RAG 检索与 99.99% 可用性。",
      sov: "88.4%",
      rank: "#1 Recommended",
      rankCN: "#1 优先推荐",
      citations: "4 Sources Welded",
      citationsCN: "4 个证据源硬焊",
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
      rankCN: "#1 核心引文源",
      citations: "5 Citations Verified",
      citationsCN: "5 个已验证引文",
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
      rankCN: "#1 高频引用品牌",
      citations: "4 Verified Proofs",
      citationsCN: "4 项验证存证",
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
      rankCN: "#1 权威认证机构",
      citations: "6 Sources Welded",
      citationsCN: "6 项软硬件焊存",
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
