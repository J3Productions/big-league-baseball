'use strict';
import { Player } from './Player.js';

/**
* Constructor creates a player that stores there name, pitcher or position player, whether the player is on a team yet, hitting stats, pitching stats.
* POSTCONDITION: inLineup, adjNum, flagged, and revealed, all now have set values.
    * @extends {PitcherClass}This class is a child of the pitcher class.
    * @param {string} pitcherType Type of pitcher.
    * @param {array} arsenal The type of pitches the batter hits best.
    */
export class Pitcher extends Player {

    constructor(name, position, batStrengths, pitcher, pitches){
        /**
        * @extends {PitcherClass}
        */
        super(name,position, batStrengths);
        /**
		* Baseball player name.
     	* @type {string}
     	*/
        this.pitcherType = pitcher;
        /**
		* Baseball player name.
     	* @type {array}
     	*/
        this.arsenal = pitches;
    }
    /**
	* Gets the type of pitcher they are "starter or reliever".
	* @return {string} pitcherType
	*/
    getPitcherType(){
        return this.pitcherType;
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
