const package = require('./package.json');
const config = require('./botconfig.json');
const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone:true});

bot.on('ready', () => {
    console.log("number jugler on the line");
});

bot.on('message',async message => {
    if (message.author.bot) 
    return;
    if(message.content.includes("@someone")){
        //onlineMembers = guild.members.filter(member => member.presence.status === "online"); //only green status
        
        var somebodies = message.guild.members;

        var someones = [];
        somebodies.map(user => someones.push(user.user) );

        let someone = someones[Math.floor(Math.random()*message.guild.memberCount)];

        let sentby = "sent by " + message.author.username;

        var rich = new Discord.RichEmbed()
            .setColor("#eee300")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle(message.content.replace("@someone"," "));
            //.setFooter( sentby, message.author.avatarURL );

        message.channel.send("<@"+someone.id+">");
        message.channel.send(rich);
        message.delete(1);
        //let someone = somebodies[Math.floor(Math.random()*somebodies.length)];
        
    }
});

bot.login(config.login_token);