const jimp = require("jimp");
const Discord = require("discord.js");
const ms = require("ms");

module.exports.config = {
  name: "moro",
  category: "image",
  accessableby: "Todo Mundo",
};

exports.run = async (client, message, args) => {
  let degabrielofi = new Discord.MessageEmbed()
    .setAuthor("COMANDO: MORO", "https://i.imgur.com/0b6Ohrl.png")
    .setThumbnail("https://i.imgur.com/zNE1IMO.png")
    .setTimestamp()
    .setFooter(
      `Autor do comando ${message.author.tag}`,
      message.author.displayAvatarURL({ format: "png" })
    )
    .setColor("#471516")
    .addFields(
      {
        name: "<:Descricao:1214053842162024508> Descrição:",
        value:
          "Utilize este comando para que o Moro fale algo. Escreva com `d$sergio (Mensagem).`",
        inline: true,
      },
      {
        name: "<:Sinonimos:1214053417933340692> Sinônimos:",
        value: "`d$sergio` `d$moro`",
        inline: true,
      },
      {
        name: "\u200b",
        value: `\u200b`,
        inline: true,
      },
      {
        name: "<:folder:1214053377923616798> Exemplos:",
        value: "`d$sergio Eu combatí a corrupção`",
        inline: true,
      }
    );

  let img = jimp.read("https://i.imgur.com/WwaDhxf.png");
  if (!args[0])
    return message.reply({
      content: `${message.author}`,
      embeds: [degabrielofi],
    });
  img.then((image) => {
    jimp.loadFont(jimp.FONT_SANS_32_BLACK).then((font) => {
      image.resize(885, 494);
      image.print(font, 450, 181, args.join(" "), 7000);
      image.getBuffer(jimp.MIME_PNG, (err, i) => {
        message.reply({
          content: `${message.author}`,
          files: [{ attachment: i, name: "moro.png" }],
        });
      });
    });
  });
};
