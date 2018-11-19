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
        * @param {string} position Type of pitcher.
        * @param {string[]} arsenal The type of pitches he throws.
        */
    constructor(name, position, batStrengths, baseSpeed, pitches, pitchSide){
        /**
        * @extends {PlayerClass}
        */
        super(name, position);
		/**
		* Pitches thrown by this picture.
     	* @type {string[]}
     	*/
        this.arsenal = pitches;

        this.pitchSide = pitchSide;
    }
    /**
	* Gets the baseball players pitches he throws.
	* @return {string[]} arsenal
	*/
    //TODO
    getArsenal(){
        return this.arsenal;
    }
}
