'use strict';
/**
 *Child of Player class
 */
import { Player } from './Player.js';
/**
 * Pitcher class - stores information about name,pitcher type, batting strength, baserunning speed,whether they have been chosen on a team and pitching arsenal
 */
export class Pitcher extends Player {
    /**
    * Constructor creates a player that stores there name,,pitcher type , hitting stats, baserunning speed and whether the player is on a team using functions inherited from the Player class. Also, type of pitcher they are, types of pitches they throw.
    * POSTCONDITION: name, position, hitting stats, baserunning speed and inLineup all now have set values,  pitcher type and the pitcher arsenal all now have set values.
        * @extends {PlayerClass}This class is a child of the player class.
        * @param {string} pitcherType Type of pitcher.
        * @param {array} arsenal The type of pitches the batter hits best.
        */
    constructor(name, position, battStrengths, pitches){
        /**
        * @extends {PlayerClass}
        */
        super(name, position, battStrengths);
        /**
		* Pitches thrown by this picture.
     	* @type {array}
     	*/
        this.arsenal = pitches;
    }
    /**
	* Gets the baseball players name.
	* @return {array} arsenal
	*/
    //TODO//What do we want this class to do?
    getAsenal(){
        return this.arsenal;
    }
}
