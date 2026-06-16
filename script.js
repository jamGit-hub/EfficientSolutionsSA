/* ============================================================
   Efficient Solutions – Main JavaScript
   Handles: sticky nav, smooth scroll, reveal animations,
            language toggle (EN / AR), mobile menu, form
   ============================================================ */

'use strict';

/* ── Translation Data ─────────────────────────────────────── */
const translations = {
  en: {
    /* Navigation */
    'nav.home':       'Home',
    'nav.about':      'About Us',
    'nav.services':   'Services',
    'nav.industries': 'Industries',
    'nav.contact':    'Contact',
    'nav.cta':        'Get in Touch',

    /* Hero */
    'hero.tag':    'Your Gateway to Saudi Arabia',
    'hero.h1a':    'Engineering Saudi Arabia\'s',
    'hero.h1b':    'Industrial Future',
    'hero.lead':   'Efficient Solutions bridges global engineering enterprises with the vast opportunities of the Saudi Arabian market — delivering expertise, trust, and long-term partnership.',
    'hero.btn1':   'Discover Our Story',
    'hero.btn2':   'Our Services',
    'hero.btn3':   'Contact Us',
    'hero.stat1': 'Founding Team Experience',
'hero.stat2': 'International Advisory Connections',
'hero.stat3': 'Projects in Preparation',
    'hero.scroll': 'Scroll to explore',

    /* About Preview */
    'about.tag':      'About Efficient Solutions',
    'about.h2':       'A Bridge Between Global Expertise and Saudi Opportunity',
    'about.p1':       'Efficient Solutions is a Saudi-based consulting firm dedicated to helping international engineering and industrial companies enter and thrive in the Kingdom. We act as a strategic gateway — combining deep local knowledge with international business acumen.',
    'about.p2':       'From regulatory guidance to strategic market entry, we provide end-to-end support for companies looking to establish a meaningful, lasting presence in Saudi Arabia\'s rapidly growing economy.',
    'about.badge':    'Preparing for Market Entry Support in Saudi Arabia',
    'about.cta':      'Learn More About Us',
    'val.excellence':   'Excellence',
    'val.integrity':    'Integrity',
    'val.innovation':   'Innovation',
    'val.partnership':  'Partnership',
    'val.sustainability':'Sustainability',

    /* Services */
    'services.tag': 'What We Offer',
    'services.h2':  'Comprehensive Market Entry & Growth Services',
    'services.sub': 'We provide end-to-end support for international companies seeking to establish and expand in Saudi Arabia\'s dynamic engineering and industrial sectors.',
    's1.title': 'Market Entry Support',
    's1.desc':  'Tailored strategies to enter the Saudi market with confidence — from feasibility analysis to partner identification and market positioning.',
    's2.title': 'Business Establishment',
    's2.desc':  'We guide you through every step of setting up a legal business entity in Saudi Arabia, ensuring full regulatory compliance and operational readiness.',
    's3.title': 'Engineering Industry Consulting',
    's3.desc':  'Expert advisory for engineering companies navigating the unique dynamics of the Saudi industrial landscape.',
    's4.title': 'Strategic Partnerships',
    's4.desc':  'Connecting global enterprises with the right local partners to build mutually beneficial and sustainable business relationships.',
    's5.title': 'Regulatory & Business Guidance',
    's5.desc':  'Navigate Saudi Arabian regulations, licensing, and compliance with clarity and confidence, supported by our experienced advisory team.',
    's6.title': 'Local Market Facilitation',
    's6.desc':  'On-the-ground facilitation services that bridge language, culture, and logistics to ensure smooth business operations in Saudi Arabia.',
    'services.cta': 'Explore All Services',

    /* Industries */
    'industries.tag': 'Sectors We Serve',
    'industries.h2':  'Industries We Operate In',
    'industries.sub': 'We serve a wide range of engineering and industrial sectors, each backed by specialized knowledge and an established local network.',
    'ind1.title': 'Manufacturing',
    'ind1.desc':  'Industrial manufacturing and production facilities',
    'ind2.title': 'Industrial Engineering',
    'ind2.desc':  'Complex engineering systems and solutions',
    'ind3.title': 'Energy & Utilities',
    'ind3.desc':  'Oil, gas, power, and renewable energy sectors',
    'ind4.title': 'Construction & Infrastructure',
    'ind4.desc':  'Large-scale construction and civil infrastructure',
    'ind5.title': 'Technology & Smart Solutions',
    'ind5.desc':  'Digital transformation and smart city solutions',
    'ind6.title': 'Sustainable Engineering',
    'ind6.desc':  'Green and sustainable engineering projects',

    /* Why Us */
    'why.tag': 'Our Advantage',
    'why.h2':  'Why International Companies Choose Us',
    'why.sub': 'We bring together international perspective and Saudi market depth to give our clients an unparalleled competitive edge.',
    'why.bigcard.p':  'From Fortune 500 engineering firms to specialized SMEs, we have earned the trust of clients across continents.',
    'why.accent.p': 'Commitment to Long-Term Partnerships',
    'why1.title': 'International Experience',
    'why1.desc':  'Our leadership team brings decades of experience working with global engineering firms across multiple continents.',
    'why2.title': 'Strong Local Knowledge',
    'why2.desc':  'Deep-rooted understanding of the Saudi regulatory environment, business culture, and market dynamics.',
    'why3.title': 'Strategic Network',
    'why3.desc':  'An established network of government bodies, industry associations, and private sector leaders in Saudi Arabia.',
    'why4.title': 'Professional Consultation',
    'why4.desc':  'Structured, research-backed advisory that translates global best practices into actionable Saudi market strategies.',
    'why5.title': 'Long-Term Partnership',
    'why5.desc':  'We invest in your long-term success — not just the initial setup, but sustained growth and market leadership.',

    /* Process */
    'process.tag': 'How We Work',
    'process.h2':  'A Clear Path to Market Success',
    'process.sub': 'Our proven four-step process ensures that every client enters and expands in Saudi Arabia with full confidence and support.',
    'proc1.title': 'Discovery',
    'proc1.desc':  'Understanding your business, goals, and market entry objectives.',
    'proc2.title': 'Strategy',
    'proc2.desc':  'Crafting a tailored market entry and growth roadmap.',
    'proc3.title': 'Execution',
    'proc3.desc':  'Implementing the plan with on-the-ground local support.',
    'proc4.title': 'Growth',
    'proc4.desc':  'Sustaining momentum and scaling your Saudi operations.',

    /* CTA */
    'cta.h2':  'Ready to Enter the Saudi Market?',
    'cta.p':   'Let Efficient Solutions be your strategic gateway to one of the world\'s most dynamic engineering markets.',
    'cta.btn1': 'Start the Conversation',
    'cta.btn2': 'Explore Our Services',

    /* Footer */
    'footer.desc':    'Your strategic gateway to Saudi Arabia\'s engineering and industrial landscape.',
    'footer.company': 'Company',
    'footer.services':'Services',
    'footer.connect': 'Connect',
    'footer.rights':  '© 2025 Efficient Solutions. All rights reserved.',
    'footer.privacy': 'Privacy Policy',

    /* Contact */
    'contact.tag': 'Get in Touch',
    'contact.h2':  'Let\'s Start Your Saudi Journey',
    'contact.p':   'Reach out to our team and discover how we can support your company\'s expansion into the Kingdom of Saudi Arabia.',
    'contact.email':    'Email Us',
    'contact.phone':    'Call Us',
    'contact.office':   'Our Location',
    'contact.email.val': 'yousef.es@efficientsolutionsksa.es',
    'contact.phone.val': '+996 (0)50 481 0549',
    'contact.office.val':'Eastern Province, Kingdom of Saudi Arabia',
    'contact.form.h3':  'Send Us a Message',
    'contact.form.p':   ' Fill in the form below to reach our team!',
    'form.name':    'Full Name *',
    'form.company': 'Company Name *',
    'form.email':   'Email Address *',
    'form.service': 'Service of Interest',
    'form.message': 'Message *',
    'form.submit':  'Send Message',
    'form.success.h3': 'Message Sent!',
    'service.select': 'Select a Service',
'service.market': 'Market Entry Support',
'service.business': 'Business Establishment',
'service.engineering': 'Engineering Consulting',
'service.partnerships': 'Strategic Partnerships',
'service.regulatory': 'Regulatory Guidance',
'service.local': 'Local Market Facilitation',
'service.other': 'Other',
  
    'form.success.p':  'Thank you for reaching out. Our team will be in touch within one business day.',

    /* About page */
    'about.page.tag': 'Who We Are',
    'about.page.h1':  'Bridging Global Expertise With Saudi Opportunity',
    'about.page.hero.p': 'We exist to make Saudi Arabia accessible — and valuable — for the world\'s finest engineering and industrial companies.',
    'about.story.tag': 'Our Story',
    'about.story.h2':  'Founded on Purpose, Built on Trust',
    'about.story.p1':  'Efficient Solutions was founded by a team of Saudi and international professionals with a shared vision: to make Saudi Arabia\'s booming engineering market accessible to world-class global companies.',
    'about.story.p2':  'Operating at the intersection of Saudi Vision 2030 and global industrial demand, we help companies navigate the complexities of market entry — from legal establishment to building trusted local partnerships.',
    'about.story.quote': '"Saudi Arabia\'s transformation represents one of the greatest industrial opportunities of our generation. We are here to ensure the world\'s best companies are part of it."',
    'about.mv.tag':      'Direction',
    'about.mv.h2':       'Our Mission & Vision',
    'about.mission.label': 'Our Mission',
    'about.mission.h3':    'Enabling Global Engineering Excellence in Saudi Arabia',
    'about.mission.p':     'To serve as the most trusted bridge between international engineering companies and the Saudi market — providing strategic, regulatory, and operational support that enables confident, lasting market entry.',
    'about.vision.label':  'Our Vision',
    'about.vision.h3':     'Shaping Saudi Arabia\'s Industrial Future Together',
    'about.vision.p':      'To be the leading gateway for international engineering firms entering Saudi Arabia, recognized for integrity, expertise, and the long-term success of every partner we work with.',
    'about.values.tag': 'What We Stand For',
    'about.values.h2':  'The Values That Guide Everything We Do',
   'about.team.tag': 'Our Expertise',
'about.team.h2': 'Powered by Industry Experience',

'about.team.card1.title': '20+ Years of Industry Experience',
'about.team.card1.desc': 'Our team brings decades of combined experience in industrial development, international business advisory, and strategic partnerships.',

'about.team.card2.title': 'Market Entry Strategy Development',
'about.team.card2.desc': 'We design tailored frameworks to help international companies prepare for successful entry into Saudi Arabia’s industrial sector.',

'about.team.card3.title': 'Global Network',
'about.team.card3.desc': 'Through our international partnerships, we connect global businesses with opportunities in Saudi Arabia\'s growing engineering and industrial sectors.',
    'timeline.founded.year': 'April 2026',
'timeline.founded.title': 'Company Founded',
'timeline.founded.desc': 'Efficient Solutions established in Eastern Province with a founding team of Saudi and international experts.',

    /* Services page */
    'services.page.h1':  'Our Services',
    'services.page.hero.p': 'Comprehensive market entry and expansion support tailored for international engineering companies entering Saudi Arabia.',

    /* Industries page */
    'industries.page.h1': 'Industries We Serve',
    'industries.page.hero.p': 'Deep sector expertise across Saudi Arabia\'s most dynamic engineering and industrial fields.',
  },

  ar: {
    /* Navigation */
    'nav.home':       'الرئيسية',
    'nav.about':      'عن الشركة',
    'nav.services':   'الخدمات',
    'nav.industries': 'القطاعات',
    'nav.contact':    'اتصل بنا',
    'nav.cta':        'تواصل معنا',

    /* Hero */
    'hero.tag':    'بوابتك إلى المملكة العربية السعودية',
    'hero.h1a':    'نُرسي مستقبل',
    'hero.h1b':    'الصناعة السعودية',
    'hero.lead':   'تجمع إفيشنت سوليوشنز بين الشركات الهندسية العالمية وفرص السوق السعودي الواسعة، مُقدِّمةً الخبرة والثقة وشراكات مستدامة.',
    'hero.btn1':   'تعرّف علينا',
    'hero.btn2':   'خدماتنا',
    'hero.btn3':   'تواصل معنا',
    'hero.stat1': 'خبرة الفريق المؤسس',
'hero.stat2': 'علاقات استشارية دولية',
'hero.stat3': 'مشاريع قيد الإعداد',
    'hero.scroll': 'مرر للاستكشاف',

    /* About Preview */
    'about.tag':      'عن إفيشنت سوليوشنز',
    'about.h2':       'جسر بين الخبرة العالمية والفرصة السعودية',
    'about.p1':       'إفيشنت سوليوشنز شركة استشارية سعودية متخصصة في مساعدة الشركات الهندسية والصناعية الدولية على الدخول إلى المملكة والنمو فيها. نعمل بوصفنا بوابة استراتيجية تجمع بين المعرفة المحلية العميقة والقدرات التجارية الدولية.',
    'about.p2':       'من التوجيه التنظيمي إلى الدخول الاستراتيجي للسوق، نُقدِّم دعماً شاملاً للشركات الراغبة في تأسيس حضور حقيقي في الاقتصاد السعودي المتنامي.',
    'about.badge':    'سنة من النشاط في السوق السعودي',
    'about.cta':      'اعرف أكثر عنّا',
    'val.excellence':    'التميّز',
    'val.integrity':     'النزاهة',
    'val.innovation':    'الابتكار',
    'val.partnership':   'الشراكة',
    'val.sustainability':'الاستدامة',

    /* Services */
    'services.tag': 'ما نقدمه',
    'services.h2':  'خدمات شاملة لدخول السوق والنمو',
    'services.sub': 'نُقدِّم دعماً متكاملاً للشركات الدولية الراغبة في التأسيس والتوسع في القطاعات الهندسية والصناعية السعودية.',
    's1.title': 'دعم دخول السوق',
    's1.desc':  'استراتيجيات مُخصَّصة لدخول السوق السعودي بثقة — من دراسة الجدوى إلى تحديد الشركاء وتحديد المكانة السوقية.',
    's2.title': 'تأسيس الأعمال',
    's2.desc':  'نرشدك في كل خطوة لتأسيس كيان تجاري قانوني في المملكة، مع ضمان الامتثال التنظيمي الكامل.',
    's3.title': 'الاستشارات الهندسية',
    's3.desc':  'استشارات متخصصة للشركات الهندسية التي تتعامل مع ديناميكيات المشهد الصناعي السعودي.',
    's4.title': 'الشراكات الاستراتيجية',
    's4.desc':  'نربط الشركات العالمية بالشركاء المحليين المناسبين لبناء علاقات تجارية مستدامة ومثمرة.',
    's5.title': 'التوجيه التنظيمي',
    's5.desc':  'التعامل مع اللوائح والتراخيص والامتثال السعودي بوضوح وثقة بدعم من فريقنا الاستشاري.',
    's6.title': 'تيسير السوق المحلي',
    's6.desc':  'خدمات ميدانية تُجسر الفجوات اللغوية والثقافية واللوجستية لضمان سلاسة العمليات التجارية.',
    'services.cta': 'استعرض كل الخدمات',

    /* Industries */
    'industries.tag': 'القطاعات التي نخدمها',
    'industries.h2':  'قطاعاتنا الصناعية',
    'industries.sub': 'نخدم مجموعة واسعة من القطاعات الهندسية والصناعية، مدعومةً بمعرفة متخصصة وشبكة محلية راسخة.',
    'ind1.title': 'التصنيع',
    'ind1.desc':  'منشآت التصنيع والإنتاج الصناعي',
    'ind2.title': 'الهندسة الصناعية',
    'ind2.desc':  'أنظمة وحلول هندسية متكاملة',
    'ind3.title': 'الطاقة والمرافق',
    'ind3.desc':  'قطاعات النفط والغاز والطاقة المتجددة',
    'ind4.title': 'البناء والبنية التحتية',
    'ind4.desc':  'مشاريع البناء والبنية التحتية المدنية الكبرى',
    'ind5.title': 'التقنية والحلول الذكية',
    'ind5.desc':  'التحول الرقمي وحلول المدن الذكية',
    'ind6.title': 'الهندسة المستدامة',
    'ind6.desc':  'مشاريع الهندسة الخضراء والمستدامة',

    /* Why Us */
    'why.tag': 'ميزتنا',
    'why.h2':  'لماذا تختارنا الشركات الدولية',
    'why.sub': 'نجمع بين المنظور الدولي والعمق السوقي السعودي لنمنح عملاءنا ميزة تنافسية لا مثيل لها.',
    'why.bigcard.h3': ' الالتزام ببناء علاقات طويلة الأمد',
    'why.bigcard.p':  'من شركات الهندسة العملاقة إلى الشركات المتخصصة، كسبنا ثقة العملاء عبر القارات.',
    'why.accent.p': ' الالتزام ببناء علاقات طويلة الأمد',
    'why1.title': 'خبرة دولية',
    'why1.desc':  'يمتلك فريقنا عقوداً من الخبرة في التعامل مع شركات هندسية عالمية عبر قارات متعددة.',
    'why2.title': 'معرفة محلية عميقة',
    'why2.desc':  'فهم متجذّر للبيئة التنظيمية السعودية وثقافة الأعمال وديناميكيات السوق.',
    'why3.title': 'شبكة علاقات استراتيجية',
    'why3.desc':  'شبكة راسخة من الجهات الحكومية وجمعيات الصناعة وقيادات القطاع الخاص في المملكة.',
    'why4.title': 'استشارات احترافية',
    'why4.desc':  'استشارات منهجية مدعومة بالأبحاث تُترجم أفضل الممارسات العالمية إلى استراتيجيات سوقية قابلة للتنفيذ.',
    'why5.title': 'شراكة طويلة الأمد',
    'why5.desc':  'نستثمر في نجاحك على المدى البعيد — ليس فقط التأسيس الأولي، بل النمو المستدام وريادة السوق.',

    /* Process */
    'process.tag': 'كيف نعمل',
    'process.h2':  'مسار واضح نحو النجاح في السوق',
    'process.sub': 'عمليتنا المُجرَّبة ذات الأربع خطوات تضمن دخول كل عميل إلى المملكة وتوسعه فيها بثقة كاملة.',
    'proc1.title': 'الاستكشاف',
    'proc1.desc':  'فهم أعمالك وأهدافك وطموحات دخول السوق.',
    'proc2.title': 'الاستراتيجية',
    'proc2.desc':  'صياغة خارطة طريق مُخصَّصة لدخول السوق والنمو.',
    'proc3.title': 'التنفيذ',
    'proc3.desc':  'تنفيذ الخطة بدعم ميداني محلي متكامل.',
    'proc4.title': 'النمو',
    'proc4.desc':  'استدامة الزخم وتوسيع عملياتك في المملكة.',

    /* CTA */
    'cta.h2':  'مستعد لدخول السوق السعودي؟',
    'cta.p':   'دع إفيشنت سوليوشنز تكون بوابتك الاستراتيجية إلى أحد أكثر أسواق الهندسة ديناميكية في العالم.',
    
'cta.btn1': 'ابدأ التواصل معنا',
  'cta.btn2': 'استكشاف جميع الخدمات',

    /* Footer */
    'footer.desc':    'بوابتك الاستراتيجية إلى المشهد الهندسي والصناعي السعودي.',
    'footer.company': 'الشركة',
    'footer.services':'الخدمات',
    'footer.connect': 'تواصل',
    'footer.rights':  '© 2025 إفيشنت سوليوشنز. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',

    /* Contact */
    'contact.tag': 'تواصل معنا',
    'contact.h2':  'لنبدأ رحلتك السعودية',
    'contact.p':   'تواصل مع فريقنا واكتشف كيف يمكننا دعم توسُّع شركتك في المملكة العربية السعودية.',
    'contact.email':    'راسلنا',
    'contact.phone':    'اتصل بنا',
    'contact.office':   'موقعنا',
    'contact.email.val': 'yousef.es@efficientsolutionsksa.com',
    'contact.phone.val': '+996 (0)50 481 0549',
    'contact.office.val':'المنطقة الشرقية، المملكة العربية السعودية',
    'contact.form.h3':  'أرسل لنا رسالة',
    'contact.form.p':   'املأ النموذج أدناه للتواصل السريع مع الفريق!',
    'form.name':    '* الاسم الكامل',
    'form.company': '* اسم الشركة',
    'form.email':   '* البريد الإلكتروني',
    'form.service': 'الخدمة المطلوبة',
    'form.message': '* الرسالة',
    'form.submit':  'إرسال الرسالة',
    'form.success.h3': 'تم الإرسال!',
    'service.select': 'اختر خدمة',
    'service.market': 'دعم دخول السوق',
    'service.business': 'تأسيس الأعمال',
    'service.engineering': 'الاستشارات الهندسية',
    'service.partnerships': 'الشراكات الاستراتيجية',
    'service.regulatory': 'التوجيه التنظيمي',
    'service.local': 'تيسير السوق المحلي',
    'service.other': 'أخرى',
    'form.success.p':  'شكراً للتواصل معنا. سيتواصل فريقنا معك خلال يوم عمل واحد.',

    /* About page */
    'about.page.tag': 'من نحن',
    'about.page.h1':  'جسر الخبرة العالمية والفرصة السعودية',
    'about.page.hero.p': 'وُجدنا لنجعل المملكة العربية السعودية في متناول كبرى شركات الهندسة والصناعة العالمية.',
    'about.story.tag': 'قصتنا',
    'about.story.h2':  'تأسسنا على هدف، وبُنينا على الثقة',
    'about.story.p1':  'أسست إفيشنت سوليوشنز فريق من المتخصصين السعوديين والدوليين برؤية مشتركة: جعل سوق الهندسة السعودي المتنامي في متناول كبرى الشركات العالمية.',
    'about.story.p2':  'نعمل عند تقاطع رؤية 2030 والطلب الصناعي العالمي، مساعدين الشركات على التعامل مع تعقيدات دخول السوق — من التأسيس القانوني إلى بناء شراكات محلية موثوقة.',
    'about.story.quote': '"تحوُّل المملكة العربية السعودية يمثل إحدى أكبر الفرص الصناعية في جيلنا. نحن هنا لنضمن أن أفضل شركات العالم تكون جزءاً منه."',
    'about.mv.tag':      'توجّهنا',
    'about.mv.h2':       'رسالتنا ورؤيتنا',
    'about.mission.label': 'رسالتنا',
    'about.mission.h3':    'تمكين التميز الهندسي العالمي في المملكة',
    'about.mission.p':     'أن نكون الجسر الأكثر ثقة بين الشركات الهندسية الدولية والسوق السعودي — مُقدِّمين دعماً استراتيجياً وتنظيمياً وتشغيلياً يُمكِّن من دخول سوق واثق ودائم.',
    'about.vision.label':  'رؤيتنا',
    'about.vision.h3':     'نُشكِّل المستقبل الصناعي السعودي معاً',
    'about.vision.p':      'أن نكون البوابة الرائدة للشركات الهندسية الدولية الداخلة إلى المملكة، معترَفاً بنا بالنزاهة والخبرة والنجاح الدائم لكل شريك نعمل معه.',
    'about.values.tag': 'ما نؤمن به',
    'about.values.h2':  'القيم التي تُوجِّه كل ما نقوم به',
    'about.team.tag': 'خبراتنا',
'about.team.h2': 'مدعومون بخبرة صناعية',

'about.team.card1.title': 'أكثر من 20 سنة من الخبرة الصناعية',
'about.team.card1.desc': 'يتمتع فريقنا بعقود من الخبرة المشتركة في التطوير الصناعي والاستشارات التجارية الدولية وبناء الشراكات الاستراتيجية.',

'about.team.card2.title': 'تطوير استراتيجيات دخول السوق',
'about.team.card2.desc': 'نصمم أطر عمل مخصصة تساعد الشركات الدولية على الاستعداد لدخول ناجح إلى قطاع الصناعة في المملكة العربية السعودية.',

'about.team.card3.title': 'شبكة عالمية',
'about.team.card3.desc': 'من خلال شراكاتنا الدولية، نربط الشركات العالمية بفرص النمو في قطاع الهندسة والصناعة المتنامي في المملكة.',
    'timeline.founded.year': 'أبريل 2026',
'timeline.founded.title': 'تأسيس الشركة',
'timeline.founded.desc': 'تأسست إفيشنت سوليوشنز في المنطقة الشرقية مع فريق مؤسس من خبراء سعوديين ودوليين.',

    /* Services page */
    'services.page.h1':  'خدماتنا',
    'services.page.hero.p': 'دعم شامل لدخول السوق والتوسع، مُصمَّم خصيصاً للشركات الهندسية الدولية الداخلة إلى المملكة.',

    /* Industries page */
    'industries.page.h1': 'القطاعات التي نخدمها',
    'industries.page.hero.p': 'خبرة قطاعية عميقة في أبرز مجالات الهندسة والصناعة في المملكة.',
  }
};

/* ── State ────────────────────────────────────────────────── */
let currentLang = localStorage.getItem('es_lang') || 'en';

/* ── DOM Helpers ──────────────────────────────────────────── */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

/* ── Apply Language ───────────────────────────────────────── */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('es_lang', lang);

  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  const t = translations[lang];
  if (!t) return;

  /* Translate elements with data-i18n attribute */
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  /* Update lang button states */
  $$('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ── Sticky Nav ───────────────────────────────────────────── */
function initNav() {
  const navbar = $('#navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Highlight active page link */
  const current = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
}

/* ── Mobile Menu ──────────────────────────────────────────── */
function initMobileMenu() {
  const hamburger = $('.hamburger');
  const mobileNav = $('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  /* Close when a link is clicked */
  $$('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

/* ── Language Buttons ─────────────────────────────────────── */
function initLanguageToggle() {
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}

/* ── Reveal on Scroll ─────────────────────────────────────── */
function initReveal() {
  const targets = $$('.reveal, .reveal-left, .reveal-right');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

/* ── Stagger Children ─────────────────────────────────────── */
function initStagger() {
  $$('.stagger').forEach(parent => {
    $$(':scope > *', parent).forEach((child, i) => {
      child.style.setProperty('--i', i);
    });
  });
}

/* ── Animated Counter ─────────────────────────────────────── */
function animateCounter(el, target, duration = 1600) {
  const start = performance.now();
  const isDecimal = String(target).includes('.');
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = isDecimal
      ? (ease * target).toFixed(1)
      : Math.round(ease * target);
    el.textContent = value;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = $$('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseFloat(entry.target.dataset.count));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ── Contact Form ─────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const btn = form.querySelector(".form-submit");
  const successMsg = document.getElementById("form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    btn.disabled = true;
    btn.textContent = "Sending...";

    emailjs.sendForm(
      "service_13t62vi",
      "template_gxl6y0j",
      form
    ).then(() => {
      form.reset();
      successMsg.classList.add("visible");

      btn.disabled = false;
      btn.textContent = "Send Message";
    }).catch((error) => {
      console.log("FAILED...", error);

      alert("Message failed. Try again.");

      btn.disabled = false;
      btn.textContent = "Send Message";
    });
  });
}

/* ── Smooth scroll for anchor links ──────────────────────── */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Boot ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  initNav();
  initMobileMenu();
  initLanguageToggle();
  initReveal();
  initStagger();
  initCounters();
  initContactForm();
  initSmoothScroll();
});
