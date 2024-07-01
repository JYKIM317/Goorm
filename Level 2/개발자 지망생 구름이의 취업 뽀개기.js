// Run by Node.js
const readline = require('readline');

function problemSolver(problem, duration) {
	let beforeDifficulty = null;
	let beforeDuration = null;
	let result = 0;
	duration.sort((a, b) => {
		if(parseInt(a[0]) - parseInt(b[0]) !== 0) {
			return parseInt(a[0]) - parseInt(b[0])
		} else {
			return parseInt(a[1]) - parseInt(b[1])
		}
	});
	
	for(let d of duration) {
		
		if(problem[d[0]-1] > 0) {
			problem[d[0]-1] -= 1;
		} else {
			continue;
		}
		
		if(beforeDifficulty != null) beforeDifficulty === parseInt(d[0]) ? result += (parseInt(d[1]) - beforeDuration) : result += 60;
		result += parseInt(d[1]);
		beforeDifficulty = parseInt(d[0]);
		beforeDuration = parseInt(d[1]);
	}
	
	return result;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let n = null;
	let problem = null;
	let duration = [];
	for await (const line of rl) {
		if(n == null) {
			n = line;
		} else if (problem == null) {
			problem = line.split(' ');
		} else {
			duration.push(line.split(' '));
		}
		
		if(duration.length === n) {
			rl.close();
		}
	}
	
	console.log(problemSolver(problem, duration));
	
	process.exit();
})();
