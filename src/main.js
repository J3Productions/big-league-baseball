import {Game} from './Game.js';


let game = null;
var side;
/**
 * Initializes game object and the gui
 * @param location {string} The side the user is playing on - "home" or "away"
 */
export function startGame(location) {
    game = new Game(location);
    side = location;
    BackGroundOnload(location);
    document.getElementById('uPlayBall').play();
    document.getElementById('c0').play();
    loopCrowdChatter();
    loopCrowdOrgan();
    document.getElementById('c0').play();
    if (location === "home") {
        displayPitchMenu();
    }
    else {
        displayHitMenu();
    }
    drawScore();
}


/**
*   Button method. It will call when batter decide take action.
**/
export function take() {
    hitSelect("take");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function ssHit() {
    hitSelect("ss");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function ssPit() {
	pitchSelect("ss");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function shHit() {
	hitSelect("sh");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function shPit() {
	pitchSelect("sh");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function slHit() {
	hitSelect("sl");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function slPit() {
	pitchSelect("sl");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function siHit() {
	hitSelect("si");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function siPit() {
	pitchSelect("si");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function fsHit() {
	hitSelect("fs");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function fsPit() {
	pitchSelect("fs");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function fhHit() {
	hitSelect("fh");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function fhPit() {
	pitchSelect("fh");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function flHit() {
	hitSelect("fl");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function flPit() {
	pitchSelect("fl");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function fiHit() {
	hitSelect("fi");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function fiPit() {
	pitchSelect("fi");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function coHit() {
	hitSelect("co");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function coPit() {
	pitchSelect("co");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function chHit() {
	hitSelect("ch");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function chPit() {
	pitchSelect("ch");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function clHit() {
	hitSelect("cl");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function clPit() {
	pitchSelect("cl");
}

/**
 *   Button method. It will call when batter decide Slow Straight action.
 **/
export function ciHit() {
	hitSelect("ci");
}

/**
 *   Button method. It will call when pitcher decide Slow Straight action.
 **/
export function ciPit() {
	pitchSelect("ci");
}


function drawScore() {
	let innStr = "";
	let innScoreID = "";
	if (game.inningSide) {
		innStr = "&#9660 ";
		innScoreID = "h" + game.inning;
	}
	else {
		innStr = "&#9650 ";
		innScoreID = "a" + game.inning;

	}
	innStr = innStr + game.inning;

	let countStr = game.balls + "-" + game.strikes + "<br>" + game.outs + " Out";
	if (game.inning <= 9) {
		let innScore = Number(document.getElementById(innScoreID).innerHTML);
		innScore = innScore + game.lastPitch.runsScored;
		document.getElementById(innScoreID).innerHTML = innScore;
	}


    document.getElementById("score").innerHTML = game.visitTeam.runs + "-" + game.homeTeam.runs;
    document.getElementById("ar").innerHTML = String(game.visitTeam.runs);
	document.getElementById("hr").innerHTML = String(game.homeTeam.runs);
    document.getElementById("inning").innerHTML = innStr;
    document.getElementById("count").innerHTML = countStr;

    if (game.first) {
        document.getElementById("firstBase").style.fillOpacity = "255";
    }
    else {
	    document.getElementById("firstBase").style.fillOpacity = "0";
    }
	if (game.second) {
		document.getElementById("secondBase").style.fillOpacity = "255";
	}
	else {
		document.getElementById("secondBase").style.fillOpacity = "0";
	}
	if (game.third) {
		document.getElementById("thirdBase").style.fillOpacity = "255";
	}
	else {
		document.getElementById("thirdBase").style.fillOpacity = "0";
	}

	let curHitter = "At Bat:<br>";
	if (game.inningSide) {
	    curHitter = curHitter + game.homeTeam.lineup[game.homeAB].getPlayerName() + "&nbsp;- " + game.homeTeam.lineup[game.homeAB].getPosition() + "<br>";
	    curHitter = curHitter + "Strength(s):";
		if (game.homeTeam.lineup[game.homeAB].getBatStrengths() == []) {
			curHitter = curHitter + " None,";
		}
	    for (let strength of game.homeTeam.lineup[game.homeAB].getBatStrengths()) {
	    	switch (strength) {
			    case "ss":
				    curHitter = curHitter + " Slow Straight,";
				    break;
			    case "sh":
				    curHitter = curHitter + " Slow High,";
				    break;
			    case "sl":
				    curHitter = curHitter + " Slow Low,";
				    break;
			    case "si":
				    curHitter = curHitter + " Slow Inside,";
				    break;
			    case "fs":
				    curHitter = curHitter + " Fast Straight,";
				    break;
			    case "fh":
				    curHitter = curHitter + " Fast High,";
				    break;
			    case "fl":
				    curHitter = curHitter + " Fast Low,";
				    break;
			    case "fi":
				    curHitter = curHitter + " Fast Inside,";
				    break;
			    case "co":
				    curHitter = curHitter + " Curve Outside,";
				    break;
			    case "ch":
				    curHitter = curHitter + " Curve High,";
				    break;
			    case "cl":
				    curHitter = curHitter + " Curve Low,";
				    break;
			    case "ci":
				    curHitter = curHitter + " Curve Inside,";
				    break;
		    }
	    }
		curHitter = curHitter.slice(0, -1);
    }
	else {
		curHitter = curHitter + game.visitTeam.lineup[game.visitAB].getPlayerName() + "&nbsp;- " + game.visitTeam.lineup[game.visitAB].getPosition() + "<br>";
		curHitter = curHitter + "Strength(s):";
		if (game.visitTeam.lineup[game.visitAB].getBatStrengths() == []) {
			curHitter = curHitter + " None,";
		}
		for (let strength of game.visitTeam.lineup[game.visitAB].getBatStrengths()) {
			switch (strength) {
				case "ss":
					curHitter = curHitter + " Slow Straight,";
					break;
				case "sh":
					curHitter = curHitter + " Slow High,";
					break;
				case "sl":
					curHitter = curHitter + " Slow Low,";
					break;
				case "si":
					curHitter = curHitter + " Slow Inside,";
					break;
				case "fs":
					curHitter = curHitter + " Fast Straight,";
					break;
				case "fh":
					curHitter = curHitter + " Fast High,";
					break;
				case "fl":
					curHitter = curHitter + " Fast Low,";
					break;
				case "fi":
					curHitter = curHitter + " Fast Inside,";
					break;
				case "co":
					curHitter = curHitter + " Curve Outside,";
					break;
				case "ch":
					curHitter = curHitter + " Curve High,";
					break;
				case "cl":
					curHitter = curHitter + " Curve Low,";
					break;
				case "ci":
					curHitter = curHitter + " Curve Inside,";
					break;
			}
		}
		curHitter = curHitter.slice(0, -1);
	}
	document.getElementById("currentHitter").innerHTML = curHitter;

	let curPitcher = "Pitching:<br>";
	if (game.inningSide) {
		curPitcher = curPitcher + game.visitTeam.pitcher.getPlayerName() + "&nbsp;- " + game.visitTeam.pitcher.getPosition() + "<br>";
	}
	else {
		curPitcher = curPitcher + game.homeTeam.pitcher.getPlayerName() + "&nbsp;- " + game.homeTeam.pitcher.getPosition() + "<br>";
	}
	document.getElementById("currentPitcher").innerHTML = curPitcher;
}

function displayHitMenu() {
    document.getElementById("gameLog").style.display = "none";
    document.getElementById("pitcherMenu").style.display = "none";
    document.getElementById("hitterMenu").style.display = "grid";
}

function displayPitchMenu() {
	document.getElementById("gameLog").style.display = "none";
	document.getElementById("hitterMenu").style.display = "none";
	document.getElementById("pitcherMenu").style.display = "grid";
}

function displayGameLog() {
	document.getElementById("hitterMenu").style.display = "none";
	document.getElementById("pitcherMenu").style.display = "none";
	document.getElementById("gameLog").style.display = "grid";
}

function hitSelect(action) {
    displayGameLog();
    let message = "Here's the pitch...";
    document.getElementById("gameLog").innerHTML = message;
    setTimeout(() => {
        let roll = Math.floor((Math.random() * 12) + 1);
        switch (roll) {
            case 1:
                game.ssPitch(action);
                break;
            case 2:
                game.shPitch(action);
	            break;
	        case 3:
		        game.slPitch(action);
		        break;
	        case 4:
		        game.siPitch(action);
		        break;
	        case 5:
		        game.fsPitch(action);
		        break;
	        case 6:
		        game.fhPitch(action);
		        break;
	        case 7:
		        game.flPitch(action);
		        break;
	        case 8:
		        game.fiPitch(action);
		        break;
	        case 9:
		        game.coPitch(action);
		        break;
	        case 10:
		        game.chPitch(action);
		        break;
	        case 11:
		        game.clPitch(action);
		        break;
	        case 12:
		        game.ciPitch(action);
		        break;
        }
	    DetermineAnimation();
	    message = log2Print(message);

	    document.getElementById("gameLog").innerHTML = message;
	    setTimeout(() => {
		    message = log3Print(message);
		    drawScore();
		    document.getElementById("gameLog").innerHTML = message;
		    setTimeout(() => {
			    if (game.gameOver) {
				    gameOver();
			    }
		        else if (game.lastPitch.newInning) {
		            displayPitchMenu();
		            if(side == "home")
		            {
		                side = "away";
		            }
		            else
		            {
		                side = "home";
		            }
                }
                else {
		            displayHitMenu();
		            if(side == "home")
		            {
		                side = "away";
		            }
		            else
		            {
		                side = "home";
		            }
                }
            }, 2000);

        }, 2000);

    }, 3000);

}

function pitchSelect(action) {
	displayGameLog();
	let message = "Here's the pitch...";
	document.getElementById("gameLog").innerHTML = message;
	setTimeout(() => {
	    const actions = ["ss", "sh", "sl", "si", "take", "fs", "fh", "fl", "fi", "take", "co", "ch", "cl", "ci", "take"];
		let roll = Math.floor((Math.random() * 13));
		switch (action) {
			case "ss":
				game.ssPitch(actions[roll]);
				break;
			case "sh":
				game.shPitch(actions[roll]);
				break;
			case "sl":
				game.slPitch(actions[roll]);
				break;
			case "si":
				game.siPitch(actions[roll]);
				break;
			case "fs":
				game.fsPitch(actions[roll]);
				break;
			case "fh":
				game.fhPitch(actions[roll]);
				break;
			case "fl":
				game.flPitch(actions[roll]);
				break;
			case "fi":
				game.fiPitch(actions[roll]);
				break;
			case "co":
				game.coPitch(actions[roll]);
				break;
			case "ch":
				game.chPitch(actions[roll]);
				break;
			case "cl":
				game.clPitch(actions[roll]);
				break;
			case "ci":
				game.ciPitch(actions[roll]);
				break;
		}
        DetermineAnimation();
		message = log2Print(message);

		document.getElementById("gameLog").innerHTML = message;
		setTimeout(() => {
			message = log3Print(message);
			drawScore();
			document.getElementById("gameLog").innerHTML = message;
			setTimeout(() => {
				if (game.gameOver) {
					gameOver();
				}
				else if (game.lastPitch.newInning) {
				    displayHitMenu();
				    if(side == "home")
				    {
				        side = "away";
				    }
				    else
				    {
				        side = "home";
				    }
				}
				else {
				    displayPitchMenu();
				    if(side == "home")
				    {
				        side = "away";
				    }
				    else
				    {
				        side = "home";
				    }
				}
			}, 2000);

		}, 2000);

	}, 3000);
}

import {drawPitchHit, drawSwingOut, drawSwingStrike, drawTakeBall, batterSound, BackGroundOnload, SwitchSideOnload} from './Animation.js';

function DetermineAnimation()
{
        if( game.lastPitch.play == "homeRun" ||  game.lastPitch.play == "triple"
            ||  game.lastPitch.play == "doubleClear" ||  game.lastPitch.play == "double"
            ||  game.lastPitch.play == "single" ||  game.lastPitch.play == "singleRISP"
            ||  game.lastPitch.play == "singleAdvance" ||  game.lastPitch.play == "error"
            ||  game.lastPitch.play == "flyoutAdv" ||  game.lastPitch.play == "flyoutNoAdv1st"
            ||  game.lastPitch.play == "groundout" ||  game.lastPitch.play == "groundoutAdvIfForced"
            ||  game.lastPitch.play == "groundoutDoublePlay" ||  game.lastPitch.play == "errorSecond")//groundoutAdvIfForced question
        {
            drawPitchHit(game);
        }
        if( game.lastPitch.play == "foulout"
            ||  game.lastPitch.play == "flyout"
            ||  game.lastPitch.play == "triplePlay"
            ||  game.lastPitch.play == "fieldersChoice"
            ||  game.lastPitch.play == "lineoutDoublePlay")
        {
            drawSwingOut(game);
        }

        if( game.lastPitch.play == "foul"
            ||  game.lastPitch.play == "calledStrike"
            || game.lastPitch.play == "swingingStrike")
        {
            drawSwingStrike(game);
        }
        if( game.lastPitch.play == "walk")
        {
            drawTakeBall(game);//take animation with one base;
        }
        if( game.lastPitch.play == "ball"
            ||  game.lastPitch.play == "strikeoutLooking")
        {
            drawTakeBall(game);
        }
        batterSound();
}



function gameOver() {
	displayGameLog();
	let message = "That's your ballgame!<br>";
	document.getElementById("gameLog").innerHTML = message;
	setTimeout(() => {
		if (game.homeTeam.runs > game.visitTeam.runs) {
			message = message + "The Home team wins by a final score of " + game.homeTeam.runs + " to " + game.visitTeam.runs + "!<br>";
		}
		else {
			message = message + "The Away team wins by a final score of " + game.visitTeam.runs + " to " + game.homeTeam.runs + "!<br>";
		}
		message = message + "Thank you for playing Big League Baseball!<br>You can... put it on the boooooaaaaard YES!";
		document.getElementById("gameLog").innerHTML = message;
	}, 2000);
}
var Music = setInterval(crowdFx, 16000);
var crowdOrgan= true;
function loopCrowdOrgan()//Loops the organ music and crowd clapping. At this point called in PitcherWaitOnload()
{
    if(crowdOrgan)
    {
        setInterval(crowdFx, 16000, );//exact time length is 1686421ms
        crowdOrgan= false;
    }
}
function crowdFx(time)
{
//    var time =Math.floor(Math.random() * 5);

    if(time== 0)
    {
        document.getElementById('c1').play();
        clearInterval(crowdFx);//exact time length is 1686421ms
    }
    if(time== 1)
    {
        document.getElementById('o1').play();
    }
    if(time== 2)
    {
        document.getElementById('o2').play();
    }
    if(time== 3)
    {
        document.getElementById('c2').play();
    }
    if(time== 4)
    {
        document.getElementById('o4').play();
    }

    if(time== 7)
    {
        document.getElementById('7th').play();
    }
}


var fxCount= true;
function loopCrowdChatter()//Loops the crowd noise. At this point called in PitcherWaitOnload()
{
    if(fxCount)
    {
        setInterval(crowdChatter, .0000001);//exact time length is 1686421ms
        fxCount= false;
    }
    function crowdChatter()
    {
        document.getElementById('c0').play();
    }
}

function log2Print(message) {
	switch (game.lastPitch.play) {
		case "homeRun":
			message = message + "<br>Swung on, a high fly ball, get up, get outta here, gone! It's a home run!";
			break;
		case "triple":
			message = message + "<br>Swung on, lined into the gap in the outfield! That's good for a triple!";
			break;
		case "double":
		case "doubleClear":
			message = message + "<br>Swung on, hit hard into the outfield, and the batter will end up at second base!";
			break;
		case "single":
		case "singleRISP":
		case "singleAdvance":
			message = message + "<br>Swung on, and it's a base hit. The batter will end up at first.";
			break;
		case "error":
			message = message + "<br>Swung on, and misplayed by the defense, the batter will reach on an error!";
			break;
		case "errorSecond":
			message = message + "<br>Swung on, hit toward the infield, but they overthrow to first! The batter will reach second on an error!";
			break;
		case "foulout":
			message = message + "<br>Popped up into foul territory, the fielder gets under it and makes the out.";
			break;
		case "flyout":
			message = message + "<br>Swung on, and it's a pop fly that the defense takes care of easily.";
			break;
		case "flyoutAdv":
		case "flyoutNoAdv1st":
			message = message + "<br>Swung on, and it's a pop fly that the outfielder has to hurry to get to, but he makes the play for the out.";
			break;
		case "groundout":
		case "groundoutAdvIfForced":
		case "groundoutDoublePlay":
		case "fieldersChoice":
			message = message + "<br>Swung on, ground ball on the infield, and the infielders take care of it.";
			break;
		case "lineoutDoublePlay":
		case "triplePlay":
			message = message + "<br>Swung on, lined right at the infield defense, who makes a nice play to retire the batter.";
			break;
		case "strikeoutSwinging":
			message = message + "<br>Swing and a miss, got him to strikeout!";
			break;
		case "strikeoutLooking":
			message = message + "<br>Got him looking! He was taking, but the pitcher threw him a strike.";
			break;
		case "swingingStrike":
			message = message + "<br>Swing and a miss, that's a strike.";
			break;
		case "calledStrike":
			message = message + "<br>That one's taken for a strike.";
			break;
		case "walk":
			message = message + "<br>That's ball four, and the batter is on with a walk!";
			break;
		case "ball":
			message = message + "<br>That one's out of the zone, taken for a ball.";
			break;
		case "foul":
			message = message + "<br>Swung on, but fouled out of play.";
			break;
	}
	return message;
}

function log3Print(message) {
	if (game.lastPitch.newInning) {
		message = message + "<br>That's it for the inning.";
	}
	else if (game.lastPitch.newAB) {
		if (game.first && game.second && game.third) {
			message = message + "<br>The bases are now loaded with " + game.outs + " outs.";
		}
		else if (game.first && game.third) {
			message = message + "<br>Runners are now at the corners with " + game.outs + " outs.";
		}
		else if (game.first && game.second) {
			message = message + "<br>Runners are now at first and second with " + game.outs + " outs.";
		}
		else if (game.second && game.third) {
			message = message + "<br>Runners are now at second and third with " + game.outs + " outs.";
		}
		else if (game.first) {
			message = message + "<br>Man on first now with " + game.outs + " outs.";
		}
		else if (game.second) {
			message = message + "<br>Man on second now with " + game.outs + " outs.";
		}
		else if (game.third) {
			message = message + "<br>Man on third now with " + game.outs + " outs.";
		}
		else {
			message = message + "<br>The bases are now empty with " + game.outs + " outs.";
		}
	}
	else {
		message = message + "<br>" + game.balls + " balls and " + game.strikes + " strikes now.";
	}
	return message;
}
