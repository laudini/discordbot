require("dotenv").config();

const token = process.env.DISCORD_BOT_TOKEN;

const { Client } = require("discord.js");
const client = new Client();

client.login(process.env.DISCORD_BOT_TOKEN);