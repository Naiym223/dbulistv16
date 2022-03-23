const app = require('express').Router();
const Discord = require('discord.js')
const banSchema = require("../../database/models/site-ban.js");
const channels = global.config.server.channels,
      roles = global.config.server.roles;
const client = global.Client;

console.log("[disbots.xyz]: Admin/Ban router loaded.");

app.get("/admin/userban", global.checkAuth, async (req, res) => {
    if (!config.bot.owners.includes(req.user.id)) return res.redirect('../admin');
    let bandata = await banSchema.find();
    res.render("admin/administrator/user-ban.ejs", {
        bot: global.Client,
        path: req.path,
        config: global.config,
        user: req.isAuthenticated() ? req.user : null,
        req: req,
        roles:global.config.server.roles,
        channels: global.config.server.channels,
        bandata: bandata
    })
});
app.post("/admin/userban", global.checkAuth, async (req, res) => {
    if (!config.bot.owners.includes(req.user.id)) return res.redirect('../admin');
    new banSchema({
        user: req.body.userID,
        sebep: req.body.reason,
        yetkili: req.user.id
    }).save()
const embed = new Discord.MessageEmbed()
   .setTitle("New Blacklist")
   .addField("User ID",`${req.body.userID}`)
   .addField("Ban Reason",`${req.body.reason}`)
   .addField("Moderator",`<@${req.user.id}>`)
   .setColor("#7289da")
   .setThumbnail("https://cdn.discordapp.com/attachments/602204087370645515/921999670681673758/defo.png")
   .setImage("https://cdn.discordapp.com/attachments/918550447134998589/922004157903290429/DiscordBotUniverse.png")
   .setFooter(`Dbulist.xyz | Blacklists`, `https://cdn.discordapp.com/attachments/602204087370645515/921999670681673758/defo.png`)
   client.channels.cache.get("921210058895925258").send(embed)
  const dmembed = new Discord.MessageEmbed()
   .setTitle("Website Blacklist")
   .setDescription("I regret to inform you that you have been blacklisted from `dbulist.xyz`. \n Information about the ban can be found below.")
   .addField("Your ID",`${req.body.userID}`)
   .addField("Ban Reason",`${req.body.reason}`)
   .addField("Moderator",`<@${req.user.id}>`)
   .setColor("BLUE")
   .setThumbnail("https://cdn.discordapp.com/attachments/602204087370645515/921999670681673758/defo.png")
   .setImage("https://cdn.discordapp.com/attachments/918550447134998589/922004157903290429/DiscordBotUniverse.png")
   .setFooter(`Dbulist.xyz | Blacklists`, `https://cdn.discordapp.com/attachments/602204087370645515/921999670681673758/defo.png`)
   client.users.cache.get(req.body.userID).send(dmembed)
   return res.redirect('../admin/userban?success=true&message=User banned.');
  
  
});
app.post("/admin/userunban", global.checkAuth, async (req, res) => {
    if (!config.bot.owners.includes(req.user.id)) return res.redirect('../admin');
    banSchema.deleteOne({
        user: req.body.userID
    }, function(error, user) {
        if (error) console.log(error)
    })
    return res.redirect('../admin/userban?success=true&message=User ban removed.');
});

module.exports = app;