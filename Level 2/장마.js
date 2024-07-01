// Run by Node.js
const readline = require('readline');

function rain(groundHeight, rainPosition) {
	let rainVisited = {};
	for(let day in rainPosition) {
		let startPosition = rainPosition[day].split(' ')[0] - 1;
		let endPosition = rainPosition[day].split(' ')[1] - 1;
		for(let i = startPosition; i <= endPosition; i++) {
			groundHeight[i]++;
			if(rainVisited[i] == null) rainVisited[i] = true;
		}
		if((day + 1) % 3 == 0) {
				for(let j in rainVisited) {
					groundHeight[j]--;
				}
				rainVisited = {};
		}
	}
	
	return groundHeight.join(' ');
}


(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let houseCount = null;
	let duration = 1;
	let groundHeight = null;
	let rainPosition = [];
	for await (const line of rl) {
		if(houseCount == null) {
			let firstInput = line.split(' ');
			houseCount = firstInput[0];
			duration = firstInput[1];
		} else if (groundHeight == null) {
			groundHeight = line.split(' ');
		} else {
			rainPosition.push(line);
		}
			
		if (rainPosition.length == duration) {
			rl.close();				 
		}
	}
	
	groundHeight = rain(groundHeight, rainPosition);
	
	console.log(groundHeight);
	
	process.exit();
})();

