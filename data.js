/* ---------------- Shared data ---------------- */
const AREAS = [
  { id:'jongno', name:'鐘路 / 北村', spots:[
    { n:'景福宮', tag:'古宮', d:'朝鮮王朝正宮,每日兩場守衛交接儀式,建議租借韓服可免門票。', hours:'09:00–18:00(週二公休,依季節調整閉館時間)', mapQuery:'Gyeongbokgung Palace Seoul' },
    { n:'北村韓屋村', tag:'散步', d:'保存完整的傳統韓屋巷弄,清晨人少最適合拍照。', hours:'全天開放(部分為住宅區,請放低音量)', mapQuery:'Bukchon Hanok Village Seoul' },
    { n:'仁寺洞', tag:'購物', d:'傳統工藝品店與茶館聚集的老街,適合買伴手禮。', hours:'約10:00–20:00(依店家而異)', mapQuery:'Insadong Seoul' },
    { n:'昌德宮後苑', tag:'古蹟', d:'需預約導覽的祕苑,韓國唯一列入世界遺產的宮殿。', hours:'09:00–17:30(週一公休,後苑需預約導覽場次)', mapQuery:'Changdeokgung Palace Seoul' },
    { n:'三清洞', tag:'散步', d:'北村與景福宮旁的老街區,巷弄裡藏著手工藝店與韓屋咖啡廳。', hours:'全天開放,店家約10:00–21:00', mapQuery:'Samcheong-dong Seoul' },
    { n:'藝人韓服', tag:'韓服體驗', d:'北村人氣韓服租借店,提供多款傳統與改良式韓服供拍照體驗,租借後可免費參觀景福宮。', hours:'09:00–19:00(依店家公告調整)', mapQuery:'예니스한복 북촌' },
    { n:'西花韓服', tag:'韓服體驗', d:'北村另一間人氣韓服店,款式多元,提供變裝與造型服務。', hours:'09:00–19:00(依店家公告調整)', mapQuery:'서화한복 북촌' }
  ]},
  { id:'myeongdong', name:'明洞', spots:[
    { n:'明洞街道', tag:'購物', d:'美妝店與街邊小吃密集,晚上七點後最熱鬧。', hours:'全天開放,店家約10:00–22:00', mapQuery:'Myeongdong Shopping Street Seoul' },
    { n:'南山首爾塔', tag:'夜景', d:'搭纜車上南山,情人鎖牆是必訪拍照點。', hours:'10:00–23:00(展望台,末班纜車提早)', mapQuery:'N Seoul Tower' },
    { n:'明洞聖堂', tag:'建築', d:'首爾最早的哥德式教堂建築之一,鬧區中的靜謐角落。', hours:'06:00–21:00(彌撒時間不開放參觀)', mapQuery:'Myeongdong Cathedral Seoul' }
  ]},
  { id:'hannam', name:'漢南洞', spots:[
    { n:'Mardi Mercredi 旗艦店', tag:'選物', d:'法式插畫風韓國設計品牌,漢南洞旗艦店空間感十足,適合拍照。', hours:'11:00–20:00(依官方公告調整)', mapQuery:'Mardi Mercredi Hannam Flagship Store Seoul' },
    { n:'Tamburins 香氛旗艦店(漢南)', tag:'香氛', d:'藝術裝置感十足的香氛品牌旗艦店,常有限定展覽空間。', hours:'11:00–20:00(依官方公告調整)', mapQuery:'Tamburins Hannam Flagship Store Seoul' },
    { n:'Rockfish Weatherwear', tag:'選物', d:'機能戶外風格選物店,漢南洞潮流地標之一。', hours:'11:00–20:00(依官方公告調整)', mapQuery:'Rockfish Weatherwear Hannam Seoul' },
    { n:'Emis', tag:'選物', d:'簡約質感風格的韓國選物品牌,漢南洞直營店。', hours:'11:00–20:00(依官方公告調整)', mapQuery:'Emis Hannam Seoul' },
    { n:'Ader Error Hannam Space', tag:'選物', d:'韓國潮流品牌 Ader Error 的概念空間,常有限定商品與裝置藝術。', hours:'11:00–20:00(依官方公告調整)', mapQuery:'Ader Error Hannam Space Seoul' }
  ]},
  { id:'sinsa', name:'新沙洞林蔭道', spots:[
    { n:'TAMBURINS Flagship Store Sinsa', tag:'香氛', d:'新沙洞林蔭道旗艦店,建築本身即為藝術裝置。', hours:'11:00–21:00(依官方公告調整)', mapQuery:'Tamburins Flagship Store Sinsa Seoul' },
    { n:'Gentle Monster Flagship Store Sinsa', tag:'選物', d:'太陽眼鏡品牌旗艦店,以前衛展場式陳列聞名。', hours:'11:00–21:00(依官方公告調整)', mapQuery:'Gentle Monster Flagship Sinsa Seoul' },
    { n:'FRONT SEOUL', tag:'咖啡', d:'歐式復古建築改建的咖啡廳,戶外座位適合享用手沖咖啡與甜點。', hours:'11:00–22:00(依店家公告調整)', mapQuery:'Front Seoul Cafe Sinsa' }
  ]},
  { id:'haebangchon', name:'解放村', spots:[
    { n:'解放村新興市場', tag:'夜生活', d:'舊市場改建的文青聚落,餐酒館林立,可遠眺 N 首爾塔與山城夜景。', hours:'依店家而異,傍晚後最熱鬧', mapQuery:'Haebangchon Sinheung Market Seoul' }
  ]},
  { id:'banpo', name:'盤浦漢江公園', spots:[
    { n:'盤浦漢江公園月光彩虹噴泉', tag:'夜景', d:'盤浦大橋兩側噴水造景,夜間點燈搭配音樂演出,是漢江經典夜景。', hours:'噴泉表演約每日20:00起,依季節調整,建議事先查詢當日場次', mapQuery:'Banpo Hangang Park Moonlight Rainbow Fountain' }
  ]},
  { id:'seongsu', name:'聖水洞', spots:[
    { n:'Dior 聖水概念店', tag:'選物', d:'精品品牌在聖水洞打造的概念空間,外觀本身就是熱門拍照點。', hours:'11:00–20:00(依官方公告調整)', mapQuery:'Dior Seongsu Seoul' },
    { n:'Musinsa Seongsu', tag:'選物', d:'韓國最大時尚電商 Musinsa 的實體概念店,匯集多個潮流品牌。', hours:'11:00–22:00(依官方公告調整)', mapQuery:'Musinsa Seongsu Seoul' },
    { n:'LCDC Seoul', tag:'選物', d:'複合式選物與展覽空間,工業風建築聚集多間設計品牌。', hours:'11:00–20:00(依官方公告調整)', mapQuery:'LCDC Seoul Seongsu' },
    { n:'Stand Oil 旗艦店', tag:'選物', d:'韓國生活選物品牌,聖水洞旗艦店空間簡約質感。', hours:'11:00–20:00(依官方公告調整)', mapQuery:'Stand Oil Flagship Store Seongsu' },
    { n:'Onion 聖水店', tag:'咖啡', d:'廢墟工業風改建的人氣麵包咖啡廳,聖水洞地標之一。', hours:'07:00–22:00(依店家公告調整)', mapQuery:'Onion Cafe Seongsu Seoul' },
    { n:'Nudake Seongsu', tag:'咖啡', d:'前衛藝術系甜點咖啡廳,以造型甜點與空間設計聞名。', hours:'11:00–20:00(依官方公告調整)', mapQuery:'Nudake Seongsu Seoul' },
    { n:'말질로', tag:'選物/美食', d:'聖水洞話題新開店家,詳細資訊建議出發前再查詢最新評價與確切位置。', hours:'依店家公告為準', mapQuery:'말질로 성수' },
    { n:'CHAAKAN 착한구두 성수 스페이스', tag:'選物鞋店', d:'韓國鞋類品牌「착한구두」在聖水洞打造的概念空間。', hours:'11:00–20:00(依官方公告調整)', mapQuery:'착한구두 성수 스페이스' },
    { n:'MintChoco World(민트초코월드)', tag:'主題快閃店', d:'以薄荷巧克力為主題的話題快閃體驗空間,常有限定周邊販售,建議出發前確認展期是否仍在。', hours:'依快閃期間與官方公告為準', mapQuery:'민트초코월드 성수' }
  ]},
  { id:'ikseondong', name:'益善洞', spots:[
    { n:'清水堂(청수당)', tag:'咖啡', d:'竹林與流水造景的韓屋咖啡廳,必點舒芙蕾鬆餅。', hours:'11:00–22:00(依店家公告調整)', mapQuery:'Cheongsudang Ikseondong Seoul' },
    { n:'小烏龜屋', tag:'咖啡', d:'益善洞韓屋巷弄裡的人氣鹽麵包店。', hours:'11:00–21:00(依店家公告調整,售完為止)', mapQuery:'Small Turtle House Ikseondong Seoul' }
  ]},
  { id:'cheonggyecheon', name:'清溪川', spots:[
    { n:'清溪川(廣橋至光化門段)', tag:'散步', d:'市中心的親水步道,沿岸有燈飾造景,適合晚餐後散步。', hours:'24小時開放,建議夜間散步欣賞燈光', mapQuery:'Cheonggyecheon Stream Seoul' }
  ]},
  { id:'hongdae', name:'弘大', spots:[
    { n:'弘大自由市場', tag:'市集', d:'週末限定,獨立設計師手作攤位聚集。', hours:'週六 13:00–18:00(3月至11月)', mapQuery:'Hongdae Free Market Seoul' },
    { n:'延南洞', tag:'咖啡', d:'鐵道公園旁的巷弄,咖啡廳與選物店林立。', hours:'約11:00–22:00(依店家而異)', mapQuery:'Yeonnam-dong Seoul' },
    { n:'弘大街頭表演', tag:'夜生活', d:'週五六晚間常有街頭藝人與樂團演出。', hours:'週五六晚間,無固定場次', mapQuery:'Hongdae Street Seoul' },
    { n:'Olive Young 弘大總店', tag:'購物', d:'韓國最大美妝連鎖店的弘大旗艦店,品項齊全常有優惠。', hours:'10:00–24:00', mapQuery:'Olive Young Hongdae Main Store Seoul' },
    { n:'AK+ 購物中心', tag:'購物', d:'弘大商圈的複合式購物中心,集結流行服飾與生活選品。', hours:'10:30–22:00', mapQuery:'AK Hongdae Seoul' },
    { n:'Chuu 弘大店', tag:'購物', d:'韓國人氣少女風服飾品牌直營店。', hours:'11:00–22:00(依官方公告調整)', mapQuery:'Chuu Hongdae Seoul' }
  ]},
  { id:'gangnam', name:'江南', spots:[
    { n:'蠶室樂天世界塔', tag:'展望台', d:'首爾最高建築,123樓展望台可俯瞰漢江全景。', hours:'10:30–22:00(展望台 Seoul Sky)', mapQuery:'Lotte World Tower Seoul Sky' },
    { n:'狎鷗亭 / 清潭洞', tag:'購物', d:'精品店與美容診所聚集的時尚街區。', hours:'約11:00–20:00(依店家而異)', mapQuery:'Apgujeong Rodeo Street Seoul' },
    { n:'奉恩寺', tag:'古蹟', d:'鬧區中的千年古剎,與摩天大樓形成強烈對比。', hours:'04:00–20:00', mapQuery:'Bongeunsa Temple Seoul' }
  ]},
  { id:'dongdaemun', name:'東大門', spots:[
    { n:'東大門設計廣場 DDP', tag:'建築', d:'扎哈·哈蒂設計的流線型建築,常有設計展覽。', hours:'10:00–20:00(部分展覽延長至22:00)', mapQuery:'Dongdaemun Design Plaza Seoul' },
    { n:'東大門批發商場', tag:'購物', d:'深夜營業的服飾批發大樓,淩晨仍人潮不斷。', hours:'20:00–翌日05:00(依大樓而異,部分白天也營業)', mapQuery:'Dongdaemun Market Seoul' },
    { n:'SPARREX 東大門店', tag:'汗蒸幕', d:'東大門傳統韓式汗蒸幕,位於 Good Morning City 大樓 B3,可體驗多種溫度蒸房與傳統搓澡。', hours:'24小時營業', mapQuery:'Spa Rex Dongdaemun Seoul' }
  ]},
  { id:'transit-hub', name:'交通轉乘點', spots:[
    { n:'KTX五松站(오송역)', tag:'交通', d:'清州機場入境後轉乘高鐵進首爾的關鍵車站,售票口兩側手扶梯可上樓月台。', hours:'首末班車依當日時刻表為準,約05:00–23:00', mapQuery:'Osong Station KTX Korea' },
    { n:'首爾高速巴士客運站', tag:'交通', d:'首爾市區長途巴士總站,可直接轉乘地鐵3、7、9號線。', hours:'24小時營業(各巴士公司售票時間不同)', mapQuery:'Seoul Express Bus Terminal' },
    { n:'首爾站(KTX/AREX)', tag:'交通', d:'首爾主要鐵路樞紐,可在此轉乘機場快線 AREX 直達仁川機場。', hours:'約05:30–24:00(依各路線末班車而定)', mapQuery:'Seoul Station Korea' }
  ]},
  { id:'airport', name:'機場', spots:[
    { n:'桃園國際機場', tag:'機場', d:'台灣主要國際機場,分為第一、第二航廈,兩航廈間有機場捷運與接駁車連接,並有機場捷運直達台北車站。', hours:'24小時開放(各航空公司櫃檯時間不同)', mapQuery:'Taoyuan International Airport' },
    { n:'仁川國際機場', tag:'機場', d:'韓國主要國際機場,首爾自由行最常使用的入境機場,分為第一、第二航廈,可搭機場快線 AREX 直達首爾站。', hours:'24小時開放(各航空公司櫃檯時間不同)', mapQuery:'Incheon International Airport' },
    { n:'清州國際機場(CJJ)', tag:'機場', d:'韓國中部機場,可搭市區公車轉乘 KTX 五松站進首爾,適合搭配廉航行程入境。', hours:'24小時開放(各航空公司櫃檯時間不同)', mapQuery:'Cheongju International Airport' }
  ]}
];

const FOOD = [
  { n:'廣藏市場綠豆煎餅', tag:'小吃', d:'傳統市場內排隊名店,配一杯馬格利酒剛剛好。', hours:'09:00–18:00(部分攤位提早收攤)', mapQuery:'Gwangjang Market Seoul' },
  { n:'明洞餃子', tag:'麵食', d:'刀切麵配手工水餃,超過一甲子的老字號。', hours:'10:30–21:30', mapQuery:'Myeongdong Kyoja Seoul' },
  { n:'弘大烤肉一條街', tag:'烤肉', d:'豬五花配燒酒,適合三五好友聚餐。', hours:'約17:00–翌日02:00(依店家而異)', mapQuery:'Hongdae BBQ Street Seoul' },
  { n:'新村部隊鍋', tag:'鍋物', d:'辛辣濃郁的部隊鍋,多人共鍋份量十足。', hours:'11:00–22:00', mapQuery:'Sinchon Budae Jjigae Seoul' },
  { n:'梨大炸雞店', tag:'炸雞', d:'韓式炸雞配啤酒,深夜消夜首選。', hours:'16:00–翌日01:00', mapQuery:'Ewha Fried Chicken Seoul' },
  { n:'土俗村蔘雞湯', tag:'補湯', d:'景福宮附近的人蔘雞湯名店,常需排隊。', hours:'10:00–22:00', mapQuery:'Tosokchon Samgyetang Seoul' },
  { n:'小小烤腸(소소막창)', tag:'烤腸', d:'漢南洞人氣烤腸店,必點大蔥烤腸與香脆烤豬皮,建議開門第一批入座避開排隊。', hours:'16:00–翌日01:00(建議開門即入座)', mapQuery:'Sosomakchang Seoul' },
  { n:'倫敦貝果 London Bagel Museum(安國店)', tag:'貝果', d:'安國排隊名店,招牌蔥乳酪貝果,建議營業前現場掃碼候位。', hours:'08:00–20:00(建議07:40–08:00現場候位)', mapQuery:'London Bagel Museum Anguk Seoul' },
  { n:'Cafe Onion 安國店', tag:'咖啡', d:'韓屋風格麵包咖啡廳,招牌雪山麵包與鹹奶油可頌。', hours:'07:00–22:00(依店家公告調整)', mapQuery:'Cafe Onion Anguk Seoul' },
  { n:'三清洞手工麵疙瘩(삼청동수제비)', tag:'麵食', d:'米其林畢比登推薦名店,Q彈麵片配小魚干高湯,可加點海鮮蔥餅。', hours:'11:00–21:00(依店家公告調整)', mapQuery:'Samcheongdong Sujebi Seoul' },
  { n:'益善洞烤肉街(익선동 갈매기골목)', tag:'烤肉', d:'露天巷弄棚下用餐,必點護心肉與松阪豬,首爾夜生活熱點。', hours:'17:00–翌日01:00(依店家而異)', mapQuery:'Ikseondong Galmaegisal Alley Seoul' },
  { n:'聖水馬鈴薯排骨湯(소문난성수감자탕)', tag:'排骨湯', d:'聖水洞在地排隊名店,湯頭濃郁份量十足。', hours:'10:00–22:00(依店家公告調整)', mapQuery:'Somunnan Seongsu Gamjatang Seoul' },
  { n:'豬腳小姐 Myth Jokbal(弘大總店)', tag:'豬腳', d:'必點蒜味豬腳,隨餐附贈蒜辣刀削麵湯底與生菜沙拉。', hours:'16:00–翌日02:00(依店家而異)', mapQuery:'Myth Jokbal Hongdae Seoul' },
  { n:'BHC 炸雞(外送)', tag:'炸雞', d:'韓國連鎖炸雞品牌,適合外帶到漢江公園配啤酒野餐。', hours:'依門市而異,約11:00–翌日01:00', mapQuery:'BHC Chicken Seoul' },
  { n:'Goobne 炸雞(外送)', tag:'炸雞', d:'韓國人氣烤雞連鎖品牌,口味較清爽,適合漢江野餐外送。', hours:'依門市而異,約11:00–24:00', mapQuery:'Goobne Chicken Seoul' }
];

const TRANSIT = [
  { n:'T-money 交通卡', d:'便利商店可購買及儲值,地鐵、公車、部分計程車皆通用。', icon:'T' },
  { n:'首爾地鐵', d:'班次密集,站內有中英文標示,末班車約在午夜前後。', icon:'M' },
  { n:'機場快線 AREX', d:'仁川機場往首爾站直達車約 43 分鐘,另有各站停車較便宜。', icon:'A' },
  { n:'計程車', d:'夜間 12 點後加成收費,建議使用 Kakao T app 叫車較穩定。', icon:'K' },
  { n:'市內巴士', d:'依顏色分幹線、支線、循環線,轉乘地鐵可享優惠。', icon:'B' }
];

const PACKING = [
  { category:'證件與金錢', items:['護照(效期6個月以上)','護照影本 / 電子檔備份','機票、住宿訂單','韓幣現金','信用卡(記得開通海外交易)','旅遊保險證明'] },
  { category:'電子用品', items:['手機充電器','行動電源','轉接頭(韓國為 220V)','SIM卡 / Wi-Fi 分享器','相機與充電器'] },
  { category:'衣物', items:['依天數準備的上衣、褲子','保暖外套(依季節)','舒適好走的鞋子','襪子、內衣褲','睡衣'] },
  { category:'保養與盥洗', items:['防曬乳','個人保養品(小罐分裝)','牙刷牙膏','化妝品 / 卸妝用品','隱形眼鏡 / 眼鏡'] },
  { category:'藥品', items:['個人常備藥','暈車藥','腸胃藥','酸痛貼布','個人處方藥(建議附英文診斷書)'] },
  { category:'其他', items:['環保購物袋(逛市場好用)','雨傘或雨衣','行李秤','轉換插座延長線','筆記本或旅遊清單'] }
];

/* ---------------- Map helper ---------------- */
function mapLink(query){
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
}

/* ---------------- Shared itinerary state (localStorage) ---------------- */
const DAY_COUNT = 4;

function emptyPlanObj(){
  const obj = {};
  for(let i=1; i<=DAY_COUNT; i++) obj[i] = [];
  return obj;
}
function loadPlan(){
  try{
    const raw = localStorage.getItem('seoul-plan');
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return emptyPlanObj();
}
function savePlan(plan){
  try{ localStorage.setItem('seoul-plan', JSON.stringify(plan)); }catch(e){}
}
function loadSelectedDay(){
  try{
    const d = parseInt(localStorage.getItem('seoul-selected-day'), 10);
    if(d >= 1 && d <= DAY_COUNT) return d;
  }catch(e){}
  return 1;
}
function saveSelectedDay(day){
  try{ localStorage.setItem('seoul-selected-day', String(day)); }catch(e){}
}
function isPlanned(plan, name){
  return Object.values(plan).some(list =>
    list.some(item => (typeof item === 'string' ? item === name : item.name === name))
  );
}
function loadTripDates(){
  try{
    const raw = localStorage.getItem('seoul-trip-dates');
    if(raw) return JSON.parse(raw);
  }catch(e){}
  const obj = {};
  for(let i=1; i<=DAY_COUNT; i++) obj[i] = '';
  return obj;
}
function saveTripDates(dates){
  try{ localStorage.setItem('seoul-trip-dates', JSON.stringify(dates)); }catch(e){}
}

/* ---------------- Accommodation state (localStorage) ---------------- */
function emptyStay(){
  return { id: Date.now() + Math.random().toString(16).slice(2), name:'', address:'', checkin:'', checkout:'', confirmNo:'', phone:'', note:'' };
}
function loadStays(){
  try{
    const raw = localStorage.getItem('seoul-stays');
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return [];
}
function saveStays(stays){
  try{ localStorage.setItem('seoul-stays', JSON.stringify(stays)); }catch(e){}
}

/* ---------------- Flight info state (localStorage) ---------------- */
function emptyFlight(){
  return { airline:'', flightNo:'', date:'', depAirport:'', depTime:'', arrAirport:'', arrTime:'', terminal:'', note:'' };
}
function loadFlights(){
  try{
    const raw = localStorage.getItem('seoul-flights');
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return { outbound: emptyFlight(), inbound: emptyFlight() };
}
function saveFlights(flights){
  try{ localStorage.setItem('seoul-flights', JSON.stringify(flights)); }catch(e){}
}
function loadPacked(){
  try{
    const raw = localStorage.getItem('seoul-packed');
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return {};
}
function savePacked(packed){
  try{ localStorage.setItem('seoul-packed', JSON.stringify(packed)); }catch(e){}
}

/* ---------------- Seed: your full itinerary + accommodation ---------------- */
const SEED_TRIP_DATES = { 1:'2026-09-26', 2:'2026-09-27', 3:'2026-09-28', 4:'2026-09-29' };

const SEED_PLAN = {
  1: [
    { name:'清州入境與轉乘高鐵進首爾', start:'07:00', end:'10:30' },
    { name:'漢南洞:潮流商圈選物與巡禮', start:'11:30', end:'16:00' },
    { name:'新沙洞林蔭道:旗艦店逛街與咖啡', start:'16:00', end:'18:30' },
    { name:'晚餐:小小烤腸(소소막창)', start:'18:30', end:'20:00' },
    { name:'解放村:新興市場夜景小酌', start:'20:00', end:'21:00' },
    { name:'盤浦漢江公園:夜景與外送炸雞', start:'21:00', end:'22:30' }
  ],
  2: [
    { name:'安國/鐘路:排隊名店早餐', start:'08:00', end:'10:30' },
    { name:'北村韓屋村/景福宮:韓服體驗', start:'10:30', end:'12:30' },
    { name:'午餐:三清洞麵片湯', start:'12:30', end:'14:00' },
    { name:'益善洞:韓屋巷弄與質感咖啡廳', start:'14:30', end:'17:30' },
    { name:'晚餐:益善洞烤肉街', start:'18:00', end:'20:00' },
    { name:'清溪川夜間散步', start:'20:00', end:'21:30' }
  ],
  3: [
    { name:'聖水洞:工業風潮流重鎮與午餐', start:'11:00', end:'15:30' },
    { name:'弘大商圈:年輕潮流與美妝購物', start:'16:00', end:'18:30' },
    { name:'晚餐:豬腳小姐 Myth Jokbal(弘大總店)', start:'18:30', end:'20:30' },
    { name:'汗蒸幕:SPARREX 東大門店', start:'21:00', end:'23:30' }
  ],
  4: [
    { name:'首爾站退房,前往首爾站', start:'07:30', end:'08:00' },
    { name:'搭乘 AREX 直達列車前往仁川機場', start:'08:30', end:'09:15' },
    { name:'抵達仁川機場,報到退稅與安檢', start:'09:30', end:'10:30' }
  ]
};

const SEED_STAY = {
  id: 'seed-stay-1',
  name: '首爾住宿(新堂洞)',
  address: '首爾市中區新堂洞281-27(53-3 Dasan-ro 42na-gil, Seoul 04585)',
  checkin: '2026-09-26',
  checkout: '2026-09-29',
  confirmNo: '',
  phone: '',
  note: '機場巴士:抵達東大門歷史文化公園站,換乘地鐵在新堂站下車(步行6分鐘)。機場快線:仁川機場T1站上車,弘益大學站轉2號線,新堂站下車(步行6分鐘)。從新堂站6號出口直行200公尺,在耶穌基督後期聖徒教會(教堂與Homeplus Express之間小路)左轉,直行200公尺於King Discount Mart左轉,進入Nail Mono與S Motel之間的小路步行29公尺,可見S Motel旁一棟白色兩層樓房(位於巷內)。'
};

function seedTripDataIfNeeded(){
  try{
    if(localStorage.getItem('seoul-seed-v1')) return;
    localStorage.setItem('seoul-seed-v1', '1');

    const plan = loadPlan();
    const planIsEmpty = Object.values(plan).every(list => list.length === 0);
    if(planIsEmpty) savePlan(JSON.parse(JSON.stringify(SEED_PLAN)));

    const dates = loadTripDates();
    const datesAreEmpty = Object.values(dates).every(v => !v);
    if(datesAreEmpty) saveTripDates({ ...SEED_TRIP_DATES });

    const stays = loadStays();
    if(stays.length === 0) saveStays([{ ...SEED_STAY }]);
  }catch(e){}
}
seedTripDataIfNeeded();
