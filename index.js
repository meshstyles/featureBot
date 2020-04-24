//require apis and confi files used
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

// disable @everyone for this bot instance
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() => {
  //resoponse to see bot is alive
  console.log(`Bot is online`);
  //activty
  bot.user.setActivity("I'm a Bot lol")
});

/**
 * main function
 * @returns void
 */
bot.on("message", async message => {
  if(message.content.startsWith("!ping")){
    message.reply("pong");
  } 
});

//login bot into to discord api with auth token
bot.login(botconfig.token);