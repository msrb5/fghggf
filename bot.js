const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const UserBlocked = new Set();
const prefix = '&'

 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("1play | Destroyers server", {type: 'PLAYING'});
});
 
 
 
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : GMZN Host`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : @ GMZN Host ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("online")
 
});


//-------------------------------------------------------------نهاية السورس الاساسي--------------------------------------------------------------------------------------------------------------



client.login(process.env.BOT_TOKEN);
