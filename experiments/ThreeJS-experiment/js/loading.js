/*

Loading and GUI logic

*/

$(document).ready(function() {

  setTimeout(function() {
    //$("main#homepage").addClass('hidden');
    //$("main#homepage").toggleClass('Go');
    $("#load-dots").addClass('fade-out');
  }, 3000);

  setTimeout(function() {
    //$("main#homepage").addClass('hidden');
    //$("main#homepage").toggleClass('Go');
    $("section#loading-screen").addClass('fade-out');
  }, 4000);

  setTimeout(function() {
    //$("main#homepage").addClass('hidden');
    //$("main#homepage").toggleClass('Go');
    $("section#loading-screen").addClass('hidden');
  }, 6000);

  /*
      $('burger').click(function() {
    $("nav#menu").toggleClass('show');

  */

  /*Camera*/
  $(".camera1").click(function() {
    if (movingcamera != 2) {
      movingcamera = 2;
    } else {
      movingcamera = 0;
    }
  });

});

var timePepito;
function ClearConsole() {
  timePepito = setTimeout(ClearCon, 2000);
}

function ClearConsole() {
  console.clear();
  console.log("Console cleared");
}
