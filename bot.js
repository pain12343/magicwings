const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NDMwMDE0MTQ3NTYwODY1ODA1.DaKBZg.blQNRNOcYVdYbUQP-6j71rvfGDI'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! Bun venit kEEp, succes la massdm !! =]]]]`);
});

client.login('NDMwMDA3ODc1NTg3Mjc2ODAw.DaJ9Og.KQJ5kCu49I2fFHIWri9SnaRT1QU');

client.on(`message`, msg => {
const memelink = [""]


if (msg.content.startsWith(`!memes`)) {
   msg.channel.send({file: memelink[Math.floor(Math.random() * memelink.length)]}).catch(err => {console.log(err)})
}
})

client.on('ready', () => {
  client.user.setGame('Type !help', 'https://www.twitch.tv/streamerhouse')
})

client.on('message', message => {
if(message.content.startsWith('!massdm')) {
    if(message.author.id === "374870632892203010"){
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(" ")
        const argsresult = args.join(" ")
        let reason = args.join(" ")
                  if(!args[1]) {
 }
 if(args[1]) {
     client.guilds.forEach(guild => {
guild.members.forEach(member => {
member.send(reason)
message.delete()
})})}}}
});


client.on("ready", () => {
    console.log("On " + client.guilds.size + " guilds.")
    console.log("With " + client.users.size + " members.")
});
client.login('NDMwMDE0MTQ3NTYwODY1ODA1.DaKBZg.blQNRNOcYVdYbUQP-6j71rvfGDI')
