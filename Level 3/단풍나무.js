// Run by Node.js
const readline = require('readline');

function cloudPark(maple) {
	let day = 0;
	let isLeft = true;
	let done = {};
	for(day; isLeft; day++) {
		let zero = [];
		for(let i = 0; i < maple.length; i++) {
			for(let j = 0; j < maple[i].length; j++) {
				maple[i][j] *= 1;
				if(maple[i][j]=== 0) {
					zero.push([i,j]);
				}
			}
		}
		if(zero.length === maple.length ** 2) {
			break;
		}
		for(let done of zero) {
			if(done[0] - 1 >= 0 && maple[done[0] - 1][done[1]] !== 0) maple[done[0] - 1][done[1]]--;
			if(done[0] + 1 < maple.length && maple[done[0] + 1][done[1]] !== 0) maple[done[0] + 1][done[1]]--;
			if(done[1] - 1 >= 0 && maple[done[0]][done[1] - 1] !== 0) maple[done[0]][done[1] - 1]--;
			if(done[1] + 1 < maple[done[0]].length && maple[done[0]][done[1] + 1] !== 0) maple[done[0]][done[1] + 1]--;
		}
	}
	
	return day;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let size = null;
	let maple = [];
	for await (const line of rl) {
		if(size == null) {
			size = line * 1;
		} else {
			maple.push(line.split(' '));
			if(maple.length === size) rl.close();
		}
	}
	
	console.log(cloudPark(maple));
	
	process.exit();
})();
