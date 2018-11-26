import {Game} from './Game.js';

export function runTests() {
	startGame();
	out();
	foul();
	ball();
	homeRun();
	endGame();
}

function startGame() {
	let game = new Game("home");

	if (!game.first && !game.second && !game.third) {
		console.log("Bases are empty when game starts: PASS");
	}
	else {
		console.log("Bases are empty when game starts: FAIL");
	}

	if (game.balls === 0 && game.strikes === 0 && game.outs === 0) {
		console.log("Balls, strikes, and outs are all set to 0 when game starts: PASS");
	}
	else {
		console.log("Balls, strikes, and outs are all set to 0 when game starts: FAIL");
	}

	if (game.homeAB === 0 && game.visitAB === 0) {
		console.log("Home and visiting teams' lineup pointers are set to 0: PASS");
	}
	else {
		console.log("Home and visiting teams' lineup pointers are set to 0: FAIL");
	}

	if (game.inning === 1 && !game.inningSide) {
		console.log("Game starts in the top of the first inning: PASS");
	}
	else {
		console.log("Game starts in the top of the first inning: FAIL");
	}
}

function endGame() {
	let game = new Game("home");
	if (game.gameOver === false) {
		console.log("Game is not over when game starts: PASS");
	}
	else {
		console.log("Game is not over when game starts: FAIL");
	}
}

function homeRun() {
	let game = new Game("home");

	game.first = true;
	game.second = true;
	game.third = true;
	game.homeRun();

	if (game.visitTeam.runs === 4) {
		console.log("A home run for the visiting team with men on all 3 bases results in 4 runs: PASS");
	}
	else {
		console.log("A home run for the visiting team with men on all 3 bases results in 4 runs: FAIL");
	}

	game.inningSide = true;
	game.first = true;
	game.second = true;
	game.third = true;
	game.homeRun();

	if (game.homeTeam.runs === 4) {
		console.log("A home run for the home team with men on all 3 bases results in 4 runs: PASS");
	}
	else {
		console.log("A home run for the home team with men on all 3 bases results in 4 runs: FAIL");
	}
}

function foul() {
	let game = new Game("home");

	game.foul();
	if (game.strikes === 1) {
		console.log("Foul ball with 0 strikes results in 1 strike: PASS");
	}
	else {
		console.log("Foul ball with 0 strikes results in 1 strike: FAIL");
	}

	game.strikes = 1;
	game.foul();
	if (game.strikes === 2) {
		console.log("Foul ball with 1 strikes results in 2 strikes: PASS");
	}
	else {
		console.log("Foul ball with 1 strikes results in 2 strikes: FAIL");
	}

	game.strikes = 2;
	game.foul();
	if (game.strikes === 2 && game.outs === 0) {
		console.log("Foul ball with 2 strikes results in 2 strikes: PASS");
	}
	else {
		console.log("Foul ball with 2 strikes results in 2 strikes: FAIL");
	}
}

function out() {
	let game = new Game();

	game.inning = 1;
	game.inningSide = false;
	game.outs = 0;
	game.out(1);
	if (game.outs === 1 && game.inning === 1 && game.inningSide === false) {
		console.log("1 out with 0 outs results in 1 out and no new inning: PASS");
	}
	else {
		console.log("1 out with 0 outs results in 1 out and no new inning: FAIL");
	}

	game.inning = 1;
	game.inningSide = false;
	game.outs = 1;
	game.out(1);
	if (game.outs === 2 && game.inning === 1 && game.inningSide === false) {
		console.log("1 out with 1 out results in 2 out and no new inning: PASS");
	}
	else {
		console.log("1 out with 1 out results in 2 out and no new inning: FAIL");
	}

	game.inning = 1;
	game.inningSide = false;
	game.outs = 2;
	game.out(1);
	if (game.outs === 0 && game.inning === 1 && game.inningSide === true) {
		console.log("1 out with 2 outs results in a new inning with 0 outs: PASS");
	}
	else {
		console.log("1 out with 2 outs results in a new inning with 0 outs: FALSE");
	}

	game.inning = 1;
	game.inningSide = false;
	game.outs = 0;
	game.out(2);
	if (game.outs === 2 && game.inning === 1 && game.inningSide === false) {
		console.log("A double play with 0 outs results in 2 outs and no new inning: PASS");
	}
	else {
		console.log("A double play with 0 outs results in 2 outs and no new inning: FAIL");
	}

	game.inning = 1;
	game.inningSide = false;
	game.outs = 1;
	game.out(2);
	if (game.outs === 0 && game.inning === 1 && game.inningSide === true) {
		console.log("A double play with 1 out results in a new inning with 0 outs: PASS");
	}
	else {
		console.log("A double play with 1 out results in a new inning with 0 outs: FAIL");
	}

	game.inning = 1;
	game.inningSide = false;
	game.outs = 2;
	game.out(2);
	if (game.outs === 0 && game.inning === 1 && game.inningSide === true) {
		console.log("A double play with 2 outs results in a new inning with 0 outs: PASS");
	}
	else {
		console.log("A double play with 2 outs results in a new inning with 0 outs: FALSE");
	}

	game.inning = 1;
	game.inningSide = false;
	game.outs = 0;
	game.out(3);
	if (game.outs === 0 && game.inning === 1 && game.inningSide === true) {
		console.log("A triple play with 0 outs results in a new inning with 0 outs: PASS");
	}
	else {
		console.log("A triple play with 0 outs results in a new inning with 0 outs: FAIL");
	}

	game.inning = 1;
	game.inningSide = false;
	game.outs = 1;
	game.out(3);
	if (game.outs === 0 && game.inning === 1 && game.inningSide === true) {
		console.log("A triple play with 1 out results in a new inning with 0 outs: PASS");
	}
	else {
		console.log("A triple play with 1 out results in a new inning with 0 outs: FAIL");
	}

	game.inning = 1;
	game.inningSide = false;
	game.outs = 2;
	game.out(3);
	if (game.outs === 0 && game.inning === 1 && game.inningSide === true) {
		console.log("A triple play with 2 outs results in a new inning with 0 outs: PASS");
	}
	else {
		console.log("A triple play with 2 outs results in a new inning with 0 outs: FALSE");
	}
}

function ball() {
	let game = new Game("home");

	game.balls = 0;
	game.ball();
	if (game.balls === 1) {
		console.log("Ball thrown with 0 balls results in 1 ball: PASS");
	}
	else {
		console.log("Ball thrown with 0 balls results in 1 ball: FAIL");
	}

	game.balls = 1;
	game.ball();
	if (game.balls === 2) {
		console.log("Ball thrown with 1 ball results in 1 balls: PASS");
	}
	else {
		console.log("Ball thrown with 1 ball results in 1 balls: FAIL");
	}

	game.balls = 2;
	game.ball();
	if (game.balls === 3) {
		console.log("Ball thrown with 2 balls results in 3 balls: PASS");
	}
	else {
		console.log("Ball thrown with 2 balls results in 3 balls: FAIL");
	}

	game.balls = 3;
	game.ball();
	if (game.balls === 0 && game.first === true) {
		console.log("Ball thrown with 3 balls results in a walk, putting a man on first base: PASS");
	}
	else {
		console.log("Ball thrown with 3 balls results in a walk, putting a man on first base: FAIL");
	}

	game.inningSide = false;
	game.visitTeam.runs = 0;
	game.first = true;
	game.second = true;
	game.third = true;
	game.balls = 3;
	game.ball();
	if (game.visitTeam.runs === 1 && game.first && game.second && game.third) {
		console.log("Ball thrown with 3 balls and the bases loaded walks in a run: PASS");
	}
	else {
		console.log("Ball thrown with 3 balls and the bases loaded walks in a run: FAIL");
	}
}