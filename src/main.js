import {Team} from './Team.js';
import {Game} from './Game.js';


/**
*   This method store the player entered name locally.
**/
export function startGame()
{
    if (typeof (Storage) !== "undefined")
    {
        let name = document.getElementById("userName").value;
        localStorage.setItem("player", name);
        console.log("player name store.")
    }

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

//Sound test2
    var c1= document.getElementById('organ');//Start crowd noise.
    c1.play();
}


/**
*   This method create two teams.
**/
export function createTeam()
{
    var blueTeam = new Team("Blue Team");
    var redTeam = new Team("Red Team");
    console.log("create two team");
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


var g = 20;
var j = 0;


function drawImg()
{
    var selectCanvas = document.getElementById("SelectMember");
    var ctx = selectCanvas.getContext("2d");

    var img2 = document.getElementById("test2");
    var width2 = 300;
    var height2 = 300;

    ctx.clearRect(0, 0, 700, 600);
    j++;
    if(j == g)
    {
        j == 0;
    }
    ctx.drawImage(img2, j * width2, 0, width2, height2, 0, 0, width2, height2);
}



var BatterFrames = 7;
var BatterCurrFrame = 0;

function drawBatterSelect()
{
    var BatterCanvas = document.getElementById("NormalPlayer");
    BatterCanvas.width = 346;
    BatterCanvas.height = 346;
    var ctx = BatterCanvas.getContext("2d");

    var normal = document.getElementById("normalBatter");
    var width = 346;
    var height = 346;//336

    ctx.clearRect(0, 0, width, height);
    BatterCurrFrame++;
    if(BatterCurrFrame == BatterFrames)
    {
        BatterCurrFrame = 0;
    }

    ctx.drawImage(normal, BatterCurrFrame * width, 0, width, height, 0, 0, width, height);
}



var CatcherFrames = 21;
var CatcherCurrFrame = 0;

function drawCatcherSelect()
{
    var CatcherCanvas = document.getElementById("Catcher");
    CatcherCanvas.width = 336;
    CatcherCanvas.height = 336;
    var ctx = CatcherCanvas.getContext("2d");

    var img = document.getElementById("CatcherImg");
    var width = 336;
    var height = 336;

    ctx.clearRect(0, 0, width, height);

    CatcherCurrFrame++;
    if(CatcherCurrFrame == CatcherFrames)
    {
        CatcherCurrFrame = 0;
    }
    if(CatcherCurrFrame == 4)
    {
        CatcherCurrFrame++;
    }
    if(CatcherCurrFrame == 5 || CatcherCurrFrame == 1 || CatcherCurrFrame == 19)
    {
        CatcherCurrFrame++;
    }
    if(CatcherCurrFrame == 6)
    {
        CatcherCurrFrame++;
    }

    ctx.drawImage(img, CatcherCurrFrame * width, 0, width, height, 0, 0, width, height);
}

export function BatterOnload()
{
    setInterval(drawBatterSelect, 125);
}

export function CatcherOnload()
{
    setInterval(drawCatcherSelect, 125);
}

export function imgOnload()
{
    setInterval(drawImg, 125);
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
    ctx.drawImage(img, 10, 10);

    var gamelog = document.getElementById("gameLog");
    gamelog.scrollTop = gamelog.scrollHeight;
    gamelog.style.height = (screenHeight * 0.725) + "px";

    var action = document.getElementById("batterAction");
    action.style.height = (screenHeight * 0.245) + "px";

    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Match start!</td></tr>" + "<tr><td>Decide your batter action.</td></tr>";

}


var BatterWaitFrames = 17;
var BatterWaitCurrFrame = 0;

function drawBatterWait()
{
    var BatterWaitCanvas = document.getElementById("BatterWaitting");
    BatterWaitCanvas.width = 192;
    BatterWaitCanvas.height = 192;
    var ctx = BatterWaitCanvas.getContext("2d");

    var img = document.getElementById("BatterWait");
    var width = 192;
    var height = 192;

    ctx.clearRect(0, 0, width, height);
    BatterWaitCurrFrame++;
    if(BatterWaitCurrFrame == BatterWaitFrames)
    {
        BatterWaitCurrFrame = 0;
    }

    ctx.drawImage(img, BatterWaitCurrFrame * width, 0, width, height, 0, 0, width, height);
}

export function BatterWaitOnload()
{
    setInterval(drawBatterWait, 125);
}


var BatterHitFrames = 11;
var BatterHitCurrFrame = 0;

function drawBatterHit()
{
    var BatterHitCanvas = document.getElementById("BatterHit");
    BatterHitCanvas.width = 192;
    BatterHitCanvas.height = 210;
    var ctx = BatterHitCanvas.getContext("2d");

    var img = document.getElementById("BatterHitting");
    var width = 192;
    var height = 210;

    ctx.clearRect(0, 0, width, height);
    BatterHitCurrFrame++;
    if(BatterHitCurrFrame == BatterHitFrames)
    {
        BatterHitCurrFrame = 0;
    }

    ctx.drawImage(img, BatterHitCurrFrame * width, 0, width, height, 0, 0, width, height);
}

export function BatterHitOnload()
{
    setInterval(drawBatterHit, 188);
}


var PitcherWaitFrames = 16;
var PitcherWaitCurrFrames = 0;

function drawPitcherWait()
{
    var PitcherWaitCanvas = document.getElementById("PitcherWait");
    PitcherWaitCanvas.width = 128;
    PitcherWaitCanvas.height = 140;
    var ctx = PitcherWaitCanvas.getContext("2d");

    var img = document.getElementById("PitcherWaiting");
    var width = 128;
    var height = 140;

    ctx.clearRect(0, 0, width, height);

    PitcherWaitCurrFrames++;
    if(PitcherWaitCurrFrames == PitcherWaitFrames)
    {
        PitcherWaitCurrFrames = 0;
    }

    ctx.drawImage(img, PitcherWaitCurrFrames * width, 0, width, height, 0, 0, width, height);
}

export function PitcherWaitOnload()
{
    setInterval(drawPitcherWait, 188);
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
export function take()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide take!</td></tr>";
    pitcherAction("take");
}

/**
*   Button method. It will call when batter decide Slow Straight action.
**/
export function SS()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Slow Straight!</td></tr>";
    pitcherAction("ss");
}

/**
*   Button method. It will call when batter decide Slow Inside action.
**/
export function SI()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Slow Inside!</td></tr>";
    pitcherAction("si");
}

/**
*   Button method. It will call when batter decide Slow High action.
**/
export function SH()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Slow High!</td></tr>";
    pitcherAction("sh");
}

/**
*   Button method. It will call when batter decide Slow Low action.
**/
export function SL()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Slow Low!</td></tr>";
    pitcherAction("sl");
}

/**
*   Button method. It will call when batter decide Fastball Straight action.
**/
export function FS()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Fastball Straight!</td></tr>";
    pitcherAction("fs");
}

/**
*   Button method. It will call when batter decide Fastball Inside action.
**/
export function FI()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Fastball Inside!</td></tr>";
    pitcherAction("fi");
}

/**
*   Button method. It will call when batter decide Fastball High action.
**/
export function FH()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Fastball High!</td></tr>";
    pitcherAction("fh");
}

/**
*   Button method. It will call when batter decide Fastball Low action.
**/
export function FL()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Fastball Low!</td></tr>";
    pitcherAction("fl");
}

/**
*   Button method. It will call when batter decide Curveball Outside action.
**/
export function CO()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Curveball Outside!</td></tr>";
    pitcherAction("co");
}

/**
*   Button method. It will call when batter decide Curveball Inside action.
**/
export function CI()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Curveball Inside!</td></tr>";
    pitcherAction("ci");
}

/**
*   Button method. It will call when batter decide Curveball High action.
**/
export function CH()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Curveball High!</td></tr>";
    pitcherAction("ch");
}

/**
*   Button method. It will call when batter decide Curveball Low action.
**/
export function CL()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Curveball Low!</td></tr>";
    pitcherAction("cl");
}


/**
*   These varibales keep track of the variables in the Game class.
**/
var action = new Game();
var balls = action.balls;
var strikes = action.strikes;
var outs = action.outs;
var first = action.first;
var second = action.second;
var third = action.third;
var score = action.homeTeam.runs;
var R1 = 0;
var R2 = 0;
var R3 = 0;
var R4 = 0;
var R5 = 0;
var R6 = 0;
var R7 = 0;
var R8 = 0;
var R9 = 0;


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
//const socket = io();

//let ballgame = new Game();

//ballgame.ssPitch("ss"); //Function = Pitch thrown, Parameter = Batter action
