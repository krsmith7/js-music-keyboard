$(document).ready( function() {
    // Play note by button
    $('.instrument').on('click', 'button',
    function() {
      const note = $(this).html();
      // console.log(`played ${note}`);
    $(`#${note}Audio`)[0].play();
   });

   // Play note by letter key pressed
   $('body').keydown(function(event) {
      const note = event.key
     $(`#${note}Audio`)[0].play();
   });

});
