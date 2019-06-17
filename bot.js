const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("525698425443057668")
setInterval(function() {
channel.send(`NghitMaree`);
}, 30)
})

client.login(process.env.BOT_TOKEN);