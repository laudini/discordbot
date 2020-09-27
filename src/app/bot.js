require("dotenv").config();
const tasks = require("../assets/tasks/tasks");

const token = process.env.DISCORD_BOT_TOKEN;

const { Client } = require("discord.js");
const client = new Client();

client.on("message", (message) => {
  message.content === "!task" && 
  message.reply(pickRandomObjectvalue(tasks));
});

client.login(process.env.DISCORD_BOT_TOKEN);

const pickRandomObjectvalue = (data) => {
  let keys = Object.keys(data);
  return data[keys[(keys.length * Math.random()) << 0]].description;
};
