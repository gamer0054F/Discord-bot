var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "!" //The text before commands, you can put anything that you prefer

    if(message.author.id != "793535729770037288" && message.channel.id != "781872678352191568"){
        if(msg.startsWith('!', 0)){
            if(msg === prefix + "rank" && message.channel.id != "781872678352191568"){
                message.delete();
                message.channel.send(sender + "please use #rank-check ") // Sends a message to the channel, with the content
            }
           
        }
        
    }
});

bot.login(process.env.BOT_TOKEN)
