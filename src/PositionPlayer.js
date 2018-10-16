'use strict';
/**
 *Child of Player class
 */
import { Player } from './Player.js';
/**
 * PositionPlayer class - stores information about name, position, batting strength, baserunning speed, whether they have been chosen on a team and position player type.
 */
export class PositionPlayer extends Player {
    /**
    * * Constructor creates a player that stores there name, pitcher or position player, hitting stats, baserunning speed and whether the player is on a team using functions inherited from the Player class. Also,type of position player.
    * POSTCONDITION: name, position, hitting stats, baserunning speed inLineup and position player type all now have set values.
        * @extends {PlayerClass}This class is a child of the player class.
        * @param {string} positionType The players position
        */
    constructor(name, position, batStrengths, baseSpeed, positionPlayer){
        /**
        * @extends {PlayerClass}
        */
        super(name,position, batStrengths);
        /**
        * .Position player position."catcher, "leftField..."
        * @type {string}
        */
        this.positionType = positionPlayer;
    }
}
