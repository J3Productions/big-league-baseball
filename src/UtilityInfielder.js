'use strict';
/**
 *Child of Infielder class
 */
import { Infielder } from './Infielder.js';
/**
 * UtilityInfielder class - stores information about name, position, batting strength, baserunning speed, whether they have been chosen on a team.
 */
export class UtilityInfielder extends Infielder {
    /**
    * Constructor creates a player that stores there name, position, hitting stats, baserunning speed and whether the player is on a team using functions inherited from the Infielder class.
    * POSTCONDITION: name, position, hitting stats, baserunning speed all now have set values.
        * @extends {InfielderClass}This class is a child of the Infielder class.
        * @param {string} positionType The players position
        */
    constructor(name, position, batStrengths, baseSpeed){
        /**
        * @extends {InfielderClass}
        */
        super(name, position, batStrengths, baseSpeed);
    }
}
