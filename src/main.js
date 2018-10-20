import {Team} from './Team.js';
import {Game} from './Game.js';

export function startGame()
{
    if (typeof (Storage) !== "undefined")
    {
        let name = document.getElementById("userName").value;
        localStorage.setItem("player", name);
        console.log("player name store.")
    }

}

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
}

export function createTeam()
{
    var blueTeam = new Team("Blue Team");
    var redTeam = new Team("Red Team");
    console.log("create two team");
}

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
    var img = document.getElementById("SelectPic");
    ctx.drawImage(img,0,0, screenWidth, screenHeight);

    var button = document.getElementById("startMatch");
    button.style.left = String(screenWidth * 0.45) + "px";
    button.style.top = String(screenHeight * 0.8) + "px";
}


var state = false; //After the javascript method complete, change the condition.

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

export function take()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide take!</td></tr>";
    pitcherAction("take");
}

export function SS()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Slow Straight!</td></tr>";
    pitcherAction("ss");
}

export function SI()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Slow Inside!</td></tr>";
    pitcherAction("si");
}

export function SH()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Slow High!</td></tr>";
    pitcherAction("sh");
}

export function SL()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Slow Low!</td></tr>";
    pitcherAction("sl");
}

export function FS()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Fastball Straight!</td></tr>";
    pitcherAction("fs");
}

export function FI()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Fastball Inside!</td></tr>";
    pitcherAction("fi");
}

export function FH()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Fastball High!</td></tr>";
    pitcherAction("fh");
}

export function FL()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Fastball Low!</td></tr>";
    pitcherAction("fl");
}

export function CO()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Curveball Outside!</td></tr>";
    pitcherAction("co");
}

export function CI()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Curveball Inside!</td></tr>";
    pitcherAction("ci");
}

export function CH()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Curveball High!</td></tr>";
    pitcherAction("ch");
}

export function CL()
{
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<tr><td>Batter decide Curveball Low!</td></tr>";
    pitcherAction("cl");
}


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

function printScore()
{
    BallStrikeOut();
    homeScore();
    threeBase();
   
    document.getElementById("gameLogTable").innerHTML = document.getElementById("gameLogTable").innerHTML + "<br><tr><td>" + "Round:" + action.inning + " " + "Decide your batter Action!</td></tr>";
    
    var gamelog = document.getElementById("gameLog");
    gamelog.scrollTop = gamelog.scrollHeight;
}
//const socket = io();

//let ballgame = new Game();

//ballgame.ssPitch("ss"); //Function = Pitch thrown, Parameter = Batter action
