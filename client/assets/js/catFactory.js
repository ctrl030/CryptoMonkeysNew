
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
    $('#mHeadLower, .ears').css('background', '#' + color)  //This changes the color of the cat
    $('#fourthGroupColorCode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}




//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
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

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
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



async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
