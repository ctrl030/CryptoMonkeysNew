
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function firstGroupColor(color,code) {
    $('#mHeadTop, .feet').css('background', '#' + color)  //This changes the color of the cat
    $('#firstGroupColorCode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function secondGroupColor(color,code) {
    $('#eyesArea, #mouthArea, #mbody').css('background', '#' + color)  //This changes the color of the cat
    $('#secondGroupColorCode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function thirdGroupColor(color,code) {
    $('.pupil, .arms, #leftNostril, #rightNostril').css('background', '#' + color)  //This changes the color of the cat
    $('#thirdGroupColorCode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function fourthGroupColor(color,code) {
    $('.ears').css('background', '#' + color)  //This changes the color of the cat
    $('#fourthGroupColorCode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function dnaEyeBackgroundColor(color,code) {
    $('.eyes').css('background', '#' + color)  //This changes the color of the cat
    $('#eyeBackgroundColorCode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaEyeBackgroundColor').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function dnaLowerHeadColor(color,code) {
    $('#mHeadLower').css('background', '#' + color)  //This changes the color of the cat
    $('#lowerHeadColorCode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaLowerHeadColor').html(code) //This updates the body color part of the DNA that is displayed below the cat
}




// Eye shape styling
function eyeVariation(num) {

    $('#dnaEyeShape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#dnaEyeShapeCode').html('Basic')
            break
        case 2:
            normalEyes()
            $('#dnaEyeShapeCode').html('Down')
            eyesType2();
            break           
        case 3:
            normalEyes()
            $('#dnaEyeShapeCode').html('Up')
            eyesType3();
            break
        case 4:
            normalEyes()
            $('#dnaEyeShapeCode').html('Flat pupils')
            eyesType4();
            break
        case 5:
            normalEyes()
            $('#dnaEyeShapeCode').html('Skinny pupils')
            eyesType5();
            break
        case 6:
            normalEyes()
            $('#dnaEyeShapeCode').html('ITS OVER 9000')
            eyesType6();
            break
        case 7:
            normalEyes()
            $('#dnaEyeShapeCode').html('RARE')
            eyesType7();            
            break
    }
}

function normalEyes() {
    $('.eyes').css('width', '40px')
    $('.eyes').css('top', '10px')
    $('.pupil').css('width', '12px')
    $('.pupil').css('height', '15px')
    $('.pupil').css('top', '24px')
    $('.pupil').removeClass("over9000Class")       
    console.log("normalEyes")
}

function eyesType2() {    
    $('.eyes').css('top', '15px')    
    console.log("eyesType2")
}

function eyesType3() {    
    $('.eyes').css('top', '5px')    
    console.log("eyesType3")
}

function eyesType4() {
    $('.pupil').css('width', '32px')
    console.log("eyesType4")
}

function eyesType5() {
    $('.pupil').css('height', '32px')
    console.log("eyesType5")
}

function eyesType6() {
    $('.pupil').css('top', '10px')
    $('.pupil').css('width', '42px')
    $('.pupil').css('height', '42px')
    
    $('.pupil').addClass("over9000Class")

    console.log("ITS OVER 9000")
    console.log($('.pupil').css)
}

function eyesType7() {
    $('.pupil').css('width', '4px')
    $('.pupil').css('height', '4px')
    console.log("eyesType7")
}


// Mouth shape styling

function mouthVariation(num) {

    $('#dnaMouthShape').html(num)
    switch (num) {
        case 1:
            normalMouth()
            $('#dnaMouthShapeCode').html('Basic')
            break
        case 2:
            normalMouth()
            $('#dnaMouthShapeCode').html('Skinny Mouth')
            mouthType2();
            break           
        case 3:
            normalMouth()
            $('#dnaMouthShapeCode').html('Lambo')
            mouthType3();
            break
        case 4:
            normalMouth()
            $('#dnaMouthShapeCode').html('Bullish')
            mouthType4();
            break
        case 5:
            normalMouth()
            $('#dnaMouthShapeCode').html('Flash Crash')
            mouthType5();
            break
        case 6:
            normalMouth()
            $('#dnaMouthShapeCode').html('ITS OVER 9000')
            mouthType6();
            break
        case 7:
            normalMouth()
            $('#dnaMouthShapeCode').html('RARE') 
            mouthType7();           
            break
    }


}

function normalMouth() {
    $('#mouthArea').css('height', '50px')
    $('#mouthArea').css('width', '130px')
    $('#mouthArea').css('top', '36px')
    $('#mouthArea').css('border-radius', '20% 20% 50% 50%')
    $('#leftArm').removeClass("leftArmUpClass")
    $('#rightArm').removeClass("rightArmUpClass")
    $('#leftArm').addClass("leftArmPosition");
    $('#rightArm').addClass("rightArmPosition");
}

function mouthType2() {
    $('#mouthArea').css('top', '56px')    
    $('#mouthArea').css('height', '20px') 
}

function mouthType3() {    
    $('#mouthArea').css('height', '65px')
    $('#mouthArea').css('top', '32px')
}

function mouthType4() {    
    $('#mouthArea').css('width', '90px')      
}

function mouthType5() {
    $('#mouthArea').css('height', '44px')    
    $('#mouthArea').css('border-radius', '10% 10% 10% 10%') 
}

function mouthType6() {    
    $('#mouthArea').css('height', '64px')
    $('#mouthArea').css('width', '156px')
    $('#mouthArea').css('top', '28px') 
    
    
    $('#leftArm').removeClass("leftArmPosition");
    $('#rightArm').removeClass("rightArmPosition"); 
    
    $('#leftArm').addClass("leftArmUpClass")
    $('#rightArm').addClass("rightArmUpClass")
}

function mouthType7() {    
    $('#mouthArea').css('height', '10px')
    $('#mouthArea').css('width', '40px')
    $('#mouthArea').css('top', '80px')
}



function animationForMonkey(num) {

    $('#dnaAnimation').html(num)
    switch (num) {
        case 1:
            withoutAnimation()
            $('#dnaAnimationCode').html('Basic')
            break
        case 2:
            withoutAnimation()
            $('#dnaAnimationCode').html('Wiggle ')
            animationType2();
            break           
        case 3:
            withoutAnimation()
            $('#dnaAnimationCode').html('Big Head')
            animationType3();
            break
        case 4:
            withoutAnimation()
            $('#dnaAnimationCode').html('Bullrun')
            animationType4();
            break
        case 5:
            withoutAnimation()
            $('#dnaAnimationCode').html('Ghost')
            animationType5();
            break
        case 6:
            withoutAnimation()
            $('#dnaAnimationCode').html('ITS OVER 9000')
            animationType6();
            break
        case 7:
            withoutAnimation()
            $('#dnaAnimationCode').html('RARE') 
            animationType7();           
            break
    }
}

function withoutAnimation() {

    if ($('#leftArm').hasClass("leftArmUpClass") == false) {
        $('#leftArm').addClass("leftArmPosition");
        $('#rightArm').addClass("rightArmPosition");
    } 

    $('#monkey').removeClass("jumpingClass");
    $('#monkey').removeClass("fadingClass");
    $('#mHead').removeClass("wigglingClass"); 
    $('#mHead').removeClass("growingAndShrinkingClass");
    $('#mHeadTop').removeClass("growingAndShrinkingClass");
    $('.pupil').removeClass("growingAndShrinkingClass");
    $('#leftArm').removeClass("movingLeftArmClass");
    $('#rightArm').removeClass("movingRightArmClass");

    console.log("clearing")    
}

function animationType2() {
    $('#mHead').addClass("wigglingClass"); 
}

function animationType3() {    
    $('#mHead').addClass("growingAndShrinkingClass");
}

function animationType4() {
    $('#monkey').addClass("jumpingClass");    
}

function animationType5() {
    $('#monkey').addClass("fadingClass");     
}

function animationType6() {     
    $('#mHead').addClass("growingAndShrinkingClass");
    $('#mHeadTop').addClass("growingAndShrinkingClass");
    $('#monkey').addClass("jumpingClass");
    $('.pupil').addClass("growingAndShrinkingClass");

    $('#leftArm').removeClass("leftArmPosition");
    $('#rightArm').removeClass("rightArmPosition");

    $('#leftArm').addClass("movingLeftArmClass");
    $('#rightArm').addClass("movingRightArmClass"); 
}

function animationType7() {  
    $('#leftArm').removeClass("leftArmPosition");
    $('#rightArm').removeClass("rightArmPosition");

    $('#leftArm').addClass("movingLeftArmClass");
    $('#rightArm').addClass("movingRightArmClass");
}

