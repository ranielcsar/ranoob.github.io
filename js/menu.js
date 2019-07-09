$(document).ready( function() {

   $('.botao-menu').click( function(e) {
      var el = $(this);

      if (el.text() == '⇊')
      {
         el.text('⇈');
      } else {
         el.text('⇊');
      }

      $('.navbar-itens a').toggle(200);
   });

});