$(document).ready( function() {

   $('.botao-menu').click( function(e) {
      var el = $(this);

      $('.navbar-itens').toggleClass('navbar-mostrar');

      $('.navbar-itens').toggle(200);

      $('.navbar-itens-direita').css('display', 'flex');
   });

});