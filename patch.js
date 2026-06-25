const fs = require('fs');

const file = 'src/i18n/translations.ts';
let code = fs.readFileSync(file, 'utf-8');

// Hero CTA and tagline
code = code.replace(
  'tagline: "加勒比海岸的珊瑚礁天堂",\n      title: "莫罗科伊国家公园",\n      subtitle: "Parque Nacional Morrocoy",\n      cta: "探索自然奇观",',
  'tagline: "潜入加勒比的蓝宝石——莫罗科伊国家公园",\n      title: "莫罗科伊国家公园",\n      subtitle: "Parque Nacional Morrocoy",\n      cta: "查看游船路线与价格",'
);

code = code.replace(
  'tagline: "Caribbean Coral Reef Paradise",\n      title: "Morrocoy National Park",\n      subtitle: "Parque Nacional Morrocoy",\n      cta: "Explore the Natural Wonder",',
  'tagline: "Dive into the Sapphire of the Caribbean",\n      title: "Morrocoy National Park",\n      subtitle: "Parque Nacional Morrocoy",\n      cta: "View Boat Routes & Prices",'
);

code = code.replace(
  'tagline: "Paraíso de Arrecifes de Coral del Caribe",\n      title: "Parque Nacional Morrocoy",\n      subtitle: "Parque Nacional Morrocoy",\n      cta: "Explora la Maravilla Natural",',
  'tagline: "Sumérgete en el Zafiro del Caribe",\n      title: "Parque Nacional Morrocoy",\n      subtitle: "Parque Nacional Morrocoy",\n      cta: "Ver Rutas y Precios de Botes",'
);

// Transportation
code = code.replace(
  'content: "最近的机场是阿卡西乔国际机场（ACS，位于科罗 Coro）或西蒙·玻利瓦尔国际机场（CCS，加拉加斯）。从加拉加斯出发，可先乘飞机或大巴前往科罗/图卡卡斯（Tucacas）地区，再转乘出租车或包车前往公园入口。"',
  'content: "最近的国内/国际机场是巴伦西亚的阿图罗·米切莱纳国际机场（VLN），车程约 2 小时；或加拉加斯的西蒙·玻利瓦尔国际机场（CCS），车程约 4 小时。"'
);
code = code.replace(
  'content: "从加拉加斯沿西5号公路（Carretera Centro Occidental）向西行驶约5-6小时可到达法尔孔州。公园主入口位于图卡卡斯（Tucacas）附近，有明显的指示牌。停车场在入口处。"',
  'content: "莫罗科伊有部分区域是可以直接开车进入的（例如 Punta Brava，有一条跨海公路连接，可以直接把车停在沙滩边）。从加拉加斯沿西5号公路向西行驶约5-6小时可到达法尔孔州。"'
);
code = code.replace(
  'content: "进入公园后，大部分珊瑚礁岛（如 Cayo Sombrero、Cayo Muerto 等）需乘船到达。公园入口处有众多游船运营商提供半日或全天行程，价格需现场商议。"',
  'content: "绝大多数最美的外岛（Cayos）都需要在图卡卡斯（Tucacas）或奇奇里维切（Chichiriviche）的码头（当地称为 Embarcaderos）乘坐当地特色的无顶小快艇（当地称 Peñeros）。"'
);

// EN transportation
code = code.replace(
  'content: "The nearest airports are Josefa Camejo International Airport (LAS, in Las Piedras/Coro area) or Simón Bolívar International Airport (CCS, Caracas). From Caracas, you can fly or take a long-distance bus to the Tucacas/Chichiriviche area, then transfer by taxi or private transport to the park entrance."',
  'content: "The nearest domestic/international airport is Arturo Michelena International Airport (VLN) in Valencia, about a 2-hour drive; or Simón Bolívar International Airport (CCS) in Caracas, about a 4-hour drive."'
);
code = code.replace(
  'content: "From Caracas, take the West Central Highway (Carretera Centro Occidental) westward for about 5-6 hours to reach Falcón State. The main park entrance is near Tucacas, with clear signage. Parking is available at the entrance."',
  'content: "Some areas in Morrocoy are directly accessible by car (e.g., Punta Brava, connected by a bridge where you can park right on the beach). From Caracas, take the West Central Highway westward for about 5-6 hours to Falcón State."'
);
code = code.replace(
  'content: "Most cays (such as Cayo Sombrero, Cayo Muerto, etc.) are accessible only by boat. Numerous boat operators at the park entrance offer half-day or full-day trips; prices are usually negotiated on-site."',
  'content: "The vast majority of the most beautiful outer islands (Cayos) require taking a local open-top speedboat (locally called Peñeros) from the docks (Embarcaderos) in Tucacas or Chichiriviche."'
);

// ES transportation
code = code.replace(
  'content: "Los aeropuertos más cercanos son el Aeropuerto Internacional Josefa Camejo (LAS, en el área de Las Piedras/Coro) o el Aeropuerto Internacional Simón Bolívar (CCS, Caracas). Desde Caracas, puede volar o tomar un autobús de larga distancia al área de Tucacas/Chichiriviche, luego transferirse en taxi o transporte privado a la entrada del parque."',
  'content: "El aeropuerto nacional/internacional más cercano es el Aeropuerto Internacional Arturo Michelena (VLN) en Valencia, a unas 2 horas en coche; o el Aeropuerto Internacional Simón Bolívar (CCS) en Caracas, a unas 4 horas en coche."'
);
code = code.replace(
  'content: "Desde Caracas, tome la Carretera Centro Occidental hacia el oeste por about 5-6 horas para llegar al estado Falcón. La entrada principal del parque está cerca de Tucacas, con señalización clara. Hay estacionamiento disponible en la entrada."',
  'content: "Algunas áreas en Morrocoy son directamente accesibles en automóvil (por ejemplo, Punta Brava, conectada por un puente donde se puede estacionar en la playa). Desde Caracas, tome la Carretera Centro Occidental hacia el oeste por unas 5-6 horas hasta el estado Falcón."'
);
code = code.replace(
  'content: "La mayoría de los cayos (como Cayo Sombrero, Cayo Muerto, etc.) solo son accesibles en bote. Numerosos operadores de botes en la entrada del parque ofrecen viajes de medio día o día completo; los precios generalmente se negocian en el sitio."',
  'content: "La gran mayoría de las islas exteriores más hermosas (Cayos) requieren tomar una lancha rápida local sin techo (localmente llamada Peñeros) desde los muelles (Embarcaderos) en Tucacas o Chichiriviche."'
);

// FAQ
code = code.replace(
  'answer: "最受欢迎的珊瑚岛包括：\\n\\n1. Cayo Sombrero — 拥有最完善的设施（餐厅、卫生间、遮阳棚），沙滩洁白，海水清澈，适合家庭游客。\\n\\n2. Cayo Muerto — 生态环境保持较好，适合浮潜和安静地享受海滩。\\n\\n3. Cayo Sal — 因海龟产卵而闻名，在特定季节可以看到海龟巢穴（请保持距离，不要打扰）。\\n\\n4. Cayo Pelón — 相对原始，游客较少，适合喜欢安静的旅行者。\\n\\n建议提前规划行程，因为游船通常上午出发，下午返回。"',
  'answer: "最受欢迎的珊瑚岛包括：\\n\\n1. Cayo Sombrero — 拥有最完善的设施（餐厅、卫生间、遮阳棚），沙滩洁白，海水清澈，适合家庭游客。\\n\\n2. Cayo Muerto — 生态环境保持较好，适合浮潜和安静地享受海滩。\\n\\n3. Cayo Sal — 最大的特色是其岛屿中心有一个天然盐湖（Salina），许多游客认为这里的盐泥有护肤功效。此外，岛上基础设施非常完善。\\n\\n4. Cayo Pelón — “Pelón” 在西班牙语中意为“秃的”。这个岛实际上是一个完全没有植被、没有树荫的纯白沙洲。必须提醒：岛上没有任何遮挡物或树木，必须自带遮阳伞和充足的防晒装备。\\n\\n建议提前规划行程，因为游船通常上午出发，下午返回。"\\n        },\\n        {\\n          question: "当地治安如何？在沙滩上物品安全吗？",\\n          answer: "在主要的珊瑚岛上，白天游客较多且有管理人员巡逻，相对安全。但仍建议不要携带贵重物品，下水时最好有人看管随身包物。"\\n        },\\n        {\\n          question: "去外岛可以刷卡吗？",\\n          answer: "必须强调：请带足现金/美元零钞。外岛通常没有信号，POS机无法使用。"'
);

code = code.replace(
  'answer: "The most popular cays include:\\n\\n1. Cayo Sombrero — The most well-equipped cay (restaurants, restrooms, shade structures), with white sand and clear water, ideal for families.\\n\\n2. Cayo Muerto — Better preserved ecological environment, suitable for snorkeling and quiet beach enjoyment.\\n\\n3. Cayo Sal — Famous for sea turtle nesting. You may see turtle nests during nesting season (please keep distance and do not disturb).\\n\\n4. Cayo Pelón — Relatively pristine with fewer tourists, suitable for travelers seeking tranquility.\\n\\nIt is recommended to plan your itinerary in advance, as boats usually depart in the morning and return in the afternoon."',
  'answer: "The most popular cays include:\\n\\n1. Cayo Sombrero — The most well-equipped cay (restaurants, restrooms, shade structures), with white sand and clear water, ideal for families.\\n\\n2. Cayo Muerto — Better preserved ecological environment, suitable for snorkeling and quiet beach enjoyment.\\n\\n3. Cayo Sal — The biggest feature is its natural salt lake (Salina) in the center, and many tourists believe the salt mud has skin care benefits. It also has excellent infrastructure.\\n\\n4. Cayo Pelón — \'Pelón\' means \'bald\' in Spanish. This island is actually a pure white sandbank completely devoid of vegetation and shade. Warning: Must bring your own umbrella and plenty of sun protection.\\n\\nIt is recommended to plan your itinerary in advance, as boats usually depart in the morning and return in the afternoon."\\n        },\\n        {\\n          question: "How is the local security? Are belongings safe on the beach?",\\n          answer: "On the main coral islands during the day, there are many tourists and patrol staff, making it relatively safe. However, it is still recommended not to bring valuables, and it is best to have someone watch your bags when you enter the water."\\n        },\\n        {\\n          question: "Can I use credit cards on the outer islands?",\\n          answer: "It must be emphasized: Please bring enough cash/USD bills. Outer islands usually have no signal, and POS machines cannot be used."'
);

code = code.replace(
  'answer: "Los cayos más populares incluyen:\\n\\n1. Cayo Sombrero — El cayo más equipado (restaurantes, baños, estructuras de sombra), con arena blanca y agua cristalina, ideal para familias.\\n\\n2. Cayo Muerto — Mejor preservado ecológicamente, adecuado para snorkel y disfrutar de la playa en tranquillidad.\\n\\n3. Cayo Sal — Famoso por la anidación de tortugas marinas. Puede ver nidos de tortugas durante la temporada de anidación (mantenga distancia y no moleste).\\n\\n4. Cayo Pelón — Relativamente prístino con menos turistas, adecuado para viajeros que buscan tranquilidad.\\n\\nSe recomienda planificar el itinerario con anticipación, ya que los botes generalmente salen por la mañana y regresan por la tarde."',
  'answer: "Los cayos más populares incluyen:\\n\\n1. Cayo Sombrero — El cayo más equipado (restaurantes, baños, estructuras de sombra), con arena blanca y agua cristalina, ideal para familias.\\n\\n2. Cayo Muerto — Mejor preservado ecológicamente, adecuado para snorkel y disfrutar de la playa en tranquillidad.\\n\\n3. Cayo Sal — La mayor característica es su lago de sal natural (Salina) en el centro, y muchos turistas creen que el lodo de sal tiene beneficios para la piel. También cuenta con excelente infraestructura.\\n\\n4. Cayo Pelón — Como su nombre indica, esta isla es en realidad un banco de arena blanca pura completamente sin vegetación ni sombra. Advertencia: Debe traer su propia sombrilla y abundante protección solar.\\n\\nSe recomienda planificar el itinerario con anticipación, ya que los botes generalmente salen por la mañana y regresan por la tarde."\\n        },\\n        {\\n          question: "¿Cómo es la seguridad local? ¿Están seguras las pertenencias en la playa?",\\n          answer: "En las principales islas de coral durante el día, hay muchos turistas y personal de patrulla, lo que lo hace relativamente seguro. Sin embargo, todavía se recomienda no traer objetos de valor, y es mejor tener a alguien vigilando sus maletas cuando entre al agua."\\n        },\\n        {\\n          question: "¿Puedo usar tarjetas de crédito en las islas exteriores?",\\n          answer: "Debe enfatizarse: Por favor traiga suficiente efectivo/billetes de USD. Las islas exteriores generalmente no tienen señal y no se pueden usar máquinas POS."'
);

// Footer links
code = code.replace(
  '{ name: "委内瑞拉生态社会主义部", url: "https://www.minec.gob.ve/" },\\n        { name: "委内瑞拉人民政权旅游部", url: "http://www.mintur.gob.ve/" },\\n        { name: "法尔孔州政府", url: "https://gobernacion.falcon.gob.ve/" },\\n        { name: "世界保护区数据库", url: "https://www.protectedplanet.net/" },\\n        { name: "国际湿地公约信息系统", url: "https://rsis.ramsar.org/" },\\n        { name: "委内瑞拉非盈利生态保护NGO", url: "https://www.provita.org.ve/" },',
  '{ name: "紧急救援电话：911", url: "#" },\\n        { name: "当地旅游警察电话：+58 259 812 0000", url: "#" },'
);
code = code.replace(
  '{ name: "Ministry of Ecosocialism (Venezuela)", url: "https://www.minec.gob.ve/" },\\n        { name: "Ministry of Tourism (Venezuela)", url: "http://www.mintur.gob.ve/" },\\n        { name: "Falcón State Government", url: "https://gobernacion.falcon.gob.ve/" },\\n        { name: "World Database on Protected Areas", url: "https://www.protectedplanet.net/" },\\n        { name: "Ramsar Information Sheet", url: "https://rsis.ramsar.org/" },\\n        { name: "Provita (Venezuelan Conservation NGO)", url: "https://www.provita.org.ve/" },',
  '{ name: "Emergency Rescue: 911", url: "#" },\\n        { name: "Local Tourism Police: +58 259 812 0000", url: "#" },'
);
code = code.replace(
  '{ name: "Ministerio del Poder Popular para el Ecosocialismo", url: "https://www.minec.gob.ve/" },\\n        { name: "Ministerio del Poder Popular para el Turismo", url: "http://www.mintur.gob.ve/" },\\n        { name: "Gobernación del Estado Falcón", url: "https://gobernacion.falcon.gob.ve/" },\\n        { name: "Base de Datos Mundial de Áreas Protegidas", url: "https://www.protectedplanet.net/" },\\n        { name: "Ficha Informativa Ramsar", url: "https://rsis.ramsar.org/" },\\n        { name: "Provita (ONG de Conservación Venezolana)", url: "https://www.provita.org.ve/" },',
  '{ name: "Rescate de Emergencia: 911", url: "#" },\\n        { name: "Policía de Turismo Local: +58 259 812 0000", url: "#" },'
);

const zhAdd = `    islandCategories: {
      title: "岛屿推荐分类",
      family: { title: "家庭亲子首选", content: "Cayo Sombrero, Cayo Sal (设施完善，水浅，沙滩洁白，适合带小孩的家庭。Cayo Sal 还有天然盐湖。)" },
      snorkeling: { title: "浮潜与生态探险", content: "Cayo Peraza, Bajo Caimán (珊瑚繁茂，鱼类多，生态环境保持极佳，适合浮潜爱好者。)" },
      photography: { title: "小众出片圣地", content: "Cayo Pelón, Los Juanes (纯白海上沙洲、可以在齐腰深的海水里购买游艇小贩的海鲜，拍照极具特色。)" },
    },
    utilitiesAndMap: {
      title: "实用工具与互动地图",
      weather: { title: "🌦️ 实时天气与潮汐", today: "今日天气", temp: "晴朗 32°C", waterTempLabel: "水温", waterTemp: "28°C", uvLabel: "紫外线指数 (UV)", uv: "极高 (11+)", windLabel: "风力", wind: "微风 10 km/h", note: "* 提示：紫外线极强，请务必做好防晒。" },
      boatPrices: { title: "🚤 参考船费表 (从 Tucacas 出发)", cayoMuerto: "Cayo Muerto / Cayo Sal", cayoMuertoPrice: "$20 - $30 (包船)", cayoSombrero: "Cayo Sombrero", cayoSombreroPrice: "$50 - $60 (包船)", losJuanes: "Los Juanes", losJuanesPrice: "$60 - $70 (包船)", shared: "拼船单人价 (Cayo Sombrero)", sharedPrice: "$10 - $15 / 人", note: "* 价格仅供参考，以现场码头报价为准。每艘快艇(Peñero)通常可坐 6-8 人。" },
      map: { title: "🗺️ 互动地图 (Interactive Map)", hint1: "点击 Tucacas 或 Chichiriviche 查看游船路线与各岛屿详情", hint2: "(互动地图模块加载中...)" },
    },
    visiting: {`;

const enAdd = `    islandCategories: {
      title: "Island Recommendations",
      family: { title: "Family & Kids First Choice", content: "Cayo Sombrero, Cayo Sal (Well-equipped, shallow water, white sand, suitable for families with kids. Cayo Sal also has a natural salt lake.)" },
      snorkeling: { title: "Snorkeling & Eco Adventure", content: "Cayo Peraza, Bajo Caimán (Lush corals, many fish, excellent ecological environment, suitable for snorkeling enthusiasts.)" },
      photography: { title: "Niche Photography Spots", content: "Cayo Pelón, Los Juanes (Pure white sandbanks, buy seafood from boat vendors in waist-deep water, very unique for photos.)" },
    },
    utilitiesAndMap: {
      title: "Utilities & Interactive Map",
      weather: { title: "🌦️ Real-time Weather & Tide", today: "Today's Weather", temp: "Sunny 32°C", waterTempLabel: "Water Temp", waterTemp: "28°C", uvLabel: "UV Index", uv: "Extreme (11+)", windLabel: "Wind", wind: "Breeze 10 km/h", note: "* Tip: UV is extremely strong, please wear sun protection." },
      boatPrices: { title: "🚤 Reference Boat Prices (from Tucacas)", cayoMuerto: "Cayo Muerto / Cayo Sal", cayoMuertoPrice: "$20 - $30 (Private)", cayoSombrero: "Cayo Sombrero", cayoSombreroPrice: "$50 - $60 (Private)", losJuanes: "Los Juanes", losJuanesPrice: "$60 - $70 (Private)", shared: "Shared Boat (Cayo Sombrero)", sharedPrice: "$10 - $15 / person", note: "* Prices are for reference only, subject to on-site dock quotes. Each speedboat (Peñero) usually seats 6-8 people." },
      map: { title: "🗺️ Interactive Map", hint1: "Click Tucacas or Chichiriviche to view boat routes and island details", hint2: "(Interactive map module loading...)" },
    },
    visiting: {`;

const esAdd = `    islandCategories: {
      title: "Recomendaciones de Islas",
      family: { title: "Primera Opción para Familias", content: "Cayo Sombrero, Cayo Sal (Bien equipado, agua poco profunda, arena blanca, ideal para familias con niños. Cayo Sal también tiene un lago de sal natural.)" },
      snorkeling: { title: "Snorkel y Aventura Ecológica", content: "Cayo Peraza, Bajo Caimán (Corales exuberantes, muchos peces, excelente entorno ecológico, adecuado para entusiastas del snorkel.)" },
      photography: { title: "Lugares de Fotografía Únicos", content: "Cayo Pelón, Los Juanes (Bancos de arena blanca pura, compre mariscos de vendedores en botes con el agua hasta la cintura, muy único para fotos.)" },
    },
    utilitiesAndMap: {
      title: "Herramientas Prácticas y Mapa Interactivo",
      weather: { title: "🌦️ Clima y Marea en Tiempo Real", today: "Clima de Hoy", temp: "Soleado 32°C", waterTempLabel: "Temp del Agua", waterTemp: "28°C", uvLabel: "Índice UV", uv: "Extremo (11+)", windLabel: "Viento", wind: "Brisa 10 km/h", note: "* Consejo: Los rayos UV son extremadamente fuertes, por favor use protección solar." },
      boatPrices: { title: "🚤 Precios de Botes de Referencia (desde Tucacas)", cayoMuerto: "Cayo Muerto / Cayo Sal", cayoMuertoPrice: "$20 - $30 (Privado)", cayoSombrero: "Cayo Sombrero", cayoSombreroPrice: "$50 - $60 (Privado)", losJuanes: "Los Juanes", losJuanesPrice: "$60 - $70 (Privado)", shared: "Bote Compartido (Cayo Sombrero)", sharedPrice: "$10 - $15 / persona", note: "* Los precios son solo de referencia, sujetos a cotizaciones en el muelle. Cada lancha rápida (Peñero) generalmente tiene capacidad para 6-8 personas." },
      map: { title: "🗺️ Mapa Interactivo", hint1: "Haga clic en Tucacas o Chichiriviche para ver rutas de botes y detalles de la isla", hint2: "(Módulo de mapa interactivo cargando...)" },
    },
    visiting: {`;

let parts = code.split('visiting: {');
if (parts.length === 4) {
   code = parts[0] + zhAdd + parts[1] + enAdd + parts[2] + esAdd + parts[3];
}

fs.writeFileSync(file, code);
console.log('done');
