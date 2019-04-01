const Discord = require('discord.js');
const fs = require('fs');
let profile = require("../profile.json");
module.exports.run = async(bot,message, args)=>{
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
   // if(profile[rUser.id].warns >=3){
    //    message.guild.member(rUser).kick("3/3 Предупреждений");
  //  }
    let embed = new Discord.RichEmbed()
    .setDescription("Информация")
    .setColor('#00fd31')
    .addField("Пользователь", message.author.username)
    .addField("Запросил информацию о", `${rUser.user.username}`)
    .addField("Количество предупреждений", `${profile[rUser.id].warns}`)
    .addField("Баланс", `${profile[rUser.id].coins}`)
    .addField("Опыт", `${profile[rUser.id].xp}`)
    .addField("Уровень", `${profile[rUser.id].lvl}`);

    message.channel.send(embed);
};
module.exports.help = {
    name:"user",
    description:"Описание1"
};