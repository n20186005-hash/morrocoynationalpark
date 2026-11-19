const park = "https://www.inparques.gob.ve/Parques%20Nacionales/morrocoy.html";
const decree = "https://musguito.net.ve/anapro/ecosig.org.ve/pdf/V_PN_Morocoy_DC.pdf";
const cuare = "https://inparques.gob.ve/Refugios/cuare.html";

type Text = [title: string, intro: string, advice: string, heritage: string, observation: string, camera: string, transport: string, route: string[], question: string, answer: string];

function localized(
  es: Text, en: Text, zh: Text,
  region: string,
) {
  const copy = ([title, intro, advice, heritage, observation, camera, transport, steps, question, answer]: Text, location: string) => ({
    title, intro, advice, heritage, observation, camera, location, access: transport, steps, question, answer,
  });
  return {
    es: copy(es, `${es[0]}, ${region}, Falcón, Venezuela`),
    en: copy(en, `${en[0]}, ${region}, Falcón, Venezuela`),
    zh: copy(zh, `委内瑞拉法尔孔州，${region}近海，${zh[0]}`),
  };
}

export const nearbyGuides = [
  {
    slug: "boca-seca",
    mapQuery: "Playa Cayo Boca Seca, Parque Nacional Morrocoy, Falcón, Venezuela",
    sources: [["INPARQUES", park], ["Decreto 113", decree], ["Mapcarta", "https://mapcarta.com/es/W363803654"]],
    copy: localized(
      ["Cayo Boca Seca", "Una playa de arena en la cadena de cayos del este de Morrocoy, cerca de Boca Sequita.", "Pide al lanchero que te indique el punto de desembarque y desde dónde comienza el tramo accesible de arena.", "Boca Seca figura en el decreto de creación de Morrocoy de 1974. La protección abarcó conjuntamente las playas, los cayos y los manglares del litoral de Falcón.", "Desde la entrada, fíjate en cómo la vegetación bordea el canal y se abre hacia el arenal.", "Desde tierra, encuadra el canal de entrada con ambas orillas; mantén libre la zona de embarque.", "Consulta en Tucacas por un traslado hasta Playa Cayo Boca Seca.", ["Acuerda una salida para Boca Seca por su nombre completo.", "Ubica el punto de retorno al bajar y recorre la playa por la arena.", "Regresa por la orilla al punto acordado."], "¿Boca Seca es lo mismo que Boca Sequita?", "Son lugares distintos. Pide Playa Cayo Boca Seca si ese es tu destino."],
      ["Cayo Boca Seca", "A sandy beach on Morrocoy’s eastern chain of cays, close to Boca Sequita.", "Ask the boat crew where you will land and where the accessible stretch of beach begins.", "Boca Seca is named in Morrocoy’s founding decree of 1974, which placed beaches, cays and mangroves on this stretch of the Falcón coast under protection.", "Watch how vegetation lines the entrance channel before the view opens onto the sand.", "Frame both sides of the entrance channel from land and leave the boarding area clear.", "Ask in Tucacas about a boat to Playa Cayo Boca Seca.", ["Book the crossing using the full name Boca Seca.", "Locate your pickup point and walk along the sand.", "Return along the shore to the agreed meeting point."], "Is Boca Seca the same as Boca Sequita?", "They are separate places. Ask specifically for Playa Cayo Boca Seca."],
      ["博卡塞卡岛", "这片沙滩位于莫罗科伊东侧岛链，邻近博卡塞基塔（Boca Sequita）。", "请船家指出下船位置，并问清能从哪里开始沿沙滩步行。", "博卡塞卡岛列在 1974 年莫罗科伊国家公园设立法令中。法令将这段法尔孔海岸的沙滩、岛礁与红树林纳入同一保护范围。", "从入口观察植被如何沿水道生长，以及视野何处打开、露出沙滩。", "在岸上把入口水道两侧一起纳入画面，给上下船的游客留出通道。", "在图卡卡斯询问前往博卡塞卡岛海滩的船程。", ["订船时说清目的地是博卡塞卡岛海滩。", "下船先记住回程集合点，再沿沙滩散步。", "沿原路返回约定的接送位置。"], "博卡塞卡和博卡塞基塔是同一处吗？", "这是两个地点。去博卡塞卡海滩时，请向船家明确说 Playa Cayo Boca Seca。"],
      "Tucacas",
    ),
  },
  {
    slug: "los-juanes",
    mapQuery: "Piscina Natural Los Juanes, Parque Nacional Morrocoy, Falcón, Venezuela",
    sources: [["INPARQUES", park], ["Estudio geomorfológico", "https://dialnet.unirioja.es/descarga/articulo/8931235.pdf"]],
    copy: localized(
      ["Los Juanes", "Los Juanes es un sector de aguas someras dentro de Morrocoy, cerca de la transición entre la laguna y el arrecife.", "Planea una visita en lancha y confirma dónde puede detenerse. La experiencia se concentra en el agua y en el paisaje visto desde la embarcación.", "El paisaje se explica por la relación entre arrecife y laguna. Un estudio local describe Los Juanes como parte de esa franja de transición dentro del parque.", "Observa los cambios de color del agua que distinguen los bajos de los canales, sin asumir que el color indica una profundidad segura.", "Desde el asiento de la lancha, usa una toma amplia para mostrar la franja de agua clara y el horizonte.", "Pregunta en Tucacas por una salida a la piscina natural Los Juanes.", ["Confirma con la tripulación la parada en Los Juanes.", "Observa el paisaje desde la lancha y sigue las indicaciones sobre el acceso al agua.", "Mantén libre el paso de las embarcaciones y acuerda el retorno."], "¿Puedo recorrer Los Juanes a pie?", "La parada se organiza en lancha. Para caminar por la orilla, añade una playa como Playuela."],
      ["Los Juanes", "Los Juanes is a shallow-water area in Morrocoy where the lagoon meets the reef environment.", "Plan a boat visit and ask where the boat can stop. The experience centres on the water and the views from the boat.", "A local geomorphological study describes Los Juanes as a transition between reef and lagoon. That setting accounts for the wide expanse of shallow water.", "Look for colour changes between the shallows and channels. Water colour alone cannot tell you whether the depth is safe.", "Use a wide frame from your seat on the boat to capture the pale water against the horizon.", "Ask in Tucacas for a trip to the Los Juanes natural pool.", ["Confirm the Los Juanes stop with your crew.", "Take in the view from the boat and follow local instructions on entering the water.", "Keep boat lanes clear and agree on the return."], "Can I explore Los Juanes on foot?", "It is a boat stop. Add a beach such as Playuela if you want a shoreline walk."],
      ["洛斯胡阿内斯天然水池", "洛斯胡阿内斯（Los Juanes）是公园内一片浅水区，位于潟湖与礁区交接地带。", "以乘船观景为主，出发前向船家确认允许停船的位置和当天安排。", "当地地貌研究把洛斯胡阿内斯描述为礁区与潟湖之间的过渡带。这一地形解释了游客在船上看到的开阔浅水。", "可观察浅滩与水道之间的颜色变化，水色本身无法用于判断水深是否安全。", "坐在船内用广角同时拍下浅色水面和远处地平线。", "在图卡卡斯询问前往洛斯胡阿内斯天然水池的船。", ["向船家确认行程包含洛斯胡阿内斯。", "在船上观察浅水地形，遵守现场下水指引。", "给其他船只留出航道，并确认返程安排。"], "这里适合安排步行吗？", "这里主要是乘船停靠点。想沿海岸步行，可另外安排普拉尤埃拉岛等沙滩。"],
      "Morrocoy",
    ),
  },
  {
    slug: "cayo-playuela",
    mapQuery: "Cayo Playuela, Parque Nacional Morrocoy, Falcón, Venezuela",
    sources: [["INPARQUES", park], ["INPARQUES · Playuela", "https://www.inparques.gob.ve/wp-content/uploads/2019/02/Listado.pdf"]],
    copy: localized(
      ["Cayo Playuela", "Una parada de playa en Morrocoy donde las palmeras y la línea de arena dominan el paisaje.", "Si quieres pasar tiempo en la playa, acuerda una parada larga en Playuela antes de contratar un circuito.", "Playuela aparece en los listados de playas de INPARQUES. Su paisaje pertenece al conjunto costero protegido desde la creación del parque en 1974.", "Busca el cambio entre la franja arbolada y la arena abierta al agua: la sombra disponible varía a lo largo de la orilla.", "Fotografía las palmeras desde la arena con el mar a un lado y deja espacio para mostrar la curva de la playa.", "Consulta los embarcaderos de Tucacas por la salida a Cayo Playuela.", ["Indica Playuela al contratar el traslado.", "Una vez en la playa, camina desde el desembarque hasta el tramo de palmeras.", "Vuelve por la arena con margen antes de la recogida."], "¿Playuela y Playuelita son la misma parada?", "Aclara el nombre en el muelle y confirma exactamente en qué playa desembarcarás."],
      ["Cayo Playuela", "A Morrocoy beach stop where palms and the shoreline dominate the view.", "Agree on a generous stop at Playuela before booking a circuit if you want time to walk the shore.", "Playuela appears in INPARQUES’s beach listings. Its coast is part of the protected landscape established when Morrocoy was designated a national park in 1974.", "Notice where the tree cover gives way to open sand. The amount of shade varies along the shore.", "Photograph the palms from the sand with the sea to one side, leaving room for the curve of the beach.", "Ask at the Tucacas docks about departures to Cayo Playuela.", ["Specify Playuela when booking.", "From the landing point, walk along the sand to the palms.", "Follow the shore back in time for pickup."], "Are Playuela and Playuelita the same stop?", "Specify the name at the dock and confirm exactly which beach you will land at."],
      ["普拉尤埃拉岛", "普拉尤埃拉岛（Cayo Playuela）是莫罗科伊的沙滩停靠点，最容易辨认的是沿岸的棕榈与沙滩曲线。", "想慢慢走海边，可在订跳岛船前问清楚这一站可停多久。", "普拉尤埃拉列入 INPARQUES 的海滩名录。周边海岸属于 1974 年设立的莫罗科伊国家公园保护范围。", "观察树荫地带在哪里过渡到开阔沙滩，沿岸不同位置的遮阴差异明显。", "站在沙滩上让海面位于画面一侧，并留出空间拍出棕榈和弧形海岸。", "在图卡卡斯码头询问前往普拉尤埃拉岛的船。", ["订船时指定 Playuela。", "下船后从集合点沿沙滩走到棕榈一带。", "留足时间沿原路返回接船。"], "Playuela 和 Playuelita 是同一站吗？", "订船时说清楚想去的海滩名称，并向船家确认实际下船地点。"],
      "Tucacas",
    ),
  },
  {
    slug: "cayo-peraza",
    mapQuery: "Cayo Peraza, Chichiriviche, Falcón, Venezuela",
    sources: [["INPARQUES", park], ["Decreto 113", decree], ["Mapcarta", "https://mapcarta.com/es/W372844783"], ["Noticiascol", "https://www.noticiascol.com/2026/09/01/precios-actualizados-para-visitar-los-cayos-de-morrocoy-cuanto-cuesta-el-traslado/"]],
    copy: localized(
      ["Cayo Peraza", "Un islote pequeño al este de Cayo Muerto, frente a Chichiriviche.", "Consulta si se puede desembarcar y decide en el muelle si prefieres una parada breve o combinarla con Cayo Muerto.", "El decreto de 1974 identifica Peraza entre los cayos incorporados al parque. Las cartas de la zona lo muestran como un islote separado de Muerto y Sal.", "Desde la embarcación, observa el perfil compacto del islote y la distancia que lo separa de Cayo Muerto.", "Fotografía el islote al acercarte por mar para incluir su silueta completa.", "Pregunta en Chichiriviche por el traslado a Cayo Peraza.", ["Confirma la parada de Peraza al salir de Chichiriviche.", "Si está permitido desembarcar, recorre solo el tramo accesible de la orilla.", "Vuelve al punto pactado y confirma la siguiente parada."], "¿Una lancha a Cayo Muerto incluye Peraza?", "Acuerda ambas paradas expresamente al contratar el viaje."],
      ["Cayo Peraza", "A small islet east of Cayo Muerto, offshore from Chichiriviche.", "Ask whether landing is available and decide at the dock whether to make a short stop or pair it with Cayo Muerto.", "The 1974 decree names Peraza among the cays incorporated into the park. Maps of the area show it as a separate island from Muerto and Sal.", "Look for its compact outline and the open water that separates it from Cayo Muerto.", "Photograph the island on the approach by boat to fit its full outline into the frame.", "Ask in Chichiriviche for a crossing to Cayo Peraza.", ["Confirm the Peraza stop before leaving Chichiriviche.", "If landing is permitted, walk the accessible section of shore.", "Return to the agreed pickup point and confirm the next stop."], "Does a boat to Cayo Muerto also stop at Peraza?", "Ask for both stops when booking the trip."],
      ["佩拉萨岛", "佩拉萨岛（Cayo Peraza）位于奇奇里维切外海，在穆埃尔托岛以东。", "先问当天能否登岛，再决定是短暂停留，还是和穆埃尔托岛串联。", "佩拉萨岛列在 1974 年国家公园设立法令里。海图把佩拉萨、穆埃尔托与盐岛标为三座彼此分隔的小岛。", "从船上观察岛屿紧凑的轮廓，以及它与穆埃尔托岛之间的水面。", "在船接近时取景，留足画面空间拍下整座小岛。", "在奇奇里维切询问去佩拉萨岛的船。", ["离开奇奇里维切前确认这一站。", "如现场允许登岛，仅沿可通行的岸线散步。", "回到约定的集合点，确认返程或下一站。"], "去穆埃尔托岛的船会顺便停佩拉萨岛吗？", "订船时明确说明两座岛都要停靠。"],
      "Chichiriviche",
    ),
  },
  {
    slug: "cayo-pescadores",
    mapQuery: "Cayo Pescadores, Parque Nacional Morrocoy, Falcón, Venezuela",
    sources: [["INPARQUES", park], ["Decreto 113", decree], ["Mapcarta", "https://mapcarta.com/es/19606302"]],
    copy: localized(
      ["Cayo Pescadores", "Cayo del sector oriental de Morrocoy, cerca de Cayo Alemán.", "Antes de contratar, muestra el mapa al lanchero para identificar el cayo y confirmar si el viaje incluye desembarque.", "El decreto fundacional de Morrocoy incluye Cayo Pescadores dentro de la protección de 1974. Forma parte de un grupo de cayos próximos del frente marítimo oriental.", "Desde el agua, compara el perfil de Pescadores con los cayos vecinos y observa cómo cambia la vista al aproximarte.", "Usa el cayo como sujeto principal desde la lancha, con suficiente mar alrededor para apreciar que es una isla.", "Consulta en el embarcadero la disponibilidad de una salida a este cayo y confirma la posición con la tripulación.", ["Enseña la ficha de mapa antes de acordar el recorrido.", "Identifica el islote en la aproximación por agua.", "Si hay desembarque, acuerda el regreso antes de recorrer la orilla."], "¿Puedo reservar solo con el nombre Pescadores?", "Es mejor indicar Morrocoy y mostrar el punto del mapa para que ambas partes identifiquen el mismo cayo."],
      ["Cayo Pescadores", "A cay in eastern Morrocoy, near Cayo Alemán.", "Show the map to the boat operator before booking and confirm whether the trip includes landing.", "Morrocoy’s founding decree included Cayo Pescadores in the protected area in 1974. It sits in a group of closely spaced cays along the eastern seaboard.", "Compare the outline of Pescadores with the neighbouring cays and watch the view change as you approach.", "Make the island the main subject from the boat and leave open water around it in the frame.", "Ask at the dock whether a trip is available and confirm the cay’s location with your crew.", ["Show the mapped location before agreeing on the route.", "Pick out the cay as the boat approaches.", "If landing is available, agree on pickup before exploring the shore."], "Can I book using just the name Pescadores?", "Specify Morrocoy and show the mapped location so the crew can identify the same cay."],
      ["佩斯卡多雷斯岛", "佩斯卡多雷斯岛（Cayo Pescadores）位于莫罗科伊东部岛链，靠近阿莱曼岛。", "把地图给船家看，先核对小岛方位，再确认行程是否包含登岛。", "1974 年莫罗科伊国家公园设立法令列入佩斯卡多雷斯岛。这一带是公园东侧几座相距较近的离岸小岛。", "从船上比较佩斯卡多雷斯岛与附近岛屿的轮廓，观察接近时视角如何变化。", "从船上取景，让小岛成为主体，周围留出一圈水面。", "在码头询问当天能否安排这一站，并用地图向船家确认岛屿方位。", ["先出示地图，再谈妥船程。", "抵近时从船上辨认小岛。", "若能登岛，下船前确认回程接送点。"], "订船只说 Pescadores 可以吗？", "最好同时说出莫罗科伊国家公园，并出示地图，避免认错目的地。"],
      "Morrocoy",
    ),
  },
  {
    slug: "cueva-del-indio",
    mapQuery: "Cueva del Indio, Cerro Chichiriviche, Falcón, Venezuela",
    sources: [["INPARQUES · Cuare", cuare], ["INPARQUES · Morrocoy", park]],
    copy: localized(
      ["Cueva del Indio de Chichiriviche", "Abrigo rocoso en los farallones calizos del cerro Chichiriviche, conocido por los petroglifos que conserva.", "Consulta si el operador ofrece una visita al sitio y si se permite desembarcar. El acceso descrito por INPARQUES es por agua.", "INPARQUES describe los grabados de la cueva como testimonios de los pobladores indígenas prehispánicos de la región. El abrigo se abre en un frente de roca caliza junto al agua.", "Distingue la estratificación natural de la roca de las figuras grabadas. Evita tocar o marcar las superficies.", "Desde la lancha, encuadra el farallón con la entrada del abrigo. Si puedes acercarte, sigue las indicaciones locales de fotografía.", "Confirma en Chichiriviche una salida en lancha específica a la cueva y consulta las condiciones de desembarque.", ["Pide la parada Cueva del Indio del cerro Chichiriviche.", "Observa desde la embarcación el farallón y la entrada.", "Si se permite desembarcar, recorre únicamente el tramo señalado y regresa con la tripulación."], "¿Es la misma parada que el Santuario de la Virgen?", "INPARQUES distingue ambas paradas en el farallón. Confirma con tu operador si el recorrido incluye las dos."],
      ["Cueva del Indio, Chichiriviche", "A limestone rock shelter in the bluffs of Cerro Chichiriviche, known for its preserved petroglyphs.", "Ask whether the operator visits the cave and whether landing is allowed. INPARQUES describes access by water.", "INPARQUES identifies the carvings as evidence of Indigenous life in the region before European contact. The shelter opens in a limestone bluff at the water’s edge.", "Look at the natural layering of the limestone and the outlines of the carved figures. Avoid touching or marking the rock.", "From the boat, frame the cliff and the shelter entrance together. Follow local photography rules if you can approach.", "Confirm a boat trip from Chichiriviche specifically to the cave and ask about landing conditions.", ["Request the Cueva del Indio stop at Cerro Chichiriviche.", "Look at the cliff and shelter entrance from the boat.", "If landing is permitted, stay on the indicated route and return with the crew."], "Is this the same stop as the Shrine of the Virgin?", "INPARQUES describes them as separate stops along the bluff. Ask whether your boat trip includes both."],
      ["奇奇里维切印第安人岩洞", "这处临水岩棚位于奇奇里维切山石灰岩崖壁间，以保存的岩刻闻名。", "向船家确认是否停靠岩洞、当天能否下船。INPARQUES 的介绍给出的进入方式是水路。", "INPARQUES 将洞内岩刻视为当地原住民在欧洲人到来之前生活的见证。岩棚开口位于临水石灰岩壁中。", "可留意岩石天然层理与刻痕图案的区别，避免触碰岩刻或在岩面留下标记。", "从船上把崖壁和岩棚入口一起纳入画面。若可近距离参观，遵守现场拍照规定。", "在奇奇里维切询问专程到岩洞的船，并确认当天可否靠岸。", ["向船家确认是奇奇里维切山的 Cueva del Indio。", "从船上观察崖壁与岩棚入口。", "若现场允许下船，只沿指示范围参观并随船返回。"], "岩洞和圣母龛是同一处吗？", "INPARQUES 将两处分别列为沿崖壁的停靠点，可向船家确认是否两处都去。"],
      "Chichiriviche",
    ),
  },
] as const;

export const nearbyLabels = {
  es: { heritage: "Historia y paisaje", observation: "Qué observar", photo: "Dónde tomar fotos", cave: "INPARQUES publica la información de visita y conservación de este sector del cerro Chichiriviche, junto al Refugio de Fauna Silvestre Cuare.", hours: "Confirma con el operador las salidas, la posibilidad de desembarcar y el precio de ida y vuelta.", nearby: "Lugares cercanos" },
  en: { heritage: "History and landscape", observation: "What to look for", photo: "Photo spots", cave: "INPARQUES publishes visitor and conservation information for this part of Cerro Chichiriviche, beside the Cuare Wildlife Refuge.", hours: "Confirm departures, landing access and the round-trip fare with the boat operator.", nearby: "Nearby attractions" },
  zh: { heritage: "历史与地貌", observation: "观察重点", photo: "拍照机位", cave: "INPARQUES 发布奇奇里维切山这一带的游览与保育信息。岩洞所在崖壁邻接夸雷野生动物保护区。", hours: "向船家确认当天出发时段、下船条件与往返费用。", nearby: "周边景点" },
};
