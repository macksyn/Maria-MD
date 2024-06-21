const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "2348089782988"],
global.ownername = process.env.OWNER_NAME || "💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
global.ytname = "YT: macksyn"
global.socialm = "GitHub: Macksyn"
global.location = "Nigeria"

global.botname = process.env.BOTNAME || "𝐌𝐀𝐑𝐈𝐀-𝐌𝐃",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
//console view/theme
global.themeemoji = '🧩'
global.wm = "Macksyn botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029Vad8fY6HwXbB83yLIx2n'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '🧑‍💻 *Here you go, chief!* ',
    prem: '🧑‍💻 *Dude, this feature is reserved for premium users only*',
    admin: '🧑‍💻 *My friend, this feature is reserved for admins only*',
    botAdmin: '🧑‍💻 *Darling, this feature can only be used when the bot is a group admin* ',
    owner: '🧑‍💻 *Hey friend, this feature is reserved for the owner only!!*',
    group: '🧑‍💻 *Boss, this feature is exclusively for groups*',
    private: '🧑‍💻 *Hey Dude, this feature is exclusively for private chats*',
    wait: '🧑‍💻 *⏳ Processing...* ',    
    error: '🧑‍💻 *Oh dear, there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
