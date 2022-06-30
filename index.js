const { Telegraf } = require('telegraf')

const bot = new Telegraf("5452909489:AAGvNGhBZrmkFhghKChXyjUL0bJgiJcK-M8")
bot.start((ctx) => ctx.reply('Привіт хазяїн'))
bot.hears(`hello`, (ctx) => ctx.reply('Привіт'))
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
