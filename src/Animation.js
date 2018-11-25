var Side = "Home";
var count2 = 0;
export function SwitchSide()
{
    var SwSideViewCanvas = document.getElementById("SwSideView");
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    SwSideViewCanvas.width = screenWidth * 0.75;
    SwSideViewCanvas.height = screenHeight * 0.725;
    var ctx = SwSideViewCanvas.getContext("2d");
    var img = document.getElementById("SwitchSide");
    ctx.drawImage(img, 1600, 0, 1600, 900, 0, 0, SwSideViewCanvas.width, SwSideViewCanvas.height);
    SwSideViewCanvas.style.filter = "opacity(100%)";
    SwSideViewCanvas.style.WebkitFilter = "opacity(100%)";

    var PitcherWaitCanvas = document.getElementById("PitcherWait");
    var BatterWaitCanvas = document.getElementById("BatterWaitting");
    var ctx5 = BatterWaitCanvas.getContext("2d");
    var ctx6 = PitcherWaitCanvas.getContext("2d");
    ctx5.clearRect(0, 0, 192, 192);
    ctx6.clearRect(0, 0, 128, 140);

    var PitcherPitchCanvas = document.getElementById("PitcherPitch");
    var BatterHitCanvas = document.getElementById("BatterHit");
    var ctx1 = PitcherPitchCanvas.getContext("2d");
    ctx1.clearRect(0, 0, 128, 140);
    var ctx2 = BatterHitCanvas.getContext("2d");
    ctx2.clearRect(0, 0, 192, 210);

    PitcherWaitCanvas.style.filter = "opacity(0%)";
    PitcherWaitCanvas.style.WebkitFilter = "opacity(0%)";
    BatterWaitCanvas.style.filter = "opacity(0%)";
    BatterWaitCanvas.style.WebkitFilter = "opacity(0%)";
    var BackGroundCanvas = document.getElementById("batterView");
    BackGroundCanvas.style.filter = "opacity(0%)";
    BackGroundCanvas.style.WebkitFilter = "opacity(0%)";

    clearInterval(PitcherWaitControl);
    clearInterval(BatterWaitControl);

    if(count2 < 8)
    {
        count2++;
    }
    else
    {
        if(Side == "Home")
        {
            Side = "Away";
        }
        else
        {
            Side = "Home";
        }

        SwSideViewCanvas.style.filter = "opacity(0%)";
        SwSideViewCanvas.style.WebkitFilter = "opacity(0%)";
        BackGroundCanvas.style.filter = "opacity(100%)";
        BackGroundCanvas.style.WebkitFilter = "opacity(100%)";
        PitcherWaitCanvas.style.filter = "opacity(100%)";
        PitcherWaitCanvas.style.WebkitFilter = "opacity(100%)";
        BatterWaitCanvas.style.filter = "opacity(100%)";
        BatterWaitCanvas.style.WebkitFilter = "opacity(100%)";
        PitcherWaitOnload();
        BatterWaitOnload();

        count2 = 0;
        clearInterval(SwitchSideControl);
    }
}

var SwitchSideControl;
export function SwitchSideOnload()
{
    SwitchSideControl = setInterval(SwitchSide, 300);
}

var BackGroundCurrFrame = 0;
var BackGroundTotalFrame = 2;

export function BackGround()
{
    var BackGroundCanvas = document.getElementById("batterView");
    var ctx = BackGroundCanvas.getContext("2d");
    if(Side == "Home")
    {
        var img = document.getElementById("viewPic");
    }
    else
    {
        var img = document.getElementById("viewPic2");
    }
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    BackGroundCanvas.width = screenWidth * 0.75;
    BackGroundCanvas.height = screenHeight * 0.725;

    if(BackGroundCurrFrame < BackGroundTotalFrame)
    {
        BackGroundCurrFrame++;
    }
    else
    {
        BackGroundCurrFrame = 0;
    }

    ctx.drawImage(img, BackGroundCurrFrame * 1600, 0, 1600, 900, 0, 0, BackGroundCanvas.width, BackGroundCanvas.height);
}

var BackGroundControl;
export function BackGroundOnload()
{
    BackGroundControl = setInterval(BackGround, 300);
}


var BatterStatus = "";
var gameAnimation;
export function drawPitchHit(game)//This the function for hit animation.
{
    gameAnimation = game;
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
    if(Side == "Home")
    {
        var img = document.getElementById("PitcherPitching");
        var img2 = document.getElementById("BatterHitting");
    }
    else
    {
        var img = document.getElementById("BluePitcherPitching");
        var img2 = document.getElementById("RedBatterHitting");
    }
    ctx.drawImage(img, 0 * 128, 0, 128, 140, 0, 0, 96, 105);
    ctx2.drawImage(img2, 0 * 192, 0, 192, 210, 0, 0, 160, 175);//in order to make the canvas change smooth, draw the frist frame of animation before display the Hit animation canvas.

    PitcherPitchCanvas.style.filter = "opacity(100%)";
    PitcherPitchCanvas.style.WebkitFilter = "opacity(100%)";
    BatterHitCanvas.style.filter = "opacity(100%)";
    BatterHitCanvas.style.WebkitFilter = "opacity(100%)";//display the hit animation canvas.

    clearInterval(PitcherWaitControl);
    clearInterval(BatterWaitControl);//clear the waiting animation counting.

    BatterStatus = "Hit";

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

    if(Side == "Home")
    {
        var img = document.getElementById("PitcherPitching");
    }
    else
    {
        var img = document.getElementById("BluePitcherPitching");
    }

    var width = 128;
    var height = 140;                                   //initial the canvas.

    ctx.clearRect(0, 0, width, height);

    if(PitcherPitchCurrFrames == 2)
    {
        if(BatterStatus == "Hit")
        {
            BatterHitOnload();
        }
        if(BatterStatus == "Strike")
        {
            BatterSwingStrikeOnload();
        }
        if(BatterStatus == "Ball")
        {
            BatterTakeOnload();
        }
        if(BatterStatus == "Out")
        {
            BatterSwingOutOnload();
        }
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
        if(Side == "Home")
        {
            var img2 = document.getElementById("BatterHitting");
        }
        else
        {
            var img2 = document.getElementById("RedBatterHitting");
        }
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
    if(Side == "Home")
    {
        var img = document.getElementById("BatterHitting");
    }
    else
    {
        var img = document.getElementById("RedBatterHitting");
    }
    var width = 192;
    var height = 210;

    ctx.clearRect(0, 0, width, height);


 ///////////////////////Call sound
  batterSound("Home",true,true, 1, 500);//team-Home==1 Visitor==2, swing contact==true, contact==true, play base hitSafe==1, timeDelay in ms


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

var BatterHitOnloadControl;
export function BatterHitOnload()
{
    BatterHitOnloadControl = setInterval(drawBatterHit, 80);//every 80ms call the drawBatterhit function once.
}

function drawAboveView()
{
    var PitcherPitchCanvas = document.getElementById("PitcherPitch");
    var BatterHitCanvas = document.getElementById("BatterHit");
    var BackGroundCanvas = document.getElementById("batterView");
    PitcherPitchCanvas.style.filter = "opacity(0%)";
    PitcherPitchCanvas.style.WebkitFilter = "opacity(0%)";
    BatterHitCanvas.style.filter = "opacity(0%)";
    BatterHitCanvas.style.WebkitFilter = "opacity(0%)";
    BackGroundCanvas.style.filter = "opacity(0%)";
    BackGroundCanvas.style.WebkitFilter = "opacity(0%)";
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

var base1 = false;
var base2 = false;
var base3 = false;
var base4 = false;
var times = 0;
var BaseChangeCurrFrame = 0;
var BaseChangeTotalFrame = 5;
function drawBaseChange()
{
    var BackGroundCanvas = document.getElementById("batterView");

    var FirstBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx = FirstBaseViewCanvas.getContext("2d");
    var img = document.getElementById("FirstBase");
    FirstBaseViewCanvas.width = BackGroundCanvas.width;
    FirstBaseViewCanvas.height = BackGroundCanvas.height;
    FirstBaseViewCanvas.style.filter = "opacity(100%)";
    FirstBaseViewCanvas.style.WebkitFilter = "opacity(100%)";

    var SecondBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx2 = SecondBaseViewCanvas.getContext("2d");
    var img2 = document.getElementById("SecondBase");
    SecondBaseViewCanvas.width = BackGroundCanvas.width;
    SecondBaseViewCanvas.height = BackGroundCanvas.height;
    SecondBaseViewCanvas.style.filter = "opacity(100%)";
    SecondBaseViewCanvas.style.WebkitFilter = "opacity(100%)";

    var ThirdBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx3 = ThirdBaseViewCanvas.getContext("2d");
    var img3 = document.getElementById("ThirdBase");
    ThirdBaseViewCanvas.width = BackGroundCanvas.width;
    ThirdBaseViewCanvas.height = BackGroundCanvas.height;
    ThirdBaseViewCanvas.style.filter = "opacity(100%)";
    ThirdBaseViewCanvas.style.WebkitFilter = "opacity(100%)";

    var HomeBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx4 = HomeBaseViewCanvas.getContext("2d");
    var img4 = document.getElementById("HomeBase");
    HomeBaseViewCanvas.width = BackGroundCanvas.width;
    HomeBaseViewCanvas.height = BackGroundCanvas.height;
    HomeBaseViewCanvas.style.filter = "opacity(100%)";
    HomeBaseViewCanvas.style.WebkitFilter = "opacity(100%)";

    if(gameAnimation.lastPitch.play == "flyoutAdv" || gameAnimation.lastPitch.play == "groundout")
    {
        if(times == 0)
        {
            if(gameAnimation.lastPitch.first == true)
            {
                base2 = true;
            }
            if(gameAnimation.lastPitch.second == true)
            {
                base3 = true;
            }
            times++;
        }
        if(gameAnimation.lastPitch.third == true)
        {
            base4 = true;
        }
    }
    if(gameAnimation.lastPitch.play == "flyoutNoAdv1st")
    {
        if(times == 0)
        {
            if(gameAnimation.lastPitch.second == true)
            {
                base3 = true;
            }
            if(gameAnimation.lastPitch.third == true)
            {
                base4 = true;
            }
            times++;
        }
    }
    if(gameAnimation.lastPitch.play == "groundoutAdvIfForced")
    {
        if(times == 0)
        {
            if (gameAnimation.lastPitch.third && gameAnimation.lastPitch.second && gameAnimation.lastPitch.first) {
                base2 = true;
                base3 = true;
                base4 = true;
            }
            if (gameAnimation.lastPitch.second && gameAnimation.lastPitch.first) {
                base2 = true;
                base3 = true;
            }
            if (gameAnimation.lastPitch.first) {
                base2 = true;
            }
            times++;
        }
    }
    if(gameAnimation.lastPitch.play == "groundoutDoublePlay")
    {
        if(times == 0)
        {
            if (gameAnimation.lastPitch.third) {
                base4 = true;
            }
            if (gameAnimation.lastPitch.second) {
                base3 = true;
            }
        }
        times++;
    }

    if(gameAnimation.lastPitch.play == "homeRun" || gameAnimation.lastPitch.play == "triple"
        || gameAnimation.lastPitch.play == "doubleClear" || gameAnimation.lastPitch.play == "double"
        || gameAnimation.lastPitch.play == "single" || gameAnimation.lastPitch.play == "singleRISP"
        || gameAnimation.lastPitch.play == "singleAdvance" || gameAnimation.lastPitch.play == "error"
        || gameAnimation.lastPitch.play == "errorSecond")
    {
        if(times == 0)
        {
            base1 = true;
            times++;
        }


        if((gameAnimation.lastPitch.play == "double" && gameAnimation.lastPitch.first == true)
            || (gameAnimation.lastPitch.play == "singleRISP" && gameAnimation.lastPitch.first == true)
            || (gameAnimation.lastPitch.play == "singleAdvance" && gameAnimation.lastPitch.first == true))
        {
            if(times == 1)
            {
                base2 = true;
                times++;
            }

        }
        if(gameAnimation.lastPitch.play == "single"
            || gameAnimation.lastPitch.play == "error")
        {
            if(times == 1)
            {
                if(gameAnimation.lastPitch.first == true)
                {
                    base2 = true;
                }
                if(gameAnimation.lastPitch.second == true)
                {
                    base3 = true;
                }
                if(gameAnimation.lastPitch.third == true)
                {
                    base4 = true;
                }
                times++;
            }
        }
        if(gameAnimation.lastPitch.play == "errorSecond")
        {
            if(times == 1)
            {
                if(gameAnimation.lastPitch.first == true)
                {
                    base2 = true;
                }
                if(gameAnimation.lastPitch.second == true)
                {
                    base3 = true;
                }
                times++;
            }
        }

    }

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
        if(gameAnimation.lastPitch.play == "homeRun")
        {
            if(base1 == true)
            {
                base1 = false;
                base2 = true;
            }
            else if(base2 == true)
            {
                base2 = false;
                base3 = true;
            }
            else if(base3 == true)
            {
                base3 = false;
                base4 = true;
            }
            else
            {
                base1 = false;
                base2 = false;
                base3 = false;
                base4 = false;
                times = 0;
                clearInterval(BaseChangeControl);
                fieldBack();
            }
        }
        else if(gameAnimation.lastPitch.play == "triple")
        {
            if(base1 == true)
            {
                base1 = false;
                base2 = true;
            }
            else if(base2 == true)
            {
                base2 = false;
                base3 = true;
            }
            else
            {
                base1 = false;
                base2 = false;
                base3 = false;
                base4 = false;
                times = 0;
                clearInterval(BaseChangeControl);
                fieldBack();
            }
        }
        else if(gameAnimation.lastPitch.play == "doubleClear")
        {
            if(base1 == true)
            {
                base1 = false;
                base2 = true;
            }
            else
            {
                base1 = false;
                base2 = false;
                base3 = false;
                base4 = false;
                times = 0;
                clearInterval(BaseChangeControl);
                fieldBack();
            }
        }
        else if(gameAnimation.lastPitch.play == "double")
        {
            if(base1 == true)
            {
                base1 = false;
                if(base2 == true)
                {
                    base3 = true;
                }
                else
                {
                    base2 = true;
                }
            }
            else
            {
                base1 = false;
                base2 = false;
                base3 = false;
                base4 = false;
                times = 0;
                clearInterval(BaseChangeControl);
                fieldBack();
            }
        }
        else if(gameAnimation.lastPitch.play == "single"
            || gameAnimation.lastPitch.play == "singleRISP"
            || gameAnimation.lastPitch.play == "error"
            || gameAnimation.lastPitch.play == "flyoutAdv"
            || gameAnimation.lastPitch.play == "flyoutNoAdv1st"
            || gameAnimation.lastPitch.play == "groundout"
            || gameAnimation.lastPitch.play == "groundoutAdvIfForced"
            || gameAnimation.lastPitch.play == "groundoutDoublePlay")
        {
            base1 = false;
            base2 = false;
            base3 = false;
            base4 = false;
            times = 0;
            clearInterval(BaseChangeControl);
            fieldBack();
        }
        else if(gameAnimation.lastPitch.play == "singleAdvance")
        {
            if(base2 == true && base1 == true)
            {
                base1 = false;
                base2 = false;
                base3 = true;
            }
            else
            {
                base1 = false;
                base2 = false;
                base3 = false;
                base4 = false;
                times = 0;
                clearInterval(BaseChangeControl);
                fieldBack();
            }
        }
        else if(gameAnimation.lastPitch.play == "errorSecond")
        {
            if(base1 == true)
            {
                base1 = false;
                base2 = true;
                if(base3 == true)
                {
                    base4 = true;
                    if(gameAnimation.lastPitch.first == false)
                    {
                        base3 = false;
                    }
                }
            }
            else
            {
                base1 = false;
                base2 = false;
                base3 = false;
                base4 = false;
                times = 0;
                clearInterval(BaseChangeControl);
                fieldBack();
            }
        }
        BaseChangeCurrFrame = 0;
    }
}

var BaseChangeControl;
export function BaseChangeOnload()
{
    BaseChangeControl = setInterval(drawBaseChange, 300);
}


function fieldBack()
{
    var BackGroundCanvas = document.getElementById("batterView");

    var AboveViewCanvas = document.getElementById("AboveView");
    var ctx = AboveViewCanvas.getContext("2d");
    AboveViewCanvas.style.filter = "opacity(0%)";
    AboveViewCanvas.style.WebkitFilter = "opacity(0%)";

    var FirstBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx1 = FirstBaseViewCanvas.getContext("2d");
    FirstBaseViewCanvas.style.filter = "opacity(0%)";
    FirstBaseViewCanvas.style.WebkitFilter = "opacity(0%)";
    ctx1.clearRect(0, 0, BackGroundCanvas.width, BackGroundCanvas.height);

    var SecondBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx2 = SecondBaseViewCanvas.getContext("2d");
    SecondBaseViewCanvas.style.filter = "opacity(0%)";
    SecondBaseViewCanvas.style.WebkitFilter = "opacity(0%)";
    ctx2.clearRect(0, 0, BackGroundCanvas.width, BackGroundCanvas.height);

    var ThirdBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx3 = ThirdBaseViewCanvas.getContext("2d");
    ThirdBaseViewCanvas.style.filter = "opacity(0%)";
    ThirdBaseViewCanvas.style.WebkitFilter = "opacity(0%)";
    ctx3.clearRect(0, 0, BackGroundCanvas.width, BackGroundCanvas.height);

    var HomeBaseViewCanvas = document.getElementById("FirstBaseView");
    var ctx4 = HomeBaseViewCanvas.getContext("2d");
    HomeBaseViewCanvas.style.filter = "opacity(0%)";
    HomeBaseViewCanvas.style.WebkitFilter = "opacity(0%)";
    ctx4.clearRect(0, 0, BackGroundCanvas.width, BackGroundCanvas.height);

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

    BackGroundCanvas.style.filter = "opacity(100%)";
    BackGroundCanvas.style.WebkitFilter = "opacity(100%)";


}


export function drawSwingStrike()
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
    if(Side == "Home")
    {
        var img = document.getElementById("PitcherPitching");
        var img2 = document.getElementById("BatterHitting");
    }
    else
    {
        var img = document.getElementById("BluePitcherPitching");
        var img2 = document.getElementById("RedBatterHitting");
    }

    ctx.drawImage(img, 0 * 128, 0, 128, 140, 0, 0, 96, 105);
    ctx2.drawImage(img2, 0 * 192, 0, 192, 210, 0, 0, 160, 175);//in order to make the canvas change smooth, draw the frist frame of animation before display the Hit animation canvas.

    PitcherPitchCanvas.style.filter = "opacity(100%)";
    PitcherPitchCanvas.style.WebkitFilter = "opacity(100%)";
    BatterHitCanvas.style.filter = "opacity(100%)";
    BatterHitCanvas.style.WebkitFilter = "opacity(100%)";//display the hit animation canvas.

    clearInterval(PitcherWaitControl);
    clearInterval(BatterWaitControl);//clear the waiting animation counting.

    BatterStatus = "Strike";

    PitcherPitchOnload();//start calling the pitcher pitch animation. go to line 85.
}


export function drawSwingOut()
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
    if(Side == "Home")
    {
        var img = document.getElementById("PitcherPitching");
        var img2 = document.getElementById("BatterHitting");
    }
    else
    {
        var img = document.getElementById("BluePitcherPitching");
        var img2 = document.getElementById("RedBatterHitting");
    }

    ctx.drawImage(img, 0 * 128, 0, 128, 140, 0, 0, 96, 105);
    ctx2.drawImage(img2, 0 * 192, 0, 192, 210, 0, 0, 160, 175);//in order to make the canvas change smooth, draw the frist frame of animation before display the Hit animation canvas.

    PitcherPitchCanvas.style.filter = "opacity(100%)";
    PitcherPitchCanvas.style.WebkitFilter = "opacity(100%)";
    BatterHitCanvas.style.filter = "opacity(100%)";
    BatterHitCanvas.style.WebkitFilter = "opacity(100%)";//display the hit animation canvas.

    clearInterval(PitcherWaitControl);
    clearInterval(BatterWaitControl);//clear the waiting animation counting.

    BatterStatus = "Out";

    PitcherPitchOnload();//start calling the pitcher pitch animation. go to line 85.
}


export function drawTakeBall()
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
    if(Side == "Home")
    {
        var img = document.getElementById("PitcherPitching");
        var img2 = document.getElementById("BatterHitting");
    }
    else
    {
        var img = document.getElementById("BluePitcherPitching");
        var img2 = document.getElementById("RedBatterHitting");
    }

    ctx.drawImage(img, 0 * 128, 0, 128, 140, 0, 0, 96, 105);
    ctx2.drawImage(img2, 0 * 192, 0, 192, 210, 0, 0, 160, 175);//in order to make the canvas change smooth, draw the frist frame of animation before display the Hit animation canvas.

    PitcherPitchCanvas.style.filter = "opacity(100%)";
    PitcherPitchCanvas.style.WebkitFilter = "opacity(100%)";
    BatterHitCanvas.style.filter = "opacity(100%)";
    BatterHitCanvas.style.WebkitFilter = "opacity(100%)";//display the hit animation canvas.

    clearInterval(PitcherWaitControl);
    clearInterval(BatterWaitControl);//clear the waiting animation counting.

    BatterStatus = "Ball";

    PitcherPitchOnload();//start calling the pitcher pitch animation. go to line 85.
}


var BatterStrikeFrames = 11;
var BatterStrikeCurrFrame = 0;
function drawBatterSwingStrike()
{
    var BatterHitCanvas = document.getElementById("BatterHit");
    BatterHitCanvas.width = 160;
    BatterHitCanvas.height = 175;
    var ctx = BatterHitCanvas.getContext("2d");

    if(Side == "Home")
    {
        var img = document.getElementById("BatterHitting");
    }
    else
    {
        var img = document.getElementById("RedBatterHitting");
    }
    var width = 192;
    var height = 210;

    ctx.clearRect(0, 0, width, height);

    ctx.drawImage(img, BatterStrikeCurrFrame * width, 0, width, height, 0, 0, BatterHitCanvas.width, BatterHitCanvas.height);//draw Batter hit animation frame.

    if(BatterStrikeCurrFrame < BatterStrikeFrames)
    {
        BatterStrikeCurrFrame++;
        if(BatterStrikeCurrFrame == 8)
        {
            BatterStrikeCurrFrame++;
        }
        if(BatterStrikeCurrFrame == 11)
        {
            clearInterval(PitcherPitchControl);
            PitcherPitchCurrFrames = 0;
        }
    }
    else
    {
        clearInterval(BatterSwingStrikeControl);
        BatterStrikeCurrFrame = 0;
        strikeBackOnload();
    }

}

var BatterSwingStrikeControl;
export function BatterSwingStrikeOnload()
{
    BatterSwingStrikeControl = setInterval(drawBatterSwingStrike, 110);
}


var BatterOutFrames = 11;
var BatterOutCurrFrame = 0;
function drawOut()
{
    var BatterHitCanvas = document.getElementById("BatterHit");
    BatterHitCanvas.width = 160;
    BatterHitCanvas.height = 175;
    var ctx = BatterHitCanvas.getContext("2d");

    if(Side == "Home")
    {
        var img = document.getElementById("BatterHitting");
    }
    else
    {
        var img = document.getElementById("RedBatterHitting");
    }
    var width = 192;
    var height = 210;

    ctx.clearRect(0, 0, width, height);

    ctx.drawImage(img, BatterOutCurrFrame * width, 0, width, height, 0, 0, BatterHitCanvas.width, BatterHitCanvas.height);//draw Batter hit animation frame.

    if(BatterOutCurrFrame < BatterOutFrames)
    {
        BatterOutCurrFrame++;
    }
    else
    {
        clearInterval(PitcherPitchControl);
        PitcherPitchCurrFrames = 0;
        clearInterval(BatterSwingOutControl);
        BatterOutCurrFrame = 0;
        strikeBackOnload();
    }

}

var BatterSwingOutControl;
export function BatterSwingOutOnload()
{
    BatterSwingOutControl = setInterval(drawOut, 80);
}

var count1 = 0;
function strikeBack()
{
    var PitcherPitchCanvas = document.getElementById("PitcherPitch");
    var BatterHitCanvas = document.getElementById("BatterHit");
    var PitcherWaitCanvas = document.getElementById("PitcherWait");
    var BatterWaitCanvas = document.getElementById("BatterWaitting");

    if(count1 < 7)
    {
        count1++;
    }
    else
    {
        count1 = 0;
        clearInterval(StrikeBackControl);

        PitcherWaitOnload();
        BatterWaitOnload();

        PitcherWaitCanvas.style.filter = "opacity(100%)";
        PitcherWaitCanvas.style.WebkitFilter = "opacity(100%)";
        BatterWaitCanvas.style.filter = "opacity(100%)";
        BatterWaitCanvas.style.WebkitFilter = "opacity(100%)";
        var ctx5 = BatterWaitCanvas.getContext("2d");
        var ctx6 = PitcherWaitCanvas.getContext("2d");

        PitcherPitchCanvas.style.filter = "opacity(0%)";
        PitcherPitchCanvas.style.WebkitFilter = "opacity(0%)";
        BatterHitCanvas.style.filter = "opacity(0%)";
        BatterHitCanvas.style.WebkitFilter = "opacity(0%)";
        var ctx1 = PitcherPitchCanvas.getContext("2d");
        ctx1.clearRect(0, 0, 128, 140);
        var ctx2 = BatterHitCanvas.getContext("2d");
        ctx2.clearRect(0, 0, 192, 210);
    }
}

var StrikeBackControl;
export function strikeBackOnload()
{
    StrikeBackControl = setInterval(strikeBack, 80);
}



function drawBatterTake()
{
    var BatterHitCanvas = document.getElementById("BatterHit");
    BatterHitCanvas.width = 160;
    BatterHitCanvas.height = 175;
    var ctx = BatterHitCanvas.getContext("2d");

    if(Side == "Home")
    {
        var img = document.getElementById("BatterHitting");
    }
    else
    {
        var img = document.getElementById("RedBatterHitting");
    }

    var width = 192;
    var height = 210;

    ctx.clearRect(0, 0, width, height);

    ctx.drawImage(img, width, 0, width, height, 0, 0, BatterHitCanvas.width, BatterHitCanvas.height);

    if(PitcherPitchCurrFrames == 6)
    {
        clearInterval(PitcherPitchControl);
        clearInterval(BatterTakeControl);
        PitcherPitchCurrFrames = 0;
        BallBackOnload();
    }
}

var BatterTakeControl;
export function BatterTakeOnload()
{
    BatterTakeControl = setInterval(drawBatterTake, 300);
}



function BallBack()
{
    var PitcherPitchCanvas = document.getElementById("PitcherPitch");
    var BatterHitCanvas = document.getElementById("BatterHit");
    var PitcherWaitCanvas = document.getElementById("PitcherWait");
    var BatterWaitCanvas = document.getElementById("BatterWaitting");

    if(count1 < 7)
    {
        count1++;
    }
    else
    {
        count1 = 0;
        clearInterval(BallBackControl);

        PitcherWaitOnload();
        BatterWaitOnload();

        PitcherWaitCanvas.style.filter = "opacity(100%)";
        PitcherWaitCanvas.style.WebkitFilter = "opacity(100%)";
        BatterWaitCanvas.style.filter = "opacity(100%)";
        BatterWaitCanvas.style.WebkitFilter = "opacity(100%)";
        var ctx5 = BatterWaitCanvas.getContext("2d");
        var ctx6 = PitcherWaitCanvas.getContext("2d");

        PitcherPitchCanvas.style.filter = "opacity(0%)";
        PitcherPitchCanvas.style.WebkitFilter = "opacity(0%)";
        BatterHitCanvas.style.filter = "opacity(0%)";
        BatterHitCanvas.style.WebkitFilter = "opacity(0%)";
        var ctx1 = PitcherPitchCanvas.getContext("2d");
        ctx1.clearRect(0, 0, 128, 140);
        var ctx2 = BatterHitCanvas.getContext("2d");
        ctx2.clearRect(0, 0, 192, 210);
    }

}

var BallBackControl;
export function BallBackOnload()
{
    BallBackControl = setInterval(BallBack, 80);
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



var BatterWaitFrames = 17;
var BatterWaitCurrFrame = 0;

function drawBatterWait()
{
    var BatterWaitCanvas = document.getElementById("BatterWaitting");
    BatterWaitCanvas.width = 160;
    BatterWaitCanvas.height = 160;
    var ctx = BatterWaitCanvas.getContext("2d");

    if(Side == "Home")
    {
        var img = document.getElementById("BatterWait");
    }
    else
    {
        var img = document.getElementById("RedBatterWait");
    }
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

    if(Side == "Home")
    {
        var img = document.getElementById("PitcherWaiting");
    }
    else
    {
        var img = document.getElementById("BluePitcherWaiting");
    }

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


function batterSound(team,swing, contact, play, timeDelay)//Sounds for pitching, batting and catching.
{
    let t= team;//h=home, v=visitor
    let s= swing;//Bool
    let c= contact;//Bool
    let p= play;//foul,strike,out
    let d= timeDelay;//num time delay for sound to begin.

//    if(swing)
//    {
//        if(contact)
//        {
            setTimeout(playsound, d, p );
            function playSound(p)
            {
                if(t=== "Home")//team;//h=home, v=visitor
                {
                    if(p== "ball")
                    {
                        document.getElementById("hBall").play();
                    }
                    if(p== "foul")
                    {
                        document.getElementById("hFoul").play();
                    }
                    if(p== "foulout" || "flyout")
                    {
                        document.getElementById("hHitOut").play();//Base hit
                    }
                    if(p== "single" || "singleAdvance" || "error" || "flyoutAdv" || "flyoutNoAdv1st" || "groundout")
                    {
                        document.getElementById('hB1').play();//Base hit
                    }
                    if(p== "singleRISP")
                    {
                        document.getElementById('hB3').play();//Base hit
                    }
                    if(p== "doubleClear" || "double" || "errorSecond")
                    {
                        document.getElementById('hB2').play();//Double hit
                    }
                    if(p== "triple")
                    {
                        document.getElementById('hB3').play();//Base hit
                    }
                    if(p== "homeRun")
                    {
                        document.getElementById("hHomeRun").play();
                    }
                    if(p== "groundoutAdvIfForced" || "groundoutDoublePlay" || "lineoutDoublePlay" || "triplePlay" || "fieldersChoice")
                    {
                        document.getElementById("hHitOut").play();//out
                    }
                    if(p== "swingingStrike")
                    {
                        document.getElementById("hSwingStrike").play();
                    }
                    if(p== "calledStrike")
                    {
                        document.getElementById("hTakeStrike").play();
                    }
                }
                else
                {
                    if(p== "ball")
                    {
                        document.getElementById("vBall").play();
                    }
                    if(p== "foul")
                    {
                        document.getElementById("vFoul").play();
                    }
                    if(p== "foulout" || "flyout")
                    {
                        document.getElementById("vB1Out").play();//Base hit
                    }
                    if(p== "single" || "singleAdvance" || "error" || "flyoutAdv" || "flyoutNoAdv1st" || "groundout")
                    {
                        document.getElementById('vB1').play();//Base hit
                    }
                    if(p== "singleRISP")
                    {
                        document.getElementById('vB1').play();//Base hit
                    }
                    if(p== "doubleClear" || "double" || "errorSecond")
                    {
                        document.getElementById('vB1').play();//Double hit
                    }
                    if(p== "triple")
                    {
                        document.getElementById('vB1').play();//Base hit
                    }
                    if(p== "homeRun")
                    {
                        document.getElementById("vHomeRun").play();
                    }
                    if(p== "groundoutAdvIfForced"  || "groundoutDoublePlay" || "lineoutDoublePlay" || "triplePlay" || "fieldersChoice")
                    {
                        document.getElementById("vB1").play();//out
                    }
                    if(p== "swingingStrike")
                    {
                        document.getElementById("vSwingStrike").play();
                    }
                    if(p== "calledStrike")
                    {
                        document.getElementById("vTakeStrike").play();
                    }
                }

           }
//        }
//   }
}

function organMusic(number)
{
    if(number== 1)
    {
        document.getElementById('o1').play();
    }
    else if(number== 2)
    {
        document.getElementById('o2').play();//Double hit
    }
    else if(number== 3)
    {
        document.getElementById('o3').play();//Foul ball
    }
    else if(number== 7)
    {
        document.getElementById('7th').play();//Foul ball
    }
}
