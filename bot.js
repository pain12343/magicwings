const Discord = require('discord.js');
const bot = new Discord.Client();
const lastUse = new Set();
const secondlastUse = new Set();
const thirdlastUse = new Set();
const token = 'hidden';
const PREFIX = '++'
 
bot.on('ready', () =>{
    console.log('This bot is online!');
})
 
bot.on('message', message=>{
 
    let args = message.content.substring(PREFIX.length).split(" ");  
   
    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!')
            break;
        case 'gen':
        if(lastUse.has(message.author.id)) {
            message.reply("You must wait 5 minutes between uses of this command.")
             return;
        }else{
            if(args[1] === 'fortnite'){
                const embed = new Discord.RichEmbed()
                    .setTitle('Account details:')
                    .setColor(0x2E86C1)
                    .addField('Fortnite', 'Test:Test')
                    message.author.sendEmbed(embed);                
                message.reply('Sent to your dms!')
            }   else
            if(args[1] === 'spotify'){
                const embed = new Discord.RichEmbed()
                    .setTitle('Account details:')
                    .setColor(0x2E86C1)
                    .addFiel
                    d('Spotify', 'Test:Test')
                    message.author.sendEmbed(embed);                
                message.reply('Sent to your dms!')
            }   else
            if(args[1] === 'uplay'){
                const embed = new Discord.RichEmbed()
                    .setTitle('Account details:')
                    .setColor(0x2E86C1)
                    .addField('Uplay', 'Test:Test')
                    message.author.sendEmbed(embed);                
                message.reply('Sent to your dms!')
            }else{
                message.channel.sendMessage('Please use the commands "++gen fortnite" or "++gen spotify" or "++gen uplay"')
                return;
            }  
            lastUse.add(message.author.id);
            setTimeout(() => {
            lastUse.add(message.author.id);
            lastUse.delete(message.author.id);
            }, 300000); };
             break;  
        case 'pgen':
        if(secondlastUse.has(message.author.id)) {
            message.reply("You must wait 7 minutes between uses of this command.")
             return;            
        }else{
            if(args[1] === 'fortnite'){
                const embed = new Discord.RichEmbed()
                    .setTitle('Account details:')
                    .setColor(0x2E86C1)
                    .addField('Fortnite Premium', 'Test:Test')
                    message.author.sendEmbed(embed);            
                message.reply('Sent to your dms!')
            }   else
            if(args[1] === 'spotify'){
                const embed = new Discord.RichEmbed()
                    .setTitle('Account details:')
                    .setColor(0x2E86C1)
                    .addField('Spotify Premium', 'Test:Test')
                message.author.sendEmbed(embed);                
                message.reply('Sent to your dms!')
            }   else
            if(args[1] === 'uplay'){
                const embed = new Discord.RichEmbed()
                    .setTitle('Account details:')
                    .setColor(0x2E86C1)
                    .addField('Uplay Premium', 'Test:Test')
                    message.author.sendEmbed(embed);                
                message.reply('Sent to your dms!')
            }else{
                message.channel.sendMessage('Please use the commands "++pgen fortnite" or "++pgen spotify" or "++pgen uplay"')
                return;
            }
            secondlastUse.add(message.author.id);
            setTimeout(() => {
            secondlastUse.add(message.author.id);
            secondlastUse.delete(message.author.id);
            }, 420000); };            
            break;
        case 'ugen':        
        if  (thirdlastUse.has(message.author.id)) {
            message.reply("You must wait 10 minutes between uses of this command.")
             return;            
        }else{            
            if(args[1] === 'fortnite'){
                const embed = new Discord.RichEmbed()
                    .setTitle('Account details:')
                    .setColor(0x2E86C1)
                    .addField('Fortnite Ultra', 'Test:Test')
                    message.author.sendEmbed(embed);
                message.reply('Sent to your dms!');
            }else
            if(args[1] === 'spotify'){
                const embed = new Discord.RichEmbed()
                    .setTitle('Account details:')
                    .setColor(0x2E86C1)
                    .addField('Spotify Ultra', 'Test:Test')
                    message.author.sendEmbed(embed);                
                message.reply('Sent to your dms!');
            }else
            if(args[1] === 'uplay'){
                const embed = new Discord.RichEmbed()
                    .setTitle('Account details:')
                    .setColor(0x2E86C1)
                    .addField('Uplay Ultra', 'Test:Test')
                    message.author.sendEmbed(embed);                
                message.reply('Sent to your dms!')
            }else{
                message.channel.sendMessage('Please use the commands "++ugen fortnite" or "++ugen spotify" or "++ugen uplay"')
                return;
            }
            thirdlastUse.add(message.author.id);
            setTimeout(() => {
            thirdlastUse.add(message.author.id);
            thirdlastUse.delete(message.author.id);
            }, 600000); };            
            break;
        case 'stock':
            const embed = new Discord.RichEmbed()
                .setTitle('Available Stock')
                .setColor(0x2E86C1)
                .addField('Gen', '1624', true)
                .addField('Pgen', '232', true)
                .addField('Ugen', '167', true)
                message.channel.sendEmbed(embed);
            break;
        case 'help':
            const Embed = new Discord.RichEmbed()
                .setTitle('Help Desk')
                .setColor(0x2E86C1)
                .addField('+gen fortnite', 'generates a normal fortnite account')
                .addField('+pgen fortnite', 'generates a premium fortnite account')
                .addField('+ugen fortnite', 'generates an ultra fortnite account')
                .addBlankField()
                .addField('+gen spotify', 'generates a normal spotify account')
                .addField('+pgen spotify', 'generates a premium spotify account')
                .addField('+ugen spotify', 'generates an ultra spotify account')
                .addBlankField()
                .addField('+gen uplay', 'generates a normal uplay account')
                .addField('+pgen uplay', 'generates a premium uplay account')
                .addField('+ugen uplay', 'generates an ultra uplay account')
                .addBlankField()
                .addField('+ping', 'just a fun game!')
                .addField('+stock', 'brings up current stock of accounts')
                message.channel.sendEmbed(Embed);
            break;
        case 'yeetzy':    
            message.channel.sendMessage('Yeetzy is not the owner..... he is cool though... I think.')
            break;
        case 'gotobed':
            message.channel.sendMessage('shivering like in')
            break;
        case 'guinea':
            message.channel.sendMessage('With a name like that, it confuses all of us especially with no guineapig in sight.')
            break;
 
        }
    });
 
bot.login(token);
