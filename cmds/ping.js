const Discord = require('discord.js');
const fs = require('fs');
module.exports.run = async(bot,message, args)=>{
    message.channel.send('pong!');
};
module.exports.help = {
    name:"ping",
    description:"Описание1"
};