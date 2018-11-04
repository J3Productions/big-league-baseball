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

var BatterWaitControl;
export function BatterWaitOnload()
{
    BatterWaitControl = setInterval(drawBatterWait, 125);
}


var BatterHitFrames = 10;
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

    if(BatterHitCurrFrame < BatterHitFrames)
    {
        BatterHitCurrFrame++;
    }
    else
    {
        clearInterval(BatterHitOnloadControl);
        clearInterval(BallOnload);
    }

    ctx.drawImage(img, BatterHitCurrFrame * width, 0, width, height, 0, 0, width, height);
}


var BatterHitOnloadControl;
export function BatterHitOnload()
{
    BatterHitOnloadControl = setInterval(drawBatterHit, 80);
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

var PitcherWaitControl;
export function PitcherWaitOnload()
{
    PitcherWaitControl = setInterval(drawPitcherWait, 188);
}


var PitcherPitchFrames = 6;
var PitcherPitchCurrFrames = 0;

function drawPitcherPitch()
{
    var PitcherPitchCanvas = document.getElementById("PitcherPitch");
    PitcherPitchCanvas.width = 128;
    PitcherPitchCanvas.height = 140;
    var ctx = PitcherPitchCanvas.getContext("2d");

    var img = document.getElementById("PitcherPitching");
    var width = 128;
    var height = 140;

    ctx.clearRect(0, 0, width, height);

    if(PitcherPitchCurrFrames == 2)
    {
        BatterHitOnload();
    }

    if(PitcherPitchCurrFrames == 3)
    {
        BallOnload();
    }

    if(PitcherPitchCurrFrames < PitcherPitchFrames)
    {
        PitcherPitchCurrFrames++;
    }
    else
    {
        clearInterval(PitcherPitchControl);
    }

    ctx.drawImage(img, PitcherPitchCurrFrames * width, 0, width, height, 0, 0, width, height);
    if(PitcherPitchCurrFrames < 4)
    {
        var BatterHitCanvas = document.getElementById("BatterHit");
        BatterHitCanvas.width = 192;
        BatterHitCanvas.height = 210;
        var ctx2 = BatterHitCanvas.getContext("2d");
        var img2 = document.getElementById("BatterHitting");
        ctx2.drawImage(img2, 1 * 192, 0, 192, 210, 0, 0, 192, 210);
    }
}

var PitcherPitchControl;
export function PitcherPitchOnload()
{
    PitcherPitchControl = setInterval(drawPitcherPitch, 300);
}


export function drawPitchHit()
{
    var PitcherWaitCanvas = document.getElementById("PitcherWait");
    var BatterWaitCanvas = document.getElementById("BatterWaitting");
    PitcherWaitCanvas.style.filter = "opacity(0%)";
    PitcherWaitCanvas.style.WebkitFilter = "opacity(0%)";
    BatterWaitCanvas.style.filter = "opacity(0%)";
    BatterWaitCanvas.style.WebkitFilter = "opacity(0%)";

    var PitcherPitchCanvas = document.getElementById("PitcherPitch");
    var BatterHitCanvas = document.getElementById("BatterHit");
    PitcherPitchCanvas.width = 128;
    PitcherPitchCanvas.height = 140;
    BatterHitCanvas.width = 192;
    BatterHitCanvas.height = 210;

    var ctx = PitcherPitchCanvas.getContext("2d");
    var ctx2 = BatterHitCanvas.getContext("2d");
    var img = document.getElementById("PitcherPitching");
    var img2 = document.getElementById("BatterHitting");
    ctx.drawImage(img, 0 * 128, 0, 128, 140, 0, 0, 128, 140);
    ctx2.drawImage(img2, 0 * 192, 0, 192, 210, 0, 0, 192, 210);

    PitcherPitchCanvas.style.filter = "opacity(100%)";
    PitcherPitchCanvas.style.WebkitFilter = "opacity(100%)";
    BatterHitCanvas.style.filter = "opacity(100%)";
    BatterHitCanvas.style.WebkitFilter = "opacity(100%)";

    clearInterval(PitcherWaitControl);
    clearInterval(BatterWaitControl);

    PitcherPitchOnload();
}

var BallFrames = 5;
var BallCurrFrames = 0;

function drawBall()
{
    var BallCanvas= document.getElementById("Ball");
    BallCanvas.width = 128;
    BallCanvas.height = 128;
    var temp =  80 + (90.5 * (BallCurrFrames + 1));
    BallCanvas.style.top = temp + "px";
    var ctx = BallCanvas.getContext("2d");

    var img = document.getElementById("BallShaping");
    var width = 128;
    var height = 128;

    ctx.clearRect(0, 0, width, height);

    BallCurrFrames++;

    ctx.drawImage(img, BallCurrFrames * width, 0, width, height, 0, 0, width, height);

    if(BallCurrFrames == BallFrames)
    {
        clearInterval(BallControl);
        ctx.clearRect(0, 0, width, height);
    }
}

var BallControl;
export function BallOnload()
{
    BallControl = setInterval(drawBall, 70);
}