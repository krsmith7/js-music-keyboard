$(document).ready( function() {
  // your code here
  // const keys = []
  // const note = $(this.html)
  // $('.note c').click

  // $('body').click(function(event))
   // $('.instrument').on('click', 'button', function(event) {
      $('.instrument').on('click', 'button',
      function() {
        const note = $(this).html();
        console.log(`played ${note}`);
        $(`#${note}Audio`)[0].play();
   }
 );

 $

});
