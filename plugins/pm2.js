const { bot } = require('../lib/')
const { restartInstance } = require('../lib/pm2')
bot(
	{
		pattern: 'restart ?(.*)',
		fromMe: true,
		desc: 'restart with pm2',
		type: 'misc',
	},
	async (message, match) => {
		await message.send(`_Levanter is Restarting_`)
		restartInstance()
	}
)
