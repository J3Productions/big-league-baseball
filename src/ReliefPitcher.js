'use strict';
/**
 *Child of Pitcher class
 */
import { Pitcher } from './Pitcher.js';
/**
 * ReliefPitcher class - stores information about name,ReliefPitcher type, batting strength, baserunning speed,whether they have been chosen on a team and pitching arsenal
 */
export class ReliefPitcher extends Pitcher {
    /**
    * Constructor creates a ReliefPitcher that stores there name,Pitcher type , hitting stats, baserunning speed and whether the ReliefPitcher is on a team using functions inherited from the Pitcher class. Also, type of Pitcher they are, types of pitches they throw.
    * POSTCONDITION: name, position, hitting stats, baserunning speed and inLineup all now have set values,  ReliefPitcher type and the ReliefPitcher arsenal all now have set values.
        * @extends {PitcherClass}This class is a child of the Pitcher class.
        * @param {string} position Type of Pitcher.
        * @param {string[]} arsenal The type of pitches he throws.
        */
    constructor(name, position, batStrengths, baseSpeed, pitches, pitchSide){
        /**
        * @extends {PitcherClass}
        */
        super(name, position, batStrengths, baseSpeed, pitches, pitchSide);
		/**
		* The number of innings the reliever may pitch.
     	* @type {num}
     	*/
        this.numInningsLeft = 3;
    }
    /**
	* De-increments the number of innings the reliever can pitch.
	* @return {num} Innings left to pitch.
	*/
    //TODO Run this after every inning he is in the lineup.
    numInningsLeft(){
        this.numInningsLeft= this.numInningsLeft -1;
    }
    /**
	* Returns the number of innings the reliever can pitch.
	* @return {num} Innings left to pitch.
	*/
    //TODO?
    getNumInningsLeft(){
        return this.numInningsLeft;
    }
}
