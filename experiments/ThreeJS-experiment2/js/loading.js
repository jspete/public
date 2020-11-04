/*

Loading and GUI logic

*/

$(document).ready(function() {

  setTimeout(function () {
    //$("main#homepage").addClass('hidden');
    //$("main#homepage").toggleClass('Go');
      $("section#bg").addClass('fade');
  }, 2000);
    
setTimeout(function () {
    //$("main#homepage").addClass('hidden');
    //$("main#homepage").toggleClass('Go');
      $("section#bg").addClass('hidden');
  }, 7000);

    $('burger').click(function() {
  $("nav#menu").toggleClass('show');

});
