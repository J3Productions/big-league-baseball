'use strict';
/**
 *Child of PositionPlayer class
 */
import { PositionPlayer } from './PositionPlayer.js';
/**
 * Infielder class - stores information about name, position, batting strength, baserunning speed, whether they have been chosen on a team.
 */
export class Infielder extends PositionPlayer {
    /**
    * * Constructor creates a player that stores there name, position, hitting stats, baserunning speed and whether the player is on a team using functions inherited from the PositionPlayer class.
    * POSTCONDITION: name, position, hitting stats, baserunning speed all now have set values.
        * @extends {PositionPlayerClass}This class is a child of the PositionPlayer class.
        * @param {string} positionType The players position
        */
    constructor(name, position, batStrengths, baseSpeed){
        /**
        * @extends {PositionPlayerClass}
        */
        super(name, position, batStrengths, baseSpeed);
    }
