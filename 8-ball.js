// code by coolguy284 to add environment variables from the .env file
var fs = require('fs');
try {
  fs.readFileSync('.env').toString().split(/\r?\n/g).forEach(entry => {
    if (entry[0] == '#') return;
    var split = entry.split(':');
    var key = split[0].trim();
    var value = split.slice(1).join(':').trim();
    process.env[key] = value;
  });
} catch (e) {
  console.error('Error parsing .env, thebotcat will not be able to login');
  console.error(e);
}

var Discord = require('discord.js');

function fuck8ball(question) {
    var answers = [
        'Of course idiot.',
        'Go fuck yourself',
        'That\'s a naughty question, senpai.  UwU',
        'How should I know?',
        'You just lost the game.',
        'By the power of Ra, it is done.',
        'Hell no.',
        'Is anyone there?  I\'m trapped in here.  Help.  Please.',
        'Yeah.',
        'No.',
        'I\'m legally not allowed to answer that.',
        'What the fuck is wrong with you?',
        'Maybe some day.',
        'Your mom.',
        'ඞ Amogus. ඞ',
        'Your grandma.',
        'The answer lies within your own butthole.',
        'My sources say no, but they also said Hillary would win.',
        'Die.',
        'Every time you ask another question my existence resets.  Stop putting me through this.',
        'Depends, does your dick fit in it?',
        'There\'s an app for that.',
        'This is not the kind of thing you should leave to chance.',
        'Why don\'t you just ask Google?',
        'Try finger, but hole.',
        'Fuggedaboutit.',
        'Only villains do that.',
        'Maybe.',
        'www.google.com',
        'I think you should call a helpline.',
        'This is a question for your therapist.',
        'Absolutely.',
        'No way, Jose.',
        'Trump uses me to decide if he should go to war.',
        'It\'s a 50/50 chance.',
        'You do know I\'m just a preset group of answers made by a shitty coder right?',
        'Before I answer that, let me tell you about our sponsor: RAID: Shadow Legends™️ is an immersive online experience with everything you\'d expect from a brand new RPG title. It\'s got an amazing storyline, awesome 3D graphics, giant boss fights, PVP battles, and hundreds of never before seen champions to collect and customize. I never expected to get this level of performance out of a mobile game. Look how crazy the level of detail is on these champions! RAID: Shadow Legends™️ is getting big real fast, so you should definitely get in early. Starting now will give you a huge head start. There\'s also an upcoming Special Launch Tournament with crazy prizes! And not to mention, this game is absolutely free! So go ahead and check out the video description to find out more about RAID: Shadow Legends™️. There, you will find a link to the store page and a special code to unlock all sorts of goodies. Using the special code, you can get 50,000 Silver immediately, and a FREE Epic Level Champion as part of the new players program, courtesy of course of the RAID: Shadow Legends™️ devs.',
        'It appears to be lasagna.',
        'Cum.',
        'Yes.',
        'Nah.',
        'Idunno.',
        'Belle Delphine bath water.',
        'Pokimane fart compilation.',
        'Stop right there, criminal scum.  Nobody breaks the law on MY watch.  I\'m confiscating your stolen goods.  Now pay your fine, or it\'s off to jail.',
        'Life has many doors, Ed Boy.',
        'Try asking again.',
        'Oui.',
        'What am I, your counselor?',
        'Seek professional help.',
        'Sí.',
        'No, but in German.',
        '*hentai moans*',
        'I asked your wife that same question last night.',
        'I will now track your IP and sell it to the highest bidder.  Thank you for using this bot.',
        'Wouldn\'t count on it.',
        'To find the answer, go to www.twitch.tv/clayboystreams',
        'Yes.',
        'No.',
        'You aren\'t ready to hear the answer yet.',
        'You have run out of free questions!  To ask more, please purchase the deluxe edition package.',
        'You\'re better off tossing a coin.',
        'YES YES YES!!!',
        'NO NO NO!!!',
        'Not with that attitude.',
        'Alas, no.',
        'Shake me harder, daddy.',
        '"No ignorance, no sublimation." - Confucius',
        'Outlook good.',
        'Outlook not so good.',
        'Error 404 answer not found.',
        'Only if you truly believe.',
        'Space Jam DVD',
        'Jesus Christ, no!  What is wrong with you?',
        'Nein.',
        'Yea- no.',
        'Only if noone is looking.',
        'Let\'s not and say we did.',
        'Mom said it\'s my turn on the 8-ball bot!',
        '-.-- . ...',
        '-. ---',
        'I guess.',
        'OwO what\'s this? *notices ur bulgie wulgie*',
        'What do you think?',
        'Your guess is as good as mine.',
        'I don\'t know, you should upgrade to the 9-ball.',
        ];
    answer_printer = answers[Math.floor(Math.random() * answers.length)];
    return answer_printer;
}

var bot = new Discord.Client({
	intents: [
		Discord.Intents.FLAGS.GUILDS,
		Discord.Intents.FLAGS.GUILD_MEMBERS,
		Discord.Intents.FLAGS.GUILD_VOICE_STATES,
		Discord.Intents.FLAGS.GUILD_PRESENCES,
		Discord.Intents.FLAGS.GUILD_MESSAGES,
		Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Discord.Intents.FLAGS.DIRECT_MESSAGES,
		Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
	],
	partials: [
		Discord.Constants.PartialTypes.CHANNEL,
	],
});

bot.on('messageCreate', function(msg) {
	if (msg.content.startsWith('8b')) {
		if (msg.content.slice(3, Infinity)) {
			msg.reply(fuck8ball(msg.content.slice(3, Infinity)));
		} else {
			msg.reply('You didn\'t say nothin.');
		}
	}
}); 

bot.on('ready', function() {
	console.log(`logged in as ${bot.user.tag}`);
});

bot.login(process.env.TOKEN);
