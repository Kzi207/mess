module.exports.config = {
	name: "menu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "đoàn buồi rẻ rách",
	description: "Hướng dẫn cho người mới",
	usages: "[all/-a] [số trang]",
	commandCategory: "Dành cho người dùng",
	cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = "🐉𝗛𝗮̃𝘆 𝗻𝗵𝐚̣̂𝗽 𝟭 𝗰𝗼𝗻 𝘀𝗼̂́ 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻🐉";
	else if (num > data.length || num <= 0) msg = "🐉𝗦𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶🐉";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += ` 『 𝗡𝗵𝗼́𝗺: ${command_config.commandCategory.toUpperCase()}   』   \n`;
			msg += `\n🧸 𝗧𝗲̂𝗻: ${dataAfter}`;
			msg += `\n💬 𝗠𝗼̂ 𝘁𝗮̉: ${command_config.description}`;
			msg += `\n☄️ 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: ${(command_config.usages) ? command_config.usages : ""}`;
			msg += `\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗼̛̀: ${command_config.cooldowns || 5} giây`;
			msg += `\n🔗 𝗤𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻: ${(command_config.hasPermssion == 0) ? "Người dùng" : (command_config.hasPermssion == 1) ? "Quản trị viên nhóm" : "Quản trị viên bot"}`;
      msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
			msg += `\n\n→ [💓] 𝗕𝗼𝘁 đ𝘂𝗼̛̣𝗰 𝗽𝗵𝗮́𝘁 𝘁𝗶𝗲̂̉𝗻 𝗯𝗼̛̉𝗶 𝐇𝐞𝐧𝐫𝐲\n Đ𝗶𝗲̂̀𝘂 𝗸𝗵𝗶𝗲̂̉𝗻 𝗯𝗼̛̉𝗶 𝐓𝐫𝐚𝐧 𝐃𝐨𝐚𝐧 [🐉]`;
		} else {
			check = true;
			let count = 0;
			msg += `→ ${dataAfter.group.toUpperCase()} \n`;

			dataAfter.cmds.forEach(item => {
				msg += `\n ${count+=1}. → ${item}: ${commands.get(item).config.description}`;
			})
			msg += "\n\n╭──────╮\n    𝗥𝗘𝗣𝗟𝗬 \n╰──────╯ [💓] 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗹𝗲̣̂𝗻𝗵 𝘃𝗮̀ 𝗰𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 ";
		}
	}
	const axios = require('axios');
	const fs = require('fs-extra');
	const img = ["https://i.imgur.com/3eieNQt.gif", "https://i.imgur.com/vekcCyz.gif", "https://i.imgur.com/qwfQeDB.gif", "https://i.imgur.com/Mn4AFfo.gif", "https://i.imgur.com/s6ZgMkc.gif",]
	var path = __dirname + "/cache/menu.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 
	const imgP = []
	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
	fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
	imgP.push(fs.createReadStream(path))
	var msgg = {body: msg, attachment: imgP}
	api.unsendMessage(handleReply.messageID);
	return api.sendMessage(msgg, event.threadID, (error, info) => {
		if (error) console.log(error);
		if (check) {
			global.client.handleReply.push({
				type: "cmd_info",
				name: this.config.name,
				messageID: info.messageID,
				content: data[num].cmds
			})
		}
	}, event.messageID);
}

module.exports.run = async function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const axios = require('axios');
	const fs = require('fs-extra');
	const imgP = []
	const img = ["https://i.imgur.com/3eieNQt.gif",
"https://i.imgur.com/vekcCyz.gif", "https://i.imgur.com/qwfQeDB.gif", "https://i.imgur.com/Mn4AFfo.gif", "https://i.imgur.com/s6ZgMkc.gif",]
	var path = __dirname + "/cache/menu.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 

   	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
	const command = commands.values();
	var group = [], msg = " 💮===「 𝗠𝗘𝗡𝗨 𝗕𝗢𝗧 」===💮\n";
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 2222222222);
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝘀𝗼̂́";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg = "🐉𝗦𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶🐉";
			else check = true;
		}
		if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
			bonus = index_start;
			index_end = (index_start + 2222222222 > all_commands.length) ? all_commands.length : index_start + 2222222222;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n${index_start+=1}. → ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\n→ [🌸] 𝗧𝗿𝗮𝗻𝗴 ${page_num_input || 1}/${page_num_total}`;
			msg += `\n→ [💗] Đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝘁𝗿𝗮𝗻𝗴 𝗸𝗵𝗮́𝗰, 𝗱𝘂̀𝗻𝗴: ${prefix}𝗺𝗲𝗻𝘂 [-𝗮,𝗮𝗹𝗹] [𝘀𝗼̂́ 𝘁𝗿𝗮𝗻𝗴]`;
      msg += `\n→ [🌺] 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 ${prefix}𝗵𝗲𝗹𝗽 𝗮𝗹𝗹 đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝐚̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵\n\n╭───𝟗𝟗𝟗───╮\n
.\n╰───Lệnh───╯\n [💓] 𝗥𝗘𝗣𝗟𝗬 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗹𝗲̣̂𝗻𝗵 𝘃𝗮̀ 𝗰𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵\n `
			msg += "💖💖💖💖💖💖💖💖💖💖";
		}
		var msgg = {body: msg, attachment: imgP}
		return api.sendMessage(msgg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 2222222222);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝘀𝗼̂́";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "🐉𝗦𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶🐉";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
		bonus = index_start;
		index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => msg += `\n${index_start+=1}. → ${commandGroup.group.toUpperCase()} ☄️ `);
		msg += `\n\n『 𝐃𝐨𝐚𝐧𝐇𝐞𝐧𝐫𝐲 』
→ [📖] 𝗧𝗿𝗮𝗻𝗴 1/1 
→ [☄️] Đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝘁𝗿𝗮𝗻𝗴 𝗸𝗵𝗮́𝗰, 𝗱𝘂̀𝗻𝗴: .𝗺𝗲𝗻𝘂 
→ [🌼] 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 .𝗺𝗲𝗻𝘂 𝗮𝗹𝗹 đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝐚̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵
→ [🌎] 𝐀𝐝𝐦𝐢𝐧: Trần Đoàn 
 [💓] 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝗲𝗼 𝗽𝗵𝐚̂𝗻 𝗹𝗼𝗮̣𝗶 𝗯𝗼𝘁 đ𝘂̛𝗼̛̣𝗰 đ𝗶𝗲̂̀𝘂 𝗵𝗮̀𝗻𝗵 𝗯𝗼̛̉𝗶 𝐓𝐫𝐚̀𝐧 𝐃𝐨𝐚̀𝐧
 [‼️]𝗟𝘂̛𝘂 𝘆́ 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗕𝗼𝘁
 -𝗫𝗶𝗻 đ𝘂̛̀𝗻𝗴 𝘀𝗽𝗮𝗺 𝗯𝗼𝘁 𝘃𝗮̀𝗼 𝘃𝗶𝗲̣̂𝗰 𝗸𝗵𝗮́𝗰, 𝗞𝗵𝗼̂𝗻𝗴 đ𝘂𝗼̛̣𝗰 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗲̃ 𝗯𝗶̣ 𝗯𝗼𝘁 𝗯𝗮𝗻,𝗔𝗱 𝗸𝗵𝗼̂𝗻𝗴 𝗺𝗼̛̉ 𝘁𝗿𝘂̛̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 đ𝗮̣̆𝗰 𝗯𝗶𝗲̣̂𝘁🌍☄️🌺🌼🌸,𝗰𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 𝘃𝘂𝗶 𝘃𝗲̉ 💓💓💓💓💓💓`;
	}
	var msgg = {body: msg, attachment: imgP}
	return api.sendMessage(msgg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
}