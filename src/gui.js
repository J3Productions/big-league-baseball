'use strict';

import { Team } from "./Team.js";

function pitcherText(teamArray) {
	let textArray = [];
	for (let i = 14; i <= 17; i++) {
		textArray[i-14] = teamArray[i].playerName + ", " + teamArray[i].pitchSide.toUpperCase() + "<br>Pitches:";
		for (let pitch of teamArray[i].getArsenal()) {
			switch (pitch) {
				case "ss":
					textArray[i-14] = textArray[i-14] + " Slow Straight,";
					break;
				case "sh":
					textArray[i-14] = textArray[i-14] + " Slow High,";
					break;
				case "sl":
					textArray[i-14] = textArray[i-14] + " Slow Low,";
					break;
				case "si":
					textArray[i-14] = textArray[i-14] + " Slow Inside,";
					break;
				case "fs":
					textArray[i-14] = textArray[i-14] + " Fast Straight,";
					break;
				case "fh":
					textArray[i-14] = textArray[i-14] + " Fast High,";
					break;
				case "fl":
					textArray[i-14] = textArray[i-14] + " Fast Low,";
					break;
				case "fi":
					textArray[i-14] = textArray[i-14] + " Fast Inside,";
					break;
				case "co":
					textArray[i-14] = textArray[i-14] + " Curve Outside,";
					break;
				case "ch":
					textArray[i-14] = textArray[i-14] + " Curve High,";
					break;
				case "cl":
					textArray[i-14] = textArray[i-14] + " Curve Low,";
					break;
				case "ci":
					textArray[i-14] = textArray[i-14] + " Curve Inside,";
					break;
			}
		}
		textArray[i-14] = textArray[i-14].slice(0, -1);
	}
	return textArray;
}

export function populatePitcherList(location) {
	let sampleTeam = new Team(location);
	let pitcherArray = pitcherText(sampleTeam.getTeam());
	document.getElementById("pitcher1").innerHTML = pitcherArray[0];
	document.getElementById("pitcher2").innerHTML = pitcherArray[1];
	document.getElementById("pitcher3").innerHTML = pitcherArray[2];
	document.getElementById("pitcher4").innerHTML = pitcherArray[3];
}