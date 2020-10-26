
var colors = Object.values(allColors())

var defaultDNA = {
  "headcolor" : 12,
  "mouthcolor" : 14,
  "eyescolor" : 13,
  "earscolor" : 11,
  
  //Cattributes
  "eyesShape" : 1,
  "decorationPattern" : 1,
  "decorationMidcolor" : 13,
  "decorationSidescolor" : 13,
  "animation" :  1,
  "lastNum" :  1
}

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headcolor);
  $('#dnamouth').html(defaultDNA.mouthcolor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
    
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
  firstGroupColor(colors[dna.headcolor],dna.headcolor)
  $('#headColorSlider').val(dna.headcolor)

  secondGroupColor(colors[dna.mouthcolor],dna.mouthcolor)
  $('#mouthColorSlider').val(dna.mouthcolor)

  thirdGroupColor(colors[dna.eyescolor],dna.eyescolor)
  $('#eyesColorSlider').val(dna.eyescolor)

  fourthGroupColor(colors[dna.earscolor],dna.earscolor)
  $('#earsColorSlider').val(dna.earscolor)
   

    
    
   

}

// Changing monkey colors
$('#headColorSlider').change(()=>{
    var colorVal = $('#headColorSlider').val()
    firstGroupColor(colors[colorVal],colorVal)
})

$('#mouthColorSlider').change(()=>{
  var colorVal = $('#mouthColorSlider').val()
  secondGroupColor(colors[colorVal],colorVal)
})


$('#eyesColorSlider').change(()=>{
  var colorVal = $('#eyesColorSlider').val()
  thirdGroupColor(colors[colorVal],colorVal)
})


$('#earsColorSlider').change(()=>{
  var colorVal = $('#earsColorSlider').val()
  fourthGroupColor(colors[colorVal],colorVal)
})


