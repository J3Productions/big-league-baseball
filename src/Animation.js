var gameAnimation;
var Side;
var count2 = 0;
/**
* SwitchSide function is to swtich the side when the a new inning came out.
* @param {string} it represented the side of img. Home will call blue, away will call red.
*/
export function SwitchSide(side)
{
    Side = side;
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
        if(Side == "home")
        {
            Side = "away";
        }
        else
        {
            Side = "home";
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
/**
* SwitchSideOnload will make switchside been recalled for a period of time.
* @param {string} it represented the side of img. Home will call blue, away will call red.
*/
export function SwitchSideOnload(side)
{
    SwitchSideControl = setInterval(SwitchSide, 200, side);
}

var BackGroundCurrFrame = 0;
var BackGroundTotalFrame = 2;
var temp = 0;
/**
* BackGroud function will make the playground background move. It is a animation function.
* @param {string} it represented the side of img. Home will call blue, away will call red.
*/
export function BackGround(location)
{
    if(temp == 0)
    {
        Side = location;
        temp++;
    }
    var BackGroundCanvas = document.getElementById("batterView");
    var ctx = BackGroundCanvas.getContext("2d");
    if(Side == "home")
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
/**
* BackGroundOnload, make the background moving when the game been played.
* @param {string} it represented the side of img. Home will call blue, away will call red.
*/
export function BackGroundOnload(location)
{
    BackGroundControl = setInterval(BackGround, 300, location);
}


var BatterStatus = "";
/**
* drawPitchHit, this function is a control of stop the waiting animations and hidden the canvas to open the hit animation canvas.
* @param {object} this is the object of the result of each action had been selected.
*/
export function drawPitchHit(game)
{
    gameAnimation = game;
    var PitcherWaitCanvas = document.getElementById("PitcherWait");
    var BatterWaitCanvas = document.getElementById("BatterWaitting");
    PitcherWaitCanvas.style.filter = "opacity(0%)";
    PitcherWaitCanvas.style.WebkitFilter = "opacity(0%)";
    BatterWaitCanvas.style.filter = "opacity(0%)";
    BatterWaitCanvas.style.WebkitFilter = "opacity(0%)";

    var PitcherPitchCanvas = document.getElementById("PitcherPitch");
    var BatterHitCanvas = document.getElementById("BatterHit");
    PitcherPitchCanvas.width = 96;
    PitcherPitchCanvas.height = 105;
    BatterHitCanvas.width = 160;
    BatterHitCanvas.height = 175;

    var ctx = PitcherPitchCanvas.getContext("2d");
    var ctx2 = BatterHitCanvas.getContext("2d");
    if(Side == "home")
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
    ctx2.drawImage(img2, 0 * 192, 0, 192, 210, 0, 0, 160, 175);

    PitcherPitchCanvas.style.filter = "opacity(100%)";
    PitcherPitchCanvas.style.WebkitFilter = "opacity(100%)";
    BatterHitCanvas.style.filter = "opacity(100%)";
    BatterHitCanvas.style.WebkitFilter = "opacity(100%)";
    clearInterval(PitcherWaitControl);
    clearInterval(BatterWaitControl);

    BatterStatus = "Hit";

    PitcherPitchOnload();//start calling the pitcher pitch animation. go to line 85.
}

var PitcherPitchFrames = 6;
var PitcherPitchCurrFrames = 0;
/**
* drawPitcherPitch, this is the animation of pitcher pitch.
*
*/
function drawPitcherPitch()
{
    var PitcherPitchCanvas = document.getElementById("PitcherPitch");
    PitcherPitchCanvas.width = 96;
    PitcherPitchCanvas.height = 105;
    var ctx = PitcherPitchCanvas.getContext("2d");

    if(Side == "home")
    {
        var img = document.getElementById("PitcherPitching");
    }
    else
    {
        var img = document.getElementById("BluePitcherPitching");
    }

    var width = 128;
    var height = 140;

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
        BallOnload();
    }

    if(PitcherPitchCurrFrames < PitcherPitchFrames)
    {
        PitcherPitchCurrFrames++;
    }
    else
    {
        clearInterval(PitcherPitchControl);
        PitcherPitchCurrFrames = 0;
    }

    ctx.drawImage(img, PitcherPitchCurrFrames * width, 0, width, height, 0, 0, PitcherPitchCanvas.width, PitcherPitchCanvas.height);
    if(PitcherPitchCurrFrames < 4)
    {
        var BatterHitCanvas = document.getElementById("BatterHit");
        BatterHitCanvas.width = 192;
        BatterHitCanvas.height = 210;
        var ctx2 = BatterHitCanvas.getContext("2d");
        if(Side == "home")
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
/**
* PitcherPitchOnload - a control of pitcherPitch anuation, set the time interval of each frame.
*/
export function PitcherPitchOnload()
{
    PitcherPitchControl = setInterval(drawPitcherPitch, 300);
}


var BatterHitFrames = 16;
var BatterHitCurrFrame = 0;
var count = 0;
/**
* drawBatterHit, this is the animation of batter hit.
*/
function drawBatterHit()
{
    var BatterHitCanvas = document.getElementById("BatterHit");
    BatterHitCanvas.width = 160;
    BatterHitCanvas.height = 175;
    var ctx = BatterHitCanvas.getContext("2d");
    if(Side == "home")
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
/**
* BatterHitOnload - a control of Batter hit animation, set the time interval of each frame.
*/
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
/**
* drawBaseChange - This a control function and animation. It will determine which base change animation need to been called.
*
*/
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

    if(gameAnimation.lastPitch.play == "flyoutAdv" || gameAnimation.lastPitch.play == "groundout" || gameAnimation.lastPitch.play == "groundoutAdvIfForced")
    {
        if(gameAnimation.lastPitch.base1Change == true)
        {
            if(times == 1)
            {
                base2 = true;
            }
        }

        if(gameAnimation.lastPitch.base2Change == true)
        {
            if(times == 1)
            {
                base3 = true;
            }
        }

        if(gameAnimation.lastPitch.base3Change == true)
        {
            if(times == 1)
            {
                base4 = true;
            }
        }
        if(gameAnimation.lastPitch.base1Change == true || gameAnimation.lastPitch.base2Change == true || gameAnimation.lastPitch.base3Change == true)
        {
            times++;
        }
    }

    if(gameAnimation.lastPitch.play == "flyoutNoAdv1st" || gameAnimation.lastPitch.play == "groundoutDoublePlay")
    {
        if(gameAnimation.lastPitch.base2Change == true)
        {
            if(times == 1)
            {
                base3 = true;
            }
        }

        if(gameAnimation.lastPitch.base3Change == true)
        {
            if(times == 1)
            {
                base4 = true;
            }
        }
        if(gameAnimation.lastPitch.base2Change == true || gameAnimation.lastPitch.base3Change == true)
        {
            times++;
        }
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

        if(gameAnimation.lastPitch.play == "double")
        {
            if(gameAnimation.lastPitch.base1to3 == true)
            {
                if(times == 1)
                {
                    base2 = true;
                    times++;
                }
            }
        }

        if(gameAnimation.lastPitch.play == "single")
        {
            if(gameAnimation.lastPitch.base1Change == true)
            {
                if(times == 1)
                {
                    base2 = true;
                }
            }

            if(gameAnimation.lastPitch.base2Change == true)
            {
                if(times == 1)
                {
                    base3 = true;
                }
            }

            if(gameAnimation.lastPitch.base3Change == true)
            {
                if(times == 1)
                {
                    base4 = true;
                }
            }
            if(gameAnimation.lastPitch.base1Change == true || gameAnimation.lastPitch.base2Change == true || gameAnimation.lastPitch.base3Change == true)
            {
                times++;
            }
        }

        if(gameAnimation.lastPitch.play == "singleRISP")
        {
            if(gameAnimation.lastPitch.base1Change == true)
            {
                if(times == 1)
                {
                    base2 = true;
                    times++;
                }
            }
        }

        if(gameAnimation.lastPitch.play == "singleAdvance")
        {
            if(gameAnimation.lastPitch.base1to3 == true)
            {
                if(times == 1)
                {
                    base2 = true;
                    times++;
                }
            }
        }

        if(gameAnimation.lastPitch.play == "error")
        {
            if(gameAnimation.lastPitch.base1Change == true)
            {
                if(times == 1)
                {
                    base2 = true;
                }
            }

            if(gameAnimation.lastPitch.base2Change == true)
            {
                if(times == 1)
                {
                    base3 = true;
                }
            }

            if(gameAnimation.lastPitch.base3Change == true)
            {
                if(times == 1)
                {
                    base4 = true;
                }
            }
            if(gameAnimation.lastPitch.base1Change == true || gameAnimation.lastPitch.base2Change == true || gameAnimation.lastPitch.base3Change == true)
            {
                times++;
            }
        }

        if(gameAnimation.lastPitch.play == "errorSecond")
        {
            if(gameAnimation.lastPitch.base1to3 == true)
            {
                if(times == 1)
                {
                    base2 = true;
                }
            }
            if(gameAnimation.lastPitch.base3Change = true)
            {
                if(times == 1)
                {
                    base3 = true;
                }
            }
            if(gameAnimation.lastPitch.base1to3 == true || gameAnimation.lastPitch.base3Change == true)
            {
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
            if(base1 == true)
            {
                base1 = false;
                if(base2 == true)
                {
                    base3 = true;
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
        else if(gameAnimation.lastPitch.play == "errorSecond")
        {
            if(base1 == true)
            {
                base1 = false;
                if(base2 == true)
                {
                    if(base3 == true)
                    {
                        base4 = true;
                    }
                    else
                    {
                        base3 = true;
                    }
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
        BaseChangeCurrFrame = 0;
    }
}

var BaseChangeControl;
/**
* BaseChangeOnload - a control of Base change animation, set the time interval of each frame.
*
*/
export function BaseChangeOnload()
{
    BaseChangeControl = setInterval(drawBaseChange, 200);
}

/**
* This function will make the canvas back to normal when the field animation is finished.
*/
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

    if(gameAnimation.lastPitch.newInning == true)
    {
        SwitchSideOnload(Side);
    }

    PitcherWaitOnload();
    BatterWaitOnload();

    BackGroundCanvas.style.filter = "opacity(100%)";
    BackGroundCanvas.style.WebkitFilter = "opacity(100%)";
}

/**
* This function is animation of strike.
* @param {object} this is the object of the result of each action had been selected.
*/
export function drawSwingStrike(game)
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
    if(Side == "home")
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

/**
* This function is animation of swing but it is Out.
* @param {object} this is the object of the result of each action had been selected.
*/
export function drawSwingOut(game)
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
    if(Side == "home")
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

/**
* This function is animation of batter decided take and it was a Ball
* @param {object} this is the object of the result of each action had been selected.
*/
export function drawTakeBall(game)
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
    if(Side == "home")
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
/**
* This function is animation of strike when the pitcher pitch has been called
* @param {object} this is the object of the result of each action had been selected.
*/
function drawBatterSwingStrike()
{
    var BatterHitCanvas = document.getElementById("BatterHit");
    BatterHitCanvas.width = 160;
    BatterHitCanvas.height = 175;
    var ctx = BatterHitCanvas.getContext("2d");

    if(Side == "home")
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
/**
* BaseChangeOnload - a control of strike animation, set the time interval of each frame.
*
*/
export function BatterSwingStrikeOnload()
{
    BatterSwingStrikeControl = setInterval(drawBatterSwingStrike, 110);
}


var BatterOutFrames = 11;
var BatterOutCurrFrame = 0;
/**
* This function will draw the out animation
*/
function drawOut()
{
    var BatterHitCanvas = document.getElementById("BatterHit");
    BatterHitCanvas.width = 160;
    BatterHitCanvas.height = 175;
    var ctx = BatterHitCanvas.getContext("2d");

    if(Side == "home")
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
/**
* BatterSwingOutOnload - a control of out animation, set the time interval of each frame.
*
*/
export function BatterSwingOutOnload()
{
    BatterSwingOutControl = setInterval(drawOut, 80);
}

var count1 = 0;
/**
* This function will the canvas back to normal after strike animation is finished.
*
*/
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

        if(gameAnimation.lastPitch.newInning == true)
        {
            SwitchSideOnload(Side);
        }

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
/**
* strikeBackOnload - a control of strike back to normal function, set the time interval of each frame.
*
*/
export function strikeBackOnload()
{
    StrikeBackControl = setInterval(strikeBack, 80);
}

/**
* This function will draw the take animation
*
*/
function drawBatterTake()
{
    var BatterHitCanvas = document.getElementById("BatterHit");
    BatterHitCanvas.width = 160;
    BatterHitCanvas.height = 175;
    var ctx = BatterHitCanvas.getContext("2d");

    if(Side == "home")
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
/**
* BatterTakeOnload - a control of take animation, set the time interval of each frame.
*
*/
export function BatterTakeOnload()
{
    BatterTakeControl = setInterval(drawBatterTake, 300);
}

/**
* This function will the canvas back to normal after Ball animation is finished.
*
*/
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

        if(gameAnimation.lastPitch.newInning == true)
        {
            SwitchSideOnload(Side);
        }

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
/**
* BallBackOnload - a control of Ball back function.
*
*/
export function BallBackOnload()
{
    BallBackControl = setInterval(BallBack, 80);
}

var BallFrames = 5;
var BallCurrFrames = 0;
var initalTop = 0;
/**
* This function is the animation of a flying Ball
*
*/
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
/**
* BallOnload - a control of flying ball animation, set the time interval of each frame.
*
*/
export function BallOnload()
{
    BallControl = setInterval(drawBall, 70);//every 70ms draw flying ball once
}

var BatterWaitFrames = 17;
var BatterWaitCurrFrame = 0;
/**
* This function is the animation of Batter waiting of the action been selected.
*
*/
function drawBatterWait()
{
    var BatterWaitCanvas = document.getElementById("BatterWaitting");
    BatterWaitCanvas.width = 160;
    BatterWaitCanvas.height = 160;
    var ctx = BatterWaitCanvas.getContext("2d");

    if(Side == "home")
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
/**
* BatterWaitOnload - a control of batter waiting animation, set the time interval of each frame.
*
*/
export function BatterWaitOnload()
{
    BatterWaitControl = setInterval(drawBatterWait, 125);
}

var PitcherWaitFrames = 16;
var PitcherWaitCurrFrames = 0;
/**
* This function is the animation of pitcher waiting of the action been selected.
*
*/
function drawPitcherWait()
{
    var PitcherWaitCanvas = document.getElementById("PitcherWait");
    PitcherWaitCanvas.width = 96;
    PitcherWaitCanvas.height = 105;
    var ctx = PitcherWaitCanvas.getContext("2d");

    if(Side == "home")
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
/**
* PitcherWaitOnload - a control of pitcher waiting animation, set the time interval of each frame.
*
*/
export function PitcherWaitOnload()
{
    PitcherWaitControl = setInterval(drawPitcherWait, 188);
}

export function batterSound()//Sounds for pitching, batting and catching.
{
    var p= gameAnimation.lastPitch.play;//foul,strike,out
    var d= 1300;//num time delay for sound to begin.
    var t= Side ;//h=home, v=visitor
    if(t== "home")
    {
        t= "away";
    }
    else
    {
        t="home";
    }
    setTimeout(playSound, d, p );
    function playSound(p)
    {
        if(t== "home")
        {
            if(p== "ball")
            {
                document.getElementById("hBall").play();
            }
            if(p== "foul")
            {
                document.getElementById("hFoul").play();
            }
            if(p== "foulout" ||p== "flyout")
            {
                document.getElementById("hHitOut").play();
            }
            if(p== "single" || p=="singleAdvance" || p=="error" || p=="flyoutAdv" || p=="flyoutNoAdv1st" ||p== "groundout")
            {
                document.getElementById('hB1').play();
            }
            if(p== "singleRISP")
            {
                document.getElementById('hB3').play();
            }
            if(p== "doubleClear" ||p== "double" || p=="errorSecond")
            {
                document.getElementById('hB2').play();
            }
            if(p== "triple")
            {
                document.getElementById('hB3').play();
            }
            if(p== "homeRun")
            {
                document.getElementById("hHomeRun").play();
            }
            if(p== "groundoutAdvIfForced" || p=="groundoutDoublePlay" ||p== "lineoutDoublePlay" || p== "triplePlay" ||p== "fieldersChoice")
            {
                document.getElementById("hHitOut").play();
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
            if(p== "foulout" ||p== "flyout")
            {
                document.getElementById("vB1Out").play();
            }
            if(p== "single" ||p== "singleAdvance" || p=="error" || p=="flyoutAdv" || p=="flyoutNoAdv1st" || p=="groundout")
            {
                document.getElementById('vB1').play();
            }
            if(p== "singleRISP")
            {
                document.getElementById('vB1').play();
            }
            if(p== "doubleClear" || p=="double" || p=="errorSecond")
            {
                document.getElementById('vB1').play();
            }
            if(p== "triple")
            {
                document.getElementById('vB1').play();
            }
            if(p== "homeRun")
            {
                document.getElementById("vHomeRun").play();
            }
            if(p== "groundoutAdvIfForced"  ||p== "groundoutDoublePlay" || p=="lineoutDoublePlay" || p=="triplePlay" || p=="fieldersChoice")
            {
                document.getElementById("vB1").play();
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
}
