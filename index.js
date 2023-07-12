const Eris = require("eris");
const KeepAlive = require("./server");
KeepAlive();

const bot = new Eris(process.env.TOKEN);

bot.connect();
const mySecret = process.env['TOKEN']
