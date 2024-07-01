// Run by Node.js
const readline = require('readline');

function sell(portfolio) {
	let result = [];
	let vwidx = {};
	for(let i in portfolio) {
		vwidx[portfolio[i]] == null ? vwidx[portfolio[i]] = [i * 1 + 1] : vwidx[portfolio[i]].push(i * 1 + 1);
	}
	let values = Object.keys(vwidx).sort((a,b) => parseFloat(b) - parseFloat(a));
	
	for(let j = 0; j < values.length; j++) {
		let indexList = vwidx[values[j]];
		if (indexList.length === 1) {
			result.push(indexList[0]);
		} else {
			indexList.sort((a,b) => parseInt(a) - parseInt(b));
			result.push(...indexList);
		}
	}
	
	return result.join(' ');
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let portfolio = [];
	let count = null;
	for await (const line of rl) {
		if(count == null) {
			count = line * 1;
		} else {
			let [a, b] = line.split(' ');
			a = parseFloat(a);
			b = parseInt(b);
			portfolio.push(Math.floor((a*b*10)));
		}
		
		if(portfolio.length === count) {
			rl.close();
		}
	}
	
	console.log(sell(portfolio));
	
	//process.exit();
})();
