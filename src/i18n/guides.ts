export const languages = ["es", "en", "zh"] as const;
export const siteUrl = "https://www.morrocoynationalpark.com";

export const homeSeo = {
  es: ["Parque Nacional Morrocoy, Venezuela | Cayos y playas", "Planea tu visita al Parque Nacional Morrocoy en Falcón. Explora los cayos, las playas de Tucacas y las salidas en lancha desde Chichiriviche."],
  en: ["Morrocoy National Park, Venezuela | Beaches & Boat Trips", "Plan your visit to Morrocoy National Park in Falcón, Venezuela. Explore the cays, Tucacas beaches and boat departures from Chichiriviche."],
  zh: ["莫罗科伊国家公园｜委内瑞拉海滩与跳岛攻略", "规划委内瑞拉法尔孔州莫罗科伊国家公园之旅，了解图卡卡斯海滩、奇奇里维切乘船点与松布雷罗岛。"],
} as const;

export const guideLabels = {
  es: { explore: "Playas y cayos de Morrocoy", home: "Inicio", map: "Abrir en Google Maps", advice: "Consejos de visita", about: "Gestión del parque", facts: "Información básica", place: "Ubicación", access: "Acceso", route: "Cómo organizar la visita", faq: "Preguntas frecuentes", related: "Sigue explorando Morrocoy", sources: "Fuentes" },
  en: { explore: "Morrocoy beaches and cays", home: "Home", map: "Open in Google Maps", advice: "Visiting tips", about: "Park management", facts: "Visitor information", place: "Location", access: "Access", route: "Plan your visit", faq: "Frequently asked questions", related: "Explore more of Morrocoy", sources: "Sources" },
  zh: { explore: "探索莫罗科伊海滩与岛屿", home: "首页", map: "在 Google 地图中打开", advice: "游览建议", about: "公园管理单位", facts: "基本资料", place: "所在地", access: "到达方式", route: "游览路线", faq: "常见问题", related: "继续探索莫罗科伊", sources: "资料来源" },
};

const parkSource = "https://www.inparques.gob.ve/Parques%20Nacionales/morrocoy.html";

export const guides = [
  {
    slug: "tucacas-beaches" as const,
    mapQuery: "Playa Punta Brava, Tucacas, Falcón, Venezuela",
    sources: [["INPARQUES", parkSource], ["La Mañana", "https://lamananadigital.com/puente-de-punta-brava-sigue-cerrado/"]],
    copy: {
      es: {
        title: "Playas de Tucacas y Punta Brava",
        intro: "Tucacas es una base costera para visitar el sur del Parque Nacional Morrocoy. Organiza la jornada según quieras llegar por tierra a Punta Brava o embarcar hacia un cayo como Sombrero.",
        advice: "El acceso terrestre a Punta Brava depende del estado del puente. Se han reportado restricciones de paso. Consulta el aviso vigente antes de conducir hasta el acceso y deja margen para elegir una salida en lancha.",
        location: "Tucacas, municipio José Laurencio Silva, estado Falcón, Venezuela",
        access: "Puente de Punta Brava sujeto a habilitación. Para los cayos, acuerda la salida con un operador en Tucacas.",
        steps: ["Elige Punta Brava para una visita terrestre si el acceso está habilitado, o escoge un cayo antes de ir al muelle.", "Pide el importe total, la moneda, qué incluye el traslado y el punto exacto de recogida.", "Para una excursión de día, acuerda el regreso antes de embarcar y conserva el contacto del operador."],
        question: "¿Hay que tomar una lancha para visitar las playas de Tucacas?",
        answer: "Punta Brava tiene un acceso por puente que puede estar restringido. Para un cayo separado de tierra como Sombrero, organiza un traslado en lancha.",
      },
      en: {
        title: "Tucacas Beaches and Punta Brava",
        intro: "Tucacas is a coastal base for exploring the southern end of Morrocoy National Park. Plan around two options: the land approach to Punta Brava or a boat trip to a cay such as Sombrero.",
        advice: "The land approach to Punta Brava depends on the bridge. Access restrictions have been reported. Check the latest notice before driving there and allow time to arrange a boat trip if plans change.",
        location: "Tucacas, José Laurencio Silva municipality, Falcón, Venezuela",
        access: "Punta Brava bridge depending on access status. For the cays, arrange a boat from Tucacas.",
        steps: ["Choose Punta Brava if land access is available, or pick a cay before heading to the dock.", "Ask for the total fare, payment currency, what the transfer includes and the exact pickup point.", "Agree on your return before boarding for a day trip and keep the operator’s contact details."],
        question: "Do I need a boat to visit the beaches near Tucacas?",
        answer: "Punta Brava has a bridge approach that can be restricted. Offshore cays such as Sombrero require a boat transfer.",
      },
      zh: {
        title: "图卡卡斯海滩与蓬塔布拉瓦",
        intro: "图卡卡斯（Tucacas）是游览莫罗科伊国家公园南部的沿海据点。你可以安排从陆路前往蓬塔布拉瓦（Punta Brava），或乘船前往松布雷罗岛等离岸小岛。",
        advice: "蓬塔布拉瓦的陆路通行取决于桥梁开放情况，当地曾报道通行限制。开车前先查询最新公告，并预留改走乘船路线的时间。",
        location: "委内瑞拉法尔孔州何塞·劳伦西奥·席尔瓦市图卡卡斯",
        access: "蓬塔布拉瓦经桥梁抵达，以通行为准。前往离岸小岛可在图卡卡斯安排船只。",
        steps: ["若桥梁开放，可选蓬塔布拉瓦。准备乘船则先选定想去的岛屿，再到码头询问。", "询问总价、付款币种、费用包含项目及确切上船地点。", "出发前与船家约定回程，并保留联络方式。"],
        question: "去图卡卡斯附近的海滩都要乘船吗？",
        answer: "蓬塔布拉瓦有桥梁连接，通行可能受限。松布雷罗岛等离岸小岛须乘船。"
      },
    },
  },
  {
    slug: "chichiriviche-boat-trips" as const,
    mapQuery: "Embarcadero Playa Norte, Chichiriviche, Falcón, Venezuela",
    sources: [["INPARQUES", parkSource], ["Mapcarta", "https://mapcarta.com/es/W447131912"], ["Andaventura", "https://andaventura.com/guia-chichiriviche/"]],
    copy: {
      es: {
        title: "Chichiriviche y sus cayos en lancha",
        intro: "Chichiriviche es una de las puertas costeras de Morrocoy. El malecón y el Embarcadero Playa Norte sirven como referencias distintas al organizar una salida hacia Cayo Sal o Cayo Muerto.",
        advice: "Para un primer viaje, pide cotización de ida y vuelta a un solo cayo. Si quieres varias paradas, acuerda cuánto tiempo se dedica a cada una antes de contratar.",
        location: "Embarcadero Playa Norte, cerca del malecón de Chichiriviche, Falcón, Venezuela",
        access: "Por tierra hasta Chichiriviche y en lancha hacia los cayos. Confirma el muelle con el operador.",
        steps: ["Usa el mapa para ubicar Playa Norte y confirma allí dónde se aborda tu lancha.", "Compara Cayo Sal y Cayo Muerto según las salidas del día. Pregunta por el precio total, el chaleco y la hora de retorno.", "Antes de desembarcar, identifica el punto de recogida y acuerda cómo comunicarse para el regreso."],
        question: "¿Puedo pasear por Chichiriviche sin tomar lancha?",
        answer: "Sí, puedes recorrer el malecón en tierra. Para desembarcar en Cayo Sal o Cayo Muerto, necesitas contratar una lancha.",
      },
      en: {
        title: "Chichiriviche Boat Trips and Cays",
        intro: "Chichiriviche is a coastal gateway to Morrocoy. The waterfront promenade and the Playa Norte dock are separate landmarks when arranging a trip to Cayo Sal or Cayo Muerto.",
        advice: "For a first visit, get a round-trip quote for a single cay. If you want several stops, ask how long you will have at each stop before booking.",
        location: "Playa Norte dock, near the Chichiriviche waterfront, Falcón, Venezuela",
        access: "Travel overland to Chichiriviche and by boat to the cays. Confirm the dock with the operator.",
        steps: ["Use the map to locate Playa Norte and confirm where your boat boards.", "Compare the day’s departures for Cayo Sal and Cayo Muerto. Ask about the total fare, life jacket and return time.", "Before disembarking, identify the return pickup point and agree on how to contact the boat crew."],
        question: "Can I visit Chichiriviche without taking a boat?",
        answer: "Yes. You can walk the waterfront promenade on land. A boat is needed to land on Cayo Sal or Cayo Muerto.",
      },
      zh: {
        title: "奇奇里维切乘船与跳岛攻略",
        intro: "奇奇里维切（Chichiriviche）是进入莫罗科伊国家公园的沿海门户。安排盐岛（Cayo Sal）或穆埃尔托岛（Cayo Muerto）船程时，可用海滨步道与北滩码头作为两个定位点。",
        advice: "初次游玩可先询问单岛往返的价格。想一次多岛时，订船前问清每站实际停留多久。",
        location: "委内瑞拉法尔孔州奇奇里维切，海滨步道附近的北滩码头（Embarcadero Playa Norte）",
        access: "先走陆路到奇奇里维切，再转船前往各岛。上船码头以船家确认为准。",
        steps: ["用地图定位北滩码头，向船家确认准确的登船位置。", "比较当天去盐岛与穆埃尔托岛的船，问清往返总价、救生衣与返程时间。", "下船前记下回程接送点，并约定如何联系船家。"],
        question: "不坐船也能游览奇奇里维切吗？",
        answer: "可以沿镇上的海滨步道散步。若想登上盐岛或穆埃尔托岛，需要安排船只。",
      },
    },
  },
  {
    slug: "cayo-sombrero" as const,
    mapQuery: "Cayo Sombrero, Parque Nacional Morrocoy, Falcón, Venezuela",
    sources: [["INPARQUES", parkSource]],
    copy: {
      es: {
        title: "Cayo Sombrero",
        intro: "Cayo Sombrero es uno de los islotes más grandes de Morrocoy. Sus playas de arena blanca, palmeras y arrecifes cercanos permiten combinar tiempo en la orilla con observación del paisaje marino.",
        advice: "Reserva tiempo para caminar por la playa después de desembarcar. Para fotografiar la costa, encuadra la línea de palmeras desde la arena. Consulta en el muelle las condiciones para bañarte o hacer snorkel ese día.",
        location: "Parque Nacional Morrocoy, costa del estado Falcón, Venezuela",
        access: "En lancha. Verifica el embarcadero de salida y el regreso antes de partir.",
        steps: ["Pregunta en Tucacas por una salida directa a Sombrero y qué incluye el precio de ida y vuelta.", "Una vez en el cayo, localiza el punto de recogida y recorre la orilla antes de elegir dónde instalarte.", "Respeta las zonas señalizadas y evita tocar el coral. Regresa al punto acordado con suficiente margen."],
        question: "¿Conviene combinar Sombrero con otros cayos ese día?",
        answer: "Si quieres dedicar tiempo a la playa, organiza un traslado directo. Para combinar paradas, pide un itinerario con horarios de regreso antes de contratar.",
      },
      en: {
        title: "Cayo Sombrero",
        intro: "Cayo Sombrero is one of Morrocoy’s larger cays. Its white beaches, palms and nearby reefs make it a good choice for spending time onshore and observing the coastal landscape.",
        advice: "Allow time to walk along the beach after landing. For a coastal photograph, frame the line of palms from the sand. Ask at the dock about that day’s swimming and snorkeling conditions.",
        location: "Morrocoy National Park, off the coast of Falcón, Venezuela",
        access: "By boat. Confirm your departure dock and return arrangements before setting off.",
        steps: ["Ask in Tucacas about a direct trip to Sombrero and what the round-trip fare includes.", "On arrival, locate the pickup point and walk along the shore before choosing where to settle.", "Follow posted boundaries and avoid touching coral. Leave enough time to return to the pickup point."],
        question: "Should I combine Sombrero with other cays on the same day?",
        answer: "Choose a direct trip for more time on the beach. If you want multiple stops, ask for an itinerary with return times before booking.",
      },
      zh: {
        title: "松布雷罗岛",
        intro: "松布雷罗岛（Cayo Sombrero）是莫罗科伊国家公园面积较大的小岛之一。岛上有白沙滩与成排棕榈，离岸不远还有珊瑚礁。",
        advice: "上岛后留些时间沿沙滩走一段。拍照可从沙滩取景，让棕榈与海岸线一起入画。能否下水或浮潜，出发前先在码头问清当天情况。",
        location: "委内瑞拉法尔孔州近海，莫罗科伊国家公园内",
        access: "乘船抵达，出发前确认上船码头及回程安排。",
        steps: ["在图卡卡斯询问直达松布雷罗岛的船，以及往返票价包含哪些项目。", "登岛后先确认回程接送点，再沿岸走一段，选择合适的停留位置。", "遵守现场标示，避免触碰珊瑚，并预留走回集合点的时间。"],
        question: "松布雷罗岛适合当天和其他岛一起游览吗？",
        answer: "如果想在海滩多待一会儿，可选直达船。若要串联多个小岛，订船前问清每站停留时间和回程安排。",
      },
    },
  },
  {
    slug: "cayo-sal" as const,
    mapQuery: "Playa Cayo Sal, Chichiriviche, Falcón, Venezuela",
    sources: [["INPARQUES", parkSource], ["Mapcarta", "https://mapcarta.com/pt/W374341502"]],
    copy: {
      es: {
        title: "Cayo Sal",
        intro: "Cayo Sal queda frente a Chichiriviche, al norte de Cayo Muerto. La playa cartografiada en su costa occidental es el destino que conviene identificar al contratar un traslado para pasar el día.",
        advice: "Desde la playa occidental, busca un encuadre hacia la costa continental. Lleva agua y acuerda el punto de desembarque y de recogida antes de salir, sobre todo si el viaje incluye varias islas.",
        location: "Playa Cayo Sal, municipio Monseñor Iturriza, Falcón, Venezuela",
        access: "En lancha desde Chichiriviche. Pregunta por el desembarque en Playa Cayo Sal.",
        steps: ["En Chichiriviche, pide cotización para la playa de Cayo Sal y confirma que incluya el regreso.", "Al desembarcar, identifica el punto acordado con la tripulación y recorre la orilla accesible.", "Si combinas la visita con Cayo Muerto, confirma cuánto tiempo tendrás en cada isla."],
        question: "¿Cayo Sal y Cayo Muerto son el mismo cayo?",
        answer: "Son dos islas distintas. Cayo Sal se encuentra al norte de Cayo Muerto. Acuerda ambas paradas si quieres visitar las dos.",
      },
      en: {
        title: "Cayo Sal",
        intro: "Cayo Sal lies offshore from Chichiriviche, north of Cayo Muerto. The mapped beach on its west shore is the destination to specify when arranging a day trip.",
        advice: "From the west-facing beach, look for a view back toward the mainland. Bring drinking water and confirm where you will land and be picked up, especially on a multi-island trip.",
        location: "Playa Cayo Sal, Monseñor Iturriza municipality, Falcón, Venezuela",
        access: "By boat from Chichiriviche. Ask to land at Playa Cayo Sal.",
        steps: ["In Chichiriviche, get a quote for Playa Cayo Sal and ensure it includes the return.", "After landing, locate the agreed pickup point and explore the accessible shore.", "If you add Cayo Muerto, confirm how long you will spend on each island."],
        question: "Are Cayo Sal and Cayo Muerto the same island?",
        answer: "They are separate islands. Cayo Sal lies north of Cayo Muerto. Ask for both stops if you want to visit both.",
      },
      zh: {
        title: "盐岛",
        intro: "盐岛（Cayo Sal）位于奇奇里维切外海、穆埃尔托岛以北。若计划上岛休息或沿岸散步，订船时可直接说明目的地是西岸的盐岛海滩。",
        advice: "西岸海滩适合朝大陆方向取景。带好饮水，出发前约定下船及回程接送位置，串联多个小岛时尤其要问清。",
        location: "委内瑞拉法尔孔州蒙塞尼奥尔·伊图里萨市，盐岛海滩",
        access: "从奇奇里维切乘船，订船时说明要在盐岛海滩下船。",
        steps: ["在奇奇里维切询问盐岛海滩的往返船价。", "下船后记下约定的接送位置，再沿可通行的沙滩散步。", "若同时安排穆埃尔托岛，先确认每座岛可停留多久。"],
        question: "盐岛和穆埃尔托岛是同一座岛吗？",
        answer: "这是两座岛。盐岛在穆埃尔托岛以北，若要都去，订船时须说明两站。",
      },
    },
  },
  {
    slug: "cayo-muerto" as const,
    mapQuery: "Cayo Muerto, Chichiriviche, Falcón, Venezuela",
    sources: [["INPARQUES", parkSource], ["Mapcarta", "https://mapcarta.com/es/W372845761"]],
    copy: {
      es: {
        title: "Cayo Muerto",
        intro: "Cayo Muerto es un islote del Parque Nacional Morrocoy frente al malecón de Chichiriviche. Desde el paseo costero se puede observar el islote antes de decidir si contratar el traslado.",
        advice: "Para una foto de la silueta completa del islote, busca una vista despejada desde el malecón. Si quieres desembarcar, pide una salida directa y confirma el regreso antes de salir.",
        location: "Frente al malecón de Chichiriviche, municipio Monseñor Iturriza, Falcón, Venezuela",
        access: "En lancha desde Chichiriviche. El malecón ofrece una vista del islote desde tierra.",
        steps: ["Ubica el islote desde el malecón y confirma con el operador dónde sale la lancha.", "Pide el traslado a Cayo Muerto de Chichiriviche y acuerda dónde se hará la recogida.", "Al desembarcar, comprueba el punto de retorno antes de alejarte por la orilla."],
        question: "¿Puedo ver Cayo Muerto sin embarcar?",
        answer: "Sí. Se ve desde la costa de Chichiriviche. Para visitar la orilla del islote necesitas una lancha.",
      },
      en: {
        title: "Cayo Muerto",
        intro: "Cayo Muerto is a Morrocoy National Park islet off the Chichiriviche waterfront. You can see it from the promenade before deciding whether to book a crossing.",
        advice: "For a photograph of the island’s full outline, look for an unobstructed view from the promenade. If you want to land, ask for a direct trip and confirm return arrangements before boarding.",
        location: "Off the Chichiriviche waterfront, Monseñor Iturriza municipality, Falcón, Venezuela",
        access: "By boat from Chichiriviche. The waterfront promenade offers a view from land.",
        steps: ["Locate the islet from the promenade and ask the operator which dock the boat uses.", "Specify Cayo Muerto off Chichiriviche and agree on a pickup point.", "On landing, check where to meet the return boat before walking along the shore."],
        question: "Can I see Cayo Muerto without taking a boat?",
        answer: "Yes, it is visible from the Chichiriviche waterfront. To visit the islet itself, arrange a boat.",
      },
      zh: {
        title: "穆埃尔托岛",
        intro: "穆埃尔托岛（Cayo Muerto）是莫罗科伊国家公园内的小岛，位于奇奇里维切海滨步道对面。可先从岸上观察岛屿，再决定是否搭船登岛。",
        advice: "若想拍到整座岛的轮廓，可在海滨步道找视线无遮挡的位置。若要登岛，可询问直达船并提前谈妥返程。",
        location: "委内瑞拉法尔孔州蒙塞尼奥尔·伊图里萨市，奇奇里维切海滨步道对岸",
        access: "从奇奇里维切乘船登岛，也可从镇上的海滨步道望岛。",
        steps: ["先从海滨步道辨认岛屿，再向船家确认登船码头。", "明确目的地是奇奇里维切对岸的穆埃尔托岛，并约定回程接送点。", "登岛后确认返程集合点，再沿沙滩散步。"],
        question: "不坐船也能看到穆埃尔托岛吗？",
        answer: "可以从奇奇里维切的海滨看见小岛。想登岛必须安排船只。",
      },
    },
  },
];

export const parkManagement = {
  es: "El Instituto Nacional de Parques (INPARQUES) gestiona el Parque Nacional Morrocoy. Consulta sus avisos para conocer las condiciones de acceso a las áreas protegidas.",
  en: "Venezuela’s National Parks Institute (INPARQUES) manages Morrocoy National Park. Check its notices for access conditions in protected areas.",
  zh: "莫罗科伊国家公园由委内瑞拉国家公园管理局（INPARQUES）管理。保护区的通行情况请查阅该机构公告。",
};
