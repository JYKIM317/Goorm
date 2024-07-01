// Run by Node.js
const readline = require('readline');

function spliceArea(count, area) {
	let arrArea = area.split(' ');
	let rep = {};
	
	arrArea.forEach((e) => {
		for(let i = e - 2; i <= e * 1 + 2; i++) {
			rep[i] == null ? rep[i] = 1 : rep[i]++;
		}
	});
	
	let maxCountX = -Infinity;
	let repX = -Infinity;
	
	for(let eachRep in rep) {
		if(rep[eachRep] > maxCountX) {
			maxCountX = rep[eachRep];
			repX = eachRep * 1;
		} else if(rep[eachRep] == maxCountX && repX > eachRep * 1) {
			maxCountX = rep[eachRep];
			repX = eachRep * 1;
		}
	}
	
	/*
	arrArea.sort((a, b) => a*1 - b*1);
	
	let maxNum = arrArea[arrArea.length - 1];
	let minNum = arrArea[0];

	let rep = {};
	
	for(let i = minNum; i <= maxNum; i++) {
		rep[i] = 0;
		for(let num of arrArea) {
			if(num >= i - 2 && num <= i + 2) {
				rep[i]++;
			} else if (num > i + 2) {
				break;
			}
		}
		if(rep[i] === 0) delete rep[i];
	}
	
	let repX = 0;
	let maxCountX = -Infinity;
	
	for(let repNum in rep) {
		if(rep[repNum] > maxCountX) {
			maxCountX = rep[repNum];
			repX = repNum;
		}
	}
	*/
	
	return repX;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let inputData = [];
	
	for await (const line of rl) {
		inputData.push(line);
		
		if(inputData.length === 3) {
			rl.close();
		}
	}
	let count = inputData[0];
	let a_Area = inputData[1];
	let b_Area = inputData[2];
	
	a_Area = spliceArea(count, a_Area);
	b_Area = spliceArea(count, b_Area);
	let result = a_Area > b_Area ? "good" : "bad";
	
	console.log(`${a_Area} ${b_Area}\n${result}`);
	
	process.exit();
})();
