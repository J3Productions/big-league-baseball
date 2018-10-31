'use strict';
/**
 *Team class creates teams
 */
import { Catcher } from './Catcher.js';
import { Infielder } from './Infielder.js';
import { Outfielder } from './Outfielder.js';
import { Pitcher } from './Pitcher.js';
import { ReliefPitcher } from './ReliefPitcher.js';
import { PinchHitter } from './PinchHitter.js';
import { UtilityInfielder } from './UtilityInfielder.js';
import { UtilityOutfielder } from './UtilityOutfielder.js';
/**
 * Team
 */
export class Team {
    /**
    * Constructor creates a team that stores players in an array.
    * POSTCONDITION: * Parameters: baseball player name, position, array of batting strengths, baserunning speed,
    *type of pitches thrown,(left, right or switch hitter),( left or right-handed pitcher)
        *
        * @param {string} team of baseball players
        */
    constructor(team){
     	/**
		* Baseball team(home or visitor).
     	* @type {string}
     	*/
        this.team = team;
        /**
		* Baseball array of players on team.
     	* @type {Team of Baseball Players[]}
     	*/
        this.arrOfPlayers = [];
        /**
        * Number of runs scored by the team
        * @type {number}
        */
        this.runs = 0;


        /**
	     * Calls function create players to build the team
	     * @type {func}
	     */
        this.createPlayers(team);
    }

    /**
    * This function buildes an array of players receiving a parameter of home or visiting team.
    **Sending parameters to Player subclasses.
    *Parameters: baseball player name, position, array of batting strengths, baserunning speed, type of pitches thrown,
    *(left, right or switch hitter),( left or right-handed pitcher)
    * POSTCONDITION: No return.
    */
    function createPlayers(team){
        if(team==home){
            this.arrOfPlayers[0]= new Catcher("Jielong GoLong", "catcher", ["co", "ch"], false);
            this.arrOfPlayers[1]= new Infielder("Jacob \"The Bull\" Parnell", "1base", ["fs", "fl"], false);
            this.arrOfPlayers[2]= new Infielder("Rocco Manzeene", "short", ["ci"], false);
            this.arrOfPlayers[3]= new Infielder("Larry Smerts", "2base", ["fs", "fl"], false);
            this.arrOfPlayers[4]= new Infielder("Johnny Demp", "3base", ["ss", "sl"], true);
            this.arrOfPlayers[5]= new Outfielder("Ray Cobb", "left", ["fs", "fi"], false);
            this.arrOfPlayers[6]= new Outfielder("Mike Trunk", "center", ["si", "ci"], true);
            this.arrOfPlayers[7]= new Outfielder("Mickel J-Rod", "right", ["co"], false);
            //Bench
            this.arrOfPlayers[8]= new Catcher("Micky Robinson", "catcher", ["si"], false);
            this.arrOfPlayers[9]= new UtilityInfielder("Evan Riley", "ui", ["fi"], false);//position "ui" == Utility Infielder
            this.arrOfPlayers[10]= new UtilityOutfielder("Duke Johnston", "uo", ["fs"], true);//position "uo" == Utility Outfielder
            this.arrOfPlayers[11]= new PinchHitter("Boom Mannski", "ph", ["si","fi","ci"], false, "lefty");//position "ph" == Pinch Hitter; Bats Lefty
            this.arrOfPlayers[12]= new PinchHitter("Jake Harrison", "ph", ["co","ch"], true, "righty");//position "ph" == Pinch Hitter; Bats righty
            this.arrOfPlayers[13]= new PinchHitter("Stan Lee", "ph", ["sh","ch"], true, "switch");//position "ph" == Pinch Hitter; switch== Bats Lefty and Righty
            //Pitchers
            this.arrOfPlayers[14]= new Pitcher("Zack Greenlee", "pitcher", [], false, ["ss","sl","fh","fl","fi","co","ch","ci"], "righty");
            this.arrOfPlayers[15]= new Pitcher("Miguel Rodriguez", "pitcher", [], false, ["ss","sh","sl","si","fh","fi","co","ch"], "lefty");
            this.arrOfPlayers[16]= new Pitcher("A. J. Heinrich", "pitcher", [], false, ["ss","sh","si","fs","fh","fl","cl","ci"], "righty");
            this.arrOfPlayers[17]= new Pitcher("Hideo Matsui", "pitcher", [], false, ["ss","sh","fs","fh","fl","fi","co","cl"], "lefty");
            this.arrOfPlayers[18]= new ReliefPitcher("Clinton Dempsey", "pitcher", [], false, ["sh","sl","si","fs","fh","fl","co","ch","ci"], "righty");
        }
        else{
            this.arrOfPlayers[0]= new Catcher("Alex Canseco", "catcher", ["fi", "ci"], false);
            this.arrOfPlayers[1]= new Infielder("Michael Bonds", "1base", ["sh", "si"], false);
            this.arrOfPlayers[2]= new Infielder("Terry Jeter", "short", ["ss"], true);
            this.arrOfPlayers[3]= new Infielder("Larry Smerts", "2base", ["co", "ch"], false);
            this.arrOfPlayers[4]= new Infielder("Forest Whitmore", "3base", ["fs"], false);
            this.arrOfPlayers[5]= new Outfielder("Hank \"The Tank\" Aaron", "left", ["si"], false);
            this.arrOfPlayers[6]= new Outfielder("Jackie Young", "center", ["cl", "ci"], false);
            this.arrOfPlayers[7]= new Outfielder("Jason Purinton", "right", ["ss","si"], true);
            //Bench
            this.arrOfPlayers[8]= new Catcher("Micky Robinson", "catcher", ["co"], false);
            this.arrOfPlayers[9]= new UtilityInfielder("Bryce Hatfield", "ui", ["ui"], true);//position "ui" == Utility Infielder
            this.arrOfPlayers[10]= new UtilityOutfielder("Fhog Allen", "uo", ["si"], false);//position "uo" == Utility Outfielder
            this.arrOfPlayers[11]= new PinchHitter("CiCi Sabathia", "ph", ["ss","fs","ci"], false, "lefty");//position "ph" == Pinch Hitter; Bats Lefty
            this.arrOfPlayers[12]= new PinchHitter("Roberto Cabrera", "ph", ["fh","ch"], true, "righty");//position "ph" == Pinch Hitter; Bats righty
            this.arrOfPlayers[13]= new PinchHitter("Tommy Chapman", "ph", ["co","ch"], false, "switch");//position "ph" == Pinch Hitter; switch== Bats Lefty and Righty
            //Pitchers
            this.arrOfPlayers[14]= new Pitcher("Dizzy Lasorda", "pitcher", [], false, ["ss","fh","fl","fi","co","ch","cl","ci"], "lefty");
            this.arrOfPlayers[15]= new Pitcher("Babe Ruth", "pitcher", [], false, ["sh","si","fs","fl","co","ch","cl","ci"], "righty");
            this.arrOfPlayers[16]= new Pitcher("Alcides Ortiz", "pitcher", [], false, ["ss","sh","sl","si","fl","fi","ch","ci"], "lefty");
            this.arrOfPlayers[17]= new Pitcher("Dennis  Eckard", "pitcher", [], false, ["ss","sh","sl","si","co","ch","cl","ci"], "righty");
            this.arrOfPlayers[18]= new ReliefPitcher("Leslie Koufax", "reliefPitcher", [], false, ["ss","sh","sl","si","fi","co","ch","cl","ci"], "lefty");
        }
    }
    /**
    * This function returns a team of players in an array.
    * POSTCONDITION: Returns array of team
    */
    getTeam(){
        return this.arrOfPlayers;
    }

    /**
	 * Add runs to the team's score
	 * @param {number} r The number of runs scored on the play
	 */
	score(r) {
    	this.runs += r;
    }
}
