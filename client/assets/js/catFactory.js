
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




//###################################################
//Functions below will be used later on in the project
//###################################################
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
            $('#dnaEyeShapeCode').html('Hyper')
            eyesType6();
            break
        case 7:
            normalEyes()
            $('#dnaEyeShapeCode').html('RARE')            
            break
    }
}

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
            $('#dnaMouthShapeCode').html('Hyper')
            mouthType6();
            break
        case 7:
            normalMouth()
            $('#dnaMouthShapeCode').html('RARE')            
            break
    }
}

function normalMouth() {
    $('#mouthArea').css('height', '50px')
    $('#mouthArea').css('width', '130px')
    $('#mouthArea').css('top', '36px')
    $('#mouthArea').css('border-radius', '20% 20% 50% 50%')

    $('#armsArea').css('top', '62px')    
    $('#leftArm').css('transform', 'rotate(-9deg)')
    $('#leftArm').css('right', '16px')    
    $('#rightArm').css('transform', 'rotate(9deg)')
    $('#rightArm').css('left', '16px') 
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

    $('#armsArea').css('top', '-160px')
    $('#leftArm').css('transform', 'rotate(-20deg)')
    $('#leftArm').css('right', '110px')
    $('#rightArm').css('transform', 'rotate(20deg)')
    $('#rightArm').css('left', '110px')
}

function normalEyes() {
    $('.eyes').css('width', '40px')
    $('.eyes').css('top', '10px')
    $('.pupil').css('width', '12px')
    $('.pupil').css('height', '15px')
    $('.pupil').css('top', '24px')    
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
    console.log("eyesType6")
}