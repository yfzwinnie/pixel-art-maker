'use strict'

// Creating multiple div tags to ex24and canvas
var canvasContainer = $("#wrapper");
var count = 2400;
for (var i=0; i<count; i++) {
   canvasContainer.append("<div class='box'></div>");
}

function showVal(newVal){
    $("#current_color").css('backgroundColor', newVal);
}

// Creating multiple div tags for different colors
var colorChoices = ['LightPink','LightCoral','IndianRed','Salmon','Coral','Gold','Orange','Moccasin','Khaki','DarkKhaki','BurlyWood','GoldenRod','SandyBrown','DarkSeaGreen','ForestGreen','LightGreen','MediumSeaGreen','MediumSpringGreen','PaleGreen','LightCyan','CadetBlue','DarkCyan','Teal','LightBlue','CornflowerBlue', 'DodgerBlue', 'DeepSkyBlue', 'Blue', 'DarkSlateBlue', 'MediumPurple', 'LightGrey', 'Grey','White','Black'];
var paletteContainer = $("#palette");
for(var j=0; j <colorChoices.length; j++) {
  paletteContainer.append("<div class='colors'></div>");
  $('.colors').each(function(j, element) {
    $(element).css('backgroundColor', colorChoices[j]);
  });
};

// Creating event listener to save the brush color when clicked
var brush;

$('.colors').on("click", function() {
  $("body").css('cursor','url(images/paintbrush-png-20.png),auto');
  $("#eraser").css('visibility', 'visible');
  brush = $(event.target).css("background-color");
  showVal(brush);
});

$('#color_wheel').change(function() {
  $("body").css('cursor','url(images/paintbrush-png-20.png),auto');
  $("#eraser").css('visibility', 'visible');
  brush = $("#color_wheel").val();
  showVal(brush);
});

// Creating a paint function for the canvas
function paint(color) {
  $("body").css('cursor','url(images/paintbrush-png-20.png),auto');
  var isDown = false;   // Tracks status of mouse button

  $(document).mousedown(function() {
    isDown = true;      // When mouse goes down, set isDown to true
  })
  .mouseup(function() {
    isDown = false;    // When mouse goes up, set isDown to false
  });
  $('.box').on("mouseenter click", function (e) {
    if(isDown === true || e.type === "click") {
      event.target.style.backgroundColor = brush;
      event.target.style.border = brush;
    };
  });
};

// Creating event listener for the paint and eraser button
$(document).ready(function(){
  paint();
  $('#eraser').click(function () {
    brush = '';
    $("body").css('cursor','url(images/eraser.png),auto');
  });
});

// Event listener for reset button
$('#reset').click(function () {
  $('.box').css('backgroundColor', '');
  $('.box').css('border', '1px solid #DDDDDD');
});
