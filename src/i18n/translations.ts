export type Locale = "zh" | "en" | "es";

export const translations = {
  zh: {
    nav: {
      about: "关于",
      visiting: "游览信息",
      transportation: "交通方式",
      history: "生态环境",
      location: "位置",
      tips: "贴士",
      reviews: "评价",
      faq: "常见问题",
    },
    hero: {
      tagline: "加勒比海岸的珊瑚礁天堂",
      title: "莫罗科伊国家公园",
      subtitle: "Parque Nacional Morrocoy",
      cta: "探索自然奇观",
    },
    rating: {
      label: "游客评分",
      reviews: "条评价",
      source: "Google 评论",
    },
    about: {
      title: "关于莫罗科伊国家公园",
      p1: "莫罗科伊国家公园（Parque Nacional Morrocoy）位于委内瑞拉法尔孔州（Falcón）的加勒比海岸，是该国最重要的沿海保护区之一。公园成立于1974年，占地面积约321平方公里，包括陆地和海洋区域，以保护独特的红树林、珊瑚礁、热带干燥森林和丰富的海洋生物多样性而闻名。",
      p2: "公园内拥有超过70个珊瑚礁岛（cayos）和数不尽的白色沙滩、红树林水道、泻湖和仙人掌森林。这里是观鸟、浮潜、潜水、徒步和生态旅游的理想目的地，也是委内瑞拉最受欢迎的滨海旅游胜地之一。",
      highlights: {
        title: "公园亮点",
        items: [
          "321 平方公里的海陆保护区",
          "70+ 珊瑚礁岛（Cayos）",
          "红树林、珊瑚礁与热带干燥森林",
          "丰富的海洋生物多样性",
          "白色沙滩与泻湖",
        ],
      },
      management: {
        title: "公园管理",
        content: "莫罗科伊国家公园由委内瑞拉国家公园管理局（Inparques）直接管理。作为国家保护区，入园需支付门票费用，这些收入用于公园的维护、生态保护、巡逻和游客设施建设。公园内严禁破坏珊瑚、采摘植物、干扰野生动物等行为。",
      },
    },
    visiting: {
      title: "游览信息",
      hours: {
        title: "开放时间",
        content: "每日 08:00 - 16:00",
        note: "建议早到，避开午后高温",
      },
      price: {
        title: "门票",
        content: "约 5 - 10 美元（以当地货币为准）",
        note: "外国游客票价可能略高，建议携带现金",
      },
      duration: {
        title: "建议游览时长",
        content: "1 天 - 3 天",
        note: "含海滩休闲、浮潜、游船与徒步",
      },
      bring: {
        title: "建议携带",
        items: ["高倍数防晒霜（加勒比阳光强烈）", "遮阳帽与太阳镜", "泳衣与沙滩巾", "浮潜装备（或现场租赁）", "防蚊液", "充足的饮用水", "现金（园内许多地方不支持刷卡）"],
      },
    },
    transportation: {
      title: "交通指南",
      fromAirport: {
        title: "从机场出发",
        content: "最近的国内/国际机场是巴伦西亚的阿图罗·米切莱纳国际机场（VLN），车程约 2 小时；或加拉加斯的西蒙·玻利瓦尔国际机场（CCS），车程约 4 小时。",
      },
      selfDrive: {
        title: "自驾前往",
        content: "莫罗科伊有部分区域是可以直接开车进入的（例如 Punta Brava，有一条跨海公路连接，可以直接把车停在沙滩边）。从加拉加斯沿西5号公路向西行驶约5-6小时可到达法尔孔州。",
      },
      publicTransport: {
        title: "公共交通",
        content: "从加拉加斯或其他主要城市可乘坐长途巴士到达图卡卡斯（Tucacas）或奇奇里维切（Chichiriviche）。到达后，可乘坐出租车或参加当地一日游团前往公园码头，再乘船进入各个珊瑚礁岛。",
      },
      otherWays: {
        title: "游船前往珊瑚岛",
        content: "绝大多数最美的外岛（Cayos）都需要在图卡卡斯（Tucacas）或奇奇里维切（Chichiriviche）的码头（当地称为 Embarcaderos）乘坐当地特色的无顶小快艇（当地称 Peñeros）。",
      },
    },
    history: {
      title: "生态环境与科普",
      p1: "莫罗科伊国家公园的生态系统极为丰富多样。公园内包含四种主要生态系统：热带干燥森林（以仙人掌和豆科植物为主）、红树林（是许多鱼类和鸟类的繁殖地）、珊瑚礁（拥有加勒比海最北端的珊瑚群落）和海洋草甸。",
      p2: "这里是超过300种鸟类的栖息地，包括玫瑰琵鹭、火烈鸟、鹈鹕等。海洋区域生活着海龟、海豚、海牛（西印度海牛）以及种类繁多的热带鱼类。珊瑚礁系统尤其重要，是加勒比海大生态系统的一部分。",
      p3: "公园于1974年12月26日正式成为国家公园，是委内瑞拉最早设立的国家公园之一，旨在保护这一独特的沿海生态系统免受无序开发和过度旅游的影响。",
    },
    location: {
      title: "位置与交通",
      address: "Tucacas 4101, Falcón, 委内瑞拉",
      mapHint: "点击地图在 Google Maps 中打开",
      openMaps: "在 Google Maps 中查看",
    },
    contact: {
      title: "联系方式",
      phone: "请咨询公园管理处",
      phoneNote: "建议提前通过官方渠道确认开放情况",
    },
    tips: {
      title: "实用信息与安全贴士",
      items: [
        "☀️ 加勒比阳光极为强烈，务必使用高倍数防晒霜并每2小时补涂，建议穿着防晒衣、佩戴遮阳帽。",
        "🐢 公园是海龟繁殖地，若在海滩发现海龟巢穴或幼龟，请勿打扰，并及时通知公园管理员。",
        "🚫 严禁采摘珊瑚、砍伐红树林或捕捉海洋生物。违反者将面临高额罚款甚至刑事责任。",
        "💧 园内饮用水和食物价格较高，建议自带充足的饮用水和零食。部分珊瑚岛上有简易餐厅。",
        "📱 手机信号在海上和部分珊瑚岛上可能不稳定，建议提前下载离线地图并告知家人行程。",
        "🛥️ 乘船时请务必穿戴救生衣，并选择有正规资质的游船运营商。",
      ],
    },
    gallery: {
      title: "精彩照片",
      viewMore: "在 Google Maps 查看更多相片",
    },
    reviews: {
      title: "游客评价",
      subtitle: "来自 Google Maps 的真实评价",
      loadMore: "查看更多评价",
      viewMore: "在 Google Maps 查看更多评价",
    },
    faq: {
      title: "常见问题",
      subtitle: "关于莫罗科伊国家公园的一切疑问",
      items: [
        {
          question: "莫罗科伊国家公园最值得去的珊瑚岛是哪些？",
          answer: "最受欢迎的珊瑚岛包括：\n\n1. Cayo Sombrero — 拥有最完善的设施（餐厅、卫生间、遮阳棚），沙滩洁白，海水清澈，适合家庭游客。\n\n2. Cayo Muerto — 生态环境保持较好，适合浮潜和安静地享受海滩。\n\n3. Cayo Sal — 最大的特色是其岛屿中心有一个天然盐湖（Salina），许多游客认为这里的盐泥有护肤功效。此外，岛上基础设施非常完善。\n\n4. Cayo Pelón — “Pelón” 在西班牙语中意为“秃的”。这个岛实际上是一个完全没有植被、没有树荫的纯白沙洲。必须提醒：岛上没有任何遮挡物或树木，必须自带遮阳伞和充足的防晒装备。\n\n建议提前规划行程，因为游船通常上午出发，下午返回。"
        },
        {
          question: "当地治安如何？在沙滩上物品安全吗？",
          answer: "在主要的珊瑚岛上，白天游客较多且有管理人员巡逻，相对安全。但仍建议不要携带贵重物品，下水时最好有人看管随身包物。"
        },
        {
          question: "去外岛可以刷卡吗？",
          answer: "必须强调：请带足现金/美元零钞。外岛通常没有信号，POS机无法使用。"
        },
        {
          question: "最佳游览时间是什么时候？",
          answer: "旱季（12月至次年4月）是最佳游览时节，降雨少、海水能见度高，非常适合浮潜和潜水。5月至11月是雨季，虽然仍可以游览，但海面可能较为波涛汹涌，部分游船可能会取消。需要注意的是，旱季也是旅游旺季，建议提前预订住宿和游船。"
        },
        {
          question: "如何进入莫罗科伊国家公园？",
          answer: "主要有两种方式：\n\n1. 从图卡卡斯（Tucacas）入口 — 这是最主要、设施最完善的入口，适合大多数游客。从这里可以方便地找到游船前往各个珊瑚岛。\n\n2. 从奇奇里维切（Chichiriviche）入口 — 位于公园西部，相对安静，也有一些游船运营商。\n\n两个入口都需要先到游客中心登记并支付门票。建议早上8点前到达，以避开人群和高温。"
        },
        {
          question: "需要提前预订吗？",
          answer: "在旱季（12月-4月）和节假日期间，强烈建议提前预订游船和住宿。公园内的珊瑚岛上住宿选择有限，图卡卡斯和奇奇里维切镇上的酒店和民宿在旺季很快会被订满。如果计划当天往返，建议早上7-8点到达入口，以确保有足够时间游览。"
        },
        {
          question: "可以在公园内露营吗？",
          answer: "部分珊瑚岛允许露营，但需要提前向国家公园管理局（Inparques）申请许可。露营区通常设施较为简陋，需要自备帐篷、食物和水。请注意，在旱季（海龟产卵季节），某些区域可能会临时关闭以保护野生动物。建议提前咨询公园管理处了解最新规定。"
        },
      ],
    },
    footer: {
      text: "© 2026 莫罗科伊国家公园旅行指南 ·保留所有权利。",
      made: "本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。为探索者而制",
      linksTitle: "相关链接",
      links: [
        { name: "委内瑞拉国家公园管理局", url: "https://www.inparques.gob.ve/" },
        { name: "委内瑞拉生态社会主义部", url: "https://www.minec.gob.ve/" },
        { name: "委内瑞拉人民政权旅游部", url: "http://www.mintur.gob.ve/" },
        { name: "法尔孔州政府", url: "https://gobernacion.falcon.gob.ve/" },
        { name: "世界保护区数据库", url: "https://www.protectedplanet.net/" },
        { name: "国际湿地公约信息系统", url: "https://rsis.ramsar.org/" },
        { name: "委内瑞拉非盈利生态保护NGO", url: "https://www.provita.org.ve/" },
      ],
    },
  },
  en: {
    nav: {
      about: "About",
      visiting: "Visit",
      transportation: "Getting There",
      history: "Ecology",
      location: "Location",
      tips: "Tips",
      reviews: "Reviews",
      faq: "FAQ",
    },
    hero: {
      tagline: "Caribbean Coral Reef Paradise",
      title: "Morrocoy National Park",
      subtitle: "Parque Nacional Morrocoy",
      cta: "Explore the Natural Wonder",
    },
    rating: {
      label: "Visitor Rating",
      reviews: "reviews",
      source: "Google Reviews",
    },
    about: {
      title: "About Morrocoy National Park",
      p1: "Morrocoy National Park (Parque Nacional Morrocoy) is located on the Caribbean coast of Falcón State, Venezuela. Established in 1974, it covers approximately 321 square kilometers of land and marine areas. The park is renowned for protecting unique mangroves, coral reefs, tropical dry forests, and rich marine biodiversity.",
      p2: "The park features over 70 cays (cayos), countless white-sand beaches, mangrove channels, lagoons, and cactus forests. It is an ideal destination for birdwatching, snorkeling, diving, hiking, and ecotourism, and is one of Venezuela's most popular coastal tourist destinations.",
      highlights: {
        title: "Highlights",
        items: [
          "321 km² land & marine protected area",
          "70+ cays and coral reefs",
          "Mangroves, coral reefs & tropical dry forest",
          "Rich marine biodiversity",
          "White-sand beaches & lagoons",
        ],
      },
      management: {
        title: "Park Management",
        content: "Morrocoy National Park is directly managed by the National Parks Institute of Venezuela (Inparques). As a national protected area, an entrance fee is required, which is used for park maintenance, ecological protection, patrols, and visitor facilities. Destroying coral, picking plants, or disturbing wildlife is strictly prohibited."
      },
    },
    visiting: {
      title: "Visitor Information",
      hours: {
        title: "Opening Hours",
        content: "Daily 08:00 - 16:00",
        note: "Arrive early to avoid afternoon heat",
      },
      price: {
        title: "Admission",
        content: "Approx. $5 - $10 USD (local currency applies)",
        note: "Foreign visitors may pay higher rates; bring cash",
      },
      duration: {
        title: "Suggested Duration",
        content: "1 - 3 Days",
        note: "Including beach relaxation, snorkeling, boat tours & hiking",
      },
      bring: {
        title: "What to Bring",
        items: ["High-SPF sunscreen (Caribbean sun is intense)", "Sun hat & sunglasses", "Swimwear & beach towel", "Snorkeling gear (or rent on-site)", "Insect repellent", "Plenty of drinking water", "Cash (many places don't accept cards)"],
      },
    },
    transportation: {
      title: "Transportation Guide",
      fromAirport: {
        title: "From the Airport",
        content: "The nearest domestic/international airport is Arturo Michelena International Airport (VLN) in Valencia, about a 2-hour drive; or Simón Bolívar International Airport (CCS) in Caracas, about a 4-hour drive.",
      },
      selfDrive: {
        title: "Self-Drive",
        content: "Some areas in Morrocoy are directly accessible by car (e.g., Punta Brava, connected by a bridge where you can park right on the beach). From Caracas, take the West Central Highway westward for about 5-6 hours to Falcón State.",
      },
      publicTransport: {
        title: "Public Transportation",
        content: "Long-distance buses from Caracas or other major cities can take you to Tucacas or Chichiriviche. Upon arrival, take a taxi or join a local day tour to the park's marina, then take a boat to the various cays.",
      },
      otherWays: {
        title: "Boat Tours to the Cays",
        content: "The vast majority of the most beautiful outer islands (Cayos) require taking a local open-top speedboat (locally called Peñeros) from the docks (Embarcaderos) in Tucacas or Chichiriviche.",
      },
    },
    history: {
      title: "Ecology & Science",
      p1: "The ecosystem of Morrocoy National Park is extremely diverse. The park contains four main ecosystems: tropical dry forest (dominated by cacti and legumes), mangroves (breeding grounds for many fish and birds), coral reefs (home to some of the northernmost coral communities in the Caribbean), and seagrass meadows.",
      p2: "It is a habitat for over 300 species of birds, including roseate spoonbills, flamingos, and pelicans. The marine area is home to sea turtles, dolphins, manatees (West Indian manatee), and a wide variety of tropical fish. The coral reef system is particularly important as part of the Greater Caribbean Ecosystem.",
      p3: "The park was officially declared a national park on December 26, 1974, making it one of the earliest national parks established in Venezuela, aimed at protecting this unique coastal ecosystem from unplanned development and over-tourism.",
    },
    location: {
      title: "Location & Directions",
      address: "Tucacas 4101, Falcón, Venezuela",
      mapHint: "Click map to open in Google Maps",
      openMaps: "Open in Google Maps",
    },
    contact: {
      title: "Contact",
      phone: "Please consult the park management",
      phoneNote: "Check official channels in advance for opening status",
    },
    tips: {
      title: "Practical Info & Safety Tips",
      items: [
        "☀️ The Caribbean sun is extremely intense — use high-SPF sunscreen and reapply every 2 hours. Wear sun-protective clothing and a hat.",
        "🐢 The park is a sea turtle nesting site. If you find a nest or hatchlings on the beach, do not disturb them and notify park rangers immediately.",
        "🚫 Destroying coral, cutting mangroves, or capturing marine life is strictly prohibited. Violators face heavy fines or criminal charges.",
        "💧 Drinking water and food inside the park are expensive. Bring plenty of water and snacks. Some cays have basic restaurants.",
        "📱 Mobile signal may be unreliable at sea and on some cays. Download offline maps in advance and inform family of your itinerary.",
        "🛥️ Always wear a life jacket on boats and choose licensed boat operators.",
      ],
    },
    gallery: {
      title: "Photo Gallery",
      viewMore: "View More Photos on Google Maps",
    },
    reviews: {
      title: "Visitor Reviews",
      subtitle: "Real reviews from Google Maps",
      loadMore: "Load more reviews",
      viewMore: "View More Reviews on Google Maps",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Morrocoy National Park",
      items: [
        {
          question: "Which cays are most worth visiting in Morrocoy National Park?",
          answer: "The most popular cays include:\n\n1. Cayo Sombrero — The most well-equipped cay (restaurants, restrooms, shade structures), with white sand and clear water, ideal for families.\n\n2. Cayo Muerto — Better preserved ecological environment, suitable for snorkeling and quiet beach enjoyment.\n\n3. Cayo Sal — The biggest feature is its natural salt lake (Salina) in the center, and many tourists believe the salt mud has skin care benefits. It also has excellent infrastructure.\n\n4. Cayo Pelón — 'Pelón' means 'bald' in Spanish. This island is actually a pure white sandbank completely devoid of vegetation and shade. Warning: Must bring your own umbrella and plenty of sun protection.\n\nIt is recommended to plan your itinerary in advance, as boats usually depart in the morning and return in the afternoon."
        },
        {
          question: "How is the local security? Are belongings safe on the beach?",
          answer: "On the main coral islands during the day, there are many tourists and patrol staff, making it relatively safe. However, it is still recommended not to bring valuables, and it is best to have someone watch your bags when you enter the water."
        },
        {
          question: "Can I use credit cards on the outer islands?",
          answer: "It must be emphasized: Please bring enough cash/USD bills. Outer islands usually have no signal, and POS machines cannot be used."
        },
        {
          question: "When is the best time to visit?",
          answer: "The dry season (December to April) is the best time to visit — less rain and high water visibility, perfect for snorkeling and diving. The rainy season (May to November) can still be visited, but the sea may be rougher and some boat tours may be canceled. Note that the dry season is also peak tourist season, so book accommodation and boat tours in advance."
        },
        {
          question: "How do I get into Morrocoy National Park?",
          answer: "There are two main access points:\n\n1. Tucacas Entrance — This is the main and best-equipped entrance, suitable for most visitors. From here you can easily find boats to the various cays.\n\n2. Chichiriviche Entrance — Located in the western part of the park, quieter, with some boat operators.\n\nBoth entrances require registration at the visitor center and payment of entrance fees. Arriving before 8:00 AM is recommended to avoid crowds and heat."
        },
        {
          question: "Do I need to book in advance?",
          answer: "During the dry season (December-April) and holidays, booking boat tours and accommodation in advance is strongly recommended. Lodging options on the cays are limited, and hotels and guesthouses in Tucacas and Chichiriviche fill up quickly in peak season. If planning a day trip, arrive at the entrance between 7-8 AM to ensure enough time to explore."
        },
        {
          question: "Can I camp in the park?",
          answer: "Camping is allowed on some cays, but you need to apply for a permit from the National Parks Institute (Inparques) in advance. Camping areas usually have basic facilities; you need to bring your own tent, food, and water. Note that some areas may be temporarily closed during the dry season (sea turtle nesting season) to protect wildlife. Check with park management for the latest regulations before your visit."
        },
      ],
    },
    footer: {
      text: "© 2026 Morrocoy National Park Travel Guide · All rights reserved.",
      made: "This website is an independent third-party travel information project. We have no affiliation with local government or other official institutions. Made for explorers",
      linksTitle: "Related Links",
      links: [
        { name: "Inparques (Venezuela National Parks Institute)", url: "https://www.inparques.gob.ve/" },
        { name: "Ministry of Ecosocialism (Venezuela)", url: "https://www.minec.gob.ve/" },
        { name: "Ministry of Tourism (Venezuela)", url: "http://www.mintur.gob.ve/" },
        { name: "Falcón State Government", url: "https://gobernacion.falcon.gob.ve/" },
        { name: "World Database on Protected Areas", url: "https://www.protectedplanet.net/" },
        { name: "Ramsar Information Sheet", url: "https://rsis.ramsar.org/" },
        { name: "Provita (Venezuelan Conservation NGO)", url: "https://www.provita.org.ve/" },
      ],
    },
  },
  es: {
    nav: {
      about: "Acerca de",
      visiting: "Visitar",
      transportation: "Cómo Llegar",
      history: "Ecología",
      location: "Ubicación",
      tips: "Consejos",
      reviews: "Reseñas",
      faq: "Preguntas Frecuentes",
    },
    hero: {
      tagline: "Paraíso de Arrecifes de Coral del Caribe",
      title: "Parque Nacional Morrocoy",
      subtitle: "Parque Nacional Morrocoy",
      cta: "Explora la Maravilla Natural",
    },
    rating: {
      label: "Calificación",
      reviews: "reseñas",
      source: "Google Reviews",
    },
    about: {
      title: "Acerca del Parque Nacional Morrocoy",
      p1: "El Parque Nacional Morrocoy está ubicado en la costa del Caribe del estado Falcón, Venezuela. Establecido en 1974, abarca aproximadamente 321 kilómetros cuadrados de áreas terrestres y marinas. El parque es conocido por proteger manglares únicos, arrecifes de coral, bosques secos tropicales y rica biodiversidad marina.",
      p2: "El parque cuenta con más de 70 cayos, incontables playas de arena blanca, canales de manglares, lagunas y bosques de cactus. Es un destino ideal para el avistamiento de aves, snorkel, buceo, senderismo y ecoturismo, y es uno de los destinos turísticos costeros más populares de Venezuela.",
      highlights: {
        title: "Aspectos Destacados",
        items: [
          "321 km² de área protegida terrestre y marina",
          "70+ cayos y arrecifes de coral",
          "Manglares, arrecifes de coral y bosque seco tropical",
          "Rica biodiversidad marina",
          "Playas de arena blanca y lagunas",
        ],
      },
      management: {
        title: "Gestión del Parque",
        content: "El Parque Nacional Morrocoy es administrado directamente por el Instituto Nacional de Parques de Venezuela (Inparques). Como área protegida nacional, se requiere el pago de una tarifa de entrada, que se utiliza para el mantenimiento del parque, protección ecológica, patrullajes y mejora de las instalaciones para visitantes. Está estrictamente prohibido destruir coral, cortar manglares o molestar a la vida silvestre."
      },
    },
    visiting: {
      title: "Información para Visitas",
      hours: {
        title: "Horario",
        content: "Diario 08:00 - 16:00",
        note: "Llegue temprano para evitar el calor de la tarde",
      },
      price: {
        title: "Entrada",
        content: "Aprox. $5 - $10 USD (sujeto a moneda local)",
        note: "Los visitantes extranjeros pueden pagar tarifas más altas; traiga efectivo",
      },
      duration: {
        title: "Duración Sugerida",
        content: "1 - 3 Días",
        note: "Incluyendo relajación en playa, snorkel, paseos en bote y caminatas",
      },
      bring: {
        title: "Qué Llevar",
        items: ["Protector solar de alto FPS (el sol caribeño es intenso)", "Sombrero y gafas de sol", "Traje de baño y toalla de playa", "Equipo de snorkel (o alquiler en el sitio)", "Repelente de insectos", "Suficiente agua potable", "Efectivo (muchos lugares no aceptan tarjetas)"],
      },
    },
    transportation: {
      title: "Guía de Transporte",
      fromAirport: {
        title: "Desde el Aeropuerto",
        content: "El aeropuerto nacional/internacional más cercano es el Aeropuerto Internacional Arturo Michelena (VLN) en Valencia, a unas 2 horas en coche; o el Aeropuerto Internacional Simón Bolívar (CCS) en Caracas, a unas 4 horas en coche.",
      },
      selfDrive: {
        title: "Conducción Propia",
        content: "Algunas áreas en Morrocoy son directamente accesibles en automóvil (por ejemplo, Punta Brava, conectada por un puente donde se puede estacionar en la playa). Desde Caracas, tome la Carretera Centro Occidental hacia el oeste por unas 5-6 horas hasta el estado Falcón.",
      },
      publicTransport: {
        title: "Transporte Público",
        content: "Los autobuses de larga distancia desde Caracas u otras ciudades principales pueden llevarlo a Tucacas o Chichiriviche. Al llegar, tome un taxi o únase a un tour local al muelle del parque, luego tome un bote a los diversos cayos.",
      },
      otherWays: {
        title: "Paseos en Bote a los Cayos",
        content: "La gran mayoría de las islas exteriores más hermosas (Cayos) requieren tomar una lancha rápida local sin techo (localmente llamada Peñeros) desde los muelles (Embarcaderos) en Tucacas o Chichiriviche.",
      },
    },
    history: {
      title: "Ecología y Ciencia",
      p1: "El ecosistema del Parque Nacional Morrocoy es extremadamente diverso. El parque contiene cuatro ecosistemas principales: bosque seco tropical (dominado por cactus y leguminosas), manglares (áreas de cría para muchos peces y aves), arrecifes de coral (hogar de algunas de las comunidades de coral más al norte del Caribe) y praderas de pastos marinos.",
      p2: "Es hábitat de más de 300 especies de aves, incluyendo espátulas rosadas, flamencos y pelícanos. El área marina alberga tortugas marinas, delfines, manatíes (manatí del Caribe) y una amplia variedad de peces tropicales. El sistema de arrecifes de coral es particularmente importante como parte del Gran Ecosistema del Caribe.",
      p3: "El parque fue declarado oficialmente parque nacional el 26 de diciembre de 1974, convirtiéndose en uno de los primeros parques nacionales establecidos en Venezuela, con el objetivo de proteger este único ecosistema costero del desarrollo no planificado y el exceso de turismo.",
    },
    location: {
      title: "Ubicación y Cómo Llegar",
      address: "Tucacas 4101, Falcón, Venezuela",
      mapHint: "Haz clic en el mapa para abrir en Google Maps",
      openMaps: "Abrir en Google Maps",
    },
    contact: {
      title: "Contacto",
      phone: "Consulte con la administración del parque",
      phoneNote: "Verifique los canales oficiales con anticipación para conocer el estado de apertura",
    },
    tips: {
      title: "Información Práctica y Consejos de Seguridad",
      items: [
        "☀️ El sol caribeño es extremadamente intenso — use protector solar de alto FPS y reaplique cada 2 horas. Use ropa protectora y sombrero.",
        "🐢 El parque es un sitio de anidación de tortugas marinas. Si encuentra un nido o crías en la playa, no las moleste y notifique a los guardaparques inmediatamente.",
        "🚫 Destruir coral, cortar manglares o capturar vida marina está estrictamente prohibido. Los infractores enfrentan multas elevadas o cargos criminales.",
        "💧 El agua potable y los alimentos dentro del parque son costosos. Traiga suficiente agua y snacks. Algunos cayos tienen restaurantes básicos.",
        "📱 La señal de celular puede ser poco confiable en el mar y en algunos cayos. Descargue mapas sin conexión con anticipación e informe a su familia sobre su itinerario.",
        "🛥️ Siempre use chaleco salvavidas en los botes y elija operadores de botes con licencia.",
      ],
    },
    gallery: {
      title: "Galería de Fotos",
      viewMore: "Ver Más Fotos en Google Maps",
    },
    reviews: {
      title: "Reseñas de Visitantes",
      subtitle: "Reseñas reales de Google Maps",
      loadMore: "Ver más reseñas",
      viewMore: "Ver Más Reseñas en Google Maps",
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre el Parque Nacional Morrocoy",
      items: [
        {
          question: "¿Cuáles son los cayos más vale la pena visitar en el Parque Nacional Morrocoy?",
          answer: "Los cayos más populares incluyen:\n\n1. Cayo Sombrero — El cayo más equipado (restaurantes, baños, estructuras de sombra), con arena blanca y agua cristalina, ideal para familias.\n\n2. Cayo Muerto — Mejor preservado ecológicamente, adecuado para snorkel y disfrutar de la playa en tranquillidad.\n\n3. Cayo Sal — La mayor característica es su lago de sal natural (Salina) en el centro, y muchos turistas creen que el lodo de sal tiene beneficios para la piel. También cuenta con excelente infraestructura.\n\n4. Cayo Pelón — Como su nombre indica, esta isla es en realidad un banco de arena blanca pura completamente sin vegetación ni sombra. Advertencia: Debe traer su propia sombrilla y abundante protección solar.\n\nSe recomienda planificar el itinerario con anticipación, ya que los botes generalmente salen por la mañana y regresan por la tarde."
        },
        {
          question: "¿Cómo es la seguridad local? ¿Están seguras las pertenencias en la playa?",
          answer: "En las principales islas de coral durante el día, hay muchos turistas y personal de patrulla, lo que lo hace relativamente seguro. Sin embargo, todavía se recomienda no traer objetos de valor, y es mejor tener a alguien vigilando sus maletas cuando entre al agua."
        },
        {
          question: "¿Puedo usar tarjetas de crédito en las islas exteriores?",
          answer: "Debe enfatizarse: Por favor traiga suficiente efectivo/billetes de USD. Las islas exteriores generalmente no tienen señal y no se pueden usar máquinas POS."
        },
        {
          question: "¿Cuál es el mejor momento para visitar?",
          answer: "La temporada seca (diciembre a abril) es el mejor momento para visitar — menos lluvia y alta visibilidad del agua, perfecto para snorkel y buceo. La temporada de lluvias (mayo a noviembre) todavía se puede visitar, pero el mar puede estar más agitado y algunos paseos en bote pueden cancelarse. Tenga en cuenta que la temporada seca también es temporada alta de turismo, así que reserve alojamiento y paseos en bote con anticipación."
        },
        {
          question: "¿Cómo entro al Parque Nacional Morrocoy?",
          answer: "Hay dos puntos de acceso principales:\n\n1. Entrada de Tucacas — Esta es la entrada principal y mejor equipada, adecuada para la mayoría de los visitantes. Desde aquí puede encontrar fácilmente botes a los diversos cayos.\n\n2. Entrada de Chichiriviche — Ubicada en la parte occidental del parque, más tranquila, con algunos operadores de botes.\n\nAmbas entradas requieren registro en el centro de visitantes y pago de tarifas de entrada. Se recomienda llegar antes de las 8:00 AM para evitar multitudes y el calor."
        },
        {
          question: "¿Necesito reservar con anticipación?",
          answer: "Durante la temporada seca (diciembre-abril) y festivos, se recomienda encarecidamente reservar paseos en bote y alojamiento con anticipación. Las opciones de alojamiento en los cayos son limitadas, y los hoteles y posadas en Tucacas y Chichiriviche se llenan rápidamente en temporada alta. Si planea un viaje de un día, llegue a la entrada entre las 7-8 AM para asegurar suficiente tiempo para explorar."
        },
        {
          question: "¿Puedo acampar en el parque?",
          answer: "El camping está permitido en algunos cayos, pero necesita solicitar un permiso del Instituto Nacional de Parques (Inparques) con anticipación. Las áreas de camping generalmente tienen instalaciones básicas; necesita traer su propia tienda, comida y agua. Tenga en cuenta que algunas áreas pueden cerrarse temporalmente durante la temporada seca (temporada de anidación de tortugas marinas) para proteger la vida silvestre. Verifique con la administración del parque las regulaciones más recientes antes de su visita."
        },
      ],
    },
    footer: {
      text: "© 2026 Guía de Viaje Parque Nacional Morrocoy · Todos los derechos reservados.",
      made: "Este sitio web es un proyecto independiente de información turística de terceros. No tenemos afiliación con el gobierno local u otras instituciones oficiales. Hecho para exploradores",
      linksTitle: "Enlaces Relacionados",
      links: [
        { name: "Inparques (Instituto Nacional de Parques)", url: "https://www.inparques.gob.ve/" },
        { name: "Ministerio del Poder Popular para el Ecosocialismo", url: "https://www.minec.gob.ve/" },
        { name: "Ministerio del Poder Popular para el Turismo", url: "http://www.mintur.gob.ve/" },
        { name: "Gobernación del Estado Falcón", url: "https://gobernacion.falcon.gob.ve/" },
        { name: "Base de Datos Mundial de Áreas Protegidas", url: "https://www.protectedplanet.net/" },
        { name: "Ficha Informativa Ramsar", url: "https://rsis.ramsar.org/" },
        { name: "Provita (ONG de Conservación Venezolana)", url: "https://www.provita.org.ve/" },
      ],
    },
  },
};

export type LinkItem = { name: string; url: string };

export type FAQItem = { question: string; answer: string };

export type Translations = {
  nav: { about: string; visiting: string; transportation: string; history: string; location: string; tips: string; reviews: string; faq: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { label: string; reviews: string; source: string };
  about: {
    title: string;
    p1: string;
    p2: string;
    highlights: { title: string; items: string[] };
    management: { title: string; content: string };
  };
  visiting: {
    title: string;
    hours: { title: string; content: string; note: string };
    price: { title: string; content: string; note: string };
    duration: { title: string; content: string; note: string };
    bring: { title: string; items: string[] };
  };
  transportation: {
    title: string;
    fromAirport: { title: string; content: string };
    selfDrive: { title: string; content: string };
    publicTransport: { title: string; content: string };
    otherWays: { title: string; content: string };
  };
  history: { title: string; p1: string; p2: string; p3: string };
  location: { title: string; address: string; mapHint: string; openMaps: string };
  contact: { title: string; phone: string; phoneNote: string };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; loadMore: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  footer: { text: string; made: string; linksTitle: string; links: LinkItem[] };
};
