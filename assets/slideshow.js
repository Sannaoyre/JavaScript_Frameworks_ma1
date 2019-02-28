jQuery(document).ready(function ($) {

  //Autoplay slider
    setInterval(function () {
        moveRight();
    }, 3000);

  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  
  //Shows one image at the time
  $('#slider').css({ width: slideWidth, height: slideHeight });
    
  //Makes the images slide nicely 
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    


  //Left controller 
    function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };

    //The moveLeft function runs when you click on the left controller
       $('p.control__prev').click(function () {
          moveLeft();
      });



  //Right controller
    function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };

    //The moveRight function runs when you click on the left controller
      $('p.control__next').click(function () {
          moveRight();
      });



  //Make text show on image
  $(function(){
    $('li p').addClass('slider__text');

  });
   


});    
