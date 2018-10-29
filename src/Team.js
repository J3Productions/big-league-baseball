'use strict';
/**
 *Team class creates teams
 */
import { Pitcher } from './Pitcher.js';
import { PositionPlayer } from './PositionPlayer.js';
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
        this.createPlayers();
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
    createPlayers(){
        this.arrOfPlayers[0]= new PositionPlayer("Jielong GoLong", "C", ["co", "ch"], false);
        this.arrOfPlayers[1]= new PositionPlayer("Jacob \"The Bull\" Parnell", "1B", ["fs", "fl"], true);
        this.arrOfPlayers[2]= new PositionPlayer("Rocco Manzeene", "SS", ["ci"], false);
        this.arrOfPlayers[3]= new PositionPlayer("Larry Smerts", "2B", ["fs", "fl"], true);
        this.arrOfPlayers[4]= new PositionPlayer("Johnny Demp", "3B", ["ss", "sl"], true);
        this.arrOfPlayers[5]= new PositionPlayer("Ray Cobb", "LF", ["fs", "fi"], false);
        this.arrOfPlayers[6]= new PositionPlayer("Mike Truk", "CF", ["si", "ci"], true);
        this.arrOfPlayers[7]= new PositionPlayer("Mickel J-Rod", "RF", ["co"], false);
        this.arrOfPlayers[8]= new Pitcher("Boom Mannski", "RHP", [], false, ["fs","ss","ch","fl"]);
    }

	/**
	 * Add runs to the team's score
	 * @param {number} r The number of runs scored on the play
	 */
	score(r) {
    	this.runs += r;
    }
}
