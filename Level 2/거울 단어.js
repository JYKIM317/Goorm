// Run by Node.js
const readline = require('readline');

function mirrorCheck(word) {
	let mi = {
		"b": "d", "d": "b",
		"i": "i", "l": "l",
		"m": "m", "n": "n",
		"o": "o", "p": "q",
		"q": "p",
		"s": "z", "z": "s",
		"u": "u", "v": "v",
		"w": "w", "x": "x",
	};
	
	for(let i = 0; i < word.length; i++) {
		if(mi[word[i]] !== word[word.length - (i + 1)]) {
				console.log("Normal");
				break;
		}
	
		if(i === word.length - 1) console.log("Mirror");
	}
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let n = null;
	let words = [];
	for await (const line of rl) {
		if(n == null) {
			n = parseInt(line);
		} else {
			words.push(line);
		}
		
		if(words.length === n) rl.close();
	}
	
	for(let word of words) {
		mirrorCheck(word);
	}
	
	process.exit();
})();
