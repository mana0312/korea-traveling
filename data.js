/* ---------------- Shared data ---------------- */
const AREAS = [
  { id:'jongno', name:'鐘路 / 北村', spots:[
    { n:'景福宮', tag:'古宮', d:'朝鮮王朝正宮,每日兩場守衛交接儀式,建議租借韓服可免門票。', hours:'09:00–18:00(週二公休,依季節調整閉館時間)', mapQuery:'Gyeongbokgung Palace Seoul' },
    { n:'北村韓屋村', tag:'散步', d:'保存完整的傳統韓屋巷弄,清晨人少最適合拍照。', hours:'全天開放(部分為住宅區,請放低音量)', mapQuery:'Bukchon Hanok Village Seoul' },
    { n:'仁寺洞', tag:'購物', d:'傳統工藝品店與茶館聚集的老街,適合買伴手禮。', hours:'約10:00–20:00(依店家而異)', mapQuery:'Insadong Seoul' },
    { n:'昌德宮後苑', tag:'古蹟', d:'需預約導覽的祕苑,韓國唯一列入世界遺產的宮殿。', hours:'09:00–17:30(週一公休,後苑需預約導覽場次)', mapQuery:'Changdeokgung Palace Seoul' }
  ]},
  { id:'myeongdong', name:'明洞', spots:[
    { n:'明洞街道', tag:'購物', d:'美妝店與街邊小吃密集,晚上七點後最熱鬧。', hours:'全天開放,店家約10:00–22:00', mapQuery:'Myeongdong Shopping Street Seoul' },
    { n:'南山首爾塔', tag:'夜景', d:'搭纜車上南山,情人鎖牆是必訪拍照點。', hours:'10:00–23:00(展望台,末班纜車提早)', mapQuery:'N Seoul Tower' },
    { n:'明洞聖堂', tag:'建築', d:'首爾最早的哥德式教堂建築之一,鬧區中的靜謐角落。', hours:'06:00–21:00(彌撒時間不開放參觀)', mapQuery:'Myeongdong Cathedral Seoul' }
  ]},
  { id:'hongdae', name:'弘大', spots:[
    { n:'弘大自由市場', tag:'市集', d:'週末限定,獨立設計師手作攤位聚集。', hours:'週六 13:00–18:00(3月至11月)', mapQuery:'Hongdae Free Market Seoul' },
    { n:'延南洞', tag:'咖啡', d:'鐵道公園旁的巷弄,咖啡廳與選物店林立。', hours:'約11:00–22:00(依店家而異)', mapQuery:'Yeonnam-dong Seoul' },
    { n:'弘大街頭表演', tag:'夜生活', d:'週五六晚間常有街頭藝人與樂團演出。', hours:'週五六晚間,無固定場次', mapQuery:'Hongdae Street Seoul' }
  ]},
  { id:'gangnam', name:'江南', spots:[
    { n:'蠶室樂天世界塔', tag:'展望台', d:'首爾最高建築,123樓展望台可俯瞰漢江全景。', hours:'10:30–22:00(展望台 Seoul Sky)', mapQuery:'Lotte World Tower Seoul Sky' },
    { n:'狎鷗亭 / 清潭洞', tag:'購物', d:'精品店與美容診所聚集的時尚街區。', hours:'約11:00–20:00(依店家而異)', mapQuery:'Apgujeong Rodeo Street Seoul' },
    { n:'奉恩寺', tag:'古蹟', d:'鬧區中的千年古剎,與摩天大樓形成強烈對比。', hours:'04:00–20:00', mapQuery:'Bongeunsa Temple Seoul' }
  ]},
  { id:'dongdaemun', name:'東大門', spots:[
    { n:'東大門設計廣場 DDP', tag:'建築', d:'扎哈·哈蒂設計的流線型建築,常有設計展覽。', hours:'10:00–20:00(部分展覽延長至22:00)', mapQuery:'Dongdaemun Design Plaza Seoul' },
    { n:'東大門批發商場', tag:'購物', d:'深夜營業的服飾批發大樓,淩晨仍人潮不斷。', hours:'20:00–翌日05:00(依大樓而異,部分白天也營業)', mapQuery:'Dongdaemun Market Seoul' }
  ]}
];

const FOOD = [
  { n:'廣藏市場綠豆煎餅', tag:'小吃', d:'傳統市場內排隊名店,配一杯馬格利酒剛剛好。', hours:'09:00–18:00(部分攤位提早收攤)', mapQuery:'Gwangjang Market Seoul' },
  { n:'明洞餃子', tag:'麵食', d:'刀切麵配手工水餃,超過一甲子的老字號。', hours:'10:30–21:30', mapQuery:'Myeongdong Kyoja Seoul' },
  { n:'弘大烤肉一條街', tag:'烤肉', d:'豬五花配燒酒,適合三五好友聚餐。', hours:'約17:00–翌日02:00(依店家而異)', mapQuery:'Hongdae BBQ Street Seoul' },
  { n:'新村部隊鍋', tag:'鍋物', d:'辛辣濃郁的部隊鍋,多人共鍋份量十足。', hours:'11:00–22:00', mapQuery:'Sinchon Budae Jjigae Seoul' },
  { n:'梨大炸雞店', tag:'炸雞', d:'韓式炸雞配啤酒,深夜消夜首選。', hours:'16:00–翌日01:00', mapQuery:'Ewha Fried Chicken Seoul' },
  { n:'土俗村蔘雞湯', tag:'補湯', d:'景福宮附近的人蔘雞湯名店,常需排隊。', hours:'10:00–22:00', mapQuery:'Tosokchon Samgyetang Seoul' }
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
function loadPlan(){
  try{
    const raw = localStorage.getItem('seoul-plan');
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return { 1:[], 2:[], 3:[] };
}
function savePlan(plan){
  try{ localStorage.setItem('seoul-plan', JSON.stringify(plan)); }catch(e){}
}
function loadSelectedDay(){
  try{
    const d = parseInt(localStorage.getItem('seoul-selected-day'), 10);
    if([1,2,3].includes(d)) return d;
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

/* ---------------- Packing checklist state (localStorage) ---------------- */
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
