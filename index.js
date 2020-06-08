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

    var args = message.content.split(' ');

    if (args[0] === '!yt') {

        if (!args[1])
            return;

        if (args[1].startsWith("https://www.youtube.com/watch?v=")) {

            var yid = linkcleaner(args[1]);

            var yimgurl = "https://img.youtube.com/vi/" + yid + "/maxresdefault.jpg";

            const yEmbed = new Discord.RichEmbed()
                .setColor("#FF0000")
                .setURL("https://www.youtube.com/watch?v=" + yid)
                .setTitle("YOUTUBE LINK")
                .setImage(yimgurl)
                .setFooter("YouTube thumbnail embed via numberstation");



            // //look if embed for discord exists and retrun if exists
            // try {
            //     if (message.embeds) {
            //         if (message.embeds[0].title !== "YouTube") return;
            //     }
            // } catch (error) { }

            message.channel.send(yEmbed);

            // // save the rest of the message if we want to delte original message
            // if (args[2]) {
            //     var ymsg = "";
            //     for (let index = 2; index < args.length; index++) {
            //         ymsg = ymsg + " " + args[index];
            //     }
            //     message.reply("said : " + ymsg);
            // }
            // message.delete(1);


        } else
            return message.reply("that doesn't look like a youtube link");
    }
});

function linkcleaner(link) {
    //https://www.youtube.com/watch?v=pJOW2zu8bpg&list=WL&index=6&t=0s
    //to clean id out split on "?v="
    //check if string longer than 11 char
    // -> split on "&list"

    var split1 = link.split("?v=");
    if (split1[1].length < 11)
        return split1[1];
    else {
        var split2 = split1[1].split("&list=");
        return split2[0];
    }
}

//login bot into to discord api with auth token
bot.login(botconfig.token);