'use strict';
import { Team } from "./Team.js";

/**
 * Game class - makes decisions and stores the game status based on player/user actions.
 */
export class Game {
	/**
	 * Constructor - creates and instantiates all necessary variables
	 */
	constructor() {
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
		this.visitTeam = new Team("visit");

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
		this.inning = 1

		/**
		 * Top or the bottom of the inning - false denotes the top, true denotes the bottom.
		 * @type {boolean}
		 */
		this.inningSide = false
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
		if (batter === "ss" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("ss")) {
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
		else if (batter === "ch" || batter === "cl" || batter === "take") {
			this.strike();
		}
	}

	/**
	 * Pitcher throws a slowball high pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	shPitch(batter) {
		if (batter === "sh" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("sh")) {
			this.hit6();
		}
		else if (batter === "sh") {
			this.hit3();
		}
		else if (batter === "fh") {
			this.hit2();
		}
		else if (batter === "si" || batter === "fs" || batter === "ch") {
			this.hit1();
		}
		else if (batter === "ss" || batter === "fi" || batter === "ci") {
			this.foul();
		}
		else if (batter === "sl" || batter === "fl" || batter === "co" || batter === "cl") {
			this.strike();
		}
		else if (batter === "take") {
			this.ball();
		}
	}

	/**
	 * Pitcher throws a slowball low pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	slPitch(batter) {
		if (batter === "sl" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("sl")) {
			this.hit6();
		}
		else if (batter === "sl") {
			this.hit3();
		}
		else if (batter === "ss" || batter === "fl") {
			this.hit2();
		}
		else if (batter === "co" || batter === "cl") {
			this.hit1();
		}
		else if (batter === "si" || batter === "fs" || batter === "fi") {
			this.foul();
		}
		else if (batter === "sh" || batter === "fh" || batter === "ch" || batter === "ci") {
			this.strike();
		}
		else if (batter === "take") {
			this.ball();
		}
	}

	/**
	 * Pitcher throws a slowball inside pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	siPitch(batter) {
		if (batter === "si" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("si")) {
			this.hit6();
		}
		else if (batter === "si") {
			this.hit5();
		}
		else if (batter === "ss") {
			this.hit4();
		}
		else if (batter === "fi" || batter === "ci") {
			this.hit3();
		}
		else if (batter === "sh" || batter === "sl" || batter === "fs") {
			this.hit2();
		}
		else if (batter === "fh" || batter === "fl" || batter === "co" || batter === "ch") {
			this.foul();
		}
		else if (batter === "cl" || batter === "take") {
			this.strike();
		}
	}

	/**
	 * Pitcher throws a fastball straight pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	fsPitch(batter) {
		if (batter === "fs" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("fs")) {
			this.hit6();
		}
		else if (batter === "fs") {
			this.hit5();
		}
		else if (batter === "fi") {
			this.hit4();
		}
		else if (batter === "ss" || batter === "fh" || batter === "ci") {
			this.hit3();
		}
		else if (batter === "co") {
			this.hit2();
		}
		else if (batter === "si") {
			this.hit1();
		}
		else if (batter === "sh" || batter === "sl" || batter === "fl") {
			this.foul();
		}
		else if (batter === "ch" || batter === "cl" || batter === "take") {
			this.strike();
		}
	}

	/**
	 * Pitcher throws a fastball high pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	fhPitch(batter) {
		if (batter === "fh" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("fh")) {
			this.hit6();
		}
		else if (batter === "fh") {
			this.hit3();
		}
		else if (batter === "fi") {
			this.hit2();
		}
		else if (batter === "sh" || batter === "ch" || batter === "ci") {
			this.hit1();
		}
		else if (batter === "si" || batter === "fs" || batter === "co") {
			this.foul();
		}
		else if (batter === "ss" || batter === "sl" || batter === "fl" || batter === "cl") {
			this.strike();
		}
		else if (batter === "take") {
			this.ball();
		}
	}

	/**
	 * Pitcher throws a fastball low pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	flPitch(batter) {
		if (batter === "fl" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("fl")) {
			this.hit6();
		}
		else if (batter === "fl") {
			this.hit3();
		}
		else if (batter === "fs") {
			this.hit2();
		}
		else if (batter === "sl" || batter === "co" || batter === "cl") {
			this.hit1();
		}
		else if (batter === "ss" || batter === "si" || batter === "fi") {
			this.foul();
		}
		else if (batter === "sh" || batter === "fh" || batter === "ch" || batter === "ci") {
			this.strike();
		}
		else if (batter === "take") {
			this.ball();
		}
	}

	/**
	 * Pitcher throws a fastball inside pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	fiPitch(batter) {
		if (batter === "fi" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("fi")) {
			this.hit6();
		}
		else if (batter === "fi") {
			this.hit5();
		}
		else if (batter === "fs") {
			this.hit4();
		}
		else if (batter === "si" || batter === "ci") {
			this.hit3();
		}
		else if (batter === "fl") {
			this.hit2();
		}
		else if (batter === "ss" || batter === "ch") {
			this.hit1();
		}
		else if (batter === "sh" || batter === "fh" || batter === "co" || batter === "cl") {
			this.foul();
		}
		else if (batter === "sl" || batter === "take") {
			this.strike();
		}
	}

	/**
	 * Pitcher throws a curveball outside pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	coPitch(batter) {
		if (batter === "co" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("co")) {
			this.hit6();
		}
		else if (batter === "co") {
			this.hit5();
		}
		else if (batter === "fs") {
			this.hit4();
		}
		else if (batter === "ss") {
			this.hit3();
		}
		else if (batter === "ch") {
			this.hit2();
		}
		else if (batter === "fl" || batter === "fi" || batter === "cl") {
			this.hit1();
		}
		else if (batter === "sh" || batter === "sl") {
			this.foul();
		}
		else if (batter === "si" || batter === "fh" || batter === "ci" || batter === "take") {
			this.strike();
		}
	}

	/**
	 * Pitcher throws a curveball high pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	chPitch(batter) {
		if (batter === "ch" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("ch")) {
			this.hit6();
		}
		else if (batter === "ch") {
			this.hit3();
		}
		else if (batter === "ss" || batter === "sh" || batter === "si" || batter === "fh" || batter === "co") {
			this.hit1();
		}
		else if (batter === "fs" || batter === "ci") {
			this.foul();
		}
		else if (batter === "sl" || batter === "fl" || batter === "fi" || batter === "cl") {
			this.strike();
		}
		else if (batter === "take") {
			this.ball();
		}
	}

	/**
	 * Pitcher throws a curveball low pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	clPitch(batter) {
		if (batter === "cl" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("cl")) {
			this.hit6();
		}
		else if (batter === "cl") {
			this.hit3();
		}
		else if (batter === "co" || batter === "ci") {
			this.hit2();
		}
		else if (batter === "sl" || batter === "fl") {
			this.hit1();
		}
		else if (batter === "ss" || batter === "si" || batter === "fi") {
			this.foul();
		}
		else if (batter === "sh" || batter === "fs" || batter === "fh" || batter === "ch") {
			this.strike();
		}
		else if (batter === "take") {
			this.ball();
		}
	}

	/**
	 * Pitcher throws a curveball inside pitch and the outcome is determined by the batter's action
	 * @param {string} batter The batter's action
	 */
	ciPitch(batter) {
		if (batter === "ci" && this.homeTeam.getTeam()[this.homeAB].getbatStrengths().includes("ci")) {
			this.hit6();
		}
		else if (batter === "ci") {
			this.hit5();
		}
		else if (batter === "fi") {
			this.hit4();
		}
		else if (batter === "si" || batter === "fs") {
			this.hit3();
		}
		else if (batter === "ss" || batter === "cl") {
			this.hit2();
		}
		else if (batter === "sh") {
			this.hit1();
		}
		else if (batter === "sl" || batter === "fh" || batter === "co" || batter === "ch") {
			this.foul();
		}
		else if (batter === "fl" || batter === "take") {
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
		if (roll === 2 || roll === 12) {
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
	}

	/**
	 * Batter pops out in foul territory - All runners hold
	 */
	foulout() {
		this.out(1);
		this.newAB();
	}

	/**
	 * Batter pops out - All runners hold
	 */
	flyout() {
		this.out(1);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
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
	}

	/**
	 * Fielder's choice - Runner advances only if forced and lead runner is out, batter out and runners hold otherwise
	 */
	fieldersChoice() {
		this.out(1);
		this.newAB();
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
		this.homeTeam.score(numRuns);
		this.newAB();
	}

	/**
	 * Foul ball - only counts as a strike if there are less than 2 strikes
	 */
	foul() {
		if (this.strikes < 2) {
		    this.strikes++;
		    console.log("foul ball!");
		}
	}

	/**
	 * Strike - 3 strikes and you're out
	 */
	strike() {
		this.strikes++;
		if (this.strikes === 3) {
			this.strikes = 0;
			this.out(1);
			this.newAB();
		}
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
			this.homeTeam.score(numRuns);
			this.newAB();
		}
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
	}

	/**
	 * Resets the game for a new at bat
	 */
	newAB() {
		this.balls = 0;
		this.strikes = 0;
		if (this.homeAB === 9) {
			this.homeAB = 1;
		}
		else{
			this.homeAB++;
		}
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
	}
}
