// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let num = 0;
	for await (const line of rl) {
		let arr = line.split(' ');
		num = arr[0] ** arr.length;
		rl.close();
	}
	
	console.log(num);
	
	process.exit();
})();
