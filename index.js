const { Client, Options, ActivityType, GatewayIntentBits, Events, Collection, Partials, Activity } = require('discord.js');

const client = new Client({
    fetchAllMembers: true,
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

client.login("MTE1MTE5MTEwNTU2MDM5OTg3Mg.Gv0kCN.XgVuno9jS1-Zjn8JbMAhKFwBgjAtnq_uITwcIs").catch(console.error);
client.once(Events.ClientReady, () => {
    console.log("HELLOW WORLD")
})