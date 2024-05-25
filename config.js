const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94712823731";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "TODAY
Messages to yourself are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more
SUHAIL_15_36_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgMjI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYxLFxuICAgICAgICA4NixcbiAgICAgICAgMTk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDg2LFxuICAgICAgICA5MixcbiAgICAgICAgMTcxLFxuICAgICAgICA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDksXG4gICAgICAgIDUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU0LFxuICAgICAgICA3MixcbiAgICAgICAgMTk5LFxuICAgICAgICA2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMjAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBoV3BZWGFoazZmU2NTSkkxSEczSk8rV2Qrb21jTzFCRjBJd24yZjZkdGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTI4MjM3MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJCNDYxODJDOTMyMDYzQUQ4NzFFMzZCMThFMTU3NzRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjY1MTQwMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzEyODIzNzMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5N0NCMjQ1RDIxQUE2NjlBREYwMTlENjcyNzIxMzIwMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2NTE0MDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidnJBeEotV3FRb2U4eldZN2k1OWZfQVwiLFxuICBcInBob25lSWRcIjogXCIzNzllMDRkNi1kMWRhLTQ0OGYtOTUzMy04ZWU0ODM1ZmVmYWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMjQzLFxuICAgICAgMjMwLFxuICAgICAgMTQ3LFxuICAgICAgMTQyLFxuICAgICAgMTAwLFxuICAgICAgMTIzLFxuICAgICAgMTIzLFxuICAgICAgMjExLFxuICAgICAgMTYwLFxuICAgICAgMTQ2LFxuICAgICAgMTMxLFxuICAgICAgMzcsXG4gICAgICAxNzgsXG4gICAgICAxMzQsXG4gICAgICA2NSxcbiAgICAgIDEyMyxcbiAgICAgIDExNyxcbiAgICAgIDYxLFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxNDMsXG4gICAgICA2LFxuICAgICAgMTA2LFxuICAgICAgMTQzLFxuICAgICAgMTcxLFxuICAgICAgMTQwLFxuICAgICAgODYsXG4gICAgICAxMjksXG4gICAgICAxMzAsXG4gICAgICAxOTEsXG4gICAgICAyNixcbiAgICAgIDI1MyxcbiAgICAgIDIxMixcbiAgICAgIDE0MSxcbiAgICAgIDI0NyxcbiAgICAgIDIzNixcbiAgICAgIDEwMSxcbiAgICAgIDIwLFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbWlpSlVGRUlPTHlMSUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFOSER6L25TbGdPb0s4V2F4eHIxOU4rMjJHajQ4anhXNTJjc0sxWWlkRU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaHQvaENnTlR6TWNFYUVub2dLazkvcEFJZkc2UHZnU2huQWQ5M01Pb2dhNERobkYxZTVHN3prMS9hUDJ6eGpzUXZXaUJuLy9EZXVhTW9PcXVlbjBwQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibmk3QTV0VkhxQWNQWjBUZTVwaWI4emdMTllrMDJKaHNJRUFaenozS0RnRklGVGRTWVo0SG9KcGpHSTlsWjJVMFRrTEx2aUIwQ0xPU0xFNisxK1pBQUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxMjgyMzczMToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMyMTgxODM4NDEzODg5OjIzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk5vIE5hbWVcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzEyODIzNzMxOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjY1MTM5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU92ZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3ZmLmpzb24iOiAie1wia2V5RGF0YVwiOlwia3BPQ0JBcnYyOVlzRWlBZkJsSGNYa2U0ZzI0b0VnRnFuUVE1dnAyMkhvST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzg2MzUyOTA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYyOTg5MTMzNjlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
