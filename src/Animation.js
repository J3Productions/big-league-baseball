var RedTeamBackGroundCurrFrame = 0;
var RedTeamBackGroundTotalFrame = 2;

export function RedTeamBackGround()
{
    var RedTeamBackGroundCanvas = document.getElementById("batterView");
    var ctx = RedTeamBackGroundCanvas.getContext("2d");
    var img = document.getElementById("viewPic");
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    RedTeamBackGroundCanvas.width = screenWidth * 0.75;
    RedTeamBackGroundCanvas.height = screenHeight * 0.725;

    if(RedTeamBackGroundCurrFrame < RedTeamBackGroundTotalFrame)
    {
        RedTeamBackGroundCurrFrame++;
    }
    else
    {
        RedTeamBackGroundCurrFrame = 0;
    }

    ctx.drawImage(img, RedTeamBackGroundCurrFrame * 1600, 0, 1600, 900, 0, 0, RedTeamBackGroundCanvas.width, RedTeamBackGroundCanvas.height);
}

var RedTeamBackGroundControl;
export function RedTeamBackGroundOnload()
{
    RedTeamBackGroundControl = setInterval(RedTeamBackGround, 300);
}

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
    PitcherPitchCanvas.width = 96;
    PitcherPitchCanvas.height = 105;
    BatterHitCanvas.width = 160;
    BatterHitCanvas.height = 175;

    var ctx = PitcherPitchCanvas.getContext("2d");
    var ctx2 = BatterHitCanvas.getContext("2d");
    var img = document.getElementById("PitcherPitching");
    var img2 = document.getElementById("BatterHitting");
    ctx.drawImage(img, 0 * 128, 0, 128, 140, 0, 0, 96, 105);
    ctx2.drawImage(img2, 0 * 192, 0, 192, 210, 0, 0, 160, 175);//in order to make the canvas change smooth, draw the frist frame of animation before display the Hit animation canvas.

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
    PitcherPitchCanvas.width = 96;
    PitcherPitchCanvas.height = 105;
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
        clearInterval(PitcherPitchControl);
        PitcherPitchCurrFrames = 0;
    }

    ctx.drawImage(img, PitcherPitchCurrFrames * width, 0, width, height, 0, 0, PitcherPitchCanvas.width, PitcherPitchCanvas.height);//draw this frame.
    if(PitcherPitchCurrFrames < 4)
    {
        var BatterHitCanvas = document.getElementById("BatterHit");
        BatterHitCanvas.width = 192;
        BatterHitCanvas.height = 210;
        var ctx2 = BatterHitCanvas.getContext("2d");
        var img2 = document.getElementById("BatterHitting");
        ctx2.drawImage(img2, 0 * 192, 0, 192, 210, 0, 0, 160, 175);
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
    BatterHitCanvas.width = 160;
    BatterHitCanvas.height = 175;
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
        drawAboveView();
        BatterHitCurrFrame = 0;
    }

    ctx.drawImage(img, BatterHitCurrFrame * width, 0, width, height, 0, 0, BatterHitCanvas.width, BatterHitCanvas.height);//draw Batter hit animation frame.
}


function drawAboveView()
{
    var PitcherPitchCanvas = document.getElementById("PitcherPitch");
    var BatterHitCanvas = document.getElementById("BatterHit");
    var RedTeamBackGroundCanvas = document.getElementById("batterView");
    PitcherPitchCanvas.style.filter = "opacity(0%)";
    PitcherPitchCanvas.style.WebkitFilter = "opacity(0%)";
    BatterHitCanvas.style.filter = "opacity(0%)";
    BatterHitCanvas.style.WebkitFilter = "opacity(0%)";
    RedTeamBackGroundCanvas.style.filter = "opacity(0%)";
    RedTeamBackGroundCanvas.style.WebkitFilter = "opacity(0%)";
    var ctx1 = PitcherPitchCanvas.getContext("2d");
    ctx1.clearRect(0, 0, 128, 140);
    var ctx2 = BatterHitCanvas.getContext("2d");
    ctx2.clearRect(0, 0, 192, 210);


    var AboveViewCanvas = document.getElementById("AboveView");
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    AboveViewCanvas.width = screenWidth * 0.75;
    AboveViewCanvas.height = screenHeight * 0.725;
    AboveViewCanvas.style.filter = "opacity(100%)";
    AboveViewCanvas.style.WebkitFilter = "opacity(100%)";

    var ctx = AboveViewCanvas.getContext("2d");
    var img = document.getElementById("AboveViewField");

    ctx.drawImage(img, 1600, 0, 1600, 900, 0, 0, AboveViewCanvas.width, AboveViewCanvas.height);

    BaseChangeOnload();

}

var base1 = true;
var base2 = true;
var base3 = true;
var base4 = true;
var BaseChangeCurrFrame = 0;
var BaseChangeTotalFrame = 5;
function drawBaseChange()
{
    var RedTeamBackGroundCanvas = document.getElementById("batterView");

    var FirstBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx = FirstBaseViewCanvas.getContext("2d");
    var img = document.getElementById("FirstBase");
    FirstBaseViewCanvas.width = RedTeamBackGroundCanvas.width;
    FirstBaseViewCanvas.height = RedTeamBackGroundCanvas.height;
    FirstBaseViewCanvas.style.filter = "opacity(100%)";
    FirstBaseViewCanvas.style.WebkitFilter = "opacity(100%)";

    var SecondBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx2 = SecondBaseViewCanvas.getContext("2d");
    var img2 = document.getElementById("SecondBase");
    SecondBaseViewCanvas.width = RedTeamBackGroundCanvas.width;
    SecondBaseViewCanvas.height = RedTeamBackGroundCanvas.height;
    SecondBaseViewCanvas.style.filter = "opacity(100%)";
    SecondBaseViewCanvas.style.WebkitFilter = "opacity(100%)";

    var ThirdBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx3 = ThirdBaseViewCanvas.getContext("2d");
    var img3 = document.getElementById("ThirdBase");
    ThirdBaseViewCanvas.width = RedTeamBackGroundCanvas.width;
    ThirdBaseViewCanvas.height = RedTeamBackGroundCanvas.height;
    ThirdBaseViewCanvas.style.filter = "opacity(100%)";
    ThirdBaseViewCanvas.style.WebkitFilter = "opacity(100%)";

    var HomeBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx4 = HomeBaseViewCanvas.getContext("2d");
    var img4 = document.getElementById("HomeBase");
    HomeBaseViewCanvas.width = RedTeamBackGroundCanvas.width;
    HomeBaseViewCanvas.height = RedTeamBackGroundCanvas.height;
    HomeBaseViewCanvas.style.filter = "opacity(100%)";
    HomeBaseViewCanvas.style.WebkitFilter = "opacity(100%)";

    if(base1 == true)
    {
        ctx.drawImage(img, BaseChangeCurrFrame * 1600, 0, 1600, 900, 0, 0, FirstBaseViewCanvas.width, FirstBaseViewCanvas.height);
    }
    if(base2 == true)
    {
        ctx2.drawImage(img2, BaseChangeCurrFrame * 1600, 0, 1600, 900, 0, 0, SecondBaseViewCanvas.width, SecondBaseViewCanvas.height);
    }
    if(base3 == true)
    {
        ctx3.drawImage(img3, BaseChangeCurrFrame * 1600, 0, 1600, 900, 0, 0, ThirdBaseViewCanvas.width, ThirdBaseViewCanvas.height);
    }
    if(base4 == true)
    {
        ctx4.drawImage(img4, BaseChangeCurrFrame * 1600, 0, 1600, 900, 0, 0, HomeBaseViewCanvas.width, HomeBaseViewCanvas.height);
    }

    if(BaseChangeCurrFrame < BaseChangeTotalFrame)
    {
        BaseChangeCurrFrame++;
    }
    else
    {
        BaseChangeCurrFrame = 0;
        clearInterval(BaseChangeControl);
        fieldBack();
    }
}

var BaseChangeControl;
export function BaseChangeOnload()
{
    BaseChangeControl = setInterval(drawBaseChange, 300);
}


function fieldBack()
{
    var RedTeamBackGroundCanvas = document.getElementById("batterView");

    var AboveViewCanvas = document.getElementById("AboveView");
    var ctx = AboveViewCanvas.getContext("2d");
    AboveViewCanvas.style.filter = "opacity(0%)";
    AboveViewCanvas.style.WebkitFilter = "opacity(0%)";

    var FirstBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx1 = FirstBaseViewCanvas.getContext("2d");
    FirstBaseViewCanvas.style.filter = "opacity(0%)";
    FirstBaseViewCanvas.style.WebkitFilter = "opacity(0%)";
    ctx1.clearRect(0, 0, RedTeamBackGroundCanvas.width, RedTeamBackGroundCanvas.height);

    var SecondBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx2 = SecondBaseViewCanvas.getContext("2d");
    SecondBaseViewCanvas.style.filter = "opacity(0%)";
    SecondBaseViewCanvas.style.WebkitFilter = "opacity(0%)";
    ctx2.clearRect(0, 0, RedTeamBackGroundCanvas.width, RedTeamBackGroundCanvas.height);

    var ThirdBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx3 = ThirdBaseViewCanvas.getContext("2d");
    ThirdBaseViewCanvas.style.filter = "opacity(0%)";
    ThirdBaseViewCanvas.style.WebkitFilter = "opacity(0%)";
    ctx3.clearRect(0, 0, RedTeamBackGroundCanvas.width, RedTeamBackGroundCanvas.height);

    var HomeBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx4 = HomeBaseViewCanvas.getContext("2d");
    HomeBaseViewCanvas.style.filter = "opacity(0%)";
    HomeBaseViewCanvas.style.WebkitFilter = "opacity(0%)";
    ctx4.clearRect(0, 0, RedTeamBackGroundCanvas.width, RedTeamBackGroundCanvas.height);

    var PitcherWaitCanvas = document.getElementById("PitcherWait");
    var BatterWaitCanvas = document.getElementById("BatterWaitting");
    PitcherWaitCanvas.style.filter = "opacity(100%)";
    PitcherWaitCanvas.style.WebkitFilter = "opacity(100%)";
    BatterWaitCanvas.style.filter = "opacity(100%)";
    BatterWaitCanvas.style.WebkitFilter = "opacity(100%)";
    var ctx5 = BatterWaitCanvas.getContext("2d");
    var ctx6 = PitcherWaitCanvas.getContext("2d");
    ctx5.clearRect(0, 0, 192, 192);
    ctx6.clearRect(0, 0, 128, 140);

    PitcherWaitOnload();
    BatterWaitOnload();

    RedTeamBackGroundCanvas.style.filter = "opacity(100%)";
    RedTeamBackGroundCanvas.style.WebkitFilter = "opacity(100%)";


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
var initalTop = 0;

function drawBall()
{
    var BallCanvas= document.getElementById("Ball");
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    BallCanvas.width = 128;
    BallCanvas.height = 128;
    BallCanvas.style.top = (screenHeight * 0.20) + "px";
    BallCanvas.style.left = (screenWidth * 0.33) + "px";
    initalTop = (screenHeight * 0.20)
    var temp =  initalTop * 0.73 * (BallCurrFrames + 1);             //the position of the canvas changing with the frame increment.
    BallCanvas.style.top = temp + "px";
    var ctx = BallCanvas.getContext("2d");

    var img = document.getElementById("BallShaping");
    var width = 128;
    var height = 128;

    ctx.clearRect(0, 0, width, height);

    BallCurrFrames++;

    ctx.drawImage(img, BallCurrFrames * width, 0, width, height, 0, 0, BallCanvas.width, BallCanvas.height);//draw this flying ball frame

    if(BallCurrFrames == BallFrames)
    {
        clearInterval(BallControl);                             //when reach the final frame, clear the counting timer, and clean the canvas.
        ctx.clearRect(0, 0, width, height);
        BallCurrFrames = 0;
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
    BatterWaitCanvas.width = 160;
    BatterWaitCanvas.height = 160;
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

    ctx.drawImage(img, BatterWaitCurrFrame * width, 0, width, height, 0, 0, BatterWaitCanvas.width, BatterWaitCanvas.height);
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
    PitcherWaitCanvas.width = 96;
    PitcherWaitCanvas.height = 105;
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

    ctx.drawImage(img, PitcherWaitCurrFrames * width, 0, width, height, 0, 0, PitcherWaitCanvas.width, PitcherWaitCanvas.height);
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
