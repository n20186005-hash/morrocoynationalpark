const googleTravel = "https://www.google.com/travel/hotels/entity/ChgIzoTy1L3YifYYGgwvZy8xamt4Xzd5cXYQAQ";

export const visitLabels = {
  es: { travel: "Transporte y punto de salida", hours: "Horarios y tarifas", reviews: "Valoraciones de visitantes", viewReviews: "Ver valoraciones en Google Maps", count: "reseñas", checked: "Fuente consultada el 19 de noviembre de 2026. La cifra puede variar.", lookup: "Consulta la ficha del lugar para ver las valoraciones disponibles." },
  en: { travel: "Transport and departure point", hours: "Hours and fares", reviews: "Visitor ratings", viewReviews: "See ratings on Google Maps", count: "reviews", checked: "Source checked November 19, 2026. The count may change.", lookup: "Check the place listing for available ratings." },
  zh: { travel: "交通方式与出发点", hours: "开放时间与费用", reviews: "游客评分与评价", viewReviews: "在 Google 地图查看评价", count: "条评价", checked: "2026 年 11 月 19 日查阅来源，评价数可能变化。", lookup: "可在此地点的地图页面查看已有评价。" },
};

export const visitDetails = {
  "tucacas-beaches": {
    es: ["Llega por carretera a Tucacas. Para Punta Brava, verifica el tramo final con INPARQUES. Si no está habilitado, consulta las salidas de los muelles de Tucacas.", "Comprueba el horario de acceso al puente y pide por separado el precio del traslado si eliges un cayo."],
    en: ["Travel by road to Tucacas. For Punta Brava, check the final stretch with INPARQUES. If the bridge is unavailable, ask about departures from the Tucacas docks.", "Check bridge access hours and ask separately for transfer fares if you opt for a cay."],
    zh: ["沿公路抵达图卡卡斯。前往蓬塔布拉瓦前，向国家公园管理局查询最后一段桥梁的通行情况。桥梁关闭时，可到镇上码头询问去其他岛屿的船。", "先查询桥梁通行时段。若改为跳岛，另向船家确认往返船费。"],
  },
  "chichiriviche-boat-trips": {
    es: ["Continúa por tierra hasta el frente marítimo de Chichiriviche. El mapa marca Playa Norte. Confirma con la tripulación si tu salida usa ese muelle.", "La disponibilidad y las tarifas dependen de las salidas locales. Confirma el importe por lancha o por persona y la última recogida."],
    en: ["Continue by land to the Chichiriviche waterfront. The map marks Playa Norte. Ask your boat crew whether the trip leaves from that dock.", "Departures and fares depend on local operators. Ask whether the fare is per boat or per person and when the last pickup is."],
    zh: ["走陆路到奇奇里维切海滨。地图标注北滩码头，向船家确认你的船是否从这里出发。", "班次与船费现场查询。问清按船还是按人收费，以及最晚回程时间。"],
  },
  "cayo-sombrero": {
    es: ["Desde Tucacas, confirma el muelle de salida antes de conducir. El enlace de mapa marca el cayo, donde termina el trayecto marítimo.", "Confirma el horario de desembarque y el precio del viaje en el muelle. Acuerda el último horario de regreso."],
    en: ["Confirm which Tucacas dock your boat uses before driving there. The map marks the cay at the end of the crossing.", "Ask at the dock about landing hours and fares. Agree on the latest possible return time."],
    zh: ["从图卡卡斯出发，先确认上船码头再开车。地图标的是船程终点松布雷罗岛。", "在码头确认可登岛时段及船费，并约定最晚返程时间。"],
  },
  "cayo-sal": {
    es: ["Llega al frente marítimo de Chichiriviche y confirma el muelle de salida. El pin marca la playa occidental del cayo.", "Pregunta si hay salidas ese día y cuánto cuesta la ida y vuelta a esa playa."],
    en: ["Go to the Chichiriviche waterfront and confirm your departure dock. The pin marks the cay’s west beach.", "Ask whether boats are running that day and what the round trip to the beach costs."],
    zh: ["先到奇奇里维切海滨确认上船码头。地图定位盐岛西岸海滩。", "向船家查询当天能否出发，以及到该海滩的往返价格。"],
  },
  "cayo-muerto": {
    es: ["El malecón de Chichiriviche sirve de referencia para encontrar los embarcaderos. El pin marca el islote frente a la costa.", "Consulta el primer y último traslado del día y confirma si el precio incluye el regreso."],
    en: ["Use the Chichiriviche promenade to locate nearby docks. The pin marks the islet offshore.", "Ask about the first and last crossing and check whether the fare includes the return."],
    zh: ["以奇奇里维切海滨步道为参照寻找附近码头。地图标的是对岸的小岛。", "查询当天首末班船，并确认报价是否包含回程。"],
  },
} as const;

export const placePins: Record<string, string> = {
  "cayo-sal": "10.94309,-68.26438",
  "cayo-muerto": "10.92961,-68.26066",
};

export const ratings: Record<string, { score: number; count: number; source: string }> = {
  "cayo-sombrero": { score: 4.8, count: 498, source: googleTravel },
  "cayo-sal": { score: 4.8, count: 389, source: googleTravel },
  "cayo-muerto": { score: 4.7, count: 226, source: "https://www.google.co.ve/travel/hotels/La%20Luisa/entity/CgsInNHDrv2wsrrDARAB?ap=MAA&rp=OAFIAg" },
};

export const photos: Record<string, { width: number; height: number; credit: string; source: string }> = {
  "cayo-sombrero": { width: 800, height: 1067, credit: "Hireem", source: "https://commons.wikimedia.org/wiki/File:Cayo_Sombrero,_Morrocoy.jpg" },
  "cayo-sal": { width: 800, height: 407, credit: "Rjcastillo", source: "https://commons.wikimedia.org/wiki/File:Cayo_Sal.jpg" },
  "cayo-muerto": { width: 800, height: 378, credit: "Rjcastillo", source: "https://commons.wikimedia.org/wiki/File:Cayo_Muerto_I.jpg" },
};
