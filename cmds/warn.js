const Discord = require('discord.js');
const fs = require('fs');
let profile = require("../profile.json");
module.exports.run = async(bot,message, args)=>{
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав для выполнения этой команды!");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    profile[rUser.id].warns++;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
   // if(profile[rUser.id].warns >=3){
    //    message.guild.member(rUser).kick("3/3 Предупреждений");
  //  }
    let embed = new Discord.RichEmbed()
    .setDescription("Предупреждение")
    .setColor('#d30000')
    .addField("Администратор", message.author.username)
    .addField("Выдал предупреждение", `${rUser.user.username}`)
    .addField("Количество предупреждений", `${profile[rUser.id].warns} /3`);

    message.channel.send(embed);
};
module.exports.help = {
    name:"warn",
    description:"Описание1"
};