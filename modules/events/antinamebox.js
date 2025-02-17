module.exports.config = {
  name: "antinamebox",
  eventType: ["log:thread-name","change_thread_image"],
  version: "1.0.1",
  credits: "Vtuan",
  description: "chống đổi tên nhóm",
    envConfig: {
        autoUnsend: true,
        sendNoti: true,
        timeToUnsend: 10
    }
};

module.exports.run = async function ({ event, api, Threads,Users }) {
  const fs = require("fs");
  const path = require('path');
  const { threadID, logMessageType, type} = event;
  const { setData, getData } = Threads;
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["adminUpdate"] != "undefined" && thread["adminUpdate"] == false) return;
  try {
      let dataThread = (await getData(threadID)).threadInfo;
      switch (logMessageType) {        
          case "log:thread-name": {
            const fs = require('fs');
            const nameboxPath = path.join(__dirname, '../../Data_Vtuan/data/namebox.json');
            let nameboxData = JSON.parse(fs.existsSync(nameboxPath) ? fs.readFileSync(nameboxPath) : "[]");
            const namebox = nameboxData.find(entry => entry.threadID == threadID);
            if (namebox && namebox.status == true) {
              api.setTitle(namebox.namebox, threadID);
              api.sendMessage(`[ ! ]‣ Hiện tại nhóm đang bật chế độ anti tên nhóm, quản trị viên dùng anti namebox off để tắt!`, threadID)
                }
                break;
            }
          case "change_thread_image": {
            console.log(`saihfhusfghu`)
          }
        }
        await setData(threadID, { threadInfo: dataThread });
    } catch (e) { console.log(e) };
}