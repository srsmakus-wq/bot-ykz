require("./database/module")

// GLOBAL SETTING
global.owner = "94766316640"
global.namabot = "𝐘𝐀𝐊𝐔𝐙𝐙 999"
global.nomorbot = "94766316640"
global.namaCreator = "yakuzz 999©"
global.linkyt = "https://youtube.com/@fallz444offical?si=Nse-1Ebkn2yYZTFF"
global.autoJoin = false
global.antilink = false
global.versisc = 'V1.0'
// PAIRING CODE SETTING
global.usePairingCode = true
global.pairingNumber = "94766316640"
//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://f.uguu.se/ZfOvYWQo.jpg'
global.isLink = 'https://youtube.com/@fallz444offical?si=H2mi7Quqd-wT9e1p'
global.packname = "yakuzz 999"
global.author = "Powered By yakuzz 999"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})