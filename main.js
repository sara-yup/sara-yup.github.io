$(document).ready(function(){
  $('.header').height($(window).height());
  
  // Toggle navigation upon clicking the hambürger button
  $('.navbar-toggler')
    .click(function () {
        $('.navbar-collapse').toggleClass('show')
    }
  );
})
