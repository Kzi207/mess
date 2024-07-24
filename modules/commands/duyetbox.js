const fs = require("fs"),  { writeFileSync: wf, existsSync: es, readFileSync: rd } = fs, { stringify: sf, parse: pr } = JSON, path = __dirname + "/cache/approvedThreads.json", path2 = __dirname + "/cache/pendingdThreads.json";
module.exports.config = {
	name: "duyetbox",
	version: "1.1.1",
	hasPermssion: 3 ,
	credits: "Quynh :b",
	description: "Duyệt nhóm nào thì nhóm đó sẽ được sử dụng bot'-'",
	commandCategory: "ADMIN",
  usages: "[pending/list] + reply [STT/All]để gỡ hoặc duyệt box đó.\n [.../del/on/off]\n • ... - duyệt box hiện tại, del - gỡ duyệt box hiện tại\n • on/off - bật tắt chế độ phê duyệt.",
  cooldowns: 0,
  envConfig: {
    status: true
    }
};
module.exports.languages = {
  "vi": {},
  "en": {}
};

module.exports.onLoad = () => {
  if (!es(path)) wf(path, sf([]));
  if (!es(path2)) wf(path2, sf([]));
}
module.exports.run = async function ({ api, event, args, Threads, Users }) {
  const threadInfo = await api.getThreadInfo(event.threadID)
    var threadName = threadInfo.threadName||"Tên không tồn tại";
  var { threadID: t, messageID: m, senderID: s } = event, { sendMessage: M } = api, { handleReply: hr } = global.client, /*{ OWNER: Quynh } = global.config, */Quynh= "100065158925406",{ name: nameModule, credits: cd } = this.config, array = [], i = 0, c = (args[0] == "list" ? pr(rd(path)): pr(rd(path2))), d = (args[0] == "list" ? path: path2), dd = pr(rd(path)), ddd = pr(rd(path2)), statusDuyet = pr(rd(__dirname + "/../../config.json")), onoff = (args[0] == "on" ? true: false), allTid = global.data.allThreadID;
  if (cd != "Quynh :b") return;
  if (args[0] == "pending" || args[0] == "list") {
for (let id of c) {
  var getInfo = (await Users.getInfo(id)) ? (await Users.getInfo(id)): (await Threads.getInfo(id));
    array += `━━━━━━━━━━━━━━━━\n[${++i}] 𝗡𝗵𝗼́𝗺: ${getInfo.name ? getInfo.name: getInfo.threadName} \n👤 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${getInfo.threadName ? `${getInfo.participantIDs.length}\n🏘️ đ𝗮̂𝘆 𝗹𝗮̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗼́𝗺 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁`: `\n🧸 đ𝗮̂𝘆 𝗹𝗮̀ 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁`}\n`}
  M(`${array.length == 0 ? `${args[0] == "pending" ? "[ 𝗗𝗨𝗬𝗘̣̂𝗧 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 ] → 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝗼 𝘁𝗿𝗼𝗻𝗴 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝗼̛̀": "[ 𝗗𝗨𝗬𝗘̣̂𝗧 𝗟𝗜𝗦𝗧 ] → 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝗼 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 đ𝗮̃ 𝗱𝘂𝘆𝗲̣̂𝘁"}`: `=======『 ${args[0] == "list" ? "𝗗𝗨𝗬𝗘̣̂𝗧 𝗟𝗜𝗦𝗧": "𝗗𝗨𝗬𝗘̣̂𝗧 𝗣𝗘𝗡𝗗𝗜𝗡𝗚"} 』=======\n\n→ 𝗦𝗼̂́ 𝗻𝗵𝗼́𝗺 𝗵𝗶𝗲̣̂𝗻 đ𝗮𝗻𝗴 𝗰𝗼́ 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̀: ${c.length}\n${array}\n→ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗸𝗲̀𝗺 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗵𝗼𝗮̣̆𝗰 𝗮𝗹𝗹 đ𝗲̂̉ ${args[0] == "𝗹𝗶𝘀𝘁 💓" ? "𝗴𝗼̛̃ 💫": "𝗱𝘂𝘆𝗲̣̂𝘁 🌟"}`}`, t, (error, info) => {
hr.push({ name: nameModule, messageID: info.messageID, author: Nam, data: c, ss: d })
        }, m)
    };
  if (s != Quynh) return;
  if (!args[0]) {
    dd.push(t),
    ddd.splice(ddd.indexOf(t), 1);
    wf(path, sf(dd, null, 2)),
    wf(path2, sf(ddd, null, 2));
      return M(`[ 𝗗𝗨𝗬𝗘𝗧𝗕𝗢𝗫 ] → 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗻𝗵𝗼́𝗺 ${threadName}`, t, m);
  }
  if (args[0] == "del") {
    dd.splice(dd.indexOf(t), 1);
    wf(path, sf(dd, null, 2));
      return M(`[ 𝗗𝗨𝗬𝗘𝗧𝗕𝗢𝗫 𝗗𝗘𝗟 ] → 𝗚𝗼̛̃ 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗻𝗵𝗼́𝗺`, t, m);
  }
  if (args[0] == "on" || args[0] == "off") {
  	if (onoff == statusDuyet[nameModule].status || allTid.length == 0) return M(`${allTid.length == 0 ? "hiện tại bot không tham gia nhóm nào hoặc đã xảy ra lỗi": `hiện tại duyệt đang bật chế độ ${args[0]} rồi`}`, t, m)
statusDuyet[nameModule].status = onoff
wf(__dirname + "/../../config.json", sf(statusDuyet, null, 2));
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
    return M(`${args[0] == "on" ? "bật": "tắt"} chế độ chỉ nhóm có trong danh sách duyệt với được phép sử dụng bot`, t, async function () {
  for (var tid of allTid) {
try { await M(`${args[0] == "on" ? `đã bật chế độ phê duyệt - chỉ những nhóm có trong danh sách duyệt mới được sử dụng bot,\n - ${dd.find(namm => namm == t) ? "nhóm bạn có trong danh sách phê duyệt": "nhóm bạn không có trong danh sách phê duyệt"}`: "đã tắt chế độ phê duyệt - tất cả các nhóm đều sử dụng được bot"}`, tid);} catch (error) { ++i; }
 } M(`✅ ${allTid.length - i} thread\n⁉️ ${i} thread`, t, m)
        }, m);
    }
};
module.exports.handleReply = async function ({ api, event, handleReply }) {
   var { threadID: t, messageID: m, senderID: s, body: y } = event, { author: a, data: dp, ss } = handleReply, { sendMessage: M } = api, dataApproved = pr(rd(path)), dataPending = pr(rd(path2)), array = [], arby = y.split(" "), cfo = arby[0] === "All" ? dp: array, nums = arby.map(n => parseInt(n));
        if (s != a) return M("admin chính nha", t);
        if (dp.length == 0) return;
        if (y !== "All" && isNaN(y)) return M(`cách sử dụng và chú ý!\n • ví dụ: reply + 1 2 3 ...\n • STT phải nhỏ hơn ${dp.length}`, t, m);
 for (let num of nums) {
   var id = dp[num-1]
   array.push(`${id}`)}
   M(`${arby[0] === "All" ? `${ss == path ? "gỡ": "phê duyệt"} thành công ${dp.length} box`: `${ss == path2 ? `phê duyệt thành công ${array.length} box`: `gỡ ${array.length} box khỏi danh sách duyệt thành công`}`}`, t, function () {         	
      for (let idd of cfo) {
        if (ss == path2) {        	
       dataApproved.push(idd), dataPending.splice(dataPending.indexOf(idd), 1);
   	wf(path, sf(dataApproved, null, 2)), wf(path2, sf(dataPending, null, 2));
    if (arby[0] === "All" && dp.length == 0) break;
      };
        if (ss == path) {
dataApproved.splice(dataApproved.indexOf(idd), 1);
    wf(path, sf(dataApproved, null, 2));
    if (arby[0] === "All" && dp.length == 0) break;
      }
  M(`${ss == path ? `====『 𝗗𝗨𝗬𝗘𝗧𝗕𝗢𝗫 𝗗𝗘𝗟 』====\n━━━━━━━━━━━━━━━━\n→ đ𝗮̃ 𝗯𝗶̣ 𝗴𝗼̛̃ 𝗸𝗵𝗼̉𝗶 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵` : `====『 𝗗𝗨𝗬𝗘𝗧𝗕𝗢𝗫 』====\n━━━━━━━━━━━━━━━━\n→  đ𝗮̃ đ𝘂̛𝗼̛̣𝗰 𝗮𝗱𝗺𝗶𝗻`} 𝗽𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁`, idd)                  
      }
   }, m);
};