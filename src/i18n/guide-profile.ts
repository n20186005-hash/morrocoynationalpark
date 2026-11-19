type Locale = "es" | "en" | "zh";
type Copy = [tagline: string, feature: string, note: string, photo: string];

function profile(base: "Tucacas" | "Chichiriviche", es: Copy, en: Copy, zh: Copy) {
  return { base, text: { es, en, zh } };
}

export const profiles = {
  "tucacas-beaches": profile("Tucacas",
    ["Playas del sur de Morrocoy", "El puente une el acceso terrestre de Tucacas con el sector de Punta Brava. La playa y el muelle para los cayos son dos destinos distintos.", "Consulta por separado el acceso peatonal y vehicular al puente antes de salir. Una noticia del 15 de noviembre de 2026 informa que el sector comercial aún solicitaba su reparación.", "Desde la orilla habilitada, encuadra el arenal en diagonal. Evita detenerte en el puente para fotografiar."],
    ["Beaches at the southern end of Morrocoy", "The bridge links land access from Tucacas to the Punta Brava area. The beach and the dock for offshore cays are separate destinations.", "Check pedestrian and vehicle access separately before setting out. A November 15, 2026 report says local businesses were still calling for bridge repairs.", "Frame the beach diagonally from an accessible stretch of shore. Keep the bridge clear."],
    ["莫罗科伊南部海滩", "桥梁将图卡卡斯陆路与蓬塔布拉瓦一带相连。去海滩与去出海码头是两段不同路线。", "出发前分别查询桥梁对行人和车辆的通行规定。2026 年 11 月 15 日，当地媒体仍报道了商界要求维修桥梁的消息。", "从开放岸段斜向构图，拍下沙滩延伸的方向，避免在桥上停留拍摄。"]),
  "chichiriviche-boat-trips": profile("Chichiriviche",
    ["Malecón, muelles y salidas a los cayos", "Desde el paseo marítimo puedes orientar la visita entre el muelle Playa Norte y los cayos frente al pueblo. Los peñeros forman parte del transporte local.", "Anota el nombre de tu embarcadero de ida y confirma si el regreso termina allí. El malecón es un paseo independiente del viaje en lancha.", "Desde el malecón, apunta hacia Cayo Muerto y deja el tránsito del muelle fuera del encuadre."],
    ["Waterfront, docks and departures to the cays", "The promenade helps you orient yourself between Playa Norte dock and the islands offshore. Local passenger boats, known as peñeros, are part of the coastal transport network.", "Record your departure dock and confirm whether the boat returns there. The promenade can be visited on foot separately.", "Frame Cayo Muerto from the public promenade, away from the boarding queue."],
    ["海滨步道、北滩码头与跳岛船程", "从海滨步道可以辨认北滩码头和镇外岛屿。当地称作 peñero 的小艇是连接各岛的交通工具。", "记下去程码头，并问清是否回到同一处。海滨步道可作为单独的陆上行程。", "从公共海滨步道朝穆埃尔托岛拍摄，避开码头候船队伍。"]),
  "cayo-sombrero": profile("Tucacas",
    ["Playas de arena blanca y palmeras", "La franja de palmeras, el arenal y los arrecifes cercanos muestran tres ambientes del parque en una sola visita.", "Acuerda la playa de desembarque y comprueba las indicaciones locales antes de nadar. Lleva de vuelta tus residuos.", "Desde la arena, coloca la línea de palmeras a un lado y el agua al otro para mostrar la forma de la playa."],
    ["White sand and palm-lined beaches", "The palms, sandy shore and nearby reefs offer a view of three coastal habitats on one visit.", "Agree on a landing beach and check local instructions before swimming. Take your rubbish back with you.", "From the sand, frame the palms on one side and the water on the other to show the shape of the beach."],
    ["白沙、棕榈与近岸礁区", "棕榈带、白沙滩与近岸珊瑚礁，让同一次登岛能观察三种海岸环境。", "先约定在哪片沙滩下船，下水前查看现场指示。离岛时带走随身垃圾。", "在沙滩上让棕榈与水面分列画面两侧，突出岸线形状。"]),
  "cayo-sal": profile("Chichiriviche",
    ["La playa occidental frente a Chichiriviche", "Su playa occidental mira al continente. Desde la orilla se distingue el canal por el que llega la lancha.", "Si el recorrido incluye varios cayos, toma nota del punto exacto donde volverás a embarcar en Sal.", "Desde la playa occidental, apunta hacia la costa de Chichiriviche para mostrar la separación entre isla y continente."],
    ["A west-facing beach opposite Chichiriviche", "The west beach faces the mainland. From the sand you can see the channel used on the boat approach.", "On a multi-cay itinerary, note the exact reboarding point on Sal before walking away.", "Shoot back toward Chichiriviche from the west beach to show the channel separating the island from the mainland."],
    ["面向奇奇里维切的西岸海滩", "盐岛西岸面向大陆。从沙滩可以回望乘船经过的水道。", "若串联多岛，登岛后先记住在盐岛的回程接船位置。", "在西岸朝奇奇里维切取景，让岛岸、水道和大陆同时入镜。"]),
  "cayo-muerto": profile("Chichiriviche",
    ["Un islote visible desde el malecón", "La cercanía al paseo de Chichiriviche permite reconocer la silueta del islote desde tierra y comparar esa vista con la de la travesía.", "Confirma el desembarque antes de pagar el traslado. Para verlo desde tierra, el malecón es la referencia más sencilla.", "Toma una vista amplia desde el malecón para incluir el perfil completo del islote."],
    ["An islet visible from the waterfront", "The Chichiriviche promenade offers a clear reference for identifying the islet before comparing that view with the approach by boat.", "Confirm landing access before paying for the crossing. Use the promenade if you only want to see it from land.", "Use a wide frame from the waterfront to capture the outline of the entire islet."],
    ["从海滨步道就能望见的小岛", "岛屿离奇奇里维切海滨不远，先在镇上辨认其轮廓，再与乘船接近时的视角比较。", "付船费前确认可否登岛。只想从陆地望岛时，海滨步道是清楚的定位点。", "在海滨步道用较宽的构图拍下小岛的完整轮廓。"]),
  "boca-seca": profile("Tucacas",
    ["Del canal de entrada al arenal", "La entrada por agua permite ver primero el estrechamiento del canal y después la apertura hacia la playa.", "Pide la parada por su nombre completo y deja libre el paso en la zona de embarque.", ""],
    ["From the entrance channel to the beach", "The boat approach reveals the narrow entrance channel before the view opens onto the beach.", "Ask for the stop by its full name and keep the boarding area clear.", ""],
    ["从狭窄水道到开阔沙滩", "从水路抵达时，先看到收窄的入口，两岸植被之后才逐渐让出开阔的沙滩。", "订船时使用海滩全名，登岸后给上下船区域留出通道。", ""]),
  "los-juanes": profile("Tucacas",
    ["Una piscina natural entre laguna y arrecife", "El interés de la parada está en observar desde el agua la transición entre canales y bajos.", "Acuerda con la tripulación cómo volver a subir y si el itinerario incluye una playa con desembarque.", ""],
    ["A natural pool between lagoon and reef", "The stop gives you a view from the water of the changing depth between channels and shallows.", "Ask the crew how to reboard and whether the itinerary includes a beach landing elsewhere.", ""],
    ["潟湖与礁区之间的天然水池", "乘船经过浅滩与水道时，可以观察两种水域如何衔接。", "先问清如何返回船上，以及同一船程是否另含可下船的沙滩。", ""]),
  "cayo-playuela": profile("Tucacas",
    ["Una caminata corta junto a las palmeras", "La arboleda permite distinguir los tramos de sombra de los sectores abiertos de arena.", "Acuerda cuánto tiempo tendrás en tierra y elige un tramo que permita volver con margen.", ""],
    ["A short shoreline walk beside the palms", "The line of palms makes it easy to distinguish the shaded stretches from the open sand.", "Ask how much time you will have ashore and choose a stretch you can comfortably walk back from.", ""],
    ["适合沿棕榈沙滩短走一段", "沿棕榈排列的方向走，可以清楚分辨有树荫的岸段和开阔沙滩。", "先约定停留时间，走到仍来得及折返的位置即可。", ""]),
  "cayo-peraza": profile("Chichiriviche",
    ["Un islote compacto al este de Cayo Muerto", "En la travesía se aprecia mejor el canal que lo separa de Muerto y el contraste entre la vegetación y el agua.", "Si contratas Peraza y Muerto juntos, acuerda en cuál desembarcarás y cuánto tiempo tendrás en cada parada.", ""],
    ["A compact cay east of Cayo Muerto", "The boat approach offers the clearest view of the channel separating the two cays and the vegetation against open water.", "If you book Peraza and Muerto together, agree where you will land and how long each stop lasts.", ""],
    ["穆埃尔托岛东边的紧凑小岛", "在船上更容易看清它与穆埃尔托岛之间的水道，以及岛上植被与外侧水面的分界。", "若把两岛排进同一船程，订船时说明在哪一座下船、各停留多久。", ""]),
  "cayo-pescadores": profile("Chichiriviche",
    ["Un cayo del frente marítimo oriental", "La posición respecto a Cayo Alemán es una referencia útil para reconocer Pescadores desde el agua.", "Confirma el cayo en el mapa con el lanchero. Pregunta si se trata de una parada panorámica o incluye desembarque.", ""],
    ["A cay on Morrocoy’s eastern side", "Its position relative to Cayo Alemán is a useful landmark when identifying Pescadores from the water.", "Confirm the map location with your crew and ask whether the stop is a drive-by view or includes landing.", ""],
    ["莫罗科伊东侧的离岸小岛", "从水上辨认佩斯卡多雷斯岛时，可用它与阿莱曼岛的相对位置作参照。", "把地图给船家核对，并问清这站是从船上观景还是可以登岛。", ""]),
  "cueva-del-indio": profile("Chichiriviche",
    ["Un abrigo calizo con grabados prehispánicos", "El interés del lugar combina el abrigo natural del farallón y las huellas culturales de sus grabados.", "Mantén distancia de las superficies grabadas. Si ese día no hay desembarque, observa la entrada desde la lancha.", ""],
    ["A limestone shelter with pre-Hispanic rock art", "The natural shelter in the bluff and the carvings preserved on its rock surface are the two main features of the visit.", "Keep your distance from carved surfaces. If landing is unavailable, view the shelter entrance from the boat.", ""],
    ["保存前西班牙时期岩刻的石灰岩棚", "游览重点是崖壁形成的天然岩棚，以及岩面上留存的原住民刻痕。", "与岩刻表面保持距离。当天无法靠岸时，可从船上观察岩棚入口。", ""]),
};

export const profileLabels = {
  es: { overview: "Explora el lugar", features: "Lo más destacado", type: "Tipo de visita", base: "Base de salida", operator: "Gestión del espacio protegido", schedule: "Horarios y acceso", fees: "Entradas y precios", rules: "Antes de salir", stay: "Dónde alojarse", directions: "Ubicación y mapa", more: "Más guías de la zona", ratings: "Consultar valoraciones" },
  en: { overview: "Explore the site", features: "Highlights", type: "Type of visit", base: "Departure base", operator: "Protected-area management", schedule: "Hours and access", fees: "Tickets and prices", rules: "Before you go", stay: "Where to stay", directions: "Location and map", more: "More nearby guides", ratings: "Check visitor ratings" },
  zh: { overview: "探索景点", features: "景区特色", type: "游览类型", base: "出发据点", operator: "保护区管理", schedule: "开放时间", fees: "门票与费用", rules: "游览须知", stay: "住宿建议", directions: "交通指南", more: "更多周边专页", ratings: "查看游客评价" },
};

export function planning(slug: keyof typeof profiles, locale: Locale) {
  const { base } = profiles[slug];
  const land = slug === "tucacas-beaches";
  const dock = slug === "chichiriviche-boat-trips";
  const type = {
    es: land ? "Playa costera" : dock ? "Paseo marítimo y embarcadero" : "Parada en lancha",
    en: land ? "Coastal beach" : dock ? "Waterfront and boat dock" : "Boat-access stop",
    zh: land ? "沿海沙滩" : dock ? "海滨步道与码头" : "乘船游览点",
  };
  const baseName = locale === "zh" ? (base === "Tucacas" ? "图卡卡斯（Tucacas）" : "奇奇里维切（Chichiriviche）") : base;
  const fees = {
    es: land ? "Consulta si hay un cobro de acceso o estacionamiento en Punta Brava. Si cambias a un cayo, pide aparte el precio de la lancha." : "Pide la tarifa de ida y vuelta, si se cobra por persona o por lancha y si el precio incluye esperas o varias paradas. Pregunta aparte por cualquier cobro de acceso.",
    en: land ? "Ask whether beach access or parking at Punta Brava carries a charge. If you switch to a cay, get a separate boat quote." : "Get a round-trip quote and ask whether it is per passenger or per boat. Check whether waiting time or extra stops are included and whether any access charge is separate.",
    zh: land ? "到蓬塔布拉瓦前，查询入场或停车是否收费。改走跳岛路线时，船费另向码头询价。" : "向船家问清往返总价、按人还是按船收费，以及等候和加停是否另计。如有现场入场收费，也请单独确认。",
  };
  const stay = {
    es: `Busca alojamiento en ${baseName} con acceso al punto de salida. Si vas a embarcar temprano, confirma con el alojamiento la hora de salida y cómo llegar al muelle.`,
    en: `Look for accommodation in ${baseName} near your departure point. For an early boat, confirm how to reach the dock from your lodging before booking.`,
    zh: `住宿可优先看${baseName}靠近实际出发点的区域。计划搭早船时，订房前问清住处到登船码头怎么走。`,
  };
  return { type: type[locale], baseName, fees: fees[locale], stay: stay[locale] };
}

export const fareSource = "https://www.noticiascol.com/2026/09/01/precios-actualizados-para-visitar-los-cayos-de-morrocoy-cuanto-cuesta-el-traslado/";
export const bridgeSource = "https://prensapuntofijo.com/comerciantes-de-morrocoy-piden-reparacion-del-puente-punta-brava/";

const reportedFares: Partial<Record<keyof typeof profiles, number>> = {
  "cayo-muerto": 40,
  "cayo-sal": 50,
  "cayo-peraza": 60,
  "cayo-sombrero": 120,
  "cayo-pescadores": 130,
};

export function reportedFare(slug: keyof typeof profiles, locale: Locale) {
  const amount = reportedFares[slug];
  if (!amount) return;
  return {
    es: `Referencia del 1 de septiembre de 2026: ${amount} USD por lancha, ida y vuelta desde Chichiriviche. Confirma la tarifa del día en el muelle.`,
    en: `September 1, 2026 reference: US$${amount} per boat, round trip from Chichiriviche. Confirm the day’s fare at the dock.`,
    zh: `2026 年 9 月 1 日报道的参考船费为每船 ${amount} 美元，包含从奇奇里维切出发的往返。当天价格请在码头核实。`,
  }[locale];
}

export const discovery: Partial<Record<keyof typeof profiles, Record<Locale, string>>> = {
  "tucacas-beaches": {
    es: "La creación del parque en 1974 protegió el extremo costero de Tucacas junto con los cayos y manglares vecinos. En Punta Brava, la conexión por puente explica por qué la visita terrestre se organiza de forma diferente a una excursión en lancha.",
    en: "Morrocoy’s designation in 1974 protected the coast around Tucacas alongside the neighbouring cays and mangroves. Punta Brava’s bridge connection is the reason a visit to this beach can be planned separately from a boat excursion.",
    zh: "莫罗科伊国家公园于 1974 年设立，图卡卡斯周边海岸、岛礁和红树林一同纳入保护。蓬塔布拉瓦有桥梁相连，因此可独立安排陆路游览。",
  },
  "chichiriviche-boat-trips": {
    es: "La navegación en peñero enlaza el pueblo con islas como Sal y Muerto. Desde el malecón se entiende la relación entre el casco urbano, los embarcaderos y las playas separadas por agua.",
    en: "Traditional peñeros connect the town with islands such as Sal and Muerto. From the promenade you can see how the town, its docks and the beaches across the water fit together.",
    zh: "当地的 peñero 小艇连接镇区与盐岛、穆埃尔托岛。从海滨步道望去，镇区、码头和水道对岸的沙滩各自承担不同的游览功能。",
  },
  "cayo-sombrero": {
    es: "INPARQUES identifica Sombrero como uno de los islotes mayores del parque. Desde tierra se aprecia la transición de la franja de palmeras al arenal y al agua donde se encuentran los arrecifes cercanos.",
    en: "INPARQUES identifies Sombrero as one of the park’s larger cays. From the beach, look at how the palm belt gives way to sand and then the water above the nearby reefs.",
    zh: "INPARQUES 将松布雷罗列为公园内较大的岛屿之一。沿岸可观察棕榈带、白沙滩和近岸礁区之间的过渡。",
  },
  "cayo-sal": {
    es: "El decreto de 1974 nombra Cayo Sal como parte del parque. Su playa occidental funciona como referencia para distinguir el punto de visita del resto del islote y de Cayo Muerto, situado más al sur.",
    en: "The park’s founding decree names Cayo Sal. Its west-facing beach provides a specific landing reference on the island and helps distinguish it from Cayo Muerto farther south.",
    zh: "1974 年国家公园设立法令列入盐岛。订船时用西岸海滩作定位，既能明确下船点，也能与南边的穆埃尔托岛区分。",
  },
  "cayo-muerto": {
    es: "Cayo Muerto figura en el decreto fundacional. Su cercanía a Chichiriviche permite observar desde tierra la separación entre el malecón y este islote protegido.",
    en: "Cayo Muerto is named in the park’s founding decree. Its proximity to Chichiriviche makes it possible to see the channel separating the promenade from the protected islet.",
    zh: "穆埃尔托岛列在国家公园设立法令中。它与奇奇里维切之间的水道距离较短，从海滨步道就能看清镇区与受保护岛屿的分界。",
  },
};
