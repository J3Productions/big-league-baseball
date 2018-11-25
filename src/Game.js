'use strict';
import { Team } from "./Team.js";

/**
 * Game class - makes decisions and stores the game status based on player/user actions.
 */
export class Game {
	/**
	 * Constructor - creates and instantiates all necessary variables
	 * @param {string} playerTeam The team that the user will play as
	 */
	constructor(playerTeam) {

		/**
		 * The team the user will be playing for, either "home" or "away".
		 * @type {string}
		 */
		this.playerTeam = playerTeam;

		/**
		 * Number of outs in the inning
		 * @type {number}
		 */
		this.outs = 0;
		/**
		 * Number of balls in the AB
		 * @type {number}
		 */
		this.balls = 0;
		/**
		 * Number of strikes in the AB
		 * @type {number}
		 */
		this.strikes = 0;
		/**
		 * First base - true if occupied, false otherwise
		 * @type {boolean}
		 */
		this.first = false;
		/**
		 * Second base - true if occupied, false otherwise
		 * @type {boolean}
		 */
		this.second = false;
		/**
		 * Third base - true if occupied, false otherwise
		 * @type {boolean}
		 */
		this.third = false;

		/**
		 * Home team object - stores all data for the home team
		 * @type {Team}
		 */
		this.homeTeam = new Team("home");
		/**
		 * Visitor team object - stores all data for the visiting team
		 * @type {Team}
		 */
		this.visitTeam = new Team("away");

		/**
		 * Position in the home team lineup that is at bat (or scheduled to bat next)
		 * @type {number}
		 */
		this.homeAB = 1;

		/**
		 * Position in the visiting team lineup that is at bat (or scheduled to bat next)
		 * @type {number}
		 */
		this.visitAB = 1;

		/**
		 * Inning number - this.inningSide denotes the top or the bottom of the inning
		 * @type {number}
		 */
		this.inning = 1;

		/**
		 * Top or the bottom of the inning - false denotes the top, true denotes the bottom.
		 * @type {boolean}
		 */
		this.inningSide = false;

		/**
		 * Object that stores the result of the last pitch thrown - what pitch it was, what the category of contact was, the resulting play, whether an out was made, whether a new at bat is starting, and whether a new half-innning is starting.
		 * @type {{pitch: string, swing: boolean, play: string, out: boolean, newAB: boolean, newInning: boolean, runsScored: number}}
		 */
		this.lastPitch = {
			pitch: "",
			swing: false,
			play: "",
			out: false,
			newAB: true,
			newInning: true,
			runsScored: 0
		};
	}

	/*
	 * ss = Slow Straight
	 * si = Slow Inside
	 * sh = Slow High
	 * sl = Slow Low
	 * fs = Fastball Straigh
	 * fi = Fastball Inside
	 * fh = Fastball High
	 * fl = Fastball Low
	 * co = Curveball Outside
	 * ci = Curveball Inside
	 * ch = Curveball High
	 * cl = Curveball Low
	 */

	/**
	 * Pitcher throws a slowball straight pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	ssPitch(batter) {
		this.lastPitch.pitch = "ss";
		switch (batter) {
			case "ss":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("ss")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("ss")) {
						this.hit6();
						break;
					}
				}
				this.hit5();
				break;

			case "si":
				this.hit4();
				break;

			case "fs":
			case "co":
				this.hit3();
				break;

			case "sl":
			case "ci":
				this.hit2();
				break;

			case "fi":
				this.hit1();
				break;

			case "sh":
			case "fh":
			case "fl":
				this.foul();
				break;

			case "ch":
			case "cl":
				this.swingingStrike();
				break;

			case "take":
				this.calledStrike();
				break;
		}
	}

	/**
	 * Pitcher throws a slowball high pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	shPitch(batter) {
		this.lastPitch.pitch = "sh";

		switch (batter) {
			case "sh":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("sh")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("sh")) {
						this.hit6();
						break;
					}
				}
				this.hit3();
				break;

			case "fh":
				this.hit2();
				break;

			case "si":
			case "fs":
			case "ch":
				this.hit1();
				break;

			case "ss":
			case "fi":
			case "ci":
				this.foul();
				break;

			case "sl":
			case "fl":
			case "co":
			case "cl":
				this.swingingStrike();
				break;

			case "take":
				this.ball();
				break;
		}
	}

	/**
	 * Pitcher throws a slowball low pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	slPitch(batter) {
		this.lastPitch.pitch = "sl";
		switch (batter) {
			case "sl":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("sl")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("sl")) {
						this.hit6();
						break;
					}
				}
				this.hit3();
				break;

			case "ss":
			case "fl":
				this.hit2();
				break;

			case "co":
			case "cl":
				this.hit1();
				break;

			case "si":
			case "fs":
			case "fi":
				this.foul();
				break;

			case "sh":
			case "fh":
			case "ch":
			case "ci":
				this.swingingStrike();
				break;

			case "take":
				this.ball();
				break;
		}

	}

	/**
	 * Pitcher throws a slowball inside pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	siPitch(batter) {
		this.lastPitch.pitch = "si";
		switch (batter) {
			case "si":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("si")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("si")) {
						this.hit6();
						break;
					}
				}
				this.hit5();
				break;

			case "ss":
				this.hit4();
				break;

			case "fi":
			case "ci":
				this.hit3();
				break;

			case "sh":
			case "sl":
			case "fs":
				this.hit2();
				break;

			case "fh":
			case "fl":
			case "co":
			case "ch":
				this.foul();
				break;

			case "cl":
				this.swingingStrike();
				break;

			case "take":
				this.calledStrike();
				break;
		}
	}

	/**
	 * Pitcher throws a fastball straight pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	fsPitch(batter) {
		this.lastPitch.pitch = "fs";
		switch (batter) {
			case "fs":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("fs")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("fs")) {
						this.hit6();
						break;
					}
				}
				this.hit5();
				break;

			case "fi":
				this.hit4();
				break;

			case "ss":
			case "fh":
			case "ci":
				this.hit3();
				break;

			case "co":
				this.hit2();
				break;

			case "si":
				this.hit1();
				break;

			case "sh":
			case "sl":
			case "fl":
				this.foul();
				break;

			case "ch":
			case "cl":
				this.swingingStrike();
				break;

			case "take":
				this.calledStrike();
				break;
		}
	}

	/**
	 * Pitcher throws a fastball high pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	fhPitch(batter) {
		this.lastPitch.pitch = "fh";
		switch (batter) {
			case "fh":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("fh")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("fh")) {
						this.hit6();
						break;
					}
				}
				this.hit3();
				break;

			case "fi":
				this.hit2();
				break;

			case "sh":
			case "ch":
			case "ci":
				this.hit1();
				break;

			case "si":
			case "fs":
			case "co":
				this.foul();
				break;

			case "ss":
			case "sl":
			case "fl":
			case "cl":
				this.swingingStrike();
				break;

			case "take":
				this.ball();
				break;
		}
	}

	/**
	 * Pitcher throws a fastball low pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	flPitch(batter) {
		this.lastPitch.pitch = "fl";
		switch (batter) {
			case "fl":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("fl")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("fl")) {
						this.hit6();
						break;
					}
				}
				this.hit3();
				break;

			case "fs":
				this.hit2();
				break;

			case "sl":
			case "co":
			case "cl":
				this.hit1();
				break;

			case "ss":
			case "si":
			case "fi":
				this.foul();
				break;

			case "sh":
			case "fh":
			case "ch":
			case "ci":
				this.swingingStrike();
				break;

			case "take":
				this.ball();
				break;
		}
	}

	/**
	 * Pitcher throws a fastball inside pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	fiPitch(batter) {
		this.lastPitch.pitch = "fi";
		switch (batter) {
			case "fi":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("fi")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("fi")) {
						this.hit6();
						break;
					}
				}
				this.hit5();
				break;

			case "fs":
				this.hit4();
				break;

			case "si":
			case "ci":
				this.hit3();
				break;

			case "fl":
				this.hit2();
				break;

			case "ss":
			case "ch":
				this.hit1();
				break;

			case "sh":
			case "fh":
			case "co":
			case "cl":
				this.foul();
				break;

			case "sl":
				this.swingingStrike();
				break;

			case "take":
				this.calledStrike();
				break;
		}
	}

	/**
	 * Pitcher throws a curveball outside pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	coPitch(batter) {
		this.lastPitch.pitch = "co";
		switch (batter) {
			case "co":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("co")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("co")) {
						this.hit6();
						break;
					}
				}
				this.hit5();
				break;

			case "fs":
				this.hit4();
				break;

			case "ss":
				this.hit3();
				break;

			case "ch":
				this.hit2();
				break;

			case "fl":
			case "fi":
			case "cl":
				this.hit1();
				break;

			case "sh":
			case "sl":
				this.foul();
				break;

			case "si":
			case "fh":
			case "ci":
				this.swingingStrike();
				break;

			case "take":
				this.calledStrike();
				break;
		}
	}

	/**
	 * Pitcher throws a curveball high pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	chPitch(batter) {
		this.lastPitch.pitch = "ch";
		switch (batter) {
			case "ch":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("ch")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("ch")) {
						this.hit6();
						break;
					}
				}
				this.hit3();
				break;

			case "ss":
			case "sh":
			case "si":
			case "fh":
			case "co":
				this.hit1();
				break;

			case "fs":
			case "ci":
				this.foul();
				break;

			case "sl":
			case "fl":
			case "fi":
			case "cl":
				this.swingingStrike();
				break;

			case "take":
				this.ball();
				break;
		}
	}

	/**
	 * Pitcher throws a curveball low pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	clPitch(batter) {
		this.lastPitch.pitch = "cl";
		switch (batter) {
			case "cl":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("cl")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("cl")) {
						this.hit6();
						break;
					}
				}
				this.hit3();
				break;

			case "co":
			case "ci":
				this.hit2();
				break;

			case "sl":
			case "fl":
				this.hit1();
				break;

			case "ss":
			case "si":
			case "fi":
				this.foul();
				break;

			case "sh":
			case "fs":
			case "fh":
			case "ch":
				this.swingingStrike();
				break;

			case "take":
				this.ball();
				break;
		}
	}

	/**
	 * Pitcher throws a curveball inside pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	ciPitch(batter) {
		this.lastPitch.pitch = "ci";
		switch (batter) {
			case "ci":
				if (this.inningSide === false) {
					if (this.visitTeam.lineup[this.visitAB].getBatStrengths().includes("ci")) {
						this.hit6();
						break;
					}
				}
				else {
					if (this.homeTeam.lineup[this.homeAB].getBatStrengths().includes("ci")) {
						this.hit6();
						break;
					}
				}
				this.hit5();
				break;

			case "fi":
				this.hit4();
				break;

			case "si":
			case "fs":
				this.hit3();
				break;

			case "ss":
			case "cl":
				this.hit2();
				break;

			case "sh":
				this.hit1();
				break;

			case "sl":
			case "fh":
			case "co":
			case "ch":
				this.foul();
				break;

			case "fl":
				this.swingingStrike();
				break;

			case "take":
				this.calledStrike();
				break;
		}
	}


	/**
	 * Hit chart 1: Infield balls
	 */
	hit1() {
		this.lastPitch.swing = true;
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		switch (roll) {
			case 2:
				this.triplePlay();
				break;
			case 3:
			case 8:
				this.single();
				break;
			case 4:
			case 7:
				this.flyout();
				break;
			case 5:
				this.foulout();
				break;
			case 6:
			case 11:
				this.groundoutDoublePlay();
				break;
			case 9:
				this.groundout();
				break;
			case 10:
				this.fieldersChoice();
				break;
			case 12:
				this.error();
				break;
		}
	}

	/**
	 * Hit chart 2: Hits that fall over the infield, moderately hard hit grounders in the infield and fly balls that infielders go out for and outfielders come in for
	 */
	hit2() {
		this.lastPitch.swing = true;
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		switch (roll) {
			case 2:
			case 6:
				this.groundoutDoublePlay();
				break;
			case 3:
			case 8:
			case 10:
				this.flyout();
				break;
			case 4:
				this.groundoutAdvIfForced();
				break;
			case 5:
				this.foulout();
				break;
			case 7:
			case 9:
				this.single();
				break;
			case 11:
				this.groundout();
				break;
			case 12:
				this.error();
				break;
		}
	}

	/**
	 * Hit chart 3: Sharply hit balls through the infield and fly balls and hits to the outfield that go farther than chart 2 balls
	 */
	hit3() {
		this.lastPitch.swing = true;
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		switch (roll) {
			case 2:
			case 12:
				this.groundoutDoublePlay();
				break;
			case 3:
				this.single();
				break;
			case 4:
				this.groundoutAdvIfForced();
				break;
			case 5:
			case 7:
				this.flyoutAdv();
				break;
			case 8:
			case 10:
				this.singleRISP();
				break;
			case 9:
				this.fieldersChoice();
				break;
			case 11:
				this.errorSecond();
				break;
		}
	}

	/**
	 * Hit chart 4: Balls hit down the 1st and 3rd base lines and hard hit balls not going as far as those on chart 5
	 */
	hit4() {
		this.lastPitch.swing = true;
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		switch (roll) {
			case 2:
				this.homeRun();
				break;
			case 3:
				this.flyoutAdv();
				break;
			case 4:
				this.groundout();
				break;
			case 5:
				this.double();
				break;
			case 6:
			case 8:
				this.singleAdvance();
				break;
			case 7:
				this.flyoutNoAdv1st();
				break;
			case 9:
				this.singleRISP();
				break;
			case 10:
				this.groundoutDoublePlay();
				break;
			case 11:
				this.flyout();
				break;
			case 12:
				this.lineoutDoublePlay();
				break;
		}
	}

	/**
	 * Hit chart 5: Hard hit balls
	 */
	hit5() {
		this.lastPitch.swing = true;
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		switch (roll) {
			case 2:
				this.error();
				break;
			case 3:
			case 6:
				this.singleAdvance();
				break;
			case 4:
				this.double();
				break;
			case 5:
				this.flyoutAdv();
				break;
			case 7:
				this.flyoutNoAdv1st();
				break;
			case 8:
				this.groundout();
				break;
			case 9:
				this.homeRun();
				break;
			case 10:
				this.doubleClear();
				break;
			case 11:
				this.triple();
				break;
			case 12:
				this.lineoutDoublePlay();
				break;
		}
	}

	/**
	 * Hit chart 6: The most solidly hit balls and when hit for extra bases are the longest hit balls
	 */
	hit6() {
		this.lastPitch.swing = true;
		let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
		switch (roll) {
			case 2:
				this.foulout();
				break;
			case 3:
				this.flyoutAdv();
				break;
			case 4:
			case 6:
				this.homeRun();
				break;
			case 5:
				this.flyoutNoAdv1st();
				break;
			case 7:
				this.double();
				break;
			case 8:
				this.triple();
				break;
			case 9:
				this.singleAdvance();
				break;
			case 10:
				this.single();
				break;
			case 11:
				this.doubleClear();
				break;
			case 12:
				this.groundout();
				break;
		}
	}

	/**
	 * Home run - clears the bases and adds one run for every runner
	 */
	homeRun() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			numRuns++;
		}
		if (this.second) {
			this.second = false;
			numRuns++;
		}
		if (this.first) {
			this.first = false;
			numRuns++;
		}
		numRuns++;

		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}

		this.newAB();
		this.lastPitch.play = "homeRun";
		this.lastPitch.out = false;

		this.lastPitch.newInning = false;
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Triple - clears the bases and batter ends up at third
	 */
	triple() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			numRuns++;
		}
		if (this.second) {
			this.second = false;
			numRuns++;
		}
		if (this.first) {
			this.first = false;
			numRuns++;
		}
		this.third = true;
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "triple";
		this.lastPitch.out = false;

		this.lastPitch.newInning = false;
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Bases-clearing double - clears the bases (runner at first scores) and batter ends up at second
	 */
	doubleClear() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			numRuns++;
		}
		if (this.second) {
			this.second = false;
			numRuns++;
		}
		if (this.first) {
			this.first = false;
			numRuns++;
		}
		this.second = true;
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "doubleClear";
		this.lastPitch.out = false;

		this.lastPitch.newInning = false;
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Double - runners at third and second score, runner at first goes to third, batter ends up at second
	 */
	double() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			numRuns++;
		}
		if (this.second) {
			this.second = false;
			numRuns++;
		}
		if (this.first) {
			this.first = false;
			this.third = true;
		}
		this.second = true;
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "double";
		this.lastPitch.out = false;

		this.lastPitch.newInning = false;
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Single - all runners advance one base, batter ends up at first
	 */
	single() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			numRuns++;
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
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "single";
		this.lastPitch.out = false;

		this.lastPitch.newInning = false;
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Single that scores runners in scoring postion - runners at third and second score, runner at first goes to second, batter ends up at first
	 */
	singleRISP() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			numRuns++;
		}
		if (this.second) {
			this.second = false;
			numRuns++;
		}
		if (this.first) {
			this.first = false;
			this.second = true;
		}
		this.first = true;
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "singleRISP";
		this.lastPitch.out = false;

		this.lastPitch.newInning = false;
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Single that allows runner at first to go to third - runners at third and second score, runner at first goes to third, batter ends up at first
	 */
	singleAdvance() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			numRuns++;
		}
		if (this.second) {
			this.second = false;
			numRuns++;
		}
		if (this.first) {
			this.first = false;
			this.third = true;
		}
		this.first = true;
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "singleAdvance";
		this.lastPitch.out = false;

		this.lastPitch.newInning = false;
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Error - All runners move up a base, batter is safe at first in play that should've resulted in an out
	 */
	error() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			numRuns++;
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
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "error";
		this.lastPitch.out = false;

		this.lastPitch.newInning = false;
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Batter pops out in foul territory - All runners hold
	 */
	foulout() {
		this.out(1);
		this.newAB();
		this.lastPitch.play = "foulout";
		this.lastPitch.runsScored = 0;
	}

	/**
	 * Batter pops out - All runners hold
	 */
	flyout() {
		this.out(1);
		this.newAB();
		this.lastPitch.play = "flyout";
		this.lastPitch.runsScored = 0;
	}

	/**
	 * Batter pops out - All runners advance one base
	 */
	flyoutAdv() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			if (this.outs < 2)
				numRuns++;
		}
		if (this.second) {
			this.second = false;
			this.third = true;
		}
		if (this.first) {
			this.first = false;
			this.second = true;
		}
		this.out(1);
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "flyoutAdv";
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Batter pops out - All runners (except runner at first) advance one base
	 */
	flyoutNoAdv1st() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			if (this.outs < 2)
				numRuns++;
		}
		if (this.second) {
			this.second = false;
			this.third = true;
		}
		this.out(1);
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "flyoutNoAdv1st";
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Batter grounds out - All runners advance one base
	 */
	groundout() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			if (this.outs < 2)
				numRuns++;
		}
		if (this.second) {
			this.second = false;
			this.third = true;
		}
		if (this.first) {
			this.first = false;
			this.second = true;
		}
		this.out(1);
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "groundout";
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Batter grounds out - Runners hold unless they are forced to advance
	 */
	groundoutAdvIfForced() {
		let numRuns = 0;
		if (this.third && this.second && this.first) {
			this.third = false;
			if (this.outs < 2) {
				numRuns++;
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
		this.out(1);
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "groundoutAdvIfForced";
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Double play - Runner at first out and batter out
	 */
	groundoutDoublePlay() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			if (this.outs < 1 && !this.first) {
				numRuns++;
			}
			else if (this.outs < 2) {
				numRuns++;
			}
		}
		if (this.second) {
			this.second = false;
			this.third = true;
		}
		if (this.first) {
			this.first = false;
			this.out(2);
		}
		else {
			this.out(1);
		}
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "groundoutDoublePlay";
		this.lastPitch.runsScored = numRuns;
	}
	/**
	 * Double play - Lead runner and batter out
	 */
	lineoutDoublePlay() {
		if (this.third) {
			this.third = false;
			this.out(2);
		}
		else if (this.second) {
			this.second = false;
			this.out(2);
		}
		else if (this.first) {
			this.first = false;
			this.out(2);
		}
		else {
			this.out(1);
		}
		this.newAB();
		this.lastPitch.play = "lineoutDoublePlay";
		this.lastPitch.runsScored = 0;
	}

	/**
	 * Triple play - Runners at first and second and batter out
	 */
	triplePlay() {
		if (this.second && this.first) {
			this.second = false;
			this.first = false;
			this.out(3);
		}
		else if (this.second) {
			this.second = false;
			this.out(2);
		}
		else if (this.first) {
			this.first = false;
			this.out(2);
		}
		else {
			this.out(1);
		}
		this.newAB();
		this.lastPitch.play = "triplePlay";
		this.lastPitch.runsScored = 0;
	}

	/**
	 * Fielder's choice - Runner advances only if forced and lead runner is out, batter out and runners hold otherwise
	 */
	fieldersChoice() {
		this.out(1);
		this.newAB();
		this.lastPitch.play = "fieldersChoice";
		this.lastPitch.runsScored = 0;
	}

	/**
	 * Error - Runners at first and second advance 2 bases and batter ends up at second
	 */
	errorSecond() {
		let numRuns = 0;
		if (this.third) {
			this.third = false;
			numRuns++;
		}
		if (this.second) {
			this.second = false;
			numRuns++;
		}
		if (this.first) {
			this.first = false;
			this.third = true;
		}
		this.second = true;
		if (this.inningSide === false) {
			this.visitTeam.score(numRuns);
		}
		else {
			this.homeTeam.score(numRuns);
		}
		this.newAB();
		this.lastPitch.play = "errorSecond";
		this.lastPitch.out = false;
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Foul ball - only counts as a strike if there are less than 2 strikes
	 */
	foul() {
		if (this.strikes < 2) {
		    this.strikes++;
		    this.lastPitch.play = "foul";
		    this.lastPitch.out = false;
		    this.lastPitch.newAB = false;
		    this.lastPitch.newInning = false;
			this.lastPitch.runsScored = 0;
		}
	}

	/**
	 * Swinging Strike - Strike that is swung at, 3 strikes and you're out
	 */
	swingingStrike() {
		this.strikes++;
		if (this.strikes === 3) {
			this.strikes = 0;
			this.out(1);
			this.newAB();
			this.lastPitch.play = "strikeoutSwinging";
		}
		else {
			this.lastPitch.play = "swingingStrike";
			this.lastPitch.out = false;
			this.lastPitch.newAB = false;
			this.lastPitch.newInning = false;
		}
		this.lastPitch.runsScored = 0;
	}

	/**
	 * Called Strike - Strike that's taken, 3 strikes and you're out
	 */
	calledStrike() {
		this.strikes++;
		if (this.strikes === 3) {
			this.strikes = 0;
			this.out(1);
			this.newAB();
			this.lastPitch.play = "strikeoutLooking";
		}
		else {
			this.lastPitch.play = "calledStrike";
			this.lastPitch.out = false;
			this.lastPitch.newAB = false;
			this.lastPitch.newInning = false;
		}
		this.lastPitch.runsScored = 0;
	}

	/**
	 * Ball - 4 balls and it's a free pass on base
	 */
	ball() {
		let numRuns = 0;
		this.balls++;
		if (this.balls === 4) {
			this.balls = 0;
			if (this.third && this.second && this.first) {
				this.third = false;
				numRuns++;
			}
			if (this.second && this.first) {
				this.second = false;
				this.third = true;
			}
			if (this.first) {
				this.first = false;
				this.second = true;
			}
			this.first = true;
			if (this.inningSide === false) {
				this.visitTeam.score(numRuns);
			}
			else {
				this.homeTeam.score(numRuns);
			}
			this.newAB();
			this.lastPitch.play = "walk";
		}
		else {
			this.lastPitch.play = "ball";
			this.lastPitch.newAB = false;
		}
		this.lastPitch.out = false;
		this.lastPitch.newInning = false;
		this.lastPitch.runsScored = numRuns;
	}

	/**
	 * Out - 3 Outs and that's the end of the inning
	 */
	out(num) {
		if (num === 1) {
			this.outs++;
		}
		else if (num === 2) {
			if (this.outs < 2) {
				this.outs += 2;
			}
			else {
				this.outs++;
			}
		}
		else if (num === 3) {
			this.outs = 3;
		}

		if (this.outs === 3) {
			this.newInning();
		}
		else {
			this.lastPitch.newInning = false;
		}
		this.lastPitch.out = true;
	}

	/**
	 * Resets the game for a new at bat
	 */
	newAB() {
		this.balls = 0;
		this.strikes = 0;
		if (this.inningSide === false) {
			if (this.visitAB === 9) {
				this.visitAB = 1;
			}
			else{
				this.visitAB++;
			}
		}
		else {
			if (this.homeAB === 9) {
				this.homeAB = 1;
			}
			else{
				this.homeAB++;
			}
		}

		this.lastPitch.newAB = true;
	}

	/**
	 * Resets the bases and outs for a new half-inning
	 */
	newInning() {
		this.first = false;
		this.second = false;
		this.third = false;
		this.outs = 0;
		if (this.inningSide) {
			this.inning++;
		}
		this.inningSide = !this.inningSide;
		this.lastPitch.newInning = true;
	}

	teamPointer(team) {
		if (team === "home") {
			return this.homeTeam;
		}
		else {
			return this.visitTeam;
		}
	}
}
