'use strict';

/**
 * Basic player class - stores information about name, strengths, and position, but also batting (since this game was made before the DH).
 */
export class Player {
	/**
	* Constructor creates a player that stores there name, pitcher or position player, whether the player is on a team yet, hitting stats, pitching stats.
	* POSTCONDITION: inLineup, adjNum, flagged, and revealed, all now have set values.
	*/
	constructor(name, position, strengths) {
		/**
		* Player name.
     	* @type {string}
     	*/
		this.playerName = name;
		/**
		* Position player or pitcher.
     	* @type {string}
     	*/
		this.position = position;
        /**
		*Player strengths.
     	* @type {string}
     	*/
		this.strengths = strengths;
        /**
        * Is available to be selected or not.
        * @type {boolean}
        */
        this.inLineup = false;
		/**
		* Hitting stats of the player.
     	* @type {number}
     	*/
		this.hitStats = -1;
		/**
		* Revealed status of the player.
     	* @type {number}
     	*/
		this.pitchStats = -1;
	}

    getPlayerName(){
        return this.playerName;
    }
    getPosition(){
        return this.position;
    }
    getStrengths(){
        return this.strengths;
    }
    getInLineup(){
        return this.inLineup;
    }
}
