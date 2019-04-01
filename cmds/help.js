const Discord = require('discord.js');
const fs = require('fs');
let profile = require("../profile.json");
module.exports.run = async(bot,message, args)=>{
    fs.readdir('./cmds/',(err,files)=>{v
        if(err) console.log(err);
        let jsfiles = files.filter(f=>f.split(".").pop() === "js");
        jsfiles.forEach((f,i)=>{
            let props = require(`./cmds/${f}`);
            message.channel.send(`${props[i].help.name}`);
        })
    })
};
module.exports.help = {
    name:"help",
    description:"Описание1"
};