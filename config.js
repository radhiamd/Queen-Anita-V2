//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "255718655518";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUwrRXJLcWdERlNrMkFpSzlTVmxvK3Z1aW5qeUF2ZnlMUWF6anZIRkgzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTytJYlJvdE1XdUJnd2xPeHF3bmhDM0lPSWtMQml0bFFrV1NBcUxxSURoND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpS1JiUy9uQWdSUDFPeVFUSW9MeVFTYkhLV1RrQS96T214cHFxSVZVbzJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQWlsa0JTQ003ZUtmVzgxT0xKT1dwZjh2Q0FCaGxYYUlsSmcxU0xnQm4wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVOSU1kazNrV0dVSDlVYkZtV1NrVDdRd2tMbTFQUHBoOFJMYTRjVkw5WGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNjVUprTEtobnRJQ3VBT0lLYnF3WGNUZDdPZHR2RXFGU0o2Q1NSQlpnVWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVXU2V1bEdOSEVhajlXY2R3MzBRU3prM3FQZGlCMytqVSsrT1ltTkkzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHhZNmQ4QlFxUWNmOG1PTEtDQTB5YW9Ea3FKRXRTdFRoNVp1dHFjMFNqYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlxOHJBNXRvTkdBWnpjSlFPV0hSR3pRN0JLMDNyTUp5d3NxdXppbTFITEpyenczbUlyMDBBT0p2SitEYW0xZ3ZnamlYd250MGJqZEU2VXFwY0ZwRWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiJpRWZNak9ZbHowL24vWnJHSExCN2wyazE0L0tnbXNPT295dzB6UGRsbDVNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTcxODY1NTUxOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGMTJBNEI4QzA1ODgxMDY4QUMzMjBEOThFOTVBNEFFNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2ODI5NzIzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItUVhQa0htUFRscUJYWXB1NmdEM1dnIiwicGhvbmVJZCI6IjkyZmVmMTY1LTJlNzMtNGYxYy04ODk3LWJlNjEyMzNlYjQ3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFK2ExOThuN2lOYytKSG0rZHdISm5HUVBzMTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGlqSmxFRHdMWlRHcmtXU2tIZFpSZHpUMEUwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNUWDY4RU1aIiwibWUiOnsiaWQiOiIyNTU3MTg2NTU1MTg6MjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05mRC9ha0JFSW1wdGJjR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZRUHZ1TlRkYnVKT0pBZmRrdVJXaThBTm1PL0NvZVQ0WGpoT0V5UWJaWDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNadkxXaGo5b01PY0l0NStLSkROUXJSV2R3TE1oTjRCUDJXZ3loN0RCUnZ3V1VuelhXNDl2aThPQmR2Y2VQb2RQUStNa1NNTkZJRDJhU3FzSzVyTUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzRm5BWTVQcXVhWXR6TDAyWWRJcStIMUd0SGRrdHNtZHR3UmlyOVM3Y2laUHI1c0VTWDgvUEFuOU9iZDlLOGwwREV1amhSaTdDRkxBYUQyZUgxazVpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTcxODY1NTUxODoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVUQ3N2pVM1c3aVRpUUgzWkxrVm92QURaanZ3cUhrK0Y0NFRoTWtHMlYrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2ODI5NzE4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdTUyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
