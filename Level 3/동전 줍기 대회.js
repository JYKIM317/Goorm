// Run by Node.js
const readline = require('readline');

function coin(count, values) {
	let maxValue = 0;
	let startIndex = 0;
	let tempValue = 0;
	
	for(let v in values) {
		tempValue += parseInt(values[v]);
		if(startIndex === 0 && tempValue < 0) {
			tempValue = 0;
		} else if(startIndex === 0 && tempValue > 0) {
			startIndex = v;
			if(maxValue < tempValue) maxValue = tempValue;
		} else if(startIndex !== 0 && tempValue < 0) {
			startIndex = 0;
			tempValue = 0;
		} else {
			if(maxValue < tempValue) maxValue = tempValue;
		}
	}
	
	return maxValue;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let count = null;
	let values = [];
	for await (const line of rl) {
		if(count == null) {
			count = parseInt(line);
		} else {
			values.push(...line.split(' '));
		}
		
		if(values.length === count) {
			rl.close();
		}
	}
	
	console.log(coin(count, values));
	
	process.exit();
})();
