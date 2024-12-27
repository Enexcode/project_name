
// Home page Slick Slider 
$('.slider_main').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
  });
// Home Movie tabs Slider 
$(document).ready(function() {
  
 
 
  $('.movie_slider_main').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.arrow_left'),
    nextArrow: $('.arrow_right'),
  });
  $('.movie_slider_main2').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.arrow_left2'),
    nextArrow: $('.arrow_right2'),
  });
  $('.movie_slider_main3').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.arrow_left3'),
    nextArrow: $('.arrow_right3'),
  });
  $('.movie_slider_main4').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.arrow_left4'),
    nextArrow: $('.arrow_right4'),
  });
  $('.movie_slider_main5').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.arrow_left5'),
    nextArrow: $('.arrow_right5'),
  });
  $('.movie_slider_main6').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.arrow_left6'),
    nextArrow: $('.arrow_right6'),
  });
  $('.movie_slider_main7').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.arrow_left7'),
    nextArrow: $('.arrow_right7'),
  });


  $('.movie_slider_main8').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.arrow_left8'),
    nextArrow: $('.arrow_right8'),
  });

 

  


  



});



document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const fileDisplayArea = document.getElementById('fileDisplayArea');
  const fileName = document.getElementsByClassName('filename');
  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("showfilename").innerHTML = file.name;
      fileName.textContent = file.name;

      fileDisplayArea.style.display = 'block';
    }

    reader.readAsDataURL(file);
  } else {
    fileDisplayArea.style.display = 'none';
  }

 



});

$(document).ready(function(){
    
  $("#showPanel").click(function(){
      $("#panel").show();
  });
  
  $("#hidePanel").click(function(){
      $("#fileDisplayArea").hide();
  });

});

