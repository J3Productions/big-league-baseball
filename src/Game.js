'use strict';

/**
 * Game class - makes decisions and stores the game status based on player/user actions.
 */
export class Game {
	constructor() {
		/**
		 * Number of outs in the inning
		 * @type {number}
		 */
		this.outs = 0;
		this.balls = 0;
		this.strikes = 0;
		this.redScore = 0;
		this.blueScore = 0;
		this.first = false;
		this.second = false;
		this.third = false;

		this.redTeam = new Team();
		this.blueTeam = new Team();

		this.redAB = 1;
		this.blueAB = 1;
	}

	ssPitch(batter) {
		if (batter === "ss") {
			this.hit6();
		}
		else if (batter === "ss") {
			this.hit5();
		}
		else if (batter === "si") {
			this.hit4();
		}
		else if (batter === "fs" || batter === "co") {
			this.hit3();
		}
		else if (batter === "sl" || batter === "ci") {
			this.hit2();
		}
		else if (batter === "fi") {
			this.hit1();
		}
		else if (batter === "sh" || batter === "fh" || batter === "fl") {
			this.foul();
		}
		else if (batter === "ch" || batter === "cl") {
			this.strike();
		}
	}

	/**
	 * Hit chart 1: Infield balls
	 */
	hit1() {
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		if (roll === 2) {
			this.triplePlay();
		}
		else if (roll === 3 || roll === 8) {
			this.single();
		}
		else if (roll === 4 || roll === 7) {
			this.flyout();
		}
		else if (roll === 5) {
			this.foulout();
		}
		else if (roll === 6 || roll === 11) {
			this.groundoutDoublePlay();
		}
		else if (roll === 9) {
			this.groundout();
		}
		else if (roll === 10) {
			this.fieldersChoice();
		}
		else if (roll === 12) {
			this.error();
		}
	}

	/**
	 * Hit chart 2: Hits that fall over the infield, moderately hard hit grounders in the infield and fly balls that infielders go out for and outfielders come in for
	 */
	hit2() {
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		if (roll === 2 || roll === 6) {
			this.groundoutDoublePlay();
		}
		else if (roll === 3 || roll === 8 || roll === 10) {
			this.flyout();
		}
		else if (roll === 4) {
			this.groundoutAdvIfForced();
		}
		else if (roll === 5) {
			this.foulout();
		}
		else if (roll === 7 || roll === 9) {
			this.single();
		}
		else if (roll === 11) {
			this.groundout();
		}
		else if (roll === 12) {
			this.error();
		}
	}

	/**
	 * Hit chart 3: Sharply hit balls through the infield and fly balls and hits to the outfield that go farther than chart 2 balls
	 */
	hit3() {
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		if (roll === 2 || roll == 12) {
			this.groundoutDoublePlay();
		}
		else if (roll === 3) {
			this.single();
		}
		else if (roll === 4) {
			this.groundoutAdvIfForced();
		}
		else if (roll === 5 || roll === 7) {
			this.flyoutAdv();
		}
		else if (roll === 6) {
			this.singleAdvance();
		}
		else if (roll === 8 || roll === 10) {
			this.singleRISP();
		}
		else if (roll === 9) {
			this.fieldersChoice();
		}
		else if (roll === 11) {
			this.errorSecond();
		}
	}

	/**
	 * Hit chart 4: Balls hit down the 1st and 3rd base lines and hard hit balls not going as far as those on chart 5
	 */
	hit4() {
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		if (roll === 2) {
			this.homeRun();
		}
		else if (roll === 3) {
			this.flyoutAdv();
		}
		else if (roll === 4) {
			this.groundout();
		}
		else if (roll === 5) {
			this.double();
		}
		else if (roll === 6 || roll === 8) {
			this.singleAdvance();
		}
		else if (roll === 7) {
			this.flyoutNoAdv1st();
		}
		else if (roll === 9) {
			this.singleRISP();
		}
		else if (roll === 10) {
			this.groundoutDoublePlay();
		}
		else if (roll === 11) {
			this.flyout();
		}
		else if (roll === 12) {
			this.lineoutDoublePlay();
		}
	}

	/**
	 * Hit chart 5: Hard hit balls
	 */
	hit5() {
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		if (roll === 2) {
			this.error();
		}
		else if (roll === 3 || roll === 6) {
			this.singleAdvance();
		}
		else if (roll === 4) {
			this.double();
		}
		else if (roll === 5) {
			this.flyoutAdv();
		}
		else if (roll === 7) {
			this.flyoutNoAdv1st();
		}
		else if (roll === 8) {
			this.groundout();
		}
		else if (roll === 9) {
			this.homeRun();
		}
		else if (roll === 10) {
			this.doubleClear();
		}
		else if (roll === 11) {
			this.triple();
		}
		else if (roll === 12) {
			this.lineoutDoublePlay();
		}
	}

	/**
	 * Hit chart 6: The most solidly hit balls and when hit for extra bases are the longest hit balls
	 */
	hit6() {
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		if (roll === 2) {
			this.foulout();
		}
		else if (roll === 3) {
			this.flyoutAdv();
		}
		else if (roll === 4 || roll === 6) {
			this.homeRun();
		}
		else if (roll === 5) {
			this.flyoutNoAdv1st();
		}
		else if (roll === 7) {
			this.double();
		}
		else if (roll === 8) {
			this.triple();
		}
		else if (roll === 9) {
			this.singleAdvance();
		}
		else if (roll === 10) {
			this.single();
		}
		else if (roll === 11) {
			this.doubleClear();
		}
		else if (roll === 12) {
			this.groundout();
		}
	}

	/**
	 * Home run - clears the bases and adds one run for every runner
	 */
	homeRun() {
		if (this.third) {
			this.third = false;
			this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.runs++;
		}
		if (this.first) {
			this.first = false;
			this.runs++;
		}
		this.runs++;
	}

	/**
	 * Triple - clears the bases and batter ends up at third
	 */
	triple() {
		if (this.third) {
			this.third = false;
			this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.runs++;
		}
		if (this.first) {
			this.first = false;
			this.runs++;
		}
		this.third = true;
	}

	/**
	 * Bases-clearing double - clears the bases (runner at first scores) and batter ends up at second
	 */
	doubleClear() {
		if (this.third) {
			this.third = false;
			this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.runs++;
		}
		if (this.first) {
			this.first = false;
			this.runs++;
		}
		this.second = true;
	}

	/**
	 * Double - runners at third and second score, runner at first goes to third, batter ends up at second
	 */
	double() {
		if (this.third) {
			this.third = false;
			this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.runs++;
		}
		if (this.first) {
			this.first = false;
			this.third = true;
		}
		this.second = true;
	}

	/**
	 * Single - all runners advance one base, batter ends up at first
	 */
	single() {
		if (this.third) {
			this.third = false;
			this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.third = true;
		}
		if (this.first) {
			this.first = false;
			this.second = true;
		}
		this.first = true;
	}

	/**
	 * Single that scores runners in scoring postion - runners at third and second score, runner at first goes to second, batter ends up at first
	 */
	singleRISP() {
		if (this.third) {
			this.third = false;
			this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.runs++;
		}
		if (this.first) {
			this.first = false;
			this.second = true;
		}
		this.first = true;
	}

	/**
	 * Single that allows runner at first to go to third - runners at third and second score, runner at first goes to third, batter ends up at first
	 */
	singleAdvance() {
		if (this.third) {
			this.third = false;
			this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.runs++;
		}
		if (this.first) {
			this.first = false;
			this.third = true;
		}
		this.first = true;
	}

	/**
	 * Error - All runners move up a base, batter is safe at first in play that should've resulted in an out
	 */
	error() {
		if (this.third) {
			this.third = false;
			this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.third = true;
		}
		if (this.first) {
			this.first = false;
			this.second = true;
		}
		this.first = true;
	}

	/**
	 * Batter pops out in foul territory - All runners hold
	 */
	foulout() {
		this.outs++;
	}

	/**
	 * Batter pops out - All runners hold
	 */
	flyout() {
		this.outs++;
	}

	/**
	 * Batter pops out - All runners advance one base
	 */
	flyoutAdv() {
		if (this.third) {
			this.third = false;
			if (this.outs < 2)
				this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.third = true;
		}
		if (this.first) {
			this.first = false;
			this.second = true;
		}
		this.outs++;
	}

	/**
	 * Batter pops out - All runners (except runner at first) advance one base
	 */
	flyoutNoAdv1st() {
		if (this.third) {
			this.third = false;
			if (this.outs < 2)
				this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.third = true;
		}
		this.outs++;
	}

	/**
	 * Batter grounds out - All runners advance one base
	 */
	groundout() {
		if (this.third) {
			this.third = false;
			if (this.outs < 2)
				this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.third = true;
		}
		if (this.first) {
			this.first = false;
			this.second = true;
		}
		this.outs++;
	}

	/**
	 * Batter grounds out - Runners hold unless they are forced to advance
	 */
	groundoutAdvIfForced() {
		if (this.third && this.second && this.first) {
			this.third = false;
			if (this.outs < 2) {
				this.runs++;
			}
		}
		if (this.second && this.first) {
			this.second = false;
			this.third = true;
		}
		if (this.first) {
			this.first = false;
			this.second = true;
		}
		this.outs++;
	}

	/**
	 * Double play - Runner at first out and batter out
	 */
	groundoutDoublePlay() {
		if (this.third) {
			this.third = false;
			if (this.outs < 1 && !this.first) {
				this.runs++;
			}
			else if (this.outs < 2) {
				this.runs++;
			}

		}
		if (this.second) {
			this.second = false;
			this.third = true;
		}
		if (this.first) {
			this.first = false;
			this.outs++;
		}
		this.outs++;
	}
	/**
	 * Double play - Lead runner and batter out
	 */
	lineoutDoublePlay() {
		if (this.third) {
			this.third = false;
			this.outs++;
		}
		else if (this.second) {
			this.second = false;
			this.outs++;
		}
		else if (this.first) {
			this.first = false;
			this.outs++;
		}
		this.outs++;
	}

	/**
	 * Triple play - Runners at first and second and batter out
	 */
	triplePlay() {
		if (this.second) {
			this.second = false;
			this.outs++;
		}
		if (this.first) {
			this.first = false;
			this.outs++;
		}
		this.outs++;
	}

	/**
	 * Fielder's choice - Runner advances only if forced and lead runner is out, batter out and runners hold otherwise
	 */
	fieldersChoice() {
		this.outs++;
	}

	/**
	 * Error - Runners at first and second advance 2 bases and batter ends up at second
	 */
	errorSecond() {
		if (this.third) {
			this.third = false;
			this.runs++;
		}
		if (this.second) {
			this.second = false;
			this.runs++;
		}
		if (this.first) {
			this.first = false;
			this.third = true;
		}
		this.second = true;
	}
}