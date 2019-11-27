console.log(`██╗███╗   ██╗████████╗███████╗██████╗ ███╗   ██╗███████╗████████╗███████╗██╗  ██╗`);
console.log(`██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗████╗  ██║██╔════╝╚══██╔══╝██╔════╝╚██╗██╔╝`);
console.log(`██║██╔██╗ ██║   ██║   █████╗  ██████╔╝██╔██╗ ██║█████╗     ██║   █████╗   ╚███╔╝ `);
console.log(`██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗██║╚██╗██║██╔══╝     ██║   ██╔══╝   ██╔██╗ `);
console.log(`██║██║ ╚████║   ██║   ███████╗██║  ██║██║ ╚████║███████╗   ██║   ███████╗██╔╝ ██╗`);
console.log(`╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝`);

// To run bot in web storm alt + shift + f10

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjQ1NzM1NTMzNDM5MzUyODYy.XdG_WA.4Rtc-gKADCiUBJJOuph99K7tGCU';
const PREFIX = 'ie;';
const version = '1.0.0';
const ms = require('ms');

bot.on('ready', () => {
    console.log(' Bot is now online ');
});

bot.on('guildMemberAdd', function(member){
    member.send('Welcome to server');
    let memberJoined = member.guild.roles.find('name', 'Member');
    member.addRole(memberJoined);
});

/*
CODE FOR BOT LOGGER
this logs ever raw thing happening in your server dont recomend dong this tbh

bot.on('raw', event => {
    console.log(event);
})
*/

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'clear':
            if(!message.member.roles.find(r => r.name === 'InternetExPerms')) return message.channel.send('Dont have perms to carry command')
            if(!args[1]) return message.reply('Error please define second arg') + console.log('Clear errored')
            message.channel.bulkDelete(args[1]);
            message.channel.sendMessage(`Cleared ${(args[1])} messages`)
        break;
        case 'kick':
            if(!message.member.roles.find(r => r.name === 'InternetExPerms')) return message.channel.send('Dont have perms to carry command')
            if(!args[1]) message.channel.sendMessage('') // 402 means no person has been selected or error in the name or reading has acured
            const user = message.mentions.users.first();
            if(user){
                const member = message.guild.member(user);
                if(member){
                    member.kick('You where kicked by the InternetEx bot').then(() =>{
                        message.reply(`Sucesfully kicked ${user.tag}`);
                    }).catch(err =>{
                        message.reply('Unable to kick user Error 402');
                        console.log(err);
                    });
                } else{
                    message.reply("Error 402 person not inside of guild")
                }
            } else {
                message.reply("Unable to kick user Error 402")
            }
        break;
        case 'ban':
            if(!message.member.roles.find(r => r.name === 'InternetExPerms')) return message.channel.send('Dont have perms to carry command')
            if(!args[1]) message.channel.sendMessage('') // 402 means no person has been selected or error in the name or reading has acured
            const ppman = message.mentions.users.first();
            if(ppman){
                const player = message.guild.member(ppman);
                if(player){
                    player.ban({ression: 'You where banned by the InternetEx bot'}).then(() =>{
                        message.reply(`Sucesfully banned ${user.tag}`);
                    }).catch(err =>{
                        message.reply('Unable to ban user Error 402');
                        console.log(err);
                    });
                } else{
                    message.reply("Error 402 person not inside of guild")
                }
            } else {
                message.reply("Unable to ban user Error 402")
            }
        break;
        case 'Error 402?':
            message.channel.sendMessage("Error 402 is a basic error of when said person is not identified or specified")
        break;
        case 'help':
            const embed = new Discord.RichEmbed()
            .setTitle(' _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _     Command Information  ')
            .addField('➜ Ban ', 'Bans Named Member', true)
            .addField('➜ Kick ', 'Kicks Named Member', true)
            .addField('➜ Clear ', 'Clears up to 100 messages at a time', true)
            .addField('➜ Time ', 'Gives current time in EST format', true)
            .addField('➜ Howgay ', 'Tells you how gay you are', true)
            .addField('➜ Mute ', 'Mutes Named Member', true)
            .addField('➜ Unmute ', 'Unmutes Named Member', true)
            .addField('➜ Rolessetup  ', 'Setups perms role for bot', true)
            .addField('➜ Buy  ', 'Sends you a link were to buy', true)
            .addField('➜ Giveperms ', 'Gives perms role for bot', true)
            .addField('➜ Help ', "Gives the bot\'s commands", true)
            .addField('➜ Serverinfo ', "Gives the server\'s basic info", true)
            .setFooter('InternetEx Bot ' + version)
            .setColor('32a8de')
            message.channel.sendEmbed(embed);
        break;
        case 'serverinfo':
            message.channel.sendMessage(`**Server Name** \`${message.guild.name}\``)
            message.channel.sendMessage(`**Server Mem Count** \`${message.guild.memberCount}\``)
            message.channel.sendMessage(`**Server Owner** \`${message.guild.owner}\``)
        break;
        case 'time':
            message.channel.send((new Date()).toString());
        break;
        case 'howgay':
            message.channel.send(`You are ` + Math.floor(Math.random() * 100 )+`% Gay `)
        break;
        case 'testing':
            message.react ('🤡');
            const filter = (reaction) => reaction.emoji.name === '🤡';
        break;
        case 'mute':
            if(!message.member.roles.find(r => r.name === 'InternetExPerms')) return message.channel.send('Dont have perms to carry command')
            let person = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[1]));
            if(!person) return message.reply('Cant find that person');
            let mainrole = message.guild.roles.find(role => role.name === 'New');
            let muterole = message.guild.roles.find(role => role.name === 'mute');
            if(!muterole) return message.reply('Cant find mute role');
            let time = args[2];
            if(!time){
                console.log('Someone tried to mute but errored')
                return message.reply('Error try again');
            }
            person.removeRole(mainrole.id);
            person.addRole(muterole.id);
            message.channel.send(`<@${person.user.id}> has been muted for ${ms(ms(time))}`);
            setTimeout(function(){
                person.addRole(mainrole.id);
                person.removeRole(muterole.id);
                message.channel.send(`<@${person.user.id}> has been unmuted`)
            }, ms(time));
        break;
        case 'unmute':
            if(!message.member.roles.find(r => r.name === 'InternetExPerms')) return message.channel.send('Dont have perms to carry command')
            let homoppshitttttt = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[2]))
            if(!homoppshitttttt) return message.reply('Cant find that person');
            let mainrolee = message.guild.roles.find(role => role.name === 'New');
            let muterolee = message.guild.roles.find(role => role.name === 'mute');
            if(!muterolee) return message.reply('Cant find mute role');
            homoppshitttttt.addRole(mainrolee.id);
            homoppshitttttt.removeRole(muterolee.id);
            message.channel.send(`<@${homoppshitttttt.user.id}> has been unmuted`);
        break; 
        case 'whitelist':
            if(!message.member.roles.find(r => r.name === 'InternetExPerms')) return message.channel.send('Dont have perms to carry command')
            let whitelisted = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[2]))
            if(!whitelisted) return message.reply('Cant find that person');
            let whitelistedrole = message.guild.roles.find(role => role.name === 'Whitelisted');
            if(!whitelistedrole) return message.reply('Cant find whitelisted role');
            whitelisted.addRole(whitelistedrole.id);
            message.channel.send(`<@${whitelisted.user.id}> has been whitelisted`);
        break; 
        case 'giveperms':
            if(!message.member.roles.find(r => r.name === 'InternetExPerms')) return message.channel.send('Dont have perms to carry command')
            let givepermsmember = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[2]))
            let permsrole = message.guild.roles.find(role => role.name === 'InternetExPerms');
            if(!permsrole) return message.reply('Cant find roles');
            givepermsmember.addRole(permsrole.id);
            message.channel.send(`<@${givepermsmember.user.id}> has been given perms`);
        break; 
        case 'rolesetup':
        message.member.guild.createRole({
            name: 'InternetExPerms',
            color: '32a8de',
            permissions: []
        });
        message.channel.send('created the roles')
        console.log('Roles have been made now you just need to setup the logs channel and from there you should be good')
        break;
        case 'buy':
            message.author.send('**You can purchase InternetEx with PayPal or Robux at **http://internet-purchase.tk/')
        break;
    }
})
// start of message logger
bot.on('messageUpdate', async(oldMessage, newMessage) =>{
    if(oldMessage.content === newMessage.content){
        return;
    }
    let logEmbed = new Discord.RichEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('ff477b')
    .setDescription('A message from a user was changed')
    .addField('Before', oldMessage.content, true)
    .addField('After', newMessage.content, true)
    .setTimestamp()
    .setFooter('Updated message embed');
    let loggingChannel = newMessage.guild.channels.find(ch => ch.name === 'logs')
    if(!loggingChannel) return;
    loggingChannel.send(logEmbed);
    console.log('Message was edited')
})
bot.on('messageDelete', async message => {
    let logEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setColor('ff477b')
    .setDescription('A message from a user was deleted')
    .addField('Message', message.content, true)
    .setTimestamp()
    let loggingChannel = message.guild.channels.find(ch => ch.name === 'logs')
    if(!loggingChannel) return;
    loggingChannel.send(logEmbed);
    console.log('Message was deleted')
})
// end of message logger
bot.login(token);
console.log(' Loggin into bot ');
console.log(' Prefix is ie; ');