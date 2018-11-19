export function drawPitchHit()//This the function for hit animation.
{

    var PitcherWaitCanvas = document.getElementById("PitcherWait");
    var BatterWaitCanvas = document.getElementById("BatterWaitting");
    PitcherWaitCanvas.style.filter = "opacity(0%)";
    PitcherWaitCanvas.style.WebkitFilter = "opacity(0%)";
    BatterWaitCanvas.style.filter = "opacity(0%)";
    BatterWaitCanvas.style.WebkitFilter = "opacity(0%)";//first, make two waiting animation canvas disappear.

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
    ctx2.drawImage(img2, 0 * 192, 0, 192, 210, 0, 0, 192, 210);//in order to make the canvas change smooth, draw the frist frame of animation before display the Hit animation canvas.

    PitcherPitchCanvas.style.filter = "opacity(100%)";
    PitcherPitchCanvas.style.WebkitFilter = "opacity(100%)";
    BatterHitCanvas.style.filter = "opacity(100%)";
    BatterHitCanvas.style.WebkitFilter = "opacity(100%)";//display the hit animation canvas.

    clearInterval(PitcherWaitControl);
    clearInterval(BatterWaitControl);//clear the waiting animation counting.

    PitcherPitchOnload();//start calling the pitcher pitch animation. go to line 85.


//    crowdFx(0);
//    document.getElementById('c1').play();//Start crowd noise.************************
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
    var height = 140;                                   //initial the canvas.

    ctx.clearRect(0, 0, width, height);

    if(PitcherPitchCurrFrames == 2)
    {
        BatterHitOnload();//when the pitcher animation frame go to 2, start drawing Batter Hit animation. go to line 122
    }

    if(PitcherPitchCurrFrames == 3)
    {
        BallOnload();                                   //when the pitcher animation frame go to 3, start drawing Ball flying animation. go to line 158
    }

    if(PitcherPitchCurrFrames < PitcherPitchFrames)
    {
        PitcherPitchCurrFrames++;                       //increment the frame number if it not reach the final frame.
    }
    else
    {
        clearInterval(PitcherPitchControl);             //reach the final frame, clear the counting timer.
    }

    ctx.drawImage(img, PitcherPitchCurrFrames * width, 0, width, height, 0, 0, width, height);//draw this frame.
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
    PitcherPitchControl = setInterval(drawPitcherPitch, 300);//every 300ms call the drawPitcherPitch function once. go to line 38
}


var BatterHitFrames = 16;
var BatterHitCurrFrame = 0;
var count = 0;

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


 ///////////////////////Call sound
  hitSound(1, true, true, 1, 500);//team-Home==1 Visitor==2, swing contact==true, contact==true, play base hitSafe==1, timeDelay in ms


    if(BatterHitCurrFrame < BatterHitFrames)
    {
        if(BatterHitCurrFrame == 11 && count <= 2)
        {
            count++;
        }
        else
        {
            BatterHitCurrFrame++; //if the curr frame didn't reach the final frame, increment.
        }
    }
    else
    {
        clearInterval(BatterHitOnloadControl);              //reach the final frame, clear the counting timer for the hit
    }

    ctx.drawImage(img, BatterHitCurrFrame * width, 0, width, height, 0, 0, width, height);//draw Batter hit animation frame.
}



///////////TODO//////////////////////////////////Finish animation and change variable names for this function
function drawBatterSwingStrike()
{
    var BatterHitCanvas = document.getElementById("BatterStrike");//////////////Look at variable name here
    BatterHitCanvas.width = 192;
    BatterHitCanvas.height = 210;
    var ctx = BatterHitCanvas.getContext("2d");

    var img = document.getElementById("BatterHitting");
    var width = 192;
    var height = 210;

    ctx.clearRect(0, 0, width, height);


 ///////////////////////Call sound
  hitSound(1, true, true, 1, 500);//team-Home==1 Visitor==2, swing contact==true, contact==true, play base hitSafe==1, timeDelay in ms


    if(BatterHitCurrFrame < BatterHitFrames)
    {
        if(BatterHitCurrFrame == 11 && count <= 2)
        {
            count++;
        }
        else
        {
            BatterHitCurrFrame++; //if the curr frame didn't reach the final frame, increment.
        }
    }
    else
    {
        clearInterval(BatterHitOnloadControl);              //reach the final frame, clear the counting timer for the hit
    }

    ctx.drawImage(img, BatterHitCurrFrame * width, 0, width, height, 0, 0, width, height);//draw Batter hit animation frame.
}


function drawBatterTake()///////////////////////////////////////////////
{
    var BatterHitCanvas = document.getElementById("BatterTake");/////////////////////////////////
    BatterHitCanvas.width = 192;
    BatterHitCanvas.height = 210;
    var ctx = BatterHitCanvas.getContext("2d");

    var img = document.getElementById("BatterHitting");
    var width = 192;
    var height = 210;

    ctx.clearRect(0, 0, width, height);


 ///////////////////////Call sound
  hitSound(1, true, true, 1, 500);//team-Home==1 Visitor==2, swing contact==true, contact==true, play base hitSafe==1, timeDelay in ms


    if(BatterHitCurrFrame < BatterHitFrames)
    {
        if(BatterHitCurrFrame == 11 && count <= 2)
        {
            count++;
        }
        else
        {
            BatterHitCurrFrame++; //if the curr frame didn't reach the final frame, increment.
        }
    }
    else
    {
        clearInterval(BatterHitOnloadControl);              //reach the final frame, clear the counting timer for the hit
    }

    ctx.drawImage(img, BatterHitCurrFrame * width, 0, width, height, 0, 0, width, height);//draw Batter hit animation frame.
}











var BatterHitOnloadControl;
export function BatterHitOnload()
{
    BatterHitOnloadControl = setInterval(drawBatterHit, 80);//every 80ms call the drawBatterhit function once.
}


var BallFrames = 5;
var BallCurrFrames = 0;

function drawBall()
{
    var BallCanvas= document.getElementById("Ball");
    BallCanvas.width = 128;
    BallCanvas.height = 128;
    var temp =  80 + (90.5 * (BallCurrFrames + 1));             //the position of the canvas changing with the frame increment.
    BallCanvas.style.top = temp + "px";
    var ctx = BallCanvas.getContext("2d");

    var img = document.getElementById("BallShaping");
    var width = 128;
    var height = 128;

    ctx.clearRect(0, 0, width, height);

    BallCurrFrames++;

    ctx.drawImage(img, BallCurrFrames * width, 0, width, height, 0, 0, width, height);//draw this flying ball frame

    if(BallCurrFrames == BallFrames)
    {
        clearInterval(BallControl);                             //when reach the final frame, clear the counting timer, and clean the canvas.
        ctx.clearRect(0, 0, width, height);
    }
}

var BallControl;
export function BallOnload()
{
    BallControl = setInterval(drawBall, 70);//every 70ms draw flying ball once
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

loopCrowdChatter();//Call  to loop crowd noise
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


function hitSound(team, swing, contact, play, timeDelay)//Sounds for pitching, batting and catching.
{
    let t= team;//h=home, v=visitor
    let s= swing;//Bool
    let c= contact;//Bool
    let p= play;//foul,strike,out
    let d= timeDelay;//num time delay for sound to begin.

    if(swing)
    {
        if(contact)
        {
            setTimeout(contact, d, t, p );
            function contact(t, p)
            {
                if(p===1)
                {
                    if(t===1)
                    {
                        if(p== 1)
                        {
                            document.getElementById('hB1').play();//Base hit
                        }
                        if(p== 2)
                        {
                            document.getElementById('hB2').play();//Double hit
                        }
                        if(p== 5)
                        {
                            document.getElementById('hBf').play();//Foul ball
                        }
                    }
                    else
                    {

                    }
                }
            }
        }
    }
    else
    {

    }

    function contact()
    {
        if(type== 1)
        {
            document.getElementById('hB1').play();//Base hit
        }
        if(type== 2)
        {
            document.getElementById('hB2').play();//Double hit
        }
        if(type== f)
        {
            document.getElementById('hBf').play();//Foul ball
        }
    }
    function take()
    {

    }
}
