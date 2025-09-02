const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0c3bkZ0RlNzMzJ5NUloc09JVzY3NEVMeGxHWlRrUUNGOGwrUTIxTkdIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3dtRkExSWdscFRhUkdQUFhXT1oxbitrZDZhM3NFTk01S3MrWUhuZUN3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RTRMMUZ6TnVDc3JGenFDQjEwRmpHWGNteW5DcW1ZajFLM3JqRFBkUjAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSzRUWUNiVUVmWFJNNk9WN2MxQjJzZXBkTVhmaWhjdllJcFRYQlVIekE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdMM2NKTUdDM00xRTI1VlJsaDhMV2MvZWFDSFBjU05YRGIvMnlxWXNUSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJlb3dpMEZseGdYbkwxbFo0L0RWZHVRWVcrbTk3elVSWkUzSUhHUG95RXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pGdGI3UVFpSll3eDhHcWh2V3BxaTlud0pwOGhzalI2aFFXY01HVTAycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1FhWGVObmsyWkgwNmNrdUVXSko0emQrVmc3UWI4aWtxUGNhcE0xSlkwQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BOXE3azdsVCs3UDJpN3AvdTY1eUthNi94ek42dnpxdWo2RDZ5TVA5TXRkZ3l5UU5mN0w4dVNPVjBqbVc2ZDhLL3VrVUw5RmEzZDZzMUFzVW9rSkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiJiVzJ5eWRaQjZYaWhTbEJDVVJQbGRzZC9keE5IeXQzdXVWRmx3SHluNmZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc4OTU4NzQ0OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5QTk3QzQyQTQxRTgwQ0JFMzkwQTM4RDU3NjE3Q0EyQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2Nzk4NTM0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3ODk1ODc0NDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTk1RUJGMjVFMzcyQ0FBQjAxQzhFODYzMDBGRTE4N0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Njc5ODUzNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiMVpZRDU2VkwiLCJtZSI6eyJpZCI6IjI1NTc4OTU4NzQ0ODozNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPdGhtYW4gQmlsIFlhbWluIiwibGlkIjoiMjUzMzUxOTY3MDg4NjgxOjM2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTi90N1BRQ0VNRzgyc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWEhoMEQxZGhiRkVxNEMxVWxSOVVXZVU1TjdDaEFFS3Mzbis5clh5VWEyST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNzF4M1graWQyR1JIdHlwRjFlS3hraDNFQVhNbytMVW94cXE4c095Q08xYjFHaDJQNHhqN2NaSFZmZTZ6dGdubGsyVHh4Zi9MNW9LSVdZY3Bza3hSREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImxJa2xkY3Y4NHBGa1czTzJ6SU04R3VhN0JZdWZTZE5DbnY1Y3NZOStUcE9sTmMrSm13UW9CT3VIbEIxa2VrLy9NeEtkOWRneUpJSUlkaXg3K1NRK0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Nzg5NTg3NDQ4OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZ4NGRBOVhZV3hSS3VBdFZKVWZWRm5sT1Rld29RQkNyTjUvdmExOGxHdGkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Njc5ODUzMywibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJaGwifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-𝙃𝘼𝘾𝙆𝙀𝙍-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/iyudhj.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3-𝙃𝘼𝘾𝙆𝙀𝙍,-𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-HACKER-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-HACKER-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iyudhj.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
