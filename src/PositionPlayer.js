'use strict';
/**
 *Child of Player class
 */
import { Player } from './Player.js';
/**
 * PositionPlayer class - stores information about name, position, batting strength, baserunning speed, whether they have been chosen on a team.
 */
export class PositionPlayer extends Player {
    /**
    * * Constructor creates a player that stores there name, position, hitting stats, baserunning speed and whether the player is on a team using functions inherited from the Player class.
    * POSTCONDITION: name, position, hitting stats, baserunning speed all now have set values.
        * @extends {PlayerClass}This class is a child of the player class.
        * @param {string} positionType The players position
        */
    constructor(name, position, battStrengths, baseSpeed){
        /**
        * @extends {PlayerClass}
        */
        super(name,position, battStrengths, baseSpeed);
    }
}
