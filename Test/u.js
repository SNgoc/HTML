$(function() {
    $('a.scroll').on('click',function ( event ) {
      event.preventDefault();
  
      var $anchor  = $(this),
          $section = $anchor.attr('data-section');
      
      if ( $section === '2' || $section === '3' ) {
        $('#wrap .wrap-inner').addClass('goto-' + $section);
      } else {
        $('#wrap .wrap-inner').removeClass('goto-2 goto-3');
      }
    });
  });
function validate(){
  var a= document.getElementById("fname").value;
  var b=document.getElementById("pass").value;
  var c= document.getElementById("memai").value;
  var d=document.getElementById("confirm").value;

  if( a== ''){
    alert("Please enter your name!");
    return false;
  }
 
if( b== '')
}