'use strict';
/**
 *Child of Outfielder class
 */
import { Outfielder } from './Outfielder.js';
/**
 * UtilityOutfielder class - stores information about name, position, batting strength, baserunning speed, whether they have been chosen on a team.
 */
export class UtilityOutfielder extends Outfielder {
    /**
    * Constructor creates a player that stores there name, position, hitting stats, baserunning speed and whether the player is on a team using functions inherited from the Outfielder class.
    * POSTCONDITION: name, position, hitting stats, baserunning speed all now have set values.
        * @extends {OutfielderClass}This class is a child of the Outfielder class.
        * @param {string} positionType The players position
        */
    constructor(name, position, batStrengths, baseSpeed){
        /**
        * @extends {OutfielderClass}
        */
        super(name, position, batStrengths, baseSpeed);
    }
}
