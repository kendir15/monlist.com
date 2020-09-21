const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	//kendi URL'lerini eklersn :D
  var embed = new Discord.RichEmbed()
  .setColor('22fff0')
  .setAuthor("Mon Bot List", client.user.avatarURL)
  .addField("Sistemin amacı nedir? Sistem ne işe yaramaktadır?", "Gerekli bilgiyi [buraya tıklayarak](https://monlist.glitch.me/hakkimizda) görebilirsiniz.")
	.addField("Bot nasıl ekleyeceğim?", "[Buraya tıklayarak](https://monlist.glitch.me/botekle) bot ekleyebileceğiniz yere ışınlanabilirsiniz.")
  .addField("Sistemdeki tüm botları nereden görebilirim?", "[Buraya tıklayarak](https://monlist.glitch.me/botlar) görebilirsiniz.")
  .addField("Sertifika ne işe yarar? Nasıl alınır?", "[Buraya tıklayarak](https://monlist.glitch.me/sertifika) görebilirsiniz.")
  
  message.channel.send({embed: embed})
  
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['y', 'help', 'h', 'bilgi', 'info'],
	permLevel: 0,
	kategori: 'genel'
}

exports.help = {
	name: 'yardım',
	description: 'Sistem hakkında bilgi gösterir.',
	usage: 'yardım'
}