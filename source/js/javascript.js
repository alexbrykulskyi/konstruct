$(document).ready(function() {

  $('.buttonToggle').on('click', function(){
    $('.navPopupWrapper').toggleClass('popupOpen'),
    $('.buttonToggle').toggleClass('buttonToggle--active'),
    $('.page').toggleClass('page--noScroll')

  });
});





