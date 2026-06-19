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
    'nav.contact':    'Contact Us',
    'nav.cta':        'Get in Touch',
    'nav.products' : 'Products',

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
    'contact.email.val': 'yousef.es@efficientsolutionsksa.com',
    'contact.phone.val': '+996 (0)50 481 0549',
    'contact.office.val':'Alkhobar, Eastern Province, Kingdom of Saudi Arabia',
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

    /* Contact page (standalone) */
    'contact.h1':              'How Can We Help You?',
    'contact.hero.p':          'Whether you\'re looking to enter the Saudi market or order one of our industrial products — you\'re in the right place. Tell us what you need and we\'ll take it from there.',
    'contact.sidebar.h2':      'We\'re Here for Both Sides of the Business',
    'contact.sidebar.p':       'Efficient Solutions works with international companies seeking a foothold in Saudi Arabia, and with local buyers who need the right industrial products fast.',
    'contact.reply.strong':    'Typically replies within 1 business day',
    'contact.reply.hours':     'Sun – Thu, 9 AM – 5 PM AST',
    'contact.expect1':         'We review your inquiry and match you with the right team member.',
    'contact.expect2':         'You\'ll receive a tailored response — not a generic auto-reply.',
    'contact.expect3':         'We set up a call or send a proposal, depending on what you need.',
    'contact.tab.business':    'Business & Consulting',
    'contact.tab.business.sub':'Market entry, partnerships, advisory',
    'contact.tab.product':     'Product Order / Quote',
    'contact.tab.product.sub': 'Mechanical seals, engineering animation',
    'contact.opt':             '(optional)',
    'contact.biz.h3':          'Business & Consulting Enquiry',
    'contact.biz.p':           'Tell us about your company and goals — we\'ll come back with a clear path forward.',
    'contact.biz.name':        'Full Name',
    'contact.biz.jobtitle':    'Job Title',
    'contact.biz.company':     'Company Name',
    'contact.biz.country':     'Country of Origin',
    'contact.biz.email':       'Email Address',
    'contact.biz.phone':       'Phone / WhatsApp',
    'contact.biz.service':     'Area of Interest',
    'contact.biz.industry':    'Your Industry',
    'contact.biz.message':     'Tell Us About Your Goals',
    'contact.biz.note':        'Your information is kept confidential and never shared.',
    'contact.biz.submit':      'Send Enquiry',
    'contact.biz.success.h3':  'Enquiry Received!',
    'contact.biz.success.p':   'Thank you for reaching out. Our consulting team will review your enquiry and get back to you within one business day.',
    'contact.prod.h3':         'Product Order & Quote Request',
    'contact.prod.p':          'Let us know what you need — we\'ll come back with availability, pricing, and lead time.',
    'contact.prod.name':       'Full Name',
    'contact.prod.company':    'Company / Organisation',
    'contact.prod.email':      'Email Address',
    'contact.prod.phone':      'Phone / WhatsApp',
    'contact.prod.product':    'Product of Interest',
    'contact.prod.details':    'Additional Details',
    'contact.prod.note':       'We\'ll respond with pricing & lead time within 1 business day.',
    'contact.prod.submit':     'Request a Quote',
    'contact.prod.success.h3': 'Quote Request Sent!',
    'contact.prod.success.p':  'Thank you! We\'ll review your product requirements and send you pricing and availability within one business day.',

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
'timeline.may.year':    'May 2025',
'timeline.may.title':   'Foundations Established',
'timeline.may.desc':    'The groundwork for Efficient Solutions was laid — defining the company\'s strategic direction, operational framework, and long-term goals through a rigorous planning and structuring process.',

'timeline.june.year':   'June 2025',
'timeline.june.title':  'First Partnerships Secured',
'timeline.june.desc':   'Efficient Solutions commenced active operations, formalizing agreements with international partners and beginning to guide the first clients through their entry into the Saudi market.',


'timeline.founded.year': 'April 2026',
'timeline.founded.title': 'Company Founded',
'timeline.founded.desc': 'Efficient Solutions established in Eastern Province with a founding team of Saudi and international experts.',

    /* Services page */
    'services.page.h1':  'Our Services',
    'services.page.hero.p': 'Comprehensive market entry and expansion support tailored for international engineering companies entering Saudi Arabia.',

    /* Industries page */
    'industries.page.h1': 'Industries We Serve',
    'industries.page.hero.p': 'Deep sector expertise across Saudi Arabia\'s most dynamic engineering and industrial fields.',

    "products.title": "Our Engineering Solutions",
    "products.subtitle": "Explore our advanced industrial services.",

    "common.contact": "Contact Us",
    "common.quote": "Request Quote",
"seals.types": "Seals Products",
  
    "seals.t1d": "Standard sealing solution",

    "seals.t2d": "High-pressure systems",

    "seals.t3d": "Pre-assembled design",

    // SECTIONS
    "anim.gallery": "Project Gallery",
    "anim.what": "What We Deliver",

    // SERVICES
    "anim.f1": "3D Industrial Visualization",
    "anim.f2": "Process Simulation",
    "anim.f3": "Training Content",
    "anim.f4": "Investor Presentations",

    // BUTTONS
    "common.request": "Request Project",
    "common.view": "View Details",

    "seals.hero.title": "Mechanical Seals & Support Systems",
    "seals.hero.desc": "High-performance sealing solutions engineered for reliability in the most demanding industrial environments.",
    "seals.partner.badge": "Official partner of LINEPROOF",
  
  
    "seals.spec.title": "Technical Specifications",
    "seals.spec.heading": "Built for Demanding Environments",
    "seals.spec.desc": "Every seal meets international standards and is tested for industrial conditions in Saudi Arabia.",
  
    "seals.spec.p1.title": "Pressure Range",
    "seals.spec.p1.text": "Up to 40 bar operating pressure",
  
    "seals.spec.p2.title": "Temperature Tolerance",
    "seals.spec.p2.text": "-40°C to +200°C",
  
    "seals.spec.p3.title": "Material Options",
    "seals.spec.p3.text": "Silicon carbide, carbon graphite, ceramic",
  
    "seals.spec.p4.title": "Compliance",
    "seals.spec.p4.text": "API 682 / ISO 21049 certified",
  
    "seals.partner.title": "In Partnership With LINEPROOF",
    "seals.partner.desc": "Our collaboration brings globally certified sealing technology to Saudi Arabia with local support and fast delivery.",
    "seals.partner.cta": "Request a Quote",


      "prod.hero.eyebrow": "Our Engineering Portfolio",
      "prod.hero.title": "Advanced Industrial Solutions",
      "prod.hero.desc": "Explore our precision-engineered products and services, developed in collaboration with global technology partners for Saudi Arabia's industrial future.",
      "prod.hero.stat1": "Product Lines",
      "prod.hero.stat2": "Market Focus",
      "prod.hero.stat3": "Certified",
    
      "prod.intro.eyebrow": "What We Offer",
      "prod.intro.title": "Engineering Solutions Built for Industry",
      "prod.intro.desc": "Each solution is backed by international expertise and tailored to the demands of Saudi Arabia's rapidly growing industrial sector.",
    
      "prod.anim.badge": "3D Visualization",
      "prod.anim.partner": "Partner Technology",
      "prod.animation.title": "Engineering Animation",
      "prod.animation.desc": "Advanced 3D engineering visualization and industrial simulation — bringing complex systems to life for training, presentations, and technical review.",
      "prod.anim.link": "Explore Product",
      "prod.anim.tag1": "3D Rendering",
      "prod.anim.tag2": "Simulation",
    
      "prod.seals.badge": "Industrial Components",
      "prod.seals.partner": "In collaboration with LINEPROOF",
      "prod.seals.title": "Mechanical Seals & Systems",
      "prod.seals.desc": "High-performance sealing solutions for industrial pumps and heavy machinery — engineered for reliability in demanding environments.",
      "prod.seals.link": "Explore Product",
      "prod.seals.tag1": "Sealing",
      "prod.seals.tag2": "Pumps",
      "prod.seals.tag3": "Heavy Industry",
    
      "trust.t1": "2030 Aligned",
      "trust.t2": "Eastern Province",
      "trust.t3": "Certified Partners",
      "trust.t4": "Technical Support",
      "anim.partner.badge":" Official partner of MECHANIM",


      /* ── Engineering Animation page ── */
      "anim.hero.tag":         "3D Visualization",
      "anim.hero.title":       "Engineering Animation & 3D Visualization",
      "anim.hero.h1a":         "Engineering Animation",
      "anim.hero.h1b":         "& 3D Visualization",
      "anim.hero.partner":     "Official partner of Mechanim — Industrial Animation Studio",
      "anim.hero.desc":        "Transforming complex engineering concepts into clear, compelling 3D animations for training, sales, and technical communication — brought to Saudi Arabia in partnership with Mechanim.",
      "anim.breadcrumb":       "Engineering Animation",

      "anim.video1.title":     "3D Industrial Animation Showreel 2025",
      "anim.video1.sub":       "Engineering Animation Services",
      "anim.video2.title":     "Industrial Animation Showreel",
      "anim.video2.sub":       "Technical & 3D Animation Portfolio",

      "anim.what.title":       "What We Deliver",
      "anim.what.eyebrow":     "What We Deliver",
      "anim.what.h2":          "Six Ways Animation Elevates Your Business",
      "anim.what.p":           "Mechanim is a team of mechanical engineers turned animators — meaning every visualization is technically accurate, not just visually impressive. Through Efficient Solutions, Saudi companies get this expertise locally.",

      "anim.app1.h3":          "Product Design & Development",
      "anim.app1.p":           "Visualize and validate industrial product designs before manufacturing — reducing costly rework and accelerating time-to-market.",
      "anim.app2.h3":          "Manufacturing & Assembly",
      "anim.app2.p":           "Simplify complex assembly sequences with step-by-step 3D animations — eliminating language barriers in multi-national plant teams.",
      "anim.app3.h3":          "Safety & Employee Training",
      "anim.app3.p":           "Replace costly physical demonstrations with interactive 3D training modules — particularly valuable for high-risk oil & gas environments in Saudi Arabia.",
      "anim.app4.h3":          "Marketing & Sales",
      "anim.app4.p":           "Differentiate your product in tender submissions and trade shows with cinematic 3D renders and animated product showcases that competitors can't match.",
      "anim.app5.h3":          "Maintenance & Troubleshooting",
      "anim.app5.p":           "Deliver clear visual maintenance guides that reduce downtime and enable field technicians to diagnose faults without specialist support.",
      "anim.app6.h3":          "Architecture & Civil Engineering",
      "anim.app6.p":           "Visualize large-scale construction projects, infrastructure, and industrial facilities before a single brick is laid — ideal for investor presentations and government approvals.",

      "anim.showcase.eyebrow": "Project Showcase",
      "anim.showcase.h2":      "Animation in Action",
      "anim.showcase.p":       "A glimpse into the quality of 3D industrial animation delivered by Mechanim for clients across the globe.",

      "anim.gallery.title":    "Project Gallery",
      "anim.g1":               "Industrial Simulation",
      "anim.g2":               "Process Visualization",
      "anim.g3":               "Machine Breakdown",
      "anim.gallery.tag1":     "3D Industrial Render",
      "anim.gallery.name1":    "Precision Machine Visualization",
      "anim.gallery.tag2":     "Process Simulation",
      "anim.gallery.name2":    "Plant-Level Flow Animation",
      "anim.gallery.tag3":     "Assembly Animation",
      "anim.gallery.name3":    "Step-by-Step Build Sequence",
      "anim.gallery.tag4":     "Training Module",
      "anim.gallery.name4":    "Safety & Operations Walkthrough",
      "anim.gallery.tag5":     "Product Demo",
      "anim.gallery.name5":    "Photorealistic Product Showcase",
      "anim.gallery.tag6":     "Facility Walkthrough",
      "anim.gallery.name6":    "Virtual Plant Tour Animation",

      "anim.process.eyebrow":  "How It Works",
      "anim.process.h2":       "From Concept to Final Animation",
      "anim.process.p":        "A streamlined four-step process — coordinated by Efficient Solutions between you and Mechanim's studio team.",
      "anim.proc1.h4":         "Brief & Scope",
      "anim.proc1.p":          "We gather your CAD files, use-case objectives, and target audience to define the animation scope.",
      "anim.proc2.h4":         "3D Modelling",
      "anim.proc2.p":          "Mechanim's engineers build or refine the 3D model with engineering precision, ensuring technical accuracy.",
      "anim.proc3.h4":         "Animation & Review",
      "anim.proc3.p":          "Motion, lighting, and rendering are finalized. You review and approve at each milestone.",
      "anim.proc4.h4":         "Delivery & Support",
      "anim.proc4.p":          "Final files delivered in your required format — MP4, WebGL, or interactive viewer — with revisions included.",

      "anim.why.eyebrow":      "Why Mechanim",
      "anim.why.h2":           "Engineering Accuracy Meets Creative Excellence",
      "anim.why.p":            "Unlike generic animation studios, Mechanim's team are qualified mechanical engineers — they understand tolerances, flow dynamics, and assembly logic. This means animations that are trusted by engineers, not just admired by marketing teams.",
      "anim.why1.h4":          "Engineering Expertise",
      "anim.why1.p":           "Animations built by engineers who understand complex systems — not just artists following briefs.",
      "anim.why2.h4":          "Tailored Solutions",
      "anim.why2.p":           "Every animation is customized to your industry, audience, and specific communication goal.",
      "anim.why3.h4":          "Global References",
      "anim.why3.p":           "Proven track record with industrial clients across multiple countries and sectors.",
      "anim.why.cta":          "Start Your Project →",

      "anim.studio.label":     "Mechanim Studio",
      "anim.studio.sub":       "Team of Mechanical Engineers",

      "anim.i1.t": "3D Industrial Visualization",
      "anim.i1.d": "Realistic models of machines and systems.",
      "anim.i2.t": "Process Simulation",
      "anim.i2.d": "Step-by-step animated workflows.",
      "anim.i3.t": "Training Content",
      "anim.i3.d": "Used for safety and employee training.",
      "anim.i4.t": "Investor Presentations",
      "anim.i4.d": "High-end visuals for business pitches.",

      "anim.partner.title":    "In Partnership With Mechanim",
      "anim.partner.desc":     "Mechanim is a specialist 3D industrial animation studio run by mechanical engineers. Their mission — simplifying the complex through engaging visual solutions — maps directly onto Saudi Arabia's need to communicate technical concepts across multinational, multilingual workforces. Through Efficient Solutions, this expertise is now accessible in the Kingdom.",
      "anim.partner.cta":      "Request an Animation Quote",

    /* ── Seal product page ── */
    "seals.hero.eyebrow": "Industrial Components",
    "seals.hero.badge": "Official partner of Lineproof Engineering",
    "seals.hero.title": "Mechanical Seals & Sealing Systems",
    "seals.hero.desc": "High-performance sealing solutions engineered for reliability in Saudi Arabia's most demanding petrochemical, oil & gas, and industrial environments.",

    "seals.range.eyebrow": "Product Range",
    "seals.range.h2": "Seal Types We Supply",
    "seals.range.sub": "Lineproof Engineering manufactures a comprehensive range of mechanical seals — each designed for precision performance under demanding industrial conditions. We bring these to the Saudi market with local support.",

    "seals.card1.title": "Single Mechanical Seal",
    "seals.card1.desc": "Standard industrial pump sealing solution — reliable, cost-effective, and easy to maintain. Wave-spring design ensures consistent face load across a broad shaft size range.",
    "seals.card1.use": "Best for: General pump applications",
    "seals.card2.title": "Dual Cartridge Seal",
    "seals.card2.desc": "ANSI-standard dual cartridge configuration providing double-layer sealing for hazardous or critical process fluids. Zero adjustment required on installation.",
    "seals.card2.use": "Best for: Hazardous & critical fluids",
    "seals.card3.title": "Metal Bellows Seal",
    "seals.card3.desc": "All-metal welded bellows design — eliminates elastomers for extreme temperature applications. Suitable for cryogenic service down to −200 °C and high-temperature up to +400 °C.",
    "seals.card3.use": "Best for: Extreme temperature service",
    "seals.card4.title": "Dry-Running Seal",
    "seals.card4.desc": "Engineered for gas or near-vapour applications where liquid lubrication is unavailable. Maintains a controlled gas film enabling zero-leakage operation in compressors and blowers.",
    "seals.card4.use": "Best for: Gas / vapour service",
    "seals.card5.title": "Reactor / Agitator Seal",
    "seals.card5.desc": "Double-acting seal purpose-built for top- or side-entry agitators in reactors. Handles angular misalignment and radial deflection under variable pressures.",
    "seals.card5.use": "Best for: Reactors & agitators",
    "seals.card6.title": "Split Mechanical Seal",
    "seals.card6.desc": "Split-design for in-place installation without dismantling pipework or bearings — drastically reducing maintenance downtime on large pumps.",
    "seals.card6.use": "Best for: Minimal-downtime maintenance",

    "seals.spec.eyebrow": "Technical Specifications",
    "seals.spec.h2": "Built for Saudi Arabia's Demanding Environments",
    "seals.spec.intro": "Every seal we supply meets international standards and is tested for the conditions found across Saudi Arabia's petrochemical, oil & gas, and industrial sectors.",
    "seals.spec.s1.title": "Pressure Range",
    "seals.spec.s1.text": "Up to 40 bar operating pressure",
    "seals.spec.s2.title": "Temperature Tolerance",
    "seals.spec.s2.text": "−200 °C to +400 °C",
    "seals.spec.s3.title": "Face Materials",
    "seals.spec.s3.text": "Silicon carbide, carbon graphite, ceramic, tungsten carbide",
    "seals.spec.s4.title": "Shaft Sizes",
    "seals.spec.s4.text": "12 mm to 200 mm standard; custom available",
    "seals.spec.s5.title": "Compliance",
    "seals.spec.s5.text": "API 682 / ISO 21049 certified; manufactured since 2002",
    "seals.spec.s6.title": "Support Systems",
    "seals.spec.s6.text": "Seal flush plans, barrier/buffer fluid panels, and monitoring instrumentation available",
    "seals.spec.cta": "Request a Quotation",

    "seals.ind.eyebrow": "Industries Served",
    "seals.ind.h2": "Every Industry, Every Condition",
    "seals.ind.sub": "Lineproof seals are field-proven across the full spectrum of Saudi Arabia's industrial landscape.",
    "seals.ind1.title": "Oil & Gas",
    "seals.ind1.desc": "Upstream, midstream & downstream pump sealing for hazardous fluids",
    "seals.ind2.title": "Chemical Processing",
    "seals.ind2.desc": "Leak-free containment of aggressive solvents & corrosive media",
    "seals.ind3.title": "Petrochemicals",
    "seals.ind3.desc": "SABIC-compliant sealing solutions for refinery & cracker units",
    "seals.ind4.title": "Water Treatment",
    "seals.ind4.desc": "FDA-grade seals for desalination & municipal water systems",
    "seals.ind5.title": "Energy & Power",
    "seals.ind5.desc": "High-temperature, high-pressure seals for power generation turbines",
    "seals.ind6.title": "Food & Beverage",
    "seals.ind6.desc": "Hygienic, contamination-free seals meeting food-safety standards",
    "seals.ind7.title": "Pharmaceuticals",
    "seals.ind7.desc": "Sterile-grade sealing for GMP-certified manufacturing lines",
    "seals.ind8.title": "General Industry",
    "seals.ind8.desc": "Versatile sealing for HVAC, mining & general rotating equipment",

    "seals.gallery.eyebrow": "Partner Product Range",
    "seals.gallery.h2": "Lineproof Engineering Catalogue",
    "seals.gallery.sub": "A selection of specialised sealing products manufactured by Lineproof — available in Saudi Arabia through Efficient Solutions.",
    "seals.gallery.label1": "Carbon Floating Ring Seal",
    "seals.gallery.label2": "Metal Bellows Mechanical Seal",
    "seals.gallery.label3": "Wave Spring Mechanical Seal",
    "seals.gallery.label4": "Reactor Double Mechanical Seal",
    "seals.gallery.cta": "View Full Lineproof Catalogue",

    "seals.partner.title": "In Partnership With Lineproof Engineering",
    "seals.partner.desc": "Founded in 2002, Lineproof Engineering is a leading manufacturer of mechanical seals and rotary sealing solutions with over 30 years of collective experience. Our exclusive partnership brings their world-class sealing technology directly to Saudi Arabia — with local sourcing, Arabic-language support, and fast in-Kingdom delivery.",
    "seals.partner.cta": "Enquire About Seals"
  },

  ar: {
    /* Navigation */
    'nav.home':       'الرئيسية',
    'nav.about':      'عن الشركة',
    'nav.services':   'الخدمات',
    'nav.industries': 'القطاعات',
    'nav.contact':    'اتصل بنا',
    'nav.cta':        'تواصل معنا',
    'nav.products' : 'المنتجات',

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
    'contact.office.val':'الخبر، المنطقة الشرقية، المملكة العربية السعودية',
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

    /* Contact page (standalone) */
    'contact.h1':              'كيف يمكننا مساعدتك؟',
    'contact.hero.p':          'سواء كنت تتطلع للدخول إلى السوق السعودي أو طلب أحد منتجاتنا الصناعية — أنت في المكان الصحيح. أخبرنا بما تحتاجه وسنتولى الأمر.',
    'contact.sidebar.h2':      'نحن هنا لكلا الجانبين',
    'contact.sidebar.p':       'تعمل إفيشنت سوليوشنز مع الشركات الدولية الراغبة في دخول السوق السعودي، والمشترين المحليين الذين يحتاجون إلى المنتجات الصناعية المناسبة بسرعة.',
    'contact.reply.strong':    'نرد عادةً خلال يوم عمل واحد',
    'contact.reply.hours':     'الأحد – الخميس، 9 صباحاً – 5 مساءً',
    'contact.expect1':         'نراجع استفسارك ونحيله إلى عضو الفريق المناسب.',
    'contact.expect2':         'ستتلقى رداً مخصصاً — ليس رداً آلياً.',
    'contact.expect3':         'نحدد موعد اتصال أو نرسل عرضاً بحسب ما تحتاجه.',
    'contact.tab.business':    'الأعمال والاستشارات',
    'contact.tab.business.sub':'دخول السوق، الشراكات، الاستشارات',
    'contact.tab.product':     'طلب منتج / عرض سعر',
    'contact.tab.product.sub': 'الأختام الميكانيكية، الرسوم الهندسية',
    'contact.opt':             '(اختياري)',
    'contact.biz.h3':          'استفسار الأعمال والاستشارات',
    'contact.biz.p':           'أخبرنا عن شركتك وأهدافك — وسنعود بمسار واضح للمضي قدماً.',
    'contact.biz.name':        'الاسم الكامل',
    'contact.biz.jobtitle':    'المسمى الوظيفي',
    'contact.biz.company':     'اسم الشركة',
    'contact.biz.country':     'بلد المنشأ',
    'contact.biz.email':       'البريد الإلكتروني',
    'contact.biz.phone':       'الهاتف / واتساب',
    'contact.biz.service':     'مجال الاهتمام',
    'contact.biz.industry':    'قطاعك الصناعي',
    'contact.biz.message':     'أخبرنا عن أهدافك',
    'contact.biz.note':        'معلوماتك تُحفظ بسرية تامة ولا تُشارك مع أي جهة.',
    'contact.biz.submit':      'إرسال الاستفسار',
    'contact.biz.success.h3':  'تم استلام الاستفسار!',
    'contact.biz.success.p':   'شكراً للتواصل معنا. سيراجع فريق الاستشارات استفسارك ويتواصل معك خلال يوم عمل واحد.',
    'contact.prod.h3':         'طلب منتج وعرض سعر',
    'contact.prod.p':          'أخبرنا بما تحتاجه — وسنعود بالتوافر والتسعير ووقت التسليم.',
    'contact.prod.name':       'الاسم الكامل',
    'contact.prod.company':    'الشركة / المؤسسة',
    'contact.prod.email':      'البريد الإلكتروني',
    'contact.prod.phone':      'الهاتف / واتساب',
    'contact.prod.product':    'المنتج المطلوب',
    'contact.prod.details':    'تفاصيل إضافية',
    'contact.prod.note':       'سنرد بالتسعير ووقت التسليم خلال يوم عمل واحد.',
    'contact.prod.submit':     'طلب عرض سعر',
    'contact.prod.success.h3': 'تم إرسال طلب العرض!',
    'contact.prod.success.p':  'شكراً! سنراجع متطلبات منتجك ونرسل لك التسعير والتوافر خلال يوم عمل واحد.',

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
 
'timeline.may.year':    'مايو 2025',
    'timeline.may.title':   'وضع الأسس',
    'timeline.may.desc':    'انطلق العمل على تأسيس إفيشنت سوليوشنز من خلال وضع التوجه الاستراتيجي والإطار التشغيلي وتحديد الأهداف بعيدة المدى، في مرحلة تخطيط وهيكلة دقيقة.',
 
    'timeline.june.year':   'يونيو 2025',
    'timeline.june.title':  'إبرام أولى الشراكات',
    'timeline.june.desc':   'انطلقت إفيشنت سوليوشنز في عملياتها الفعلية، وأبرمت اتفاقيات رسمية مع شركاء دوليين، وبدأت مرافقة أولى الشركات في رحلتها للدخول إلى السوق السعودي.',
 

'timeline.founded.year': 'أبريل 2026',
'timeline.founded.title': 'تأسيس الشركة',
'timeline.founded.desc': 'تأسست إفيشنت سوليوشنز في المنطقة الشرقية مع فريق مؤسس من خبراء سعوديين ودوليين.',

    /* Services page */
    'services.page.h1':  'خدماتنا',
    'services.page.hero.p': 'دعم شامل لدخول السوق والتوسع، مُصمَّم خصيصاً للشركات الهندسية الدولية الداخلة إلى المملكة.',

    /* Industries page */
    'industries.page.h1': 'القطاعات التي نخدمها',
    'industries.page.hero.p': 'خبرة قطاعية عميقة في أبرز مجالات الهندسة والصناعة في المملكة.',

    "products.title": "حلولنا الهندسية",
    "products.subtitle": "استكشف خدماتنا الصناعية المتقدمة.",

    "seals.t1": "ختم مفرد",
    "seals.t1d": "حلول قياسية",

    "seals.t2": "ختم مزدوج",
    "seals.t2d": "بيئات ضغط عالي",

    "seals.t3": "نظام كارترج",
    "seals.t3d": "جاهز للتركيب",
"seals.types": "منتجات الاختام",
    

      "anim.gallery": "معرض المشاريع",
    
      "anim.what": "ما نقدمه",
    
      "anim.f1": "تصوير ثلاثي الأبعاد للأنظمة الصناعية",
      "anim.f2": "محاكاة العمليات الصناعية خطوة بخطوة",
      "anim.f3": "محتوى تدريبي للموظفين والسلامة",
      "anim.f4": "عروض تقديمية للمستثمرين",
    
      "common.contact": "تواصل معنا",
      "common.quote": "طلب عرض سعر",
      "common.view": "عرض التفاصيل ←",

      "seals.hero.title": "الأختام الميكانيكية وأنظمة الدعم",
      "seals.hero.desc": "حلول إحكام عالية الأداء مصممة للعمل في أصعب البيئات الصناعية.",
      "seals.partner.badge": "شريك رسمي لـ LINEPROOF",
    
      "seals.spec.title": "المواصفات التقنية",
      "seals.spec.heading": "مصمم للبيئات الصعبة",
      "seals.spec.desc": "جميع الأختام مطابقة للمعايير العالمية ومختبرة لظروف الصناعة في السعودية.",
    
      "seals.spec.p1.title": "نطاق الضغط",
      "seals.spec.p1.text": "حتى 40 بار ضغط تشغيل",
    
      "seals.spec.p2.title": "تحمل الحرارة",
      "seals.spec.p2.text": "من -40 إلى +200 درجة مئوية",
    
      "seals.spec.p3.title": "المواد",
      "seals.spec.p3.text": "كربيد السيليكون، الجرافيت الكربوني، السيراميك",
    
      "seals.spec.p4.title": "المطابقة",
      "seals.spec.p4.text": "معتمد وفق API 682 / ISO 21049",
    
      "seals.partner.title": "بشراكة مع لاين بروف",
      "seals.partner.desc": "تجلب هذه الشراكة تقنيات إحكام معتمدة عالميًا إلى السوق السعودي مع دعم محلي سريع.",
    
      
        "prod.hero.eyebrow": "محفظة حلولنا الهندسية",
        "prod.hero.title": "حلول صناعية متقدمة",
        "prod.hero.desc": "استكشف منتجاتنا وخدماتنا المصممة بدقة، بالتعاون مع شركاء تقنيين عالميين لمستقبل الصناعة في السعودية.",
        "prod.hero.stat1": "خطوط المنتجات",
        "prod.hero.stat2": "تركيز السوق",
        "prod.hero.stat3": "معتمد",
      
        "prod.intro.eyebrow": "ما نقدمه",
        "prod.intro.title": "حلول هندسية مصممة للصناعة",
        "prod.intro.desc": "كل حل مدعوم بخبرة عالمية ومصمم لتلبية احتياجات القطاع الصناعي المتنامي في السعودية.",
      
        "prod.anim.badge": "تصور ثلاثي الأبعاد",
        "prod.anim.partner": "تقنية شراكة",
        "prod.animation.title": "الرسوم الهندسية",
        "prod.animation.desc": "تصور هندسي ثلاثي الأبعاد ومحاكاة صناعية — لتبسيط الأنظمة المعقدة للتدريب والعرض والمراجعة الفنية.",
        "prod.anim.link": "استعرض المنتج",
        "prod.anim.tag1": "تصوير ثلاثي الأبعاد",
        "prod.anim.tag2": "محاكاة",
      
        "prod.seals.badge": "مكونات صناعية",
        "prod.seals.partner": "بالتعاون مع لاين بروف",
        "prod.seals.title": "الأختام الميكانيكية وأنظمة الدعم",
        "prod.seals.desc": "حلول إحكام عالية الأداء للمضخات والآلات الثقيلة — مصممة للعمل في البيئات الصعبة.",
        "prod.seals.link": "استعرض المنتج",
        "prod.seals.tag1": "إحكام",
        "prod.seals.tag2": "مضخات",
        "prod.seals.tag3": "صناعة ثقيلة",
      
        "trust.t1": "متوافق مع رؤية 2030",
        "trust.t2": "المنطقة الشرقية",
        "trust.t3": "شركاء معتمدون",
        "trust.t4": "دعم فني 24/7",

        "anim.partner.badge":" شريك رسمي لـ MECHANIM",


    /* ── صفحة الرسوم الهندسية التحريكية ── */
    "anim.hero.tag":         "تصور ثلاثي الأبعاد",
    "anim.hero.title":       "الرسوم الهندسية والتصور ثلاثي الأبعاد",
    "anim.hero.h1a":         "الرسوم الهندسية التحريكية",
    "anim.hero.h1b":         "والتصور ثلاثي الأبعاد",
    "anim.hero.partner":     "شريك رسمي لـ Mechanim — استوديو الرسوم الصناعية",
    "anim.hero.desc":        "تحويل المفاهيم الهندسية المعقدة إلى رسوم تحريكية ثلاثية الأبعاد واضحة ومؤثرة للتدريب والمبيعات والتواصل التقني — مُقدَّمة إلى المملكة بشراكة مع Mechanim.",
    "anim.breadcrumb":       "الرسوم الهندسية التحريكية",

    "anim.video1.title":     "شريط عرض الرسوم الصناعية ثلاثية الأبعاد 2025",
    "anim.video1.sub":       "خدمات الرسوم الهندسية التحريكية",
    "anim.video2.title":     "شريط عرض الرسوم الصناعية التحريكية",
    "anim.video2.sub":       "محفظة الرسوم التقنية ثلاثية الأبعاد",

    "anim.what.title":       "ما نقدمه",
    "anim.what.eyebrow":     "ما نقدمه",
    "anim.what.h2":          "ست طرق تُعزِّز الرسوم التحريكية أعمالك",
    "anim.what.p":           "فريق Mechanim مؤلَّف من مهندسين ميكانيكيين تحوَّلوا إلى مصممي رسوم تحريكية — مما يعني أن كل تصور تقني دقيق وصحيح، لا مجرد جذاب بصرياً. من خلال إفيشنت سوليوشنز، تصل هذه الخبرة إلى الشركات السعودية.",

    "anim.app1.h3":          "تصميم المنتجات وتطويرها",
    "anim.app1.p":           "تصوُّر تصاميم المنتجات الصناعية والتحقق منها قبل التصنيع — للحد من إعادة العمل المكلفة وتسريع وصول المنتج إلى السوق.",
    "anim.app2.h3":          "التصنيع والتجميع",
    "anim.app2.p":           "تبسيط تسلسلات التجميع المعقدة بتحريك ثلاثي الأبعاد خطوة بخطوة — يُزيل الحواجز اللغوية في فرق المصانع متعددة الجنسيات.",
    "anim.app3.h3":          "السلامة وتدريب الموظفين",
    "anim.app3.p":           "استبدال العروض التجريبية المكلفة بوحدات تدريب تفاعلية ثلاثية الأبعاد — ذات قيمة استثنائية في بيئات النفط والغاز عالية المخاطر في المملكة.",
    "anim.app4.h3":          "التسويق والمبيعات",
    "anim.app4.p":           "تميَّز في العطاءات والمعارض التجارية بمقاطع ثلاثية الأبعاد سينمائية وعروض منتجات متحركة لا يستطيع المنافسون مجاراتها.",
    "anim.app5.h3":          "الصيانة وحل المشكلات",
    "anim.app5.p":           "تقديم أدلة صيانة مرئية واضحة تُقلِّل وقت التوقف وتُمكِّن الفنيين الميدانيين من تشخيص الأعطال دون الحاجة إلى دعم متخصص.",
    "anim.app6.h3":          "الهندسة المعمارية والمدنية",
    "anim.app6.p":           "تصوُّر مشاريع البناء الكبرى والبنية التحتية والمنشآت الصناعية قبل وضع أول حجر — مثالي لعروض المستثمرين والموافقات الحكومية.",

    "anim.showcase.eyebrow": "عرض المشاريع",
    "anim.showcase.h2":      "الرسوم التحريكية على أرض الواقع",
    "anim.showcase.p":       "لمحة من جودة الرسوم التحريكية الصناعية ثلاثية الأبعاد التي يُقدِّمها Mechanim لعملاء حول العالم.",

    "anim.gallery.title":    "معرض المشاريع",
    "anim.g1":               "محاكاة صناعية",
    "anim.g2":               "تصور العمليات",
    "anim.g3":               "تفكيك الآلات",
    "anim.gallery.tag1":     "تصيير صناعي ثلاثي الأبعاد",
    "anim.gallery.name1":    "تصور آلات دقيق",
    "anim.gallery.tag2":     "محاكاة العمليات",
    "anim.gallery.name2":    "رسم متحرك لتدفق المصنع",
    "anim.gallery.tag3":     "رسوم تجميع",
    "anim.gallery.name3":    "تسلسل بناء خطوة بخطوة",
    "anim.gallery.tag4":     "وحدة تدريبية",
    "anim.gallery.name4":    "جولة السلامة والتشغيل",
    "anim.gallery.tag5":     "عرض المنتج",
    "anim.gallery.name5":    "عرض منتج فائق الواقعية",
    "anim.gallery.tag6":     "جولة المنشأة",
    "anim.gallery.name6":    "رسوم جولة افتراضية للمصنع",

    "anim.process.eyebrow":  "كيف نعمل",
    "anim.process.h2":       "من الفكرة إلى الرسوم التحريكية النهائية",
    "anim.process.p":        "عملية مبسَّطة من أربع خطوات — تُنسِّقها إفيشنت سوليوشنز بينك وبين فريق استوديو Mechanim.",
    "anim.proc1.h4":         "الإحاطة والنطاق",
    "anim.proc1.p":          "نجمع ملفات CAD وأهداف الاستخدام والجمهور المستهدف لتحديد نطاق الرسوم التحريكية.",
    "anim.proc2.h4":         "النمذجة ثلاثية الأبعاد",
    "anim.proc2.p":          "يبني مهندسو Mechanim النموذج ثلاثي الأبعاد أو يُحسِّنونه بدقة هندسية لضمان الصحة التقنية.",
    "anim.proc3.h4":         "التحريك والمراجعة",
    "anim.proc3.p":          "تُنجَز الحركة والإضاءة والتصيير النهائي. تراجع وتوافق على كل مرحلة.",
    "anim.proc4.h4":         "التسليم والدعم",
    "anim.proc4.p":          "تُسلَّم الملفات النهائية بالتنسيق المطلوب — MP4 أو WebGL أو عارض تفاعلي — مع تعديلات مشمولة.",

    "anim.why.eyebrow":      "لماذا Mechanim",
    "anim.why.h2":           "دقة هندسية وتميُّز إبداعي",
    "anim.why.p":            "خلافاً لاستوديوهات الرسوم العادية، فريق Mechanim من مهندسين ميكانيكيين مؤهَّلين — يفهمون الفجوات والديناميكيات والمنطق التجميعي. ما يعني رسوماً تحريكية يثق بها المهندسون، لا تُعجب فرق التسويق فحسب.",
    "anim.why1.h4":          "خبرة هندسية",
    "anim.why1.p":           "رسوم تحريكية يبنيها مهندسون يفهمون الأنظمة المعقدة — لا مجرد فنانين ينفِّذون مطلوبات.",
    "anim.why2.h4":          "حلول مخصصة",
    "anim.why2.p":           "كل رسوم تحريكية مُصمَّمة خصيصاً لقطاعك وجمهورك وهدفك الاتصالي المحدد.",
    "anim.why3.h4":          "مراجع عالمية",
    "anim.why3.p":           "سجل حافل مع عملاء صناعيين عبر دول وقطاعات متعددة.",
    "anim.why.cta":          "ابدأ مشروعك ←",

    "anim.studio.label":     "استوديو Mechanim",
    "anim.studio.sub":       "فريق من المهندسين الميكانيكيين",

    "anim.i1.t": "تصور صناعي ثلاثي الأبعاد",
    "anim.i1.d": "نماذج واقعية للآلات والأنظمة.",
    "anim.i2.t": "محاكاة العمليات",
    "anim.i2.d": "توضيح الخطوات بشكل متحرك.",
    "anim.i3.t": "محتوى تدريبي",
    "anim.i3.d": "يُستخدم للسلامة وتدريب الموظفين.",
    "anim.i4.t": "عروض المستثمرين",
    "anim.i4.d": "تصاميم احترافية للعروض التجارية.",

    "anim.partner.title":    "بشراكة مع Mechanim",
    "anim.partner.desc":     "Mechanim استوديو متخصص في الرسوم الصناعية ثلاثية الأبعاد يُديره مهندسون ميكانيكيون. مهمتهم — تبسيط التعقيد من خلال حلول بصرية جذابة — تتوافق تماماً مع حاجة المملكة للتواصل التقني عبر القوى العاملة متعددة الجنسيات واللغات. من خلال إفيشنت سوليوشنز، أصبحت هذه الخبرة في متناولك داخل المملكة.",
    "anim.partner.cta":      "طلب عرض سعر للرسوم التحريكية",

    /* ── Seal product page ── */
    "seals.hero.eyebrow": "مكونات صناعية",
    "seals.hero.badge": "شريك رسمي لـ Lineproof Engineering",
    "seals.hero.title": "الأختام الميكانيكية وأنظمة الإحكام",
    "seals.hero.desc": "حلول إحكام عالية الأداء مصممة للعمل في أصعب البيئات الصناعية في المملكة — البتروكيماويات والنفط والغاز.",

    "seals.range.eyebrow": "نطاق المنتجات",
    "seals.range.h2": "أنواع الأختام التي نوفرها",
    "seals.range.sub": "تصنّع Lineproof Engineering مجموعة شاملة من الأختام الميكانيكية — كلٌّ منها مصمَّم لأداء دقيق في أصعب الظروف الصناعية. نوفرها للسوق السعودي مع دعم محلي متكامل.",

    "seals.card1.title": "ختم ميكانيكي مفرد",
    "seals.card1.desc": "حل إحكام قياسي للمضخات الصناعية — موثوق وفعّال من حيث التكلفة وسهل الصيانة. تصميم النابض الموجي يضمن ضغطاً ثابتاً على الوجوه عبر نطاق واسع من أقطار المحاور.",
    "seals.card1.use": "الأنسب لـ: تطبيقات المضخات العامة",
    "seals.card2.title": "ختم خرطوشة مزدوج",
    "seals.card2.desc": "تكوين خرطوشة مزدوج وفق معيار ANSI يوفر طبقتَي إحكام للسوائل الخطرة والحرجة. لا يتطلب أي ضبط عند التركيب.",
    "seals.card2.use": "الأنسب لـ: السوائل الخطرة والحرجة",
    "seals.card3.title": "ختم ميكانيكي بحلزونات معدنية",
    "seals.card3.desc": "تصميم معدني بالكامل بحلزونات ملحومة — يُلغي الإيلاستومرات للتطبيقات ذات درجات الحرارة القصوى. مناسب للخدمة المبردة حتى −200 °م وعالية الحرارة حتى +400 °م.",
    "seals.card3.use": "الأنسب لـ: خدمة درجات الحرارة القصوى",
    "seals.card4.title": "ختم جاف التشغيل",
    "seals.card4.desc": "مصمَّم لتطبيقات الغاز حيث يتعذّر التزليق السائل. يحافظ على طبقة غازية محكومة لضمان تشغيل بدون تسرب في الضواغط والمراوح.",
    "seals.card4.use": "الأنسب لـ: خدمة الغاز / البخار",
    "seals.card5.title": "ختم المفاعلات والخلاطات",
    "seals.card5.desc": "ختم مزدوج مصمَّم للخلاطات العلوية والجانبية في المفاعلات. يستوعب الانحراف الزاوي والانحناء الشعاعي مع الحفاظ على الإحكام في ظل ضغوط متغيرة.",
    "seals.card5.use": "الأنسب لـ: المفاعلات والخلاطات",
    "seals.card6.title": "ختم منشطر",
    "seals.card6.desc": "تصميم منشطر للتركيب دون فك الأنابيب أو المحامل — يقلل وقت توقف الصيانة بشكل ملحوظ في المضخات الكبيرة.",
    "seals.card6.use": "الأنسب لـ: الصيانة بأقل توقف ممكن",

    "seals.spec.eyebrow": "المواصفات التقنية",
    "seals.spec.h2": "مصمَّم لبيئات المملكة الصعبة",
    "seals.spec.intro": "كل ختم نوفره مطابق للمعايير الدولية ومختبَر لظروف قطاعات البتروكيماويات والنفط والغاز والصناعة في المملكة.",
    "seals.spec.s1.title": "نطاق الضغط",
    "seals.spec.s1.text": "حتى 40 بار ضغط تشغيل",
    "seals.spec.s2.title": "تحمل الحرارة",
    "seals.spec.s2.text": "من −200 إلى +400 درجة مئوية",
    "seals.spec.s3.title": "مواد الوجوه",
    "seals.spec.s3.text": "كربيد السيليكون، الجرافيت الكربوني، السيراميك، كربيد التنغستن",
    "seals.spec.s4.title": "أقطار المحاور",
    "seals.spec.s4.text": "من 12 ملم إلى 200 ملم قياساً؛ وحسب الطلب",
    "seals.spec.s5.title": "المطابقة",
    "seals.spec.s5.text": "معتمد وفق API 682 / ISO 21049؛ في الإنتاج منذ 2002",
    "seals.spec.s6.title": "أنظمة الدعم",
    "seals.spec.s6.text": "خطط تدفق الأختام ولوحات سوائل الحاجز وأجهزة المراقبة متوفرة",
    "seals.spec.cta": "طلب عرض سعر",

    "seals.ind.eyebrow": "القطاعات التي نخدمها",
    "seals.ind.h2": "كل صناعة، كل بيئة",
    "seals.ind.sub": "أختام Lineproof مجرَّبة ميدانياً عبر طيف واسع من القطاعات الصناعية في المملكة.",
    "seals.ind1.title": "النفط والغاز",
    "seals.ind1.desc": "إحكام مضخات المنبع والمصب للسوائل الخطرة",
    "seals.ind2.title": "المعالجة الكيميائية",
    "seals.ind2.desc": "احتواء خالٍ من التسرب للمذيبات العدوانية والوسائط الكيميائية",
    "seals.ind3.title": "البتروكيماويات",
    "seals.ind3.desc": "حلول إحكام متوافقة مع سابك لوحدات التكرير والتكسير",
    "seals.ind4.title": "معالجة المياه",
    "seals.ind4.desc": "أختام بمعايير FDA لأنظمة التحلية والمياه البلدية",
    "seals.ind5.title": "الطاقة والكهرباء",
    "seals.ind5.desc": "أختام عالية الحرارة والضغط لتوربينات توليد الكهرباء",
    "seals.ind6.title": "الأغذية والمشروبات",
    "seals.ind6.desc": "أختام صحية خالية من التلوث تستوفي معايير سلامة الغذاء",
    "seals.ind7.title": "الصناعات الدوائية",
    "seals.ind7.desc": "إحكام بمعيار GMP لخطوط التصنيع المعتمدة",
    "seals.ind8.title": "الصناعة العامة",
    "seals.ind8.desc": "إحكام متعدد الاستخدامات للتكييف والتعدين والمعدات الدوارة",

    "seals.gallery.eyebrow": "نطاق منتجات الشريك",
    "seals.gallery.h2": "كتالوج Lineproof Engineering",
    "seals.gallery.sub": "مجموعة مختارة من منتجات الإحكام المتخصصة التي تصنّعها Lineproof — متوفرة في المملكة عبر إفيشنت سوليوشنز.",
    "seals.gallery.label1": "ختم حلقي عائم كربوني",
    "seals.gallery.label2": "ختم ميكانيكي بحلزونات معدنية",
    "seals.gallery.label3": "ختم ميكانيكي بنابض موجي",
    "seals.gallery.label4": "ختم مزدوج للمفاعلات",
    "seals.gallery.cta": "عرض كتالوج Lineproof كاملاً",

    "seals.partner.title": "بشراكة مع Lineproof Engineering",
    "seals.partner.desc": "تأسست Lineproof Engineering عام 2002، وهي من الشركات الرائدة في تصنيع الأختام الميكانيكية وحلول الإحكام الدوارة بخبرة جماعية تتجاوز 30 عاماً. تجلب شراكتنا الحصرية تقنياتهم العالمية مباشرةً إلى المملكة — مع توفر محلي ودعم باللغة العربية وتسليم سريع داخل المملكة.",
    "seals.partner.cta": "الاستفسار عن الأختام"
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
  if (!form) return;
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

/* ── Tab switching ────────────────────────────────────────── */
function switchTab(type) {
  document.querySelectorAll('.inquiry-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));

  document.getElementById('tab-' + type).classList.add('active');
  document.getElementById('tab-' + type).setAttribute('aria-selected', 'true');
  document.getElementById('form-' + type).classList.add('active');
}

/* ── Show/hide product-specific fields ───────────────────── */
function toggleProductFields(val) {
  const sealVals = ['single-seal','dual-cartridge','metal-bellows','dry-running',
                    'reactor-agitator','split-seal','seal-support','seals-other'];
  const animVals = ['product-animation','process-animation','training-animation',
                    'marketing-animation','maintenance-animation','animation-other'];

  const sf = document.getElementById('seal-fields');
  const af = document.getElementById('animation-fields');

  sf.style.display = sealVals.includes(val) ? 'block' : 'none';
  af.style.display = animVals.includes(val) ? 'block' : 'none';
}

/* ── Form submission helper ──────────────────────────────── */
function handleForm(formId, btnId, successId, serviceId, templateId) {
  const form    = document.getElementById(formId);
  const btn     = document.getElementById(btnId);
  const success = document.getElementById(successId);
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic required validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(el => {
      el.style.borderColor = '';
      if (!el.value.trim()) {
        el.style.borderColor = '#EF4444';
        valid = false;
      }
    });
    if (!valid) return;

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = 'Sending…';

    emailjs.sendForm(serviceId, templateId, form)
      .then(() => {
        form.style.display = 'none';
        success.classList.add('visible');
      })
      .catch(err => {
        console.error('EmailJS error:', err);
        alert('Message failed to send. Please email us directly at yousef.es@efficientsolutionsksa.com');
        btn.disabled = false;
        btn.innerHTML = originalText;
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  handleForm('contact-form-business', 'submit-business', 'success-business',
    'service_13t62vi', 'template_xhjag9q');

handleForm('contact-form-product', 'submit-product', 'success-product',
    'service_13t62vi', 'template_gxl6y0j');
});


