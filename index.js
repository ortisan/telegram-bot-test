const TelegramBot = require(`node-telegram-bot-api`);
const exec = require('child_process').exec;
const TOKEN = `PUT_YOUR_TOKEN`;

const bot = new TelegramBot(TOKEN, {polling: true});

const sendCommand = function (msg, groups) {
    console.log("Command:", msg);
    console.log("Match:", groups);
    let command = groups[1];
    exec(command, function (error, stdout, stderr) {
        let log = "" + stdout + stderr;
        if (log.length <= 0) {
            log = "Command has not log."
        }
        bot.sendMessage(msg.chat.id, log);
    });
};

bot.onText(/\/command (.*)/, sendCommand);
