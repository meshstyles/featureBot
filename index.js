//require apis and confi files used
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

// disable @everyone for this bot instance
const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async () => {
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
    if (message.author.bot)
        return;

    // fyi only last 14days of messages can be deleted
    if (message.content.startsWith("!clear")) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            channelcleaner(message);
        }
    }


});

async function channelcleaner(message) {
    var rmList = await message.channel.fetchMessages();
    message.channel.bulkDelete(rmList).catch();
}

//login bot into to discord api with auth token
bot.login(botconfig.token);