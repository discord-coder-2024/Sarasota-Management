const { Client, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Use environment variable for Render
const token = process.env.BOT_TOKEN;

client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.MessageCreate, async (message) => {
    // Check if the message starts with !say
    if (message.content.startsWith('!say')) {
        const text = message.content.slice(4).trim();

        if (!text) {
            return message.reply('You need to provide a message for me to say!');
        }

        message.channel.send(text);
    }
});

client.login(token);
