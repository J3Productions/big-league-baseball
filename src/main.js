import {Team} from './Team.js';
import {Game} from './Game.js';

export function startGame()
{
    if (typeof (Storage) !== "undefined")
    {
        let name = document.getElementById("userName").value;
        localStorage.setItem("player", name);
        createTeam();
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

function createTeam()
{
    var blueTeam = new Team("Blue Team");
    var redTeam = new Team("Red Team");
    console.log("create two team");
}

const socket = io();

//let ballgame = new Game();

//ballgame.ssPitch("ss"); //Function = Pitch thrown, Parameter = Batter action