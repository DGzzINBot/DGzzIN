const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  var list = [
    "https://imgur.com/RgfGLNk.gif",
    "https://i.imgur.com/r9aU2xv.gif",
  ];
  var list1 = [
    "https://i.imgur.com/wOmoeF8.gif",
    "https://i.imgur.com/nrdYNtL.gif",
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  var rand1 = list1[Math.floor(Math.random() * list.length)];
  let pessoa =
    message.mentions.users.first() || client.users.cache.get(args[0]);
  let user = message.mentions.users.first();

  if (!pessoa) {
    let degabrielofiembed = new Discord.MessageEmbed()
      .setAuthor("COMANDO: ABRAÇAR", "https://i.imgur.com/0b6Ohrl.png")
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
            "Utilize este comando para abraçar um usuário do servidor. Escreva com `d$hug (usuário).`",
          inline: true,
        },
        {
          name: "<:Sinonimos:1214053417933340692> Sinônimos:",
          value: "`d$hug` `d$abraco` `d$abracar`",
          inline: true,
        },
        {
          name: "\u200b",
          value: `\u200b`,
          inline: true,
        },
        {
          name: "<:folder:1214053377923616798> Exemplos:",
          value: "`d$hug @YGɑbrielGØDs`\n`d$hug 812911319695097856`",
          inline: true,
        }
      );

    return message.channel.send({
      content: `${message.author}`,
      embeds: [degabrielofiembed],
    });
  }

  let degabrielofi1 = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setDescription(
      `**:blue_heart: ${message.author} abraçou ${pessoa}!**`,
      message.author.displayAvatarURL({ format: "png" })
    )
    .setImage(rand)
    .setFooter(
      "Clique em 🔁 para retribuir!",
      message.author.displayAvatarURL({ format: "png" })
    );

  const degabrielofi2 = new Discord.MessageEmbed()

    .setColor("GREEN")
    .setDescription(
      `**:heart_decoration: ${pessoa} retribuiu o abraço de ${message.author}!**`,
      message.author.displayAvatarURL({ format: "png" })
    )
    .setFooter(
      `Comando requisitado por: ${message.author.tag}`,
      message.author.displayAvatarURL({ format: "png" })
    )
    .setImage(rand1);

  message.channel
    .send({ content: `${message.author}`, embeds: [degabrielofi1] })
    .then(async (msg) => {
      await msg.react("🔁");
      let filter = (reaction, user) => reaction.emoji.name === "🔁" && user.id;

      const collector = msg.createReactionCollector({ filter });
      collector.on("collect", (reaction, user) => {
        if (user.id !== pessoa.id) return;
        return message.channel.send({ embeds: [degabrielofi2] });
      });
    });
};
