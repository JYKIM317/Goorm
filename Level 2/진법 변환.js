// Run by Node.js
const readline = require('readline');

function decimalConvert(n, t) {
	for(let b = 2; b <= 16; b++) {
		n *= 1;
		if(t === n.toString(b).toUpperCase()) return b
	}
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let n;
	let t;
	for await (const line of rl) {
		[n, t] = line.split(" ");
		rl.close();
	}
	
	console.log(decimalConvert(n, t));

	process.exit();
})();
