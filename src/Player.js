'use strict';

/**
 * Basic player class - stores information about name, strengths, and position, but also batting (since this game was made before the DH).
 */
export class Player {
	/**
	* Constructor creates a player that stores there name, pitcher or position player, whether the player is on a team yet, hitting stats, pitching stats.
	* POSTCONDITION: inLineup, adjNum, flagged, and revealed, all now have set values.
	*/
	constructor(name, position) {
		/**
		* Player name.
     	* @type {string}
     	*/
		this.playerName = name;
		/**
		* Position player or pitch.
     	* @type {string}
     	*/
		this.position = position;
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

    getName(){
        return this.getName;
    }
}
