'use strict';

/**
 * Basic player class - stores information about name, strengths, and position, but also batting (since this game was made before the DH).
 */
export class Player {
	/**
	* Constructor creates a player that stores there name, pitcher or position player, whether the player is on a team yet, hitting stats, pitching stats.
	* POSTCONDITION: inLineup, adjNum, flagged, and revealed, all now have set values.
		* @param {string} name Name of baseball player.
		* @param {string} position Position the baseball player holds in the game.
		* @param {array} batStrengths The type of pitches the batter hits best.
		*/
	constructor(name, position, batStrengths) {
		/**
		* Baseball player name.
     	* @type {string}
     	*/
		this.playerName = String(name);
		/**
		* Position player or pitcher.
     	* @type {string}
     	*/
		this.position = String(position);
        /**
		*Hitters batting strengths.
     	* @type {array}
     	*/
		this.batStrengths = Array(batStrengths);
        /**
        * Is available to be selected or not.
        * @type {boolean}
        */
        this.inLineup = false;
	}
	/**
	* Gets the baseball players name.
	* @return {string} name
	*/
    getPlayerName(){
        return this.playerName;
    }
	/**
	* Gets the baseball players position in the game.
	* @return {string} position
	*/
    getPosition(){
        return this.position;
    }
	/**
	* Gets if pitch thrown is batters strength.
	* @return {array} batStrengths
	*/

	//@TODO//Gets if pitch thrown is batters strength, hit action, or just a boolean?*************
    getBatStrengths(pitch){
		for(let i= 0; i<this.batStrengths.length; i++){
			if(pitch == this.batStrengths[i]){
				return true;
			}
			else{
				return false;
			}
		}
		return this.batStrengths[i];
    }
	/**
	* Gets whether the player has already been chosen by a team or not.
	* @return {boolean} chosen?
	*/
    getInLineup(){
        return this.inLineup;
    }
}
