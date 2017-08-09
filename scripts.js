'use strict'

// Creating multiple div tags to expand canvas
var canvasContainer = $("#wrapper");
var count = 4000;
for (var i=0; i<count; i++) {
   canvasContainer.append("<div class='box'></div>");
}

// Creating multiple div tags for different colors
var colorChoices = ['LightPink','LightCoral','IndianRed','Salmon','Coral','Gold','Orange','Moccasin','Khaki','DarkKhaki','BurlyWood','GoldenRod','SandyBrown','DarkSeaGreen','ForestGreen','LightGreen','MediumSeaGreen','MediumSpringGreen','PaleGreen','LightCyan','CadetBlue','DarkCyan','Teal','LightBlue','CornflowerBlue', 'DodgerBlue', 'DeepSkyBlue', 'Blue', 'DarkSlateBlue', 'MediumPurple', 'LightGrey', 'Grey','White','Black'];
var paletteContainer = $("#palette");
for(var j=0; j <colorChoices.length-2; j++) {
  paletteContainer.append("<div class='colors'></div>");
  $('.colors').each(function(j, element) {
    $(element).css('backgroundColor', colorChoices[j]);
  });
};

// Creating event listener to save the brush color when clicked
var brush;

$('.colors').on("click", function() {
  brush = $(event.target).css("background-color");
});

// Creating event listener for the canvas
$('.box').on("click", function () {
  event.target.style.backgroundColor = brush;
});
