'use strict';
/**
 *Team class creates teams
 */
import { Pitcher } from './Pitcher.js';
import { Outfielder } from './Outfielder.js';
/**
 * Team
 */
export class Team {
    /**
    * Constructor creates a team that stores players in an array.

    there name,position( pitcher or position team), hitting stats, baserunning speed and whether the team is on a team using functions inherited from the team class. Also, type of pitcher they are, types of pitches they throw.
    * POSTCONDITION: name, position, hitting stats, baserunning speed and inLineup all now have set values,  pitcher type and the pitcher arsenal all now have set values.
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
		* Baseball player name.
     	* @type {Player[]}
     	*/
        this.arrOfPlayers = [];
	    /**
	     * Number of runs scored by the team
	     * @type {number}
	     */
        this.runs = 0;
        this.createPlayers(team);
    }
    /**
	* This function returns a team of players in an array.
	* POSTCONDITION: Returns array of team
	*/
    getTeam(){
        return this.arrOfPlayers;
    }
    /**
    * This function buildes players and puts them into the arrOfPlayers.
    * POSTCONDITION: No return.
    */
    createPlayers(team){
        if(team==home){
            this.arrOfPlayers[0]= new Catcher("Jielong GoLong", "catcher", ["co", "ch"], false);
            this.arrOfPlayers[1]= new Infielder("Jacob \"The Bull\" Parnell", "1base", ["fs", "fl"], true);
            this.arrOfPlayers[2]= new Infielder("Rocco Manzeene", "short", ["ci"], false);
            this.arrOfPlayers[3]= new Infielder("Larry Smerts", "2base", ["fs", "fl"], true);
            this.arrOfPlayers[4]= new Infielder("Johnny Demp", "3base", ["ss", "sl"], true);
            this.arrOfPlayers[5]= new Outfielder("Ray Cobb", "left", ["fs", "fi"], false);
            this.arrOfPlayers[6]= new Outfielder("Mike Truk", "center", ["si", "ci"], true);
            this.arrOfPlayers[7]= new Outfielder("Mickel J-Rod", "right", ["co"], false);
            //Bench
            this.arrOfPlayers[8]= new Catcher("Micky Robinson", "catcher", ["si"], false);
            this.arrOfPlayers[9]= new UtilityInfielder("john", "ui", ["fi"], true);//position "ui" == Utility Infielder
            this.arrOfPlayers[10]= new UtilityOutfielder("Duke", "uo", ["fs"], true);//position "uo" == Utility Outfielder
            this.arrOfPlayers[11]= new PinchHitter("pinch1", "ph", ["si","fi","ci"], false, "lefty");//position "ph" == Pinch Hitter; Bats Lefty
            this.arrOfPlayers[12]= new PinchHitter("pinch2", "ph", ["co","ch"], true, "righty");//position "ph" == Pinch Hitter; Bats righty
            this.arrOfPlayers[13]= new PinchHitter("pinch3", "ph", ["sh","ch"], true, "lefty&righty");//position "ph" == Pinch Hitter; Bats Lefty and Righty
            //Pitchers
            this.arrOfPlayers[14]= new Pitcher("Boom Mannski", "pitcher", [], false, ["ss","sl","fh","fl","fi","co","ch","ci"], righty);
             }
            this.arrOfPlayers[15]= new Pitcher("pitch1", "pitcher", [], false, ["ss","","","","","","","","",""], righty);
            this.arrOfPlayers[15]= new Pitcher("pitch1", "pitcher", [], false, ["ss","","","","","","","","",""], righty);
            this.arrOfPlayers[15]= new ReliefPitcher("pitch1", "pitcher", [], false, ["ss","","","","","","","","",""], righty);
             }
        else{
            this.arrOfPlayers[0]= new Catcher("Jielong GoLong", "catcher", ["co", "ch"], false);
            this.arrOfPlayers[1]= new Infielder("Jacob \"The Bull\" Parnell", "1base", ["fs", "fl"], true);
            this.arrOfPlayers[2]= new Infielder("Rocco Manzeene", "short", ["ci"], false);
            this.arrOfPlayers[3]= new Infielder("Larry Smerts", "2base", ["fs", "fl"], true);
            this.arrOfPlayers[4]= new Infielder("Johnny Demp", "3base", ["ss", "sl"], true);
            this.arrOfPlayers[5]= new Outfielder("Ray Cobb", "left", ["fs", "fi"], false);
            this.arrOfPlayers[6]= new Outfielder("Mike Truk", "center", ["si", "ci"], true);
            this.arrOfPlayers[7]= new Outfielder("Mickel J-Rod", "right", ["co"], false);
            //Bench
            this.arrOfPlayers[8]= new Catcher("Micky Robinson", "catcher", ["si"], false);
            this.arrOfPlayers[9]= new UtilityInfielder("john", "ui", ["fi"], true);//position "ui" == Utility Infielder
            this.arrOfPlayers[10]= new UtilityOutfielder("Duke", "uo", ["fs"], true);//position "uo" == Utility Outfielder
            this.arrOfPlayers[11]= new PinchHitter("pinch1", "ph", ["si","fi","ci"], false, "lefty");//position "ph" == Pinch Hitter; Bats Lefty
            this.arrOfPlayers[12]= new PinchHitter("pinch2", "ph", ["co","ch"], true, "righty");//position "ph" == Pinch Hitter; Bats righty
            this.arrOfPlayers[13]= new PinchHitter("pinch3", "ph", ["sh","ch"], true, "lefty&righty");//position "ph" == Pinch Hitter; Bats Lefty and Righty
            //Pitchers
            this.arrOfPlayers[14]= new Pitcher("Boom Mannski", "pitcher", [], false, ["ss","sl","fh","fl","fi","co","ch","ci"], righty);
             }
            this.arrOfPlayers[15]= new Pitcher("pitch1", "pitcher", [], false, ["ss","","","","","","","","",""], righty);
            this.arrOfPlayers[15]= new Pitcher("pitch1", "pitcher", [], false, ["ss","","","","","","","","",""], righty);
            this.arrOfPlayers[15]= new ReliefPitcher("pitch1", "pitcher", [], false, ["ss","","","","","","","","",""], righty);
             }
        }
    }

	/**
	 * Add runs to the team's score
	 * @param {number} r The number of runs scored on the play
	 */
	score(r) {
    	this.runs += r;
    }
}
