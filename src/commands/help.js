const Discord = require('discord.js')
const botdata = require("../database/models/botlist/bots.js")
const fs = require('fs');
module.exports.run = async (client,message,args) => {
   const embed = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
   .setTitle("Help Command")
   .setDescription("``;Botinfo`` - Gets information on bot \n ``;Eval`` - Allows developers to run outside commands \n ``;Votebot`` - Allows you to vote for a bot from a discord server \n ``;Ping`` - shows bot's latency/ping. \n ``;Bots <@User>`` - Shows a users bots \n ``;Reboot`` - Allows a developer to reboot DBU. \n ``;Topvoted`` - Shows bots and their votes. \n ``;Uptime`` - Shows uptime for selected bot subject.`")
   .setColor("#7289da")
   .setFooter(message.author.tag,message.author.avatarURL({dynamic: true}))
   message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: "help",
    description: "",
    usage: ""
  };