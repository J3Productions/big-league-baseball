import {Game} from './Game.js';
import {drawPitchHit, drawSwingOut, drawSwingStrike, drawTakeBall, BackGroundOnload, SwitchSideOnload} from './Animation.js';

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
    loopCrowdChatter();
    if (location === "home") {
        displayPitchMenu();
    }
    else {
        displayHitMenu();
    }
    drawScore();
}


/**
*   This method render the index.html with canvas. The size of canvas will auto change with user web browser size.
**/
export function initStartPage()
{
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    var a = document.getElementById("startPage");
    a.width = (screenWidth * 0.99);
    a.height = (screenHeight * 0.97);

    var ctx = a.getContext("2d");
    var img = document.getElementById("startPic");
    ctx.drawImage(img,0,0, screenWidth, screenHeight);

    var button = document.getElementById("startGame");
    button.style.left = String(screenWidth * 0.45) + "px";
    button.style.top = String(screenHeight * 0.60) + "px";

    var title = document.getElementById("title");
    var input = document.getElementById("userName");
    var describe = document.getElementById("doc");
    title.style.left = String(screenWidth * 0.32) + "px";
    title.style.top = String(screenHeight * 0.25) + "px";
    input.style.left = String(screenWidth * 0.42) + "px";
    input.style.top = String(screenHeight * 0.45) + "px";
    describe.style.left = String(screenWidth * 0.425) + "px";
    describe.style.top = String(screenHeight * 0.40) + "px";



//document.getElementById('c1').play();
//document.getElementById('c1').muted = false;
    //Sound test2
//      var c1= document.getElementById('c1');//Start crowd noise.
//      c1.play();
}


/**
*   This method render the batter view html page with canvas and two table represent the action opinions and game log. The size canvas will auto change with user web browser.
**/
export function initBatter()
{
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    var a = document.getElementById("batterView");
    a.width = (screenWidth * 0.74);
    a.height = (screenHeight * 0.73);

    var ctx = a.getContext("2d");
    var img = document.getElementById("viewPic");
    //ctx.drawImage(img, 10, 10);

    var gamelog = document.getElementById("gameLog");
    gamelog.scrollTop = gamelog.scrollHeight;
    gamelog.style.height = (screenHeight * 0.725) + "px";

    var action = document.getElementById("batterAction");
    action.style.height = (screenHeight * 0.245) + "px";

    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Match start!</td></tr>" + "<tr><td>Decide your batter action.</td></tr>";

    var PitcherPitchCanvas = document.getElementById("PitcherPitch");
    var BatterHitCanvas = document.getElementById("BatterHit");
    PitcherPitchCanvas.style.filter = "opacity(0%)";
    PitcherPitchCanvas.style.WebkitFilter = "opacity(0%)";
    BatterHitCanvas.style.filter = "opacity(0%)";
    BatterHitCanvas.style.WebkitFilter = "opacity(0%)";

    var BallCanvas = document.getElementById("Ball");
    BallCanvas.style.top = "80px";
    BallCanvas.style.left = "330px";


}

/**
*   This method render the team member select html page with canvas. The size canvas will auto change with user web browser.
**/
export function initSelectTeam()
{
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    var a = document.getElementById("SelectMember");
    a.width = (screenWidth * 0.99);
    a.height = (screenHeight * 0.97);

    var ctx = a.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Select your Team member!",10,50);
    //var img = document.getElementById("SelectPic");
    //ctx.drawImage(img,0,0, screenWidth, screenHeight);

    var button = document.getElementById("startMatch");
    button.style.left = String(screenWidth * 0.45) + "px";
    button.style.top = String(screenHeight * 0.8) + "px";
}


/**
*   change the canvas to see what happend when runner on the base. Not surport in prototype.
**/
var state = false; //After the javascript method complete, change the condition.

export function seeFiled()
{
    if(state == false)
    {
        var screenWidth = document.documentElement.clientWidth;
        var screenHeight = document.documentElement.clientHeight;
        var a = document.getElementById("filedView");
        var b = document.getElementById("batterView");
        b.style.display = "none";
        a.style.display = "block";
        a.width = (screenWidth * 0.74);
        a.height = (screenHeight * 0.73);

        var ctx = a.getContext("2d");
        var img = document.getElementById("filedPic");
        ctx.drawImage(img,10,10);

        state = true;
    }
    else if(state == true)
    {
        var a = document.getElementById("filedView");
        var b = document.getElementById("batterView");
        a.style.display = "none";
        b.style.display = "block";
        state = false;
    }

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



/**
*   The method represent the pitcher Action. It was radomly pick actions at this time. After the action is picked, it will auto print the name of action in the game log.
**/
function pitcherAction(batterAction)
{
    var randomNum = Math.floor((Math.random() * 12) + 1);

    if(randomNum == 1)
    {
        action.ssPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Slow Straight!</td></tr>";
        printScore();
    }
    if(randomNum == 2)
    {
        action.siPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Slow Inside!</td></tr>";
        printScore();
    }
    if(randomNum == 3)
    {
        action.shPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Slow High!</td></tr>";
        printScore();
    }
    if(randomNum == 4)
    {
        action.slPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Slow Low!</td></tr>";
        printScore();
    }
    if(randomNum == 5)
    {
        action.fsPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Fastball Straigh!</td></tr>";
        printScore();
    }
    if(randomNum == 6)
    {
        action.fiPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Fastball Inside!</td></tr>";
        printScore();
    }
    if(randomNum == 7)
    {
        action.fhPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Fastball High!</td></tr>";
        printScore();
    }
    if(randomNum == 8)
    {
        action.flPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Fastball Low!</td></tr>";
        printScore();
    }
    if(randomNum == 9)
    {
        action.coPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Curveball Outside!</td></tr>";
        printScore();
    }
    if(randomNum == 10)
    {
        action.ciPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Curveball Inside!</td></tr>";
        printScore();
    }
    if(randomNum == 11)
    {
        action.chPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Curveball High!</td></tr>";
        printScore();
    }
    if(randomNum == 12)
    {
        action.clPitch(batterAction);
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Pitcher decide Curveball Low!</td></tr>";
        printScore();
    }
}


/**
*   This method called by pitcherAction(). It will combinate all the information and print them in to the game log and score board. It will also make the scroll move to the bottom.
**/
function printScore()
{
    BallStrikeOut();
    homeScore();
    threeBase();

    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<br><tr><td>" + "Round:" + action.inning + " " + "Decide your batter Action!</td></tr>";

    var gamelog = document.getElementById("gameLog");
    gamelog.scrollTop = gamelog.scrollHeight;
}

/**
*   This method called in printScore method. It keep track of ball, strike, and out, and print the change in the score board.
**/
function BallStrikeOut()
{
    document.getElementById("ball").innerHTML = action.balls;
    document.getElementById("strike").innerHTML = action.strikes;
    document.getElementById("out").innerHTML = action.outs;
    if(action.balls == 0)
    {
        balls = action.balls;
    }
    if(action.strikes == 0)
    {
        strikes = action.strikes;
    }
    if(action.outs == 0)
    {
        outs = action.outs;
    }



    if(balls < action.balls)
    {
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Ball!</td></tr>";
        balls = action.balls;
    }

    if(strikes < action.strikes)
    {
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Strike!</td></tr>";
        strikes = action.strikes;
    }

    if(outs < action.outs)
    {
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Out!</td></tr>";
        outs = action.outs;
    }

}


/**
*   This method called by printScore(). It calculate the home team score, and then print the score and notice of get point in the game log.
**/
function homeScore()
{
    document.getElementById("homeT").innerHTML = "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + action.homeTeam.runs;

    if(action.inning == 1 && (score < action.homeTeam.runs))
    {
        R1++;
        document.getElementById("homeR1").innerHTML = "&nbsp" + "&nbsp" + R1;
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Home team get point!</td></tr>";
        score = action.homeTeam.runs;
    }
    if(action.inning == 2 && (score < action.homeTeam.runs))
    {
        R2++;
        document.getElementById("homeR2").innerHTML = "&nbsp" + "&nbsp" + R2;
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Home team get point!</td></tr>";
        score = action.homeTeam.runs;
    }
    if(action.inning == 3 && (score < action.homeTeam.runs))
    {
        R3++;
        document.getElementById("homeR3").innerHTML = "&nbsp" + "&nbsp" + R3;
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Home team get point!</td></tr>";
        score = action.homeTeam.runs;
    }
    if(action.inning == 4 && (score < action.homeTeam.runs))
    {
        R4++;
        document.getElementById("homeR4").innerHTML = "&nbsp" + "&nbsp" + R4;
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Home team get point!</td></tr>";
        score = action.homeTeam.runs;
    }
    if(action.inning == 5 && (score < action.homeTeam.runs))
    {
        R5++;
        document.getElementById("homeR5").innerHTML = "&nbsp" + "&nbsp" + R5;
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Home team get point!</td></tr>";
        score = action.homeTeam.runs;
    }
    if(action.inning == 6 && (score < action.homeTeam.runs))
    {
        R6++;
        document.getElementById("homeR6").innerHTML = "&nbsp" + "&nbsp" + R6;
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Home team get point!</td></tr>";
        score = action.homeTeam.runs;
    }
    if(action.inning == 7 && (score < action.homeTeam.runs))
    {
        R7++;
        document.getElementById("homeR7").innerHTML = "&nbsp" + "&nbsp" + R7;
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Home team get point!</td></tr>";
        score = action.homeTeam.runs;
    }
    if(action.inning == 8 && (score < action.homeTeam.runs))
    {
        R8++;
        document.getElementById("homeR8").innerHTML = "&nbsp" + "&nbsp" + R8;
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Home team get point!</td></tr>";
        score = action.homeTeam.runs;
    }
    if(action.inning == 9 && (score < action.homeTeam.runs))
    {
        R9++;
        document.getElementById("homeR9").innerHTML = "&nbsp" + "&nbsp" + R9;
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Home team get point!</td></tr>";
        score = action.homeTeam.runs;
    }
}

/**
*   This method called by printScore(). It print the change of each bases in the score board, and game log.
**/
function threeBase()
{
    if(action.first == true)
    {
        document.getElementById("firstBase").innerHTML = "X";
    }
    else
    {
        document.getElementById("firstBase").innerHTML = "&nbsp";
    }

    if(action.second == true)
    {
        document.getElementById("secondBase").innerHTML = "X";
    }
    else
    {
        document.getElementById("secondBase").innerHTML = "&nbsp";
    }

    if(action.third == true)
    {
        document.getElementById("thirdBase").innerHTML = "X";
    }
    else
    {
        document.getElementById("thirdBase").innerHTML = "&nbsp";
    }

    if(action.first == true && first == false)
    {
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>runner on the first base!</td></tr>";
    }
    if(action.second == true && second == false)
    {
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>runner on the second base!</td></tr>";
    }
    if(action.third == true && third == false)
    {
        document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>runner on the third base!</td></tr>";
    }

    first = action.first;
    second = action.second;
    third = action.third;
}

function drawScore() {
	let innStr = "";
	if (game.inningSide) {
		innStr = "&#9660 ";
	}
	else {
		innStr = "&#9650 ";
	}
	innStr = innStr + game.inning;

	let countStr = game.balls + "-" + game.strikes + "<br>" + game.outs + " Out";

    document.getElementById("score").innerHTML = game.visitTeam.runs + "-" + game.homeTeam.runs;
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
    }
	else {
		curHitter = curHitter + game.visitTeam.lineup[game.visitAB].getPlayerName() + "&nbsp;- " + game.visitTeam.lineup[game.visitAB].getPosition() + "<br>";
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
	    //DetermineAnimation();
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

	    document.getElementById("gameLog").innerHTML = message;
	    setTimeout(() => {
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
		    drawScore();
		    document.getElementById("gameLog").innerHTML = message;
		    setTimeout(() => {
		        if (game.lastPitch.newInning) {
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
            }, 3000);

        }, 2000);

    }, 2000);

}

function pitchSelect(action) {
	displayGameLog();
	let message = "Here's the pitch...";
	document.getElementById("gameLog").innerHTML = message;
	setTimeout(() => {
	    const actions = ["ss", "sh", "sl", "si", "fs", "fh", "fl", "fi", "co", "ch", "cl", "ci", "take"];
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
        //DetermineAnimation();
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
		document.getElementById("gameLog").innerHTML = message;
		setTimeout(() => {
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
			drawScore();
			document.getElementById("gameLog").innerHTML = message;
			setTimeout(() => {
				if (game.lastPitch.newInning) {
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
			}, 3000);

		}, 2000);

	}, 2000);
}



export function DetermineAnimation()
{
    if( game.lastPitch.swing == true)
    {
        if( game.lastPitch.play == "homeRun" ||  game.lastPitch.play == "triple"
            ||  game.lastPitch.play == "doubleClear" ||  game.lastPitch.play == "double"
            ||  game.lastPitch.play == "single" ||  game.lastPitch.play == "singleRISP"
            ||  game.lastPitch.play == "singleAdvance" ||  game.lastPitch.play == "error"
            ||  game.lastPitch.play == "flyoutAdv" ||  game.lastPitch.play == "flyoutNoAdv1st"
            ||  game.lastPitch.play == "groundout" ||  game.lastPitch.play == "groundoutAdvIfForced"
            ||  game.lastPitch.play == "groundoutDoublePlay" ||  game.lastPitch.play == "errorSecond")//groundoutAdvIfForced question
        {
            drawPitchHit(game, side);
        }
        if( game.lastPitch.play == "foulout"
            ||  game.lastPitch.play == "flyout"
            ||  game.lastPitch.play == "triplePlay"
            ||  game.lastPitch.play == "fieldersChoice"
            ||  game.lastPitch.play == "lineoutDoublePlay")
        {
            drawSwingOut(side);
        }
    }
    else
    {
        if( game.lastPitch.play == "foul"
            ||  game.lastPitch.play == "swingingStrike"
            ||  game.lastPitch.play == "strikeoutLooking"
            ||  game.lastPitch.play == "calledStrike")
        {
            drawSwingStrike(side);
        }
        if( game.lastPitch.play == "walk")
        {
            drawTakeBall(side);//take animation with one base;
        }
        if( game.lastPitch.play == "ball")
        {
            drawTakeBall(side);
        }
    }
    if(game.lastPitch.newInning == true)
    {
        SwitchSideOnload(side);
        crowdFx(time)
    }
}


var fxCount= true;
function loopCrowdChatter()//Loops the crowd noise without intro music. At this point called in PitcherWaitOnload()
{
    if(fxCount)
    {
        setInterval(crowdChatter, 1686415);//exact time length is 1686421ms
       fxCount= false;
    }
    function crowdChatter()
    {
        document.getElementById('c0').play();
    }
}
var organCount= true;
function organMusic()//Loops the organ music and crowd clapping. At this point called in PitcherWaitOnload()
{
    if(organCount)
    {
        setInterval(organMusic, 200000);//exact time length is 1686421ms
       organCount= false;
    }
    function organMusic()
    {
        document.getElementById('c0').play();
    }
}

function crowdFx(time)
{

    if(time== 0)
    {
        document.getElementById('c0').play();//Start crowd noise.
    }
    if(time== 1)
    {
        document.getElementById('c1').play();
    }
    if(time== 2)
    {
        document.getElementById('c2').play();
    }
    if(time== 3)
    {
        document.getElementById('c3').play();
    }
    if(time== 4)
    {
        document.getElementById('c4').play();
    }
    if(time== 5)
    {
        document.getElementById('c5').play();
    }
    if(time== 6)
    {
        document.getElementById('c6').play();
    }
    if(time== 6)
    {
        document.getElementById('7th').play();
    }
}
