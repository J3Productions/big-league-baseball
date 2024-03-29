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
    *type of pitches thrown,(LF, right or switch hitter),( LF or right-handed pitcher)
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
     	* @type {Player[]}
     	*/
        this.arrOfPlayers = [];
        /**
        * Number of runs scored by the team
        * @type {number}
        */
        this.runs = 0;

	    /**
         * Batting lineup of the team
	     * @type {Player[]}
	     */
	    this.lineup = [];

	    /**
         * The starting pitcher
	     * @type {Player}
	     */
	    this.pitcher = null;


        this.createPlayers(team);
    }

    /**
    * This function buildes an array of players receiving a parameter of home or visiting team.
    **Sending parameters to Player subclasses.
    *Parameters: baseball player name, position, array of batting strengths, baserunning speed, type of pitches thrown,
    *(left, right or switch hitter),( left or right-handed pitcher)
    * POSTCONDITION: No return.
    */
    createPlayers(team){
        if(team === "home"){
            this.arrOfPlayers[0]= new Catcher("Jielong GoLong", "C", ["co", "ch"], false);
            this.arrOfPlayers[1]= new Infielder("Jacob \"The Bull\" Parnell", "1B", ["fs", "fl"], false);
            this.arrOfPlayers[2]= new Infielder("Rocco Manzeene", "SS", ["ci"], false);
            this.arrOfPlayers[3]= new Infielder("Benjamin Franklin Pierce", "2B", ["fs", "fl"], false);
            this.arrOfPlayers[4]= new Infielder("Johnny Demp", "3B", ["ss", "sl"], true);
            this.arrOfPlayers[5]= new Outfielder("Ray Cobb", "LF", ["fs", "fi"], false);
            this.arrOfPlayers[6]= new Outfielder("Mike Truk", "CF", ["si", "ci"], true);
            this.arrOfPlayers[7]= new Outfielder("Micl Jrod", "RF", ["co"], false);
            //Bench
            this.arrOfPlayers[8]= new Catcher("Micky Robinson", "C", ["si"], false);
            this.arrOfPlayers[9]= new UtilityInfielder("Evan Riley", "ui", ["fi"], false);//position "ui" == Utility Infielder
            this.arrOfPlayers[10]= new UtilityOutfielder("Duke Johnston", "uo", ["fs"], true);//position "uo" == Utility Outfielder
            this.arrOfPlayers[11]= new PinchHitter("Boom Mannski", "ph", ["si","fi","ci"], false, "lefty");//position "ph" == Pinch Hitter; Bats Lefty
            this.arrOfPlayers[12]= new PinchHitter("Jake Harrison", "ph", ["co","ch"], true, "righty");//position "ph" == Pinch Hitter; Bats righty
            this.arrOfPlayers[13]= new PinchHitter("Stan Lee", "ph", ["sh","ch"], true, "switch");//position "ph" == Pinch Hitter; switch== Bats Lefty and Righty
            //Pitchers
            this.arrOfPlayers[14]= new Pitcher("Zack Greenlee", "RHP", [], false, ["ss","sl","fh","fl","fi","co","ch","ci"], "rhp");
            this.arrOfPlayers[15]= new Pitcher("Miguel Rodriguez", "LHP", [], false, ["ss","sh","sl","si","fh","fi","co","ch"], "lhp");
            this.arrOfPlayers[16]= new Pitcher("A. J. Heinrich", "RHP", [], false, ["ss","sh","si","fs","fh","fl","cl","ci"], "rhp");
            this.arrOfPlayers[17]= new Pitcher("Hideo Matsui", "LHP", [], false, ["ss","sh","fs","fh","fl","fi","co","cl"], "lhp");
            this.arrOfPlayers[18]= new ReliefPitcher("Clinton Dempsey", "RHP", [], false, ["sh","sl","si","fs","fh","fl","co","ch","ci"], "rhp");

            this.lineup[0] = this.arrOfPlayers[2];
            this.lineup[1] = this.arrOfPlayers[3];
            this.lineup[2] = this.arrOfPlayers[6];
            this.lineup[3] = this.arrOfPlayers[1];
            this.lineup[4] = this.arrOfPlayers[4];
            this.lineup[5] = this.arrOfPlayers[0];
            this.lineup[6] = this.arrOfPlayers[5];
            this.lineup[7] = this.arrOfPlayers[7];
            this.lineup[8] = this.arrOfPlayers[14];

        }
        else{
            this.arrOfPlayers[0]= new Catcher("Alex Canseco", "C", ["fi", "ci"], false);
            this.arrOfPlayers[1]= new Infielder("Michael Bonds", "1B", ["sh", "si"], false);
            this.arrOfPlayers[2]= new Infielder("Terry Jeter", "SS", ["ss"], true);
            this.arrOfPlayers[3]= new Infielder("Larry Smerts", "2B", ["co", "ch"], false);
            this.arrOfPlayers[4]= new Infielder("Forest Whitmore", "3B", ["fs"], false);
            this.arrOfPlayers[5]= new Outfielder("Hank \"The Tank\" Aaron", "LF", ["si"], false);
            this.arrOfPlayers[6]= new Outfielder("Jackie Young", "CF", ["cl", "ci"], false);
            this.arrOfPlayers[7]= new Outfielder("Jason Purinton", "RF", ["ss","si"], true);
            //Bench
            this.arrOfPlayers[8]= new Catcher("Micky Robinson", "C", ["co"], false);
            this.arrOfPlayers[9]= new UtilityInfielder("Bryce Hatfield", "ui", ["ui"], true);//position "ui" == Utility Infielder
            this.arrOfPlayers[10]= new UtilityOutfielder("Fhog Allen", "uo", ["si"], false);//position "uo" == Utility Outfielder
            this.arrOfPlayers[11]= new PinchHitter("CiCi Sabathia", "ph", ["ss","fs","ci"], false, "lefty");//position "ph" == Pinch Hitter; Bats Lefty
            this.arrOfPlayers[12]= new PinchHitter("Roberto Cabrera", "ph", ["fh","ch"], true, "righty");//position "ph" == Pinch Hitter; Bats righty
            this.arrOfPlayers[13]= new PinchHitter("Tommy Chapman", "ph", ["co","ch"], false, "switch");//position "ph" == Pinch Hitter; switch== Bats Lefty and Righty
            //Pitchers
            this.arrOfPlayers[14]= new Pitcher("Dizzy Lasorda", "LHP", [], false, ["ss","fh","fl","fi","co","ch","cl","ci"], "lhp");
            this.arrOfPlayers[15]= new Pitcher("Babe Ruth", "RHP", [], false, ["sh","si","fs","fl","co","ch","cl","ci"], "rhp");
            this.arrOfPlayers[16]= new Pitcher("Alcides Ortiz", "LHP", [], false, ["ss","sh","sl","si","fl","fi","ch","ci"], "lhp");
            this.arrOfPlayers[17]= new Pitcher("Dennis Eckard", "RHP", [], false, ["ss","sh","sl","si","co","ch","cl","ci"], "rhp");
            this.arrOfPlayers[18]= new ReliefPitcher("Leslie Koufax", "LHP", [], false, ["ss","sh","sl","si","fi","co","ch","cl","ci"], "lhp");

	        this.lineup[0] = this.arrOfPlayers[5];
	        this.lineup[1] = this.arrOfPlayers[6];
	        this.lineup[2] = this.arrOfPlayers[4];
	        this.lineup[3] = this.arrOfPlayers[3];
	        this.lineup[4] = this.arrOfPlayers[0];
	        this.lineup[5] = this.arrOfPlayers[1];
	        this.lineup[6] = this.arrOfPlayers[7];
	        this.lineup[7] = this.arrOfPlayers[2];
	        this.lineup[8] = this.arrOfPlayers[14];
        }

        this.pitcher = this.arrOfPlayers[14];
    }
    /**
    * This function returns a team of players in an array.
    * POSTCONDITION: Returns array of team
    */
    getTeam(){
        return this.lineup;
    }

    /**
	 * Add runs to the team's score
	 * @param {number} r The number of runs scored on the play
	 */
	score(r) {
    	this.runs += r;
    }
}
