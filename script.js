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
    'footer.connect': 'Connect',
    'footer.rights':  '© 2025 Efficient Solutions. All rights reserved.',
    'footer.privacy': 'Privacy Policy',

    /* Contact */
    'contact.tag': 'Get in Touch',
    'contact.email':    'Email Us',
    'contact.phone':    'Call Us',
    'contact.office':   'Our Location',
    'contact.email.val': 'Sales@efficientsolutionsksa.com',
    'contact.phone.val': '+996 (0)50 481 0549',
    'contact.office.val':'Alkhobar, Eastern Province, Kingdom of Saudi Arabia',

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
    'contact.tab.product.sub': 'Engineering animation & more',
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
'timeline.may.year':    'May 2026',
'timeline.may.title':   'Foundations Established',
'timeline.may.desc':    'The groundwork for Efficient Solutions was laid — defining the company\'s strategic direction, operational framework, and long-term goals through a rigorous planning and structuring process.',

'timeline.june.year':   'June 2026',
'timeline.june.title':  'First Partnerships Secured',
'timeline.june.desc':   'Efficient Solutions commenced active operations, formalizing agreements with international partners and beginning to guide the first clients through their entry into the Saudi market.',


'timeline.founded.year': 'April 2026',
'timeline.founded.title': 'Company Founded',
'timeline.founded.desc': 'Efficient Solutions established in Eastern Province with a founding team of Saudi and international experts.',

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
      "prod.animation.title": "Engineering Animation",
      "prod.animation.desc": "Advanced 3D engineering visualization and industrial simulation — bringing complex systems to life for training, presentations, and technical review.",
      "prod.anim.link": "Explore Product",
      "prod.anim.tag1": "3D Rendering",
      "prod.anim.tag2": "Simulation",

      "trust.t1": "2030 Aligned",
      "trust.t2": "Eastern Province",
      "trust.t3": "Certified Partners",
      "trust.t4": "Technical Support",

      /* ── Engineering Animation page ── */
      "anim.hero.tag":         "3D Visualization",
      "anim.hero.h1a":         "Engineering Animation",
      "anim.hero.h1b":         "& 3D Visualization",
      "anim.hero.desc":        "Transforming complex engineering concepts into clear, compelling 3D animations for training, sales, and technical communication — delivered by our in-house engineering animation team.",
      "anim.breadcrumb":       "Engineering Animation",

      "anim.video1.title":     "3D Industrial Animation Showreel 2025",
      "anim.video1.sub":       "Engineering Animation Services",
      "anim.video2.title":     "Industrial Animation Showreel",
      "anim.video2.sub":       "Technical & 3D Animation Portfolio",

      "anim.what.eyebrow":     "What We Deliver",
      "anim.what.h2":          "Six Ways Animation Elevates Your Business",
      "anim.what.p":           "Our engineering animation team consists of qualified mechanical engineers turned animators — meaning every visualization is technically accurate, not just visually impressive. Efficient Solutions delivers this expertise directly to Saudi Arabia's industrial sector.",

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
      "anim.showcase.p":       "A glimpse into the quality of 3D industrial animation we deliver for clients across Saudi Arabia and beyond.",

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
      "anim.process.p":        "A streamlined four-step process — fully managed by our in-house engineering animation team from brief to final delivery.",
      "anim.proc1.h4":         "Brief & Scope",
      "anim.proc1.p":          "We gather your CAD files, use-case objectives, and target audience to define the animation scope.",
      "anim.proc2.h4":         "3D Modelling",
      "anim.proc2.p":          "Our engineers build or refine the 3D model with engineering precision, ensuring complete technical accuracy.",
      "anim.proc3.h4":         "Animation & Review",
      "anim.proc3.p":          "Motion, lighting, and rendering are finalized. You review and approve at each milestone.",
      "anim.proc4.h4":         "Delivery & Support",
      "anim.proc4.p":          "Final files delivered in your required format — MP4, WebGL, or interactive viewer — with revisions included.",

      "anim.why.eyebrow":      "Why Choose Us",
      "anim.why.h2":           "Engineering Accuracy Meets Creative Excellence",
      "anim.why.p":            "Unlike generic animation studios, our team are qualified mechanical engineers — they understand tolerances, flow dynamics, and assembly logic. This means animations that are trusted by engineers, not just admired by marketing teams.",
      "anim.why1.h4":          "Engineering Expertise",
      "anim.why1.p":           "Animations built by engineers who understand complex systems — not just artists following briefs.",
      "anim.why2.h4":          "Tailored Solutions",
      "anim.why2.p":           "Every animation is customized to your industry, audience, and specific communication goal.",
      "anim.why3.h4":          "Global References",
      "anim.why3.p":           "Proven track record with industrial clients across multiple countries and sectors.",
      "anim.why.cta":          "Start Your Project →",

      "anim.studio.sub":       "Engineering Animation Studio",

      "anim.partner.cta":      "Request an Animation Quote",

    /* Products page — category accordions */
    "prod.cat.mechanical":     "Mechanical",
    "prod.cat.mechanical.sub": "Machinery & Fabrication",
    "prod.cat.electrical":     "Electrical",
    "prod.cat.electrical.sub": "Power & Automation",
    "prod.cat.Instrumentation":   "Control & Instrumentation",
    "prod.cat.instrumental.sub": "Measurement & Control",
    "prod.cat.coming":         "Products coming soon — check back shortly.",

    /* ── Shared product-page strings ── */
    'common.requestQuote':      'Request a Quote',
    'common.requestQuoteArrow': 'Request a Quote →',

    /* ── Services page (servcies.html) ── */
    'svcpage.eyebrow':        'Technical & Engineering Services',
    'svcpage.h1a':            'Power, Precision &',
    'svcpage.h1b':            'Performance',
    'svcpage.hero.desc':      'In-house engineering support plus specialist electrical services — power quality, safety, maintenance, and thermography — delivered for Saudi Arabia\'s industrial sector.',
    'svcpage.stat1':          'Service Lines',
    'svcpage.intro.eyebrow':  'Our Services',
    'svcpage.intro.h2':       'Technical Services for Industry',
    'svcpage.intro.desc':     'Efficient Solutions delivers in-house engineering support alongside specialist services from our technology partners, tailored to Saudi Arabia\'s industrial and power sectors.',
    'svcpage.featured.badge': 'Efficient Solutions',
    'svcpage.featured.partner':'In-House Engineering Team',
    'svcpage.featured.title': 'Engineering & Technical Consulting',
    'svcpage.featured.desc':  'Our own engineering support for Saudi Arabia\'s industrial sector — project consulting, technical advisory, and coordination across mechanical, electrical, and instrumentation disciplines. Get in touch to discuss your project.',
    'svcpage.featured.link':  'Discuss Your Project',
    'svcpage.featured.tag1':  'Consulting',
    'svcpage.featured.tag2':  'Project Support',
    'svcpage.elec.partner':   'Electrical Services Partner',
    'svcpage.link.enquire':   'Enquire',
    'svcpage.e1.badge': 'Power Quality',
    'svcpage.e1.title': 'Power Quality Study & Analysis',
    'svcpage.e1.desc':  'Detailed assessment of power quality issues to protect equipment, reduce downtime, and improve overall system reliability.',
    'svcpage.e1.tag':   'Analysis',
    'svcpage.e2.badge': 'Audits',
    'svcpage.e2.title': 'Electrical Safety & Energy Audits',
    'svcpage.e2.desc':  'Comprehensive audits identifying safety risks and energy efficiency opportunities across LV/MV electrical installations.',
    'svcpage.e2.tag':   'Safety',
    'svcpage.e3.badge': 'Retrofit',
    'svcpage.e3.title': 'LV/MV Switchgear Retrofitting & Refurbishment',
    'svcpage.e3.desc':  'Modernization and refurbishment of low and medium voltage switchgear systems to extend service life and improve safety.',
    'svcpage.e3.tag':   'Switchgear',
    'svcpage.e4.badge': 'AMC',
    'svcpage.e4.title': 'Annual Maintenance Contracts',
    'svcpage.e4.desc':  'Scheduled LV/MV switchgear maintenance delivered by technicians trained on Schneider, ABB, and Siemens systems.',
    'svcpage.e4.tag':   'Maintenance',
    'svcpage.e5.badge': 'Thermography',
    'svcpage.e5.title': 'Thermography Inspection',
    'svcpage.e5.desc':  'Infrared thermal imaging carried out by ITC-certified thermographers to detect faults before they cause failure.',
    'svcpage.e5.tag':   'ITC Certified',
    'svcpage.i1.badge':   'Automation',
    'svcpage.i1.partner': '3PH Tech Services',
    'svcpage.i1.title':   'PLC & SCADA Systems',
    'svcpage.i1.desc':    'Development & integration with Schneider, SIEMENS, GE-Fanuc, and Rockwell Automation platforms.',
    'svcpage.i1.tag':     'Automation',
    'svcpage.i2.badge':   'Monitoring',
    'svcpage.i2.partner': '3PH Tech Solutions',
    'svcpage.i2.title':   'DAVAS - Data Acquisition & Visualization',
    'svcpage.i2.desc':    'Energy management and condition monitoring for electrical and mechanical assets.',
    'svcpage.i2.tag':     'Monitoring',
    'svcpage.i3.badge':   'Certified',
    'svcpage.i3.partner': 'Schneider Electric',
    'svcpage.i3.title':   'Certified Service Partners',
    'svcpage.i3.desc':    'Authorized partner for Schneider Electric LV Switchgear Systems & Industrial Automation.',
    'svcpage.i3.tag':     'Certified',
    'svcpage.i4.badge':   'UL Certified',
    'svcpage.i4.partner': 'UL Certification',
    'svcpage.i4.title':   'SPIRE Smart Building Program',
    'svcpage.i4.desc':    'UL Certified advanced building automation and intelligent energy management solutions.',
    'svcpage.i4.tag':     'UL Certified',
    'svcpage.i5.badge':   'Training',
    'svcpage.i5.partner': 'CPD (UK) Certified',
    'svcpage.i5.title':   'Trainings & Workshops',
    'svcpage.i5.desc':    'CPD certified professional development on control systems and industrial automation.',
    'svcpage.i5.tag':     'CPD Certified',
    'svcpage.i6.badge':   'ISO 9001',
    'svcpage.i6.partner': 'Quality Certified',
    'svcpage.i6.title':   'ISO 9001:2015 Compliance',
    'svcpage.i6.desc':    'ISO certified quality management ensuring compliance and continuous improvement.',
    'svcpage.i6.tag':     'ISO Certified',

    /* ── Industrial Control Transformers page ── */
    'ict.breadcrumb':   'Industrial Control Transformers',
    'ict.hero.eyebrow': 'Industrial Power Solutions',
    'ict.hero.h1a':     'Industrial Control',
    'ict.hero.h1b':     'Transformers',
    'ict.hero.desc':    'Precision-engineered step-down transformers for industrial control circuits — single-phase, three-phase, and fully custom configurations supplied direct to Saudi Arabia.',
    'ict.hero.badge':   'CE & ISO 9001 Certified · Korea',
    'ict.apps.eyebrow': 'Applications',
    'ict.apps.h2':      'Where Control Transformers Are Used',
    'ict.apps.sub':     'From machine tool panels to outdoor substations — built for the full range of industrial control circuit demands.',
    'ict.app1.h3': 'Machine Tool Control Panels',
    'ict.app1.p':  'Powering control circuits in CNC machines, lathes, and milling equipment — providing safe, isolated low-voltage supply to PLC inputs and relay coils.',
    'ict.app2.h3': 'Industrial Automation Systems',
    'ict.app2.p':  'Supplying stable, isolated power to PLC racks, relay-based logic systems, and SCADA interface equipment across automated production lines.',
    'ict.app3.h3': 'Harsh Environment Installations',
    'ict.app3.p':  'Dual-cover sealed designs rated for high humidity, dust ingress, and heavy vibration — ideal for outdoor substations and processing plant environments.',
    'ict.app4.h3': 'MCC & Control Panel Assemblies',
    'ict.app4.p':  'Integrated into motor control centres and custom electrical panels — delivering the 24 V or 120 V control voltage that switchgear and protection relays demand.',
    'ict.app5.h3': 'Safety Circuit Isolation',
    'ict.app5.p':  'Galvanic isolation between high-voltage supply and operator-accessible control circuits — protecting personnel and sensitive instrumentation from fault currents.',
    'ict.app6.h3': 'Custom Panel Builds',
    'ict.app6.p':  'Available in any VA rating, primary/secondary voltage combination, and enclosure class — designed to spec for bespoke panel builders and system integrators.',
    'ict.range.eyebrow': 'Product Range',
    'ict.range.h2':      'Six Types for Every Application',
    'ict.range.sub':     'Six distinct control transformer configurations — each precision-wound for reliable industrial service with custom terminal blocks for safe wiring.',
    'ict.g1.tag': 'Single-Phase',
    'ict.g1.title': 'Single-Phase Control Transformer',
    'ict.g2.tag': 'Three-Phase',
    'ict.g2.title': 'Three-Phase Control Transformer',
    'ict.g3.tag': 'Dual-Cover',
    'ict.g3.title': 'Harsh Environment Sealed Type',
    'ict.g4.tag': 'Band-Type',
    'ict.g4.title': 'Band-Type Compact Transformer',
    'ict.g5.tag': 'Blade-Type',
    'ict.g5.title': 'Blade Transformer — Low Secondary Voltage',
    'ict.g6.tag': 'Industrial Case',
    'ict.g6.title': 'Case-Type Three-Phase Auto Transformer',
    'ict.why.badge.strong': 'Korean Manufacturer',
    'ict.why.badge.sub':    'Control Transformer Specialist',
    'ict.why.eyebrow': 'Why Choose Us',
    'ict.why.h2':      '40 Years of Precision Transformer Manufacturing',
    'ict.why.p':       'Our manufacturing partner has spent over four decades perfecting the design and manufacture of industrial control transformers — with CE certification and ISO 9001 quality management embedded in every unit we supply to Saudi Arabia\'s industrial sector.',
    'ict.why1.h4': 'CE & ISO 9001 Certified',
    'ict.why1.p':  'Every transformer meets European CE standards and is manufactured under a certified ISO 9001 quality management system.',
    'ict.why2.h4': 'Fully Custom Configurations',
    'ict.why2.p':  'Any voltage ratio, VA rating, phase count, and enclosure class — designed to your exact specification, including low-volume orders.',
    'ict.why3.h4': 'Direct Supply to Saudi Arabia',
    'ict.why3.p':  'Efficient Solutions manages all import logistics, documentation, and delivery — a single point of contact from factory to your panel room.',
    'ict.partner.name': 'Control Transformers',
    'ict.partner.h2':   'Ready to Specify Your Transformer?',
    'ict.partner.p':    'Share your voltage, VA rating, and application — our team will configure the right unit and deliver it to your site in Saudi Arabia.',

    /* ── Marine Spare Parts page ── */
    'marine.breadcrumb':  'Marine Spare Parts',
    'marine.hero.eyebrow':'Marine & Offshore Supply',
    'marine.hero.h1a':    'Marine',
    'marine.hero.h1b':    'Spare Parts',
    'marine.hero.desc':   'Genuine and OEM-equivalent spare parts for vessels and offshore installations — engines, turbochargers, pumps, purifiers, compressors, valves, deck machinery, safety equipment and more, delivered to Saudi Arabia\'s ports and facilities.',
    'marine.badge1': 'OEM-Equivalent Quality',
    'marine.badge2': 'Wide Product Range',
    'marine.badge3': 'Fast-Track Availability',
    'marine.stat1': 'Part Categories',
    'marine.stat2': 'SKUs Available',
    'marine.stat3': 'Grade Quality',
    'marine.stat4': 'Emergency Support',
    'marine.cat.eyebrow': 'Product Categories',
    'marine.cat.h2':      'Everything Your Vessel Needs',
    'marine.cat.sub':     'From engineroom to bridge — a comprehensive range of spare parts covering every critical system aboard commercial vessels and offshore platforms.',
    'marine.catitem1':  'Main & Auxiliary Engines',
    'marine.catitem2':  'Turbochargers',
    'marine.catitem3':  'Pumps',
    'marine.catitem4':  'Purifiers & Separators',
    'marine.catitem5':  'Compressors',
    'marine.catitem6':  'Valves',
    'marine.catitem7':  'Instrumentation',
    'marine.catitem8':  'Electrical',
    'marine.catitem9':  'Deck Machinery',
    'marine.catitem10': 'Safety Items',
    'marine.gallery.eyebrow': 'Product Range',
    'marine.gallery.h2':      'Key Parts We Supply',
    'marine.gallery.sub':     'Sourced from leading manufacturers — pistons and liners, turbocharger kits, centrifugal pumps, fuel/lube purifiers, air compressors, deck winches and certified safety equipment.',
    'marine.g1.tag':   'Engine Parts',
    'marine.g1.title': 'Main & Auxiliary Engines',
    'marine.g1.desc':  'Pistons, liners, bearings, cylinder heads and turbocharger assemblies from MAN, Wärtsilä, Caterpillar, YANMAR and Daihatsu.',
    'marine.g2.tag':   'Deck & Navigation',
    'marine.g2.title': 'Deck Machinery & Safety Gear',
    'marine.g2.desc':  'Winches, windlasses, cranes, navigation equipment and certified life-saving safety items for all vessel types.',
    'marine.g3.tag':   'Pump & Valve',
    'marine.g3.title': 'Pumps, Valves & Purifiers',
    'marine.g3.desc':  'Centrifugal, gear and screw pump assemblies; gate, globe and butterfly valves; fuel & lube oil purifier service parts.',
    'marine.g4.tag':   'Electrical & Automation',
    'marine.g4.title': 'Electrical, Instrumentation & Control',
    'marine.g4.desc':  'Switchboards, motors, cables, compressors, pressure gauges, flow meters and automation control systems from ABB and Mitsubishi.',
    'marine.why.badge.strong': 'Marine Specialists',
    'marine.why.badge.sub':    'Serving Saudi Arabia\'s fleet',
    'marine.why.eyebrow': 'Why Choose Us',
    'marine.why.h2':      'Your Trusted Marine Parts Partner',
    'marine.why.p':       'We combine deep technical knowledge of marine systems with an established supplier network — giving you fast access to the right part at the right price, with none of the cross-border complexity.',
    'marine.why1.h4': 'Cross-Maker Coverage',
    'marine.why1.p':  'Parts for MAN, Wartsila, Caterpillar, Mitsubishi, Alfa Laval, and all major marine equipment makers.',
    'marine.why2.h4': 'Emergency Expediting',
    'marine.why2.p':  'AOG-style rapid sourcing for critical breakdowns — minimising vessel off-hire time and financial exposure.',
    'marine.why3.h4': 'Full Import Handling',
    'marine.why3.p':  'Customs clearance, SASO documentation, and delivery to your berth or warehouse — one point of contact, start to finish.',
    'marine.cta.h2':  'Need a Part for Your Vessel?',
    'marine.cta.p':   'Share your parts list, maker name, or part number and our team will source, quote and deliver — fast.',
    'marine.cta.btn': 'Submit Your Parts List',

    /* ── Mechanical Seals page ── */
    'seals.breadcrumb':  'Mechanical Seals & Agitators Seal Support Systems',
    'seals.hero.eyebrow':'Rotating Equipment Sealing',
    'seals.hero.h1a':    'Mechanical Seals',
    'seals.hero.h1b':    '& Seal Support Systems',
    'seals.hero.desc':   'Single, dual and cartridge mechanical seals for industrial pumps and agitators, backed by API 682 seal support systems — engineered for reliability in refineries, petrochemical and process plants across Saudi Arabia.',
    'seals.badge1': 'API 682 Compliant Systems',
    'seals.badge2': 'Cartridge & Dual Seal Designs',
    'seals.badge3': 'Engineered for Pumps & Agitators',
    'seals.stat1': 'Sealing Specialists',
    'seals.stat2': 'API 682 Plan Types',
    'seals.stat3': 'Industries Served',
    'seals.stat4': 'Sec. VIII Div. 2 Fabrication',
    'seals.ind.eyebrow': 'Industries We Serve',
    'seals.ind.h2':      'Sealing for the Toughest Applications',
    'seals.ind.sub':     'Mechanical seals and support systems selected around your process media, shaft speed, and pressure class — not a one-size-fits-all catalogue part.',
    'seals.induitem1': 'Oil & Gas',
    'seals.induitem2': 'Refineries',
    'seals.induitem3': 'Petrochemical Plants',
    'seals.induitem4': 'Power Plants',
    'seals.induitem5': 'Pharmaceutical',
    'seals.induitem6': 'Chemical Processing',
    'seals.induitem7': 'Fertilizer Plants',
    'seals.induitem8': 'Pulp & Paper',
    'seals.induitem9': 'Offshore Drilling',
    'seals.range.eyebrow': 'Mechanical Seal Range',
    'seals.range.h2':      'Seals Built Around Your Pump',
    'seals.range.sub':     'Cartridge-design mechanical seals for pumps and agitators — from single seals on standard bore housings to heavy-duty dual seals for API-class equipment.',
    'seals.p1.tag':   'Single Seal',
    'seals.p1.title': 'Single Cartridge Seal',
    'seals.p1.f1':    'Tolerates pressure reversal, easy to install',
    'seals.p1.f2':    'Fits standard and big-bore pump housings',
    'seals.p2.tag':   'Dual Seal',
    'seals.p2.title': 'Dual Cartridge Seal',
    'seals.p2.f1':    'Runs in tandem or back-to-back configuration',
    'seals.p2.f2':    'Fits ANSI, DIN & ISO standard bore pumps',
    'seals.p3.tag':   'API / Big Bore',
    'seals.p3.title': 'Heavy-Duty Big-Bore Seal',
    'seals.p3.f1':    'Non-clogging, spring-protected design',
    'seals.p3.f2':    'Fits ANSI big-bore & API pumps',
    'seals.sss.eyebrow': 'Seal Support Systems',
    'seals.sss.h2':      'Keeping Every Seal Cool, Lubricated & Balanced',
    'seals.sss.sub':     'API 682-compliant support systems that circulate, cool, and monitor barrier and buffer fluid — engineered around the seal arrangement they protect.',
    'seals.s1.tag':   'Plans 52 / 53',
    'seals.s1.title': 'Thermosyphon Systems',
    'seals.s1.f1':    'Lubricates & dissipates heat for tandem/B2B seals',
    'seals.s1.f2':    'Optional level, pressure & temp instrumentation',
    'seals.s2.tag':   'API 682',
    'seals.s2.title': 'API 682 Flush Plans',
    'seals.s2.f1':    'Plans 21–76: cooling, flush, quench & leak detection',
    'seals.s2.f2':    'Fabricated to ASME Sec. VIII, Div. 2',
    'seals.s3.tag':   'Modular Panel',
    'seals.s3.title': 'Pressure Balancing & Lubrication Systems',
    'seals.s3.f1':    'Automatic pressure balancing for agitator seals',
    'seals.s3.f2':    'Forced lubrication rated up to 120 bar',
    'seals.why.badge.strong': 'Application-Engineered Sealing',
    'seals.why.badge.sub':    '250+ specialists in rotating equipment sealing',
    'seals.why.eyebrow': 'Why Choose Us',
    'seals.why.h2':      'Sealing Solutions, Not Catalogue Parts',
    'seals.why.p':       'We work with a manufacturing partner with over 250 specialists dedicated to mechanical seals and seal support systems, giving Saudi Arabia\'s process industries direct access to application-engineered sealing without the complexity of sourcing overseas.',
    'seals.why1.h4': 'Application-Engineered Selection',
    'seals.why1.p':  'Seal type and materials matched to shaft size, process media, temperature and pressure class — not a generic catalogue fit.',
    'seals.why2.h4': 'Full API 682 Support System Design',
    'seals.why2.p':  'Flush, quench and barrier-fluid panels engineered and fabricated to ASME Sec. VIII, Div. 2, sized around your seal arrangement.',
    'seals.why3.h4': 'Direct Supply to Saudi Arabia',
    'seals.why3.p':  'Custom seal and panel configurations for OEM and MRO orders, with import logistics managed start to finish.',
    'seals.cta.h2': 'Need a Sealing Solution for Your Rotating Equipment?',
    'seals.cta.p':  'Share your pump or agitator specification, process media, and operating conditions — our team will recommend the right seal and support system and deliver to your site in Saudi Arabia.',

    /* ── Steel Forging page ── */
    'forging.breadcrumb':  'Steel Forging',
    'forging.hero.eyebrow':'Precision Forging Solutions',
    'forging.hero.h1a':    'Forged Steel',
    'forging.hero.h1b':    'Components',
    'forging.hero.desc':   'Custom forged steel parts for ship engines, industrial machinery and power generation equipment — engineered to strict dimensional tolerances and inspected at every stage, supplied direct to Saudi Arabia.',
    'forging.badge1': '28+ Years Forging Experience',
    'forging.badge2': 'UT & MT Certified Inspection',
    'forging.badge3': 'Engineered to Your Drawing',
    'forging.stat1': 'Years Manufacturing',
    'forging.stat2': 'Stage QC Process',
    'forging.stat3': '100% Inspected',
    'forging.stat4': 'Core Industries Served',
    'forging.cat.eyebrow': 'Product Categories',
    'forging.cat.h2':      'Forged for Demanding Applications',
    'forging.cat.sub':     'From engine room to power plant — precision-forged steel components engineered for the industries that can\'t afford failure.',
    'forging.catitem1': 'Ship Engine Parts',
    'forging.catitem2': 'Industrial Machinery Parts',
    'forging.catitem3': 'Power Generation Facilities',
    'forging.catitem4': 'Wind Power Equipment Parts',
    'forging.catitem5': 'Custom Forgings',
    'forging.gallery.eyebrow': 'Product Range',
    'forging.gallery.h2':      'Key Forgings We Supply',
    'forging.gallery.sub':     'Open-die and closed-die forgings machined to finished or semi-finished condition, built around the operating loads and duty cycles of each application.',
    'forging.g1.tag':   'Ship Engine Parts',
    'forging.g1.title': 'Shafts & Propulsion Forgings',
    'forging.g1.desc':  'Propeller shafts, drive shafts, flanged shafts and rudder stocks forged to tight concentricity and straightness tolerances for main and auxiliary ship engines.',
    'forging.g2.tag':   'Industrial Machinery',
    'forging.g2.title': 'Valve & Pressure Component Forgings',
    'forging.g2.desc':  'Y-type valves, bonnets, gate valve bodies and pipe forgings machined for high-pressure industrial and process piping systems.',
    'forging.g3.tag':   'Power Transmission',
    'forging.g3.title': 'Gearing & Drivetrain Forgings',
    'forging.g3.desc':  'Gear wheels, connecting rod blanks and shaft forgings for heavy-duty gearboxes, drivetrains and rotating machinery.',
    'forging.g4.tag':   'Power Generation',
    'forging.g4.title': 'Power & Wind Turbine Forgings',
    'forging.g4.desc':  'Custom structural and rotating forgings engineered for power generation facilities and wind turbine drivetrain components.',
    'forging.proc.eyebrow': 'How It\'s Made',
    'forging.proc.h2':      'From Raw Billet to Inspected Forging',
    'forging.proc.sub':     'An eight-stage, quality-controlled workflow — every forging is tracked from raw material through final non-destructive testing before release.',
    'forging.proc1.h4': 'Raw Material',
    'forging.proc1.p':  'Certified steel billet selected to the specified grade.',
    'forging.proc2.h4': 'Cutting',
    'forging.proc2.p':  'Billet sized and cut to the required forging weight.',
    'forging.proc3.h4': 'Heating',
    'forging.proc3.p':  'Controlled furnace heating to optimal forging temperature.',
    'forging.proc4.h4': 'Forging',
    'forging.proc4.p':  'Press-forged to shape, refining grain flow and strength.',
    'forging.proc5.h4': 'Normalizing',
    'forging.proc5.p':  'Heat treatment to relieve stress and stabilize the grain structure.',
    'forging.proc6.h4': 'Machining',
    'forging.proc6.p':  'Rough or finish machining to drawing dimensions.',
    'forging.proc7.h4': 'QT Heat Treatment',
    'forging.proc7.p':  'Quenching and tempering to reach target mechanical properties.',
    'forging.proc8.h4': 'Inspection (UT, MT)',
    'forging.proc8.p':  'Ultrasonic and magnetic particle testing before release.',
    'forging.lead.strong': 'Typical lead times',
    'forging.lead.rest':   'vary by delivery condition: forged & normalized from as little as 7–10 days, rough-machined from 10–15 days, and rough-machined with quenching & tempering from 15–20 days. Special processes are quoted on request.',
    'forging.why.badge.strong': 'Korean Forging Facility',
    'forging.why.badge.sub':    '28+ years of forging specialization',
    'forging.why.eyebrow': 'Why Choose Us',
    'forging.why.h2':      'Precision Forging, Fully Inspected',
    'forging.why.p':       'We work with an established Korean forging facility with over 28 years of dedicated experience, giving Saudi Arabia\'s marine, industrial and power sectors direct access to certified forged components without the complexity of sourcing overseas.',
    'forging.why1.h4': '28+ Years of Forging Expertise',
    'forging.why1.p':  'Decades of dedicated forging experience across marine, industrial and power generation sectors.',
    'forging.why2.h4': 'Full In-House Inspection',
    'forging.why2.p':  'Ultrasonic (UT) and magnetic particle (MT) testing on every batch, backed by a structured final assessment before shipment.',
    'forging.why3.h4': 'Direct Supply to Saudi Arabia',
    'forging.why3.p':  'Custom material grades and tolerances for OEM and MRO orders, with import logistics managed start to finish.',
    'forging.cta.h2': 'Need a Custom Forged Component?',
    'forging.cta.p':  'Share your drawing, material grade, and application — our team will manage manufacturing, inspection, and delivery to your site in Saudi Arabia.',

    /* ── Steel, Pipe & Structural Materials page ── */
    'steeltrade.breadcrumb':  'Steel, Pipe & Structural Materials',
    'steeltrade.hero.eyebrow':'Industrial Steel Trading',
    'steeltrade.hero.h1a':    'Steel, Pipe &',
    'steeltrade.hero.h1b':    'Structural Materials',
    'steeltrade.hero.desc':   'Pipe, fittings and flanges, bolts, nuts and gaskets, structural beams, coils and plate, channel and angle steel, and sheet pile, bar and wire rod — sourced to international standards and delivered to Saudi Arabia\'s oil & gas, construction and shipbuilding sectors.',
    'steeltrade.badge1': '13+ Years Trading Experience',
    'steeltrade.badge2': 'Mill-Certified to ASTM, EN & JIS',
    'steeltrade.badge3': 'Sourced Across Korea, China & Japan',
    'steeltrade.stat1': 'Years Trading Experience',
    'steeltrade.stat2': 'Material Categories',
    'steeltrade.stat3': 'Standards & Grades',
    'steeltrade.stat4': 'Sourcing Countries',
    'steeltrade.cat.eyebrow': 'Material Categories',
    'steeltrade.cat.h2':      'Five Categories, One Supply Chain',
    'steeltrade.cat.sub':     'From loose piping components to full structural sections — a single point of contact for your steel and pipe material take-off.',
    'steeltrade.catitem1': 'Pipe, Fitting & Flanges',
    'steeltrade.catitem2': 'Bolt, Nut & Gasket',
    'steeltrade.catitem3': 'Steel Beam, Coil & Plate',
    'steeltrade.catitem4': 'Channel & Angle Steel',
    'steeltrade.catitem5': 'Sheet Pile, Bar & Wire Rod',
    'steeltrade.range.eyebrow': 'Product Range',
    'steeltrade.range.h2':      'Key Materials We Supply',
    'steeltrade.range.sub':     'A representative slice of the range — every item sourced against your specified standard, grade and mill certification.',
    'steeltrade.p1.tag':   'Piping',
    'steeltrade.p1.title': 'Line Pipe & Casing/Tubing',
    'steeltrade.p1.f1':    'ERW, EFW, SAW & seamless pipe',
    'steeltrade.p1.f2':    'Carbon, stainless & duplex grades',
    'steeltrade.p2.tag':   'Fittings',
    'steeltrade.p2.title': 'Forged Fittings & Elbows',
    'steeltrade.p2.f1':    'Elbows, tees, reducers & weldolets',
    'steeltrade.p2.f2':    'Carbon, alloy & stainless steel',
    'steeltrade.p3.tag':   'Flanges',
    'steeltrade.p3.title': 'Steel Flanges',
    'steeltrade.p3.f1':    'Welding neck, slip-on, blind & lap joint',
    'steeltrade.p3.f2':    'ASTM A105 & A182 grades',
    'steeltrade.p4.tag':   'Fasteners',
    'steeltrade.p4.title': 'Bolts, Nuts & Gaskets',
    'steeltrade.p4.f1':    'Stud bolts & heavy hex nuts',
    'steeltrade.p4.f2':    'Metallic & non-metallic gaskets',
    'steeltrade.p5.tag':   'Structural Steel',
    'steeltrade.p5.title': 'Beams, Coils & Plate',
    'steeltrade.p5.f1':    'BS, ASTM & JIS H and I-beams',
    'steeltrade.p5.f2':    'Hot-rolled coil & plate to EN 10025',
    'steeltrade.p6.tag':   'Sections & Piling',
    'steeltrade.p6.title': 'Channel, Angle & Sheet Pile',
    'steeltrade.p6.f1':    'U-channel & equal/unequal angle',
    'steeltrade.p6.f2':    'Hot-rolled sheet pile, bar & wire rod',
    'steeltrade.why.badge.strong': 'Mill-Direct Sourcing',
    'steeltrade.why.badge.sub':    '13+ years of steel & pipe trading experience',
    'steeltrade.why.eyebrow': 'Why Choose Us',
    'steeltrade.why.h2':      'One Take-Off, One Supplier',
    'steeltrade.why.p':       'We work with an established international trading partner with over 13 years sourcing steel, pipe and structural materials across East Asia, giving Saudi Arabia\'s project teams a single point of contact instead of a dozen individual mill relationships.',
    'steeltrade.why1.h4': 'Mill-Certified Materials',
    'steeltrade.why1.p':  'Full standards traceability — ASTM, ASME, EN, JIS and DIN — with mill test certificates on every shipment.',
    'steeltrade.why2.h4': 'East Asian Mill Network',
    'steeltrade.why2.p':  'Direct sourcing access across Korea, China and Japan for competitive pricing and reliable lead times on large-tonnage orders.',
    'steeltrade.why3.h4': 'Direct Supply to Saudi Arabia',
    'steeltrade.why3.p':  'Import logistics, documentation and delivery managed start to finish, from mill to your project site.',
    'steeltrade.cta.h2': 'Need Steel, Pipe or Structural Materials?',
    'steeltrade.cta.p':  'Share your material take-off, standard and required grade — our team will source, quote and deliver to your site in Saudi Arabia.',

    /* ── Bug fix: missing EN key (index.html used it, only AR existed) ── */
    'why.bigcard.h3': 'Supporting Future Industry Leaders Worldwide',

    /* ── products.html — product cards ── */
    'pcard.marine.badge': 'Marine Supply',
    'pcard.marine.title': 'Marine Spare Parts',
    'pcard.marine.desc':  'Reliable sourcing of marine spare parts including main and auxiliary engine components, turbochargers, pumps, purifiers, compressors, valves, instrumentation, electrical and deck machinery, and safety items.',
    'pcard.marine.tag1':  'Engine Parts',
    'pcard.marine.tag2':  'Deck & Safety',

    'pcard.forging.badge': 'Forging',
    'pcard.forging.title': 'Precision Steel Forging',
    'pcard.forging.desc':  'Custom forged steel components for ship engine parts, industrial machinery, and power generation equipment, produced to strict quality and inspection standards.',
    'pcard.forging.tag1':  'Ship Engine Parts',
    'pcard.forging.tag2':  'Industrial Machinery',

    'pcard.seals.badge': 'Mechanical Seals',
    'pcard.seals.title': 'Mechanical Seals for Pumps & Agitators & Seal Support Systems',
    'pcard.seals.desc':  'Complete sealing solutions for rotating equipment — single, dual, and metal bellows mechanical seals for industrial pumps and agitators, paired with API 682 seal support systems including flush plans, barrier fluid panels, and monitoring instrumentation.',
    'pcard.seals.tag1':  'API 682',
    'pcard.seals.tag2':  'Pumps & Agitators',
    'pcard.seals.tag3':  'Seal Support',

    'pcard.steeltrade.badge': 'Steel Trading',
    'pcard.steeltrade.title': 'Steel, Pipe & Structural Trading Materials',
    'pcard.steeltrade.desc':  'Pipe, fittings and flanges, bolts, nuts and gaskets, structural beams, coils and plate, channel and angle steel, and sheet pile, bar and wire rod — sourced to ASTM, ASME, EN, JIS and DIN standards.',
    'pcard.steeltrade.tag1':  'Piping & Flanges',
    'pcard.steeltrade.tag2':  'Structural Steel',

    'pcard.ict.badge': 'Power Solutions',
    'pcard.ict.title': 'Industrial Control Transformers',
    'pcard.ict.desc':  'Customized control transformers and power solutions engineered for industrial applications, built to CE and ISO 9001 standards with support for low-volume, custom-spec orders.',
    'pcard.ict.tag1':  'Control Transformers',
    'pcard.ict.tag2':  'Custom Power'
  },

  ar: {
    /* Navigation */
    'nav.home':       'الرئيسية',
    'nav.about':      'عن الشركة',
    'nav.services':   'الخدمات',
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
    'why.bigcard.h3': 'دعم قادة الصناعة في المستقبل حول العالم',
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
    'footer.connect': 'تواصل',
    'footer.rights':  '© 2025 إفيشنت سوليوشنز. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',

    /* Contact */
    'contact.tag': 'تواصل معنا',
    'contact.email':    'راسلنا',
    'contact.phone':    'اتصل بنا',
    'contact.office':   'موقعنا',
    'contact.email.val': 'Sales@efficientsolutionsksa.com',
    'contact.phone.val': '+996 (0)50 481 0549',
    'contact.office.val':'الخبر، المنطقة الشرقية، المملكة العربية السعودية',

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
    'contact.tab.product.sub': 'الرسوم الهندسية والمزيد',
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
 
'timeline.may.year':    'مايو 2026',
    'timeline.may.title':   'وضع الأسس',
    'timeline.may.desc':    'انطلق العمل على تأسيس إفيشنت سوليوشنز من خلال وضع التوجه الاستراتيجي والإطار التشغيلي وتحديد الأهداف بعيدة المدى، في مرحلة تخطيط وهيكلة دقيقة.',
 
    'timeline.june.year':   'يونيو 2026',
    'timeline.june.title':  'إبرام أولى الشراكات',
    'timeline.june.desc':   'انطلقت إفيشنت سوليوشنز في عملياتها الفعلية، وأبرمت اتفاقيات رسمية مع شركاء دوليين، وبدأت مرافقة أولى الشركات في رحلتها للدخول إلى السوق السعودي.',
 

'timeline.founded.year': 'أبريل 2026',
'timeline.founded.title': 'تأسيس الشركة',
'timeline.founded.desc': 'تأسست إفيشنت سوليوشنز في المنطقة الشرقية مع فريق مؤسس من خبراء سعوديين ودوليين.',

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
        "prod.animation.title": "الرسوم الهندسية",
        "prod.animation.desc": "تصور هندسي ثلاثي الأبعاد ومحاكاة صناعية — لتبسيط الأنظمة المعقدة للتدريب والعرض والمراجعة الفنية.",
        "prod.anim.link": "استعرض المنتج",
        "prod.anim.tag1": "تصوير ثلاثي الأبعاد",
        "prod.anim.tag2": "محاكاة",

        "trust.t1": "متوافق مع رؤية 2030",
        "trust.t2": "المنطقة الشرقية",
        "trust.t3": "شركاء معتمدون",
        "trust.t4": "دعم فني 24/7",

    /* ── صفحة الرسوم الهندسية التحريكية ── */
    "anim.hero.tag":         "تصور ثلاثي الأبعاد",
    "anim.hero.h1a":         "الرسوم الهندسية التحريكية",
    "anim.hero.h1b":         "والتصور ثلاثي الأبعاد",
    "anim.hero.desc":        "تحويل المفاهيم الهندسية المعقدة إلى رسوم تحريكية ثلاثية الأبعاد واضحة ومؤثرة للتدريب والمبيعات والتواصل التقني — مُقدَّمة من فريق الرسوم الهندسية الداخلي لدينا.",
    "anim.breadcrumb":       "الرسوم الهندسية التحريكية",

    "anim.video1.title":     "شريط عرض الرسوم الصناعية ثلاثية الأبعاد 2025",
    "anim.video1.sub":       "خدمات الرسوم الهندسية التحريكية",
    "anim.video2.title":     "شريط عرض الرسوم الصناعية التحريكية",
    "anim.video2.sub":       "محفظة الرسوم التقنية ثلاثية الأبعاد",

    "anim.what.eyebrow":     "ما نقدمه",
    "anim.what.h2":          "ست طرق تُعزِّز الرسوم التحريكية أعمالك",
    "anim.what.p":           "يتألف فريق الرسوم الهندسية لدينا من مهندسين ميكانيكيين تحوَّلوا إلى مصممي رسوم تحريكية — مما يعني أن كل تصور تقني دقيق وصحيح، لا مجرد جذاب بصرياً. تُقدِّم إفيشنت سوليوشنز هذه الخبرة مباشرةً إلى القطاع الصناعي في المملكة العربية السعودية.",

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
    "anim.showcase.p":       "لمحة من جودة الرسوم التحريكية الصناعية ثلاثية الأبعاد التي نقدمها لعملاء في المملكة العربية السعودية وما وراءها.",

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
    "anim.process.p":        "عملية مبسَّطة من أربع خطوات — تُديرها بالكامل فريق الرسوم الهندسية الداخلي لدينا من الإحاطة إلى التسليم النهائي.",
    "anim.proc1.h4":         "الإحاطة والنطاق",
    "anim.proc1.p":          "نجمع ملفات CAD وأهداف الاستخدام والجمهور المستهدف لتحديد نطاق الرسوم التحريكية.",
    "anim.proc2.h4":         "النمذجة ثلاثية الأبعاد",
    "anim.proc2.p":          "يبني مهندسونا النموذج ثلاثي الأبعاد أو يُحسِّنونه بدقة هندسية لضمان الصحة التقنية الكاملة.",
    "anim.proc3.h4":         "التحريك والمراجعة",
    "anim.proc3.p":          "تُنجَز الحركة والإضاءة والتصيير النهائي. تراجع وتوافق على كل مرحلة.",
    "anim.proc4.h4":         "التسليم والدعم",
    "anim.proc4.p":          "تُسلَّم الملفات النهائية بالتنسيق المطلوب — MP4 أو WebGL أو عارض تفاعلي — مع تعديلات مشمولة.",

    "anim.why.eyebrow":      "لماذا تختارنا",
    "anim.why.h2":           "دقة هندسية وتميُّز إبداعي",
    "anim.why.p":            "خلافاً لاستوديوهات الرسوم العادية، فريقنا من مهندسين ميكانيكيين مؤهَّلين — يفهمون الفجوات والديناميكيات والمنطق التجميعي. ما يعني رسوماً تحريكية يثق بها المهندسون، لا تُعجب فرق التسويق فحسب.",
    "anim.why1.h4":          "خبرة هندسية",
    "anim.why1.p":           "رسوم تحريكية يبنيها مهندسون يفهمون الأنظمة المعقدة — لا مجرد فنانين ينفِّذون مطلوبات.",
    "anim.why2.h4":          "حلول مخصصة",
    "anim.why2.p":           "كل رسوم تحريكية مُصمَّمة خصيصاً لقطاعك وجمهورك وهدفك الاتصالي المحدد.",
    "anim.why3.h4":          "مراجع عالمية",
    "anim.why3.p":           "سجل حافل مع عملاء صناعيين عبر دول وقطاعات متعددة.",
    "anim.why.cta":          "ابدأ مشروعك ←",

    "anim.studio.sub":       "استوديو الرسوم الهندسية",

    "anim.partner.cta":      "طلب عرض سعر للرسوم التحريكية",

    /* Products page — category accordions */
    "prod.cat.mechanical":     "ميكانيكا",
    "prod.cat.mechanical.sub": "الآلات والتصنيع",
    "prod.cat.electrical":     "كهرباء",
    "prod.cat.electrical.sub": "الطاقة والأتمتة",
    "prod.cat.Instrumentation":   "أجهزة وقياس",
    "prod.cat.instrumental.sub": "القياس والتحكم",
    "prod.cat.coming":         "منتجات قادمة قريباً.",

    /* ── Shared product-page strings ── */
    'common.requestQuote':      'اطلب عرض سعر',
    'common.requestQuoteArrow': 'اطلب عرض سعر ←',

    /* ── Services page (servcies.html) ── */
    'svcpage.eyebrow':        'خدمات هندسية وفنية',
    'svcpage.h1a':            'القوة، الدقة و',
    'svcpage.h1b':            'الأداء',
    'svcpage.hero.desc':      'دعم هندسي داخلي إلى جانب خدمات كهربائية متخصصة — جودة الطاقة، السلامة، الصيانة، والتصوير الحراري — مقدَّمة للقطاع الصناعي في المملكة العربية السعودية.',
    'svcpage.stat1':          'خطوط الخدمة',
    'svcpage.intro.eyebrow':  'خدماتنا',
    'svcpage.intro.h2':       'خدمات فنية للصناعة',
    'svcpage.intro.desc':     'تقدّم Efficient Solutions دعمًا هندسيًا داخليًا إلى جانب خدمات متخصصة من شركائنا التقنيين، مصمَّمة خصيصًا للقطاعين الصناعي وقطاع الطاقة في المملكة العربية السعودية.',
    'svcpage.featured.badge': 'Efficient Solutions',
    'svcpage.featured.partner':'فريق الهندسة الداخلي',
    'svcpage.featured.title': 'الاستشارات الهندسية والفنية',
    'svcpage.featured.desc':  'دعمنا الهندسي الخاص للقطاع الصناعي في المملكة العربية السعودية — استشارات المشاريع، والمشورة الفنية، والتنسيق بين التخصصات الميكانيكية والكهربائية وتخصصات القياس والتحكم. تواصل معنا لمناقشة مشروعك.',
    'svcpage.featured.link':  'ناقش مشروعك',
    'svcpage.featured.tag1':  'استشارات',
    'svcpage.featured.tag2':  'دعم المشاريع',
    'svcpage.elec.partner':   'شريك الخدمات الكهربائية',
    'svcpage.link.enquire':   'استفسر',
    'svcpage.e1.badge': 'جودة الطاقة',
    'svcpage.e1.title': 'دراسة وتحليل جودة الطاقة',
    'svcpage.e1.desc':  'تقييم تفصيلي لمشكلات جودة الطاقة لحماية المعدات، وتقليل التوقف عن العمل، وتحسين موثوقية النظام بشكل عام.',
    'svcpage.e1.tag':   'تحليل',
    'svcpage.e2.badge': 'التدقيق',
    'svcpage.e2.title': 'تدقيق السلامة الكهربائية والطاقة',
    'svcpage.e2.desc':  'عمليات تدقيق شاملة لتحديد مخاطر السلامة وفرص كفاءة الطاقة عبر المنشآت الكهربائية منخفضة ومتوسطة الجهد.',
    'svcpage.e2.tag':   'السلامة',
    'svcpage.e3.badge': 'التجديد',
    'svcpage.e3.title': 'تجديد وإصلاح لوحات التوزيع منخفضة ومتوسطة الجهد',
    'svcpage.e3.desc':  'تحديث وإصلاح أنظمة لوحات التوزيع منخفضة ومتوسطة الجهد لإطالة عمرها التشغيلي وتحسين السلامة.',
    'svcpage.e3.tag':   'لوحات التوزيع',
    'svcpage.e4.badge': 'عقد صيانة',
    'svcpage.e4.title': 'عقود الصيانة السنوية',
    'svcpage.e4.desc':  'صيانة مجدولة للوحات التوزيع منخفضة ومتوسطة الجهد ينفذها فنيون مدرَّبون على أنظمة Schneider وABB وSiemens.',
    'svcpage.e4.tag':   'الصيانة',
    'svcpage.e5.badge': 'التصوير الحراري',
    'svcpage.e5.title': 'فحص التصوير الحراري',
    'svcpage.e5.desc':  'تصوير حراري بالأشعة تحت الحمراء ينفذه فنيون معتمدون من ITC للكشف عن الأعطال قبل وقوعها.',
    'svcpage.e5.tag':   'معتمد ITC',
    'svcpage.i1.badge':   'الأتمتة',
    'svcpage.i1.partner': '3PH Tech Services',
    'svcpage.i1.title':   'أنظمة PLC وSCADA',
    'svcpage.i1.desc':    'تطوير وتكامل مع منصات Schneider وSIEMENS وGE-Fanuc وRockwell Automation.',
    'svcpage.i1.tag':     'الأتمتة',
    'svcpage.i2.badge':   'المراقبة',
    'svcpage.i2.partner': '3PH Tech Solutions',
    'svcpage.i2.title':   'DAVAS - جمع البيانات وتصويرها',
    'svcpage.i2.desc':    'إدارة الطاقة ومراقبة حالة الأصول الكهربائية والميكانيكية.',
    'svcpage.i2.tag':     'المراقبة',
    'svcpage.i3.badge':   'معتمد',
    'svcpage.i3.partner': 'Schneider Electric',
    'svcpage.i3.title':   'شركاء الخدمة المعتمدون',
    'svcpage.i3.desc':    'شريك معتمد لأنظمة لوحات التوزيع منخفضة الجهد والأتمتة الصناعية من Schneider Electric.',
    'svcpage.i3.tag':     'معتمد',
    'svcpage.i4.badge':   'معتمد من UL',
    'svcpage.i4.partner': 'شهادة UL',
    'svcpage.i4.title':   'برنامج SPIRE للمباني الذكية',
    'svcpage.i4.desc':    'حلول متقدمة معتمدة من UL لأتمتة المباني وإدارة الطاقة الذكية.',
    'svcpage.i4.tag':     'معتمد من UL',
    'svcpage.i5.badge':   'التدريب',
    'svcpage.i5.partner': 'معتمد CPD (المملكة المتحدة)',
    'svcpage.i5.title':   'دورات وورش تدريبية',
    'svcpage.i5.desc':    'تطوير مهني معتمد من CPD في أنظمة التحكم والأتمتة الصناعية.',
    'svcpage.i5.tag':     'معتمد CPD',
    'svcpage.i6.badge':   'ISO 9001',
    'svcpage.i6.partner': 'جودة معتمدة',
    'svcpage.i6.title':   'الامتثال لمعيار ISO 9001:2015',
    'svcpage.i6.desc':    'إدارة جودة معتمدة وفق ISO تضمن الامتثال والتحسين المستمر.',
    'svcpage.i6.tag':     'معتمد ISO',

    /* ── Industrial Control Transformers page ── */
    'ict.breadcrumb':   'محولات التحكم الصناعية',
    'ict.hero.eyebrow': 'حلول الطاقة الصناعية',
    'ict.hero.h1a':     'محولات التحكم',
    'ict.hero.h1b':     'الصناعية',
    'ict.hero.desc':    'محولات خفض جهد مصمَّمة بدقة لدوائر التحكم الصناعية — بأحادي الطور وثلاثي الطور وتكوينات مخصصة بالكامل، تُورَّد مباشرة إلى المملكة العربية السعودية.',
    'ict.hero.badge':   'معتمد CE وISO 9001 · كوريا',
    'ict.apps.eyebrow': 'التطبيقات',
    'ict.apps.h2':      'أين تُستخدم محولات التحكم',
    'ict.apps.sub':     'من لوحات آلات التشغيل إلى محطات التحويل الخارجية — مصمَّمة لتلبية كامل نطاق متطلبات دوائر التحكم الصناعية.',
    'ict.app1.h3': 'لوحات تحكم آلات التشغيل',
    'ict.app1.p':  'تغذية دوائر التحكم في آلات CNC والمخارط وآلات الطحن — بتوفير تغذية منخفضة الجهد وآمنة ومعزولة لمداخل PLC وملفات المرحلات.',
    'ict.app2.h3': 'أنظمة الأتمتة الصناعية',
    'ict.app2.p':  'توفير طاقة مستقرة ومعزولة لحوامل PLC وأنظمة المنطق القائمة على المرحلات ومعدات واجهة SCADA عبر خطوط الإنتاج الآلية.',
    'ict.app3.h3': 'التركيبات في البيئات القاسية',
    'ict.app3.p':  'تصاميم مغلفة بغطاء مزدوج ومصنَّفة لتحمل الرطوبة العالية وتسرب الغبار والاهتزاز الشديد — مثالية لمحطات التحويل الخارجية وبيئات مصانع المعالجة.',
    'ict.app4.h3': 'مجمّعات لوحات MCC والتحكم',
    'ict.app4.p':  'مدمجة في مراكز التحكم بالمحركات واللوحات الكهربائية المخصصة — لتوفير جهد التحكم 24 أو 120 فولت الذي تتطلبه لوحات التوزيع ومرحلات الحماية.',
    'ict.app5.h3': 'عزل دوائر السلامة',
    'ict.app5.p':  'عزل غلفاني بين مصدر الجهد العالي ودوائر التحكم التي يصل إليها المشغل — لحماية الأفراد وأجهزة القياس الحساسة من تيارات الأعطال.',
    'ict.app6.h3': 'لوحات مخصصة حسب الطلب',
    'ict.app6.p':  'متوفرة بأي تصنيف VA وتوليفة جهد أساسي/ثانوي وفئة تغليف — مصمَّمة وفق مواصفاتك الدقيقة لمصنّعي اللوحات المخصصة ومكاملي الأنظمة.',
    'ict.range.eyebrow': 'مجموعة المنتجات',
    'ict.range.h2':      'ستة أنواع لكل تطبيق',
    'ict.range.sub':     'ستة تكوينات مختلفة لمحولات التحكم — كل منها ملفوف بدقة لخدمة صناعية موثوقة مع صناديق أطراف مخصصة لتوصيل آمن.',
    'ict.g1.tag': 'أحادي الطور',
    'ict.g1.title': 'محول تحكم أحادي الطور',
    'ict.g2.tag': 'ثلاثي الطور',
    'ict.g2.title': 'محول تحكم ثلاثي الطور',
    'ict.g3.tag': 'غطاء مزدوج',
    'ict.g3.title': 'نوع مغلف للبيئات القاسية',
    'ict.g4.tag': 'نوع الحزام',
    'ict.g4.title': 'محول مدمج من نوع الحزام',
    'ict.g5.tag': 'نوع الشفرة',
    'ict.g5.title': 'محول شفرة — جهد ثانوي منخفض',
    'ict.g6.tag': 'صندوق صناعي',
    'ict.g6.title': 'محول تلقائي صناعي ثلاثي الطور من نوع الصندوق',
    'ict.why.badge.strong': 'مصنّع كوري',
    'ict.why.badge.sub':    'متخصص في محولات التحكم',
    'ict.why.eyebrow': 'لماذا تختارنا',
    'ict.why.h2':      '40 عامًا من تصنيع المحولات بدقة',
    'ict.why.p':       'أمضى شريكنا المصنّع أكثر من أربعة عقود في إتقان تصميم وتصنيع محولات التحكم الصناعية — مع اعتماد CE وإدارة جودة ISO 9001 في كل وحدة نورّدها للقطاع الصناعي في المملكة العربية السعودية.',
    'ict.why1.h4': 'معتمد CE وISO 9001',
    'ict.why1.p':  'يستوفي كل محول معايير CE الأوروبية ويُصنَّع ضمن نظام إدارة جودة معتمد وفق ISO 9001.',
    'ict.why2.h4': 'تكوينات مخصصة بالكامل',
    'ict.why2.p':  'أي نسبة جهد أو تصنيف VA أو عدد أطوار أو فئة تغليف — مصمَّم وفق مواصفاتك الدقيقة، بما في ذلك الطلبات صغيرة الكمية.',
    'ict.why3.h4': 'توريد مباشر إلى المملكة العربية السعودية',
    'ict.why3.p':  'تتولى Efficient Solutions جميع إجراءات الاستيراد والوثائق والتسليم — جهة اتصال واحدة من المصنع حتى غرفة اللوحات لديك.',
    'ict.partner.name': 'محولات التحكم',
    'ict.partner.h2':   'هل أنت مستعد لتحديد مواصفات المحول الخاص بك؟',
    'ict.partner.p':    'شاركنا الجهد وتصنيف VA والتطبيق — وسيقوم فريقنا بتهيئة الوحدة المناسبة وتوصيلها إلى موقعك في المملكة العربية السعودية.',

    /* ── Marine Spare Parts page ── */
    'marine.breadcrumb':  'قطع غيار بحرية',
    'marine.hero.eyebrow':'إمدادات بحرية وبحرية خارجية',
    'marine.hero.h1a':    'قطع غيار',
    'marine.hero.h1b':    'بحرية',
    'marine.hero.desc':   'قطع غيار أصلية ومعادلة لمعايير الشركة الصانعة الأصلية (OEM) للسفن والمنشآت البحرية — محركات، توربينات شحن، مضخات، أجهزة تنقية، ضواغط، صمامات، آلات سطح السفينة، معدات سلامة وغيرها، تُسلَّم إلى موانئ ومنشآت المملكة العربية السعودية.',
    'marine.badge1': 'جودة معادلة لمعايير OEM',
    'marine.badge2': 'مجموعة منتجات واسعة',
    'marine.badge3': 'توفر سريع',
    'marine.stat1': 'فئات القطع',
    'marine.stat2': 'رمز صنف متوفر',
    'marine.stat3': 'جودة معتمدة',
    'marine.stat4': 'دعم طارئ',
    'marine.cat.eyebrow': 'فئات المنتجات',
    'marine.cat.h2':      'كل ما تحتاجه سفينتك',
    'marine.cat.sub':     'من غرفة المحركات إلى جسر القيادة — مجموعة شاملة من قطع الغيار تغطي كل نظام حيوي على متن السفن التجارية والمنصات البحرية.',
    'marine.catitem1':  'المحركات الرئيسية والمساعدة',
    'marine.catitem2':  'توربينات الشحن',
    'marine.catitem3':  'المضخات',
    'marine.catitem4':  'أجهزة التنقية والفصل',
    'marine.catitem5':  'الضواغط',
    'marine.catitem6':  'الصمامات',
    'marine.catitem7':  'أجهزة القياس والتحكم',
    'marine.catitem8':  'الكهرباء',
    'marine.catitem9':  'آلات سطح السفينة',
    'marine.catitem10': 'مستلزمات السلامة',
    'marine.gallery.eyebrow': 'مجموعة المنتجات',
    'marine.gallery.h2':      'أبرز القطع التي نورّدها',
    'marine.gallery.sub':     'مصدرها كبرى الشركات المصنّعة — مكابس وبطانات أسطوانات، أطقم توربينات شحن، مضخات طاردة مركزية، أجهزة تنقية الوقود والزيت، ضواغط هواء، ونشات سطح السفينة ومعدات سلامة معتمدة.',
    'marine.g1.tag':   'قطع المحركات',
    'marine.g1.title': 'المحركات الرئيسية والمساعدة',
    'marine.g1.desc':  'مكابس وبطانات أسطوانات ومحامل ورؤوس أسطوانات ومجموعات توربينات شحن من MAN وWärtsilä وCaterpillar وYANMAR وDaihatsu.',
    'marine.g2.tag':   'سطح السفينة والملاحة',
    'marine.g2.title': 'آلات سطح السفينة ومعدات السلامة',
    'marine.g2.desc':  'ونشات ومراسي وروافع ومعدات ملاحية ومستلزمات إنقاذ معتمدة لجميع أنواع السفن.',
    'marine.g3.tag':   'المضخات والصمامات',
    'marine.g3.title': 'المضخات والصمامات وأجهزة التنقية',
    'marine.g3.desc':  'مجموعات مضخات طاردة مركزية وترسية ولولبية؛ صمامات بوابية وكروية وفراشية؛ قطع خدمة أجهزة تنقية الوقود والزيت.',
    'marine.g4.tag':   'الكهرباء والأتمتة',
    'marine.g4.title': 'الكهرباء وأجهزة القياس والتحكم',
    'marine.g4.desc':  'لوحات توزيع ومحركات وكابلات وضواغط ومقاييس ضغط وعدادات تدفق وأنظمة تحكم آلي من ABB وMitsubishi.',
    'marine.why.badge.strong': 'متخصصون بحريون',
    'marine.why.badge.sub':    'نخدم أسطول المملكة العربية السعودية',
    'marine.why.eyebrow': 'لماذا تختارنا',
    'marine.why.h2':      'شريكك الموثوق لقطع الغيار البحرية',
    'marine.why.p':       'نجمع بين المعرفة الفنية العميقة بالأنظمة البحرية وشبكة موردين راسخة — لنمنحك وصولًا سريعًا للقطعة المناسبة بالسعر المناسب، دون أي تعقيدات عبر الحدود.',
    'marine.why1.h4': 'تغطية لجميع الشركات المصنّعة',
    'marine.why1.p':  'قطع غيار لشركات MAN وWartsila وCaterpillar وMitsubishi وAlfa Laval وجميع كبرى الشركات المصنّعة للمعدات البحرية.',
    'marine.why2.h4': 'تعجيل الطلبات الطارئة',
    'marine.why2.p':  'توريد سريع على غرار حالات الطوارئ للأعطال الحرجة — لتقليل مدة توقف السفينة عن العمل والتعرض المالي.',
    'marine.why3.h4': 'إدارة استيراد كاملة',
    'marine.why3.p':  'التخليص الجمركي، ووثائق SASO، والتسليم إلى الرصيف أو المستودع الخاص بك — جهة اتصال واحدة من البداية إلى النهاية.',
    'marine.cta.h2':  'هل تحتاج قطعة لسفينتك؟',
    'marine.cta.p':   'شاركنا قائمة القطع أو اسم الشركة المصنّعة أو رقم القطعة، وسيتولى فريقنا التوريد والتسعير والتسليم — بسرعة.',
    'marine.cta.btn': 'أرسل قائمة القطع',

    /* ── Mechanical Seals page ── */
    'seals.breadcrumb':  'أختام ميكانيكية وأنظمة دعم أختام الخلاطات',
    'seals.hero.eyebrow':'إحكام إغلاق المعدات الدوارة',
    'seals.hero.h1a':    'أختام ميكانيكية',
    'seals.hero.h1b':    'وأنظمة دعم الأختام',
    'seals.hero.desc':   'أختام ميكانيكية أحادية وثنائية وخرطوشية للمضخات والخلاطات الصناعية، مدعومة بأنظمة دعم أختام متوافقة مع API 682 — مصمَّمة لموثوقية عالية في المصافي والمصانع البتروكيماوية ومنشآت المعالجة في المملكة العربية السعودية.',
    'seals.badge1': 'أنظمة متوافقة مع API 682',
    'seals.badge2': 'تصاميم أختام خرطوشية وثنائية',
    'seals.badge3': 'مصمَّمة للمضخات والخلاطات',
    'seals.stat1': 'متخصص في الأختام',
    'seals.stat2': 'نوع من خطط API 682',
    'seals.stat3': 'قطاع تخدمه',
    'seals.stat4': 'تصنيع وفق ASME القسم VIII الجزء 2',
    'seals.ind.eyebrow': 'القطاعات التي نخدمها',
    'seals.ind.h2':      'إحكام إغلاق لأصعب التطبيقات',
    'seals.ind.sub':     'أختام ميكانيكية وأنظمة دعم تُختار وفق وسط العملية وسرعة العمود وفئة الضغط لديك — وليست قطعة عامة تناسب الجميع.',
    'seals.induitem1': 'النفط والغاز',
    'seals.induitem2': 'المصافي',
    'seals.induitem3': 'المصانع البتروكيماوية',
    'seals.induitem4': 'محطات الطاقة',
    'seals.induitem5': 'الصناعات الدوائية',
    'seals.induitem6': 'المعالجة الكيميائية',
    'seals.induitem7': 'مصانع الأسمدة',
    'seals.induitem8': 'اللب والورق',
    'seals.induitem9': 'الحفر البحري',
    'seals.range.eyebrow': 'مجموعة الأختام الميكانيكية',
    'seals.range.h2':      'أختام مصمَّمة حول مضختك',
    'seals.range.sub':     'أختام ميكانيكية بتصميم خرطوشي للمضخات والخلاطات — من الأختام الأحادية على أغلفة القطر القياسي إلى الأختام الثنائية الشديدة التحمل لمعدات فئة API.',
    'seals.p1.tag':   'ختم أحادي',
    'seals.p1.title': 'ختم خرطوشي أحادي',
    'seals.p1.f1':    'يتحمل انعكاس الضغط، وسهل التركيب',
    'seals.p1.f2':    'يناسب أغلفة المضخات القياسية والكبيرة القطر',
    'seals.p2.tag':   'ختم ثنائي',
    'seals.p2.title': 'ختم خرطوشي ثنائي',
    'seals.p2.f1':    'يعمل بتوليفة ترادفية أو ظهر لظهر',
    'seals.p2.f2':    'يناسب المضخات القياسية وفق ANSI وDIN وISO',
    'seals.p3.tag':   'كبير القطر / API',
    'seals.p3.title': 'ختم شديد التحمل كبير القطر',
    'seals.p3.f1':    'تصميم مقاوم للانسداد ومحمي بنابض',
    'seals.p3.f2':    'يناسب مضخات ANSI كبيرة القطر ومضخات API',
    'seals.sss.eyebrow': 'أنظمة دعم الأختام',
    'seals.sss.h2':      'إبقاء كل ختم باردًا ومزلَّقًا ومتوازنًا',
    'seals.sss.sub':     'أنظمة دعم متوافقة مع API 682 تُدوِّر وتبرِّد وتراقب سائل الحاجز والتزليق — مصمَّمة حول ترتيب الختم الذي تحميه.',
    'seals.s1.tag':   'الخطط 52 / 53',
    'seals.s1.title': 'أنظمة السيفون الحراري',
    'seals.s1.f1':    'تزليق وتبديد حرارة للأختام الترادفية وظهر لظهر',
    'seals.s1.f2':    'أجهزة قياس اختيارية للمستوى والضغط والحرارة',
    'seals.s2.tag':   'API 682',
    'seals.s2.title': 'خطط تدفق API 682',
    'seals.s2.f1':    'الخطط 21–76: تبريد وتدفق وإخماد وكشف تسرب',
    'seals.s2.f2':    'مصنَّعة وفق ASME القسم VIII، الجزء 2',
    'seals.s3.tag':   'لوحة معيارية',
    'seals.s3.title': 'أنظمة موازنة الضغط والتزليق',
    'seals.s3.f1':    'موازنة ضغط تلقائية لأختام الخلاطات',
    'seals.s3.f2':    'تزليق قسري بتصنيف يصل إلى 120 بار',
    'seals.why.badge.strong': 'إحكام إغلاق مصمَّم حسب التطبيق',
    'seals.why.badge.sub':    'أكثر من 250 متخصصًا في إحكام إغلاق المعدات الدوارة',
    'seals.why.eyebrow': 'لماذا تختارنا',
    'seals.why.h2':      'حلول إحكام إغلاق، لا قطع كتالوج',
    'seals.why.p':       'نعمل مع شريك تصنيع يضم أكثر من 250 متخصصًا مكرَّسين للأختام الميكانيكية وأنظمة دعمها، ما يمنح قطاعات المعالجة في المملكة العربية السعودية وصولًا مباشرًا إلى حلول إحكام إغلاق مصمَّمة حسب التطبيق دون تعقيدات التوريد من الخارج.',
    'seals.why1.h4': 'اختيار مصمَّم حسب التطبيق',
    'seals.why1.p':  'نوع الختم والمواد يُطابقان حجم العمود ووسط العملية والحرارة وفئة الضغط — لا قطعة كتالوج عامة.',
    'seals.why2.h4': 'تصميم كامل لنظام دعم API 682',
    'seals.why2.p':  'لوحات التدفق والإخماد وسائل الحاجز مصمَّمة ومصنَّعة وفق ASME القسم VIII، الجزء 2، ومحدَّدة الحجم وفق ترتيب الختم لديك.',
    'seals.why3.h4': 'توريد مباشر إلى المملكة العربية السعودية',
    'seals.why3.p':  'تكوينات مخصصة للأختام واللوحات لطلبات التصنيع الأصلي والصيانة، مع إدارة كاملة لإجراءات الاستيراد.',
    'seals.cta.h2': 'هل تحتاج حل إحكام إغلاق لمعداتك الدوارة؟',
    'seals.cta.p':  'شاركنا مواصفات المضخة أو الخلاط ووسط العملية وظروف التشغيل — وسيقترح فريقنا الختم ونظام الدعم المناسبين ويوصلهما إلى موقعك في المملكة العربية السعودية.',

    /* ── Steel Forging page ── */
    'forging.breadcrumb':  'تصنيع الصلب المطروق',
    'forging.hero.eyebrow':'حلول التطريق الدقيق',
    'forging.hero.h1a':    'مكونات صلب',
    'forging.hero.h1b':    'مطروقة',
    'forging.hero.desc':   'قطع صلب مطروقة مخصصة لمحركات السفن والآلات الصناعية ومعدات توليد الطاقة — مصمَّمة وفق تفاوتات أبعاد صارمة ومفحوصة في كل مرحلة، تُورَّد مباشرة إلى المملكة العربية السعودية.',
    'forging.badge1': 'أكثر من 28 عامًا من خبرة التطريق',
    'forging.badge2': 'فحص معتمد بالموجات فوق الصوتية والجسيمات المغناطيسية',
    'forging.badge3': 'مصمَّم وفق رسمك الهندسي',
    'forging.stat1': 'سنة تصنيع',
    'forging.stat2': 'مرحلة ضبط جودة',
    'forging.stat3': 'فحص بنسبة 100%',
    'forging.stat4': 'قطاعات رئيسية نخدمها',
    'forging.cat.eyebrow': 'فئات المنتجات',
    'forging.cat.h2':      'مطروقة لتطبيقات شديدة الصعوبة',
    'forging.cat.sub':     'من غرفة المحركات إلى محطة الطاقة — مكونات صلب مطروقة بدقة ومصمَّمة للقطاعات التي لا تحتمل الفشل.',
    'forging.catitem1': 'قطع محركات السفن',
    'forging.catitem2': 'قطع الآلات الصناعية',
    'forging.catitem3': 'منشآت توليد الطاقة',
    'forging.catitem4': 'قطع معدات طاقة الرياح',
    'forging.catitem5': 'مطروقات مخصصة',
    'forging.gallery.eyebrow': 'مجموعة المنتجات',
    'forging.gallery.h2':      'أبرز المطروقات التي نورّدها',
    'forging.gallery.sub':     'مطروقات بقالب مفتوح ومغلق تُشغَّل إلى حالة نهائية أو شبه نهائية، مصمَّمة حول الأحمال التشغيلية ودورات الخدمة لكل تطبيق.',
    'forging.g1.tag':   'قطع محركات السفن',
    'forging.g1.title': 'مطروقات أعمدة وأنظمة دفع',
    'forging.g1.desc':  'أعمدة مراوح دفع، أعمدة إدارة، أعمدة مفلنجة، ومقابض دفة مطروقة بتفاوتات تمركز واستقامة دقيقة لمحركات السفن الرئيسية والمساعدة.',
    'forging.g2.tag':   'الآلات الصناعية',
    'forging.g2.title': 'مطروقات صمامات ومكونات ضغط',
    'forging.g2.desc':  'صمامات نوع Y وأغطية وأجسام صمامات بوابية ومطروقات أنابيب مشغَّلة لأنظمة أنابيب صناعية وعمليات عالية الضغط.',
    'forging.g3.tag':   'نقل الحركة',
    'forging.g3.title': 'مطروقات تروس وأنظمة نقل حركة',
    'forging.g3.desc':  'تروس، أعمدة توصيل خام، ومطروقات أعمدة لصناديق تروس ثقيلة وأنظمة نقل حركة وآلات دوارة.',
    'forging.g4.tag':   'توليد الطاقة',
    'forging.g4.title': 'مطروقات توليد الطاقة وتوربينات الرياح',
    'forging.g4.desc':  'مطروقات هيكلية ودوارة مخصصة، مصمَّمة لمنشآت توليد الطاقة ومكونات نقل الحركة في توربينات الرياح.',
    'forging.proc.eyebrow': 'كيف يتم تصنيعها',
    'forging.proc.h2':      'من السبيكة الخام إلى المطروقة المفحوصة',
    'forging.proc.sub':     'سير عمل من ثماني مراحل خاضع لمراقبة الجودة — تُتَبَّع كل مطروقة من المادة الخام حتى الفحص النهائي غير الإتلافي قبل الإفراج عنها.',
    'forging.proc1.h4': 'المادة الخام',
    'forging.proc1.p':  'سبيكة صلب معتمدة تُختار وفق الدرجة المحددة.',
    'forging.proc2.h4': 'القطع',
    'forging.proc2.p':  'تُقاس السبيكة وتُقطَّع إلى وزن الطرق المطلوب.',
    'forging.proc3.h4': 'التسخين',
    'forging.proc3.p':  'تسخين بفرن مُتحكَّم به لبلوغ درجة حرارة الطرق المثلى.',
    'forging.proc4.h4': 'الطرق',
    'forging.proc4.p':  'طرق بالمكبس لتشكيل القطعة، مع تحسين اتجاه الحبيبات ومتانتها.',
    'forging.proc5.h4': 'التطبيع',
    'forging.proc5.p':  'معالجة حرارية لتخفيف الإجهاد وتثبيت البنية الحبيبية.',
    'forging.proc6.h4': 'التشغيل الآلي',
    'forging.proc6.p':  'تشغيل خشن أو نهائي وفق أبعاد الرسم الهندسي.',
    'forging.proc7.h4': 'المعالجة الحرارية QT',
    'forging.proc7.p':  'تصليد وتلطيف للوصول إلى الخواص الميكانيكية المستهدفة.',
    'forging.proc8.h4': 'الفحص (UT وMT)',
    'forging.proc8.p':  'فحص بالموجات فوق الصوتية والجسيمات المغناطيسية قبل الإفراج عن القطعة.',
    'forging.lead.strong': 'مدد التسليم المعتادة',
    'forging.lead.rest':   'تختلف حسب حالة التسليم: مطروقة ومطبَّعة من 7 إلى 10 أيام تقريبًا، مشغَّلة تشغيلًا خشنًا من 10 إلى 15 يومًا، ومشغَّلة خشنًا مع تصليد وتلطيف من 15 إلى 20 يومًا. تُقدَّر العمليات الخاصة عند الطلب.',
    'forging.why.badge.strong': 'منشأة تطريق كورية',
    'forging.why.badge.sub':    'أكثر من 28 عامًا من التخصص في التطريق',
    'forging.why.eyebrow': 'لماذا تختارنا',
    'forging.why.h2':      'تطريق دقيق وفحص كامل',
    'forging.why.p':       'نعمل مع منشأة تطريق كورية راسخة تمتلك أكثر من 28 عامًا من الخبرة المتخصصة، ما يمنح قطاعات النقل البحري والصناعة والطاقة في المملكة العربية السعودية وصولًا مباشرًا إلى مكونات مطروقة معتمدة دون تعقيدات التوريد من الخارج.',
    'forging.why1.h4': 'أكثر من 28 عامًا من خبرة التطريق',
    'forging.why1.p':  'عقود من خبرة التطريق المتخصصة عبر قطاعات النقل البحري والصناعة وتوليد الطاقة.',
    'forging.why2.h4': 'فحص داخلي كامل',
    'forging.why2.p':  'فحص بالموجات فوق الصوتية (UT) والجسيمات المغناطيسية (MT) لكل دفعة، مدعوم بتقييم نهائي منظَّم قبل الشحن.',
    'forging.why3.h4': 'توريد مباشر إلى المملكة العربية السعودية',
    'forging.why3.p':  'درجات مواد وتفاوتات مخصصة لطلبات التصنيع الأصلي والصيانة، مع إدارة كاملة لإجراءات الاستيراد.',
    'forging.cta.h2': 'هل تحتاج مكونًا مطروقًا مخصصًا؟',
    'forging.cta.p':  'شاركنا الرسم الهندسي ودرجة المادة والتطبيق — وسيتولى فريقنا التصنيع والفحص والتسليم إلى موقعك في المملكة العربية السعودية.',

    /* ── Steel, Pipe & Structural Materials page ── */
    'steeltrade.breadcrumb':  'مواد الصلب والأنابيب والهياكل',
    'steeltrade.hero.eyebrow':'تجارة الصلب الصناعي',
    'steeltrade.hero.h1a':    'الصلب والأنابيب و',
    'steeltrade.hero.h1b':    'المواد الإنشائية',
    'steeltrade.hero.desc':   'أنابيب ووصلات وفلنجات، براغي وصواميل وحشيات، كمرات وفائف وألواح إنشائية، حديد قنوات وزوايا، وركائز صفائح وقضبان وأسلاك — مصدرها معايير دولية، تُسلَّم لقطاعات النفط والغاز والإنشاءات وبناء السفن في المملكة العربية السعودية.',
    'steeltrade.badge1': 'أكثر من 13 عامًا من الخبرة التجارية',
    'steeltrade.badge2': 'معتمدة من المصنع وفق ASTM وEN وJIS',
    'steeltrade.badge3': 'مصدرها كوريا والصين واليابان',
    'steeltrade.stat1': 'سنة خبرة تجارية',
    'steeltrade.stat2': 'فئة مواد',
    'steeltrade.stat3': 'معيار ودرجة',
    'steeltrade.stat4': 'دولة توريد',
    'steeltrade.cat.eyebrow': 'فئات المواد',
    'steeltrade.cat.h2':      'خمس فئات، سلسلة توريد واحدة',
    'steeltrade.cat.sub':     'من مكونات الأنابيب الفردية إلى المقاطع الإنشائية الكاملة — جهة اتصال واحدة لقائمة مواد الصلب والأنابيب لمشروعك.',
    'steeltrade.catitem1': 'أنابيب ووصلات وفلنجات',
    'steeltrade.catitem2': 'براغي وصواميل وحشيات',
    'steeltrade.catitem3': 'كمرات وفائف وألواح صلب',
    'steeltrade.catitem4': 'حديد قنوات وزوايا',
    'steeltrade.catitem5': 'ركائز صفائح وقضبان وأسلاك',
    'steeltrade.range.eyebrow': 'مجموعة المنتجات',
    'steeltrade.range.h2':      'أبرز المواد التي نورّدها',
    'steeltrade.range.sub':     'عينة تمثيلية من المجموعة — كل صنف يُورَّد وفق المعيار والدرجة وشهادة المصنع التي تحددها.',
    'steeltrade.p1.tag':   'الأنابيب',
    'steeltrade.p1.title': 'أنابيب خطوط وأغلفة/مواسير',
    'steeltrade.p1.f1':    'أنابيب ERW وEFW وSAW وسلسة (بدون لحام)',
    'steeltrade.p1.f2':    'درجات كربونية وستانلس ستيل ودوبلكس',
    'steeltrade.p2.tag':   'الوصلات',
    'steeltrade.p2.title': 'وصلات وكوعات مطروقة',
    'steeltrade.p2.f1':    'كوعات وقطع تي ومصغّرات ووصلات لحام',
    'steeltrade.p2.f2':    'صلب كربوني وسبائكي وستانلس ستيل',
    'steeltrade.p3.tag':   'الفلنجات',
    'steeltrade.p3.title': 'فلنجات صلب',
    'steeltrade.p3.f1':    'فلنجات رقبة لحام، انزلاقية، عمياء، ووصلة تراكب',
    'steeltrade.p3.f2':    'درجات ASTM A105 وA182',
    'steeltrade.p4.tag':   'مثبتات',
    'steeltrade.p4.title': 'براغي وصواميل وحشيات',
    'steeltrade.p4.f1':    'براغي مسمارية وصواميل سداسية ثقيلة',
    'steeltrade.p4.f2':    'حشيات معدنية وغير معدنية',
    'steeltrade.p5.tag':   'صلب إنشائي',
    'steeltrade.p5.title': 'كمرات وفائف وألواح',
    'steeltrade.p5.f1':    'كمرات H وI وفق BS وASTM وJIS',
    'steeltrade.p5.f2':    'فائف وألواح ساخنة الدرفلة وفق EN 10025',
    'steeltrade.p6.tag':   'مقاطع وركائز',
    'steeltrade.p6.title': 'قنوات وزوايا وركائز صفائح',
    'steeltrade.p6.f1':    'قنوات U وزوايا متساوية وغير متساوية',
    'steeltrade.p6.f2':    'ركائز صفائح وقضبان وأسلاك ساخنة الدرفلة',
    'steeltrade.why.badge.strong': 'توريد مباشر من المصنع',
    'steeltrade.why.badge.sub':    'أكثر من 13 عامًا في تجارة الصلب والأنابيب',
    'steeltrade.why.eyebrow': 'لماذا تختارنا',
    'steeltrade.why.h2':      'قائمة مواد واحدة، مورّد واحد',
    'steeltrade.why.p':       'نعمل مع شريك تجاري دولي راسخ يمتلك أكثر من 13 عامًا في توريد الصلب والأنابيب والمواد الإنشائية عبر شرق آسيا، ما يمنح فرق المشاريع في المملكة العربية السعودية جهة اتصال واحدة بدلًا من التعامل مع عشرات المصانع بشكل منفرد.',
    'steeltrade.why1.h4': 'مواد معتمدة من المصنع',
    'steeltrade.why1.p':  'تتبع كامل للمعايير — ASTM وASME وEN وJIS وDIN — مع شهادات فحص مصنع لكل شحنة.',
    'steeltrade.why2.h4': 'شبكة مصانع في شرق آسيا',
    'steeltrade.why2.p':  'وصول مباشر للتوريد عبر كوريا والصين واليابان لتسعير تنافسي ومدد تسليم موثوقة للطلبات كبيرة الحجم.',
    'steeltrade.why3.h4': 'توريد مباشر إلى المملكة العربية السعودية',
    'steeltrade.why3.p':  'إدارة كاملة لإجراءات الاستيراد والوثائق والتسليم، من المصنع حتى موقع مشروعك.',
    'steeltrade.cta.h2': 'هل تحتاج مواد صلب أو أنابيب أو هياكل إنشائية؟',
    'steeltrade.cta.p':  'شاركنا قائمة المواد والمعيار والدرجة المطلوبة — وسيتولى فريقنا التوريد والتسعير والتسليم إلى موقعك في المملكة العربية السعودية.',

    /* ── products.html — product cards ── */
    'pcard.marine.badge': 'إمداد بحري',
    'pcard.marine.title': 'قطع غيار بحرية',
    'pcard.marine.desc':  'توريد موثوق لقطع الغيار البحرية بما في ذلك مكونات المحركات الرئيسية والمساعدة، توربينات الشحن، المضخات، أجهزة التنقية، الضواغط، الصمامات، أجهزة القياس والتحكم، الكهرباء وآلات سطح السفينة، ومستلزمات السلامة.',
    'pcard.marine.tag1':  'قطع المحركات',
    'pcard.marine.tag2':  'سطح السفينة والسلامة',

    'pcard.forging.badge': 'التطريق',
    'pcard.forging.title': 'تصنيع الصلب المطروق بدقة',
    'pcard.forging.desc':  'مكونات صلب مطروقة مخصصة لقطع محركات السفن والآلات الصناعية ومعدات توليد الطاقة، تُنتَج وفق معايير صارمة للجودة والفحص.',
    'pcard.forging.tag1':  'قطع محركات السفن',
    'pcard.forging.tag2':  'الآلات الصناعية',

    'pcard.seals.badge': 'أختام ميكانيكية',
    'pcard.seals.title': 'أختام ميكانيكية للمضخات والخلاطات وأنظمة دعم الأختام',
    'pcard.seals.desc':  'حلول إحكام كاملة للمعدات الدوارة — أختام ميكانيكية أحادية وثنائية وبحلزونات معدنية للمضخات والخلاطات الصناعية، مقترنة بأنظمة دعم أختام وفق API 682 تشمل خطط التدفق ولوحات سائل الحاجز وأجهزة المراقبة.',
    'pcard.seals.tag1':  'API 682',
    'pcard.seals.tag2':  'المضخات والخلاطات',
    'pcard.seals.tag3':  'دعم الأختام',

    'pcard.steeltrade.badge': 'تجارة الصلب',
    'pcard.steeltrade.title': 'مواد الصلب والأنابيب والهياكل الإنشائية',
    'pcard.steeltrade.desc':  'أنابيب ووصلات وفلنجات، براغي وصواميل وحشيات، كمرات وفائف وألواح إنشائية، حديد قنوات وزوايا، وركائز صفائح وقضبان وأسلاك — مصدرها معايير ASTM وASME وEN وJIS وDIN.',
    'pcard.steeltrade.tag1':  'أنابيب وفلنجات',
    'pcard.steeltrade.tag2':  'صلب إنشائي',

    'pcard.ict.badge': 'حلول الطاقة',
    'pcard.ict.title': 'محولات التحكم الصناعية',
    'pcard.ict.desc':  'محولات تحكم وحلول طاقة مخصصة مصمَّمة للتطبيقات الصناعية، مصنَّعة وفق معايير CE وISO 9001 مع دعم للطلبات صغيرة الكمية والمواصفات المخصصة.',
    'pcard.ict.tag1':  'محولات التحكم',
    'pcard.ict.tag2':  'طاقة مخصصة'
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

/* ── Product Category Accordions ──────────────────────────── */
function initProductAccordions() {
  $$('.cat-accordion-header').forEach(header => {
    header.setAttribute('tabindex', '0');

    const toggle = () => {
      const accordion = header.closest('.cat-accordion');
      const isOpen = accordion.classList.toggle('open');
      header.setAttribute('aria-expanded', String(isOpen));
    };

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
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
  initProductAccordions();
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

/* ── Product fields toggle ────────────────────────────────
   Each <option> carries data-fields="div-id" pointing to its
   extra fields block. All .product-fields divs are hidden first,
   then the matching one is shown. To add a new product type:
     1. Add <option data-fields="your-new-div-id"> in the select
     2. Add <div id="your-new-div-id" class="product-fields" style="display:none;">
   No JS changes needed.
─────────────────────────────────────────────────────────── */
function toggleProductFields(select) {
  document.querySelectorAll('.product-fields').forEach(el => el.style.display = 'none');
  const fieldsId = select.options[select.selectedIndex]?.dataset.fields;
  if (fieldsId) {
    const el = document.getElementById(fieldsId);
    if (el) el.style.display = 'block';
  }
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


function initDropdowns() {
  const dropdowns = $$('.nav-dropdown');
  const isTouchDevice = () => window.matchMedia('(hover: none)').matches;
  
  dropdowns.forEach(dd => {
    const link = dd.querySelector('a:first-child');
    const menu = dd.querySelector('.dropdown-menu');
    
    if (isTouchDevice()) {
      link.addEventListener('click', (e) => {
        if (!dd.classList.contains('active')) {
          e.preventDefault();
          dropdowns.forEach(d => d.classList.remove('active'));
          dd.classList.add('active');
        }
      });
    }
  });
  
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      dropdowns.forEach(d => d.classList.remove('active'));
    }
  });
}
 
function openSection() {
  const section = new URLSearchParams(window.location.search).get('section');
  if (section && $(`#cat-${section}`)) {
    const el = $(`#cat-${section}`);
    el.classList.add('open');
    el.querySelector('.cat-accordion-header')?.setAttribute('aria-expanded', 'true');
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
}
 
document.addEventListener('DOMContentLoaded', () => {
  handleForm('contact-form-business', 'submit-business', 'success-business',
    'service_13t62vi', 'template_xhjag9q');
  handleForm('contact-form-product', 'submit-product', 'success-product',
    'service_13t62vi', 'template_gxl6y0j');
  initDropdowns();
  openSection();
  initProductSelection();
});

/* ── Pre-select product/service from a product or service card ──
   Cards across the product pages and servcies.html call:
     sessionStorage.setItem('selectedProduct', 'option-value')
   before navigating to contact.html?tab=product#form-product.
   'option-value' should match a <option value="..."> in the
   #p-product select where possible — that option gets selected
   automatically. If it doesn't match any option (e.g. a category
   like "Engineering Animation" that has multiple sub-options),
   it's used as a free-text label in the pre-filled message instead.
─────────────────────────────────────────────────────────────── */
function initProductSelection() {
  // Switch tab based on ?tab= URL param (set by product/service page links)
  const tabParam = new URLSearchParams(window.location.search).get('tab');
  if (tabParam && document.getElementById('tab-' + tabParam)) {
    switchTab(tabParam);
  }

  const productValue = sessionStorage.getItem('selectedProduct');
  if (productValue) {
    sessionStorage.removeItem('selectedProduct');
    switchTab('product');
    setTimeout(() => {
      const select   = document.getElementById('p-product');
      const msgField = document.getElementById('p-message');
      const option   = select ? select.querySelector('option[value="' + CSS.escape(productValue) + '"]') : null;

      let label = productValue;
      if (option) {
        select.value = productValue;
        toggleProductFields(select);
        label = option.textContent.trim();
      }

      if (msgField && !msgField.value) {
        msgField.value = 'I am interested in: ' + label;
      }
    }, 150);
  }
}
