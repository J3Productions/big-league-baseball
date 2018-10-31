'use strict';
/**
 *Child of PositionPlayer class
 */
import { PositionPlayer } from './PositionPlayer.js';
/**
 * PinchHitter class - stores information about name, position, batting strength, baserunning speed, whether they have been chosen on a team.
 */
export class PinchHitter extends PositionPlayer {
    /**
    * * Constructor creates a player that stores there name, position, hitting stats, baserunning speed and whether the player is on a team using functions inherited from the PositionPlayer class.
    * POSTCONDITION: name, position, hitting stats, baserunning speed all now have set values.
        * @extends {PositionPlayerClass}This class is a child of the PositionPlayer class.
        * @param {string} positionType The players position
        */
    constructor(name, position, batStrengths, baseSpeed, batSide){
        /**
        * @extends {PositionPlayerClass}
        */
        super(name, position, batStrengths, baseSpeed);
        /**
		*Hitters batting side of plate.
     	* @type {string}
     	*/
        this.batSide= batSide;
    }
    /**
	* Returns the baseball players batting side of plate.
	* @return{string}  batSide
	*/
    getBatSide(){
        return this.batSide;
    }
}
