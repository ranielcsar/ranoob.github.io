window.onscroll = function() { scrollFunction() };

function scrollFunction() {

   if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) 
   {
      document.querySelector(".cabecalho").style.padding = "1.25em";      
      document.querySelector(".cabecalho").style.backgroundColor = "#24252A";
      document.querySelector(".titulo-site").style.fontSize = "2.25em";
      document.querySelector(".menu-link").style.marginTop = "1.9375rem";
   } else {
      document.querySelector(".cabecalho").style.padding = "2.6em";      
      document.querySelector(".cabecalho").style.backgroundColor = "transparent";
      document.querySelector(".titulo-site").style.fontSize = "2.7em";
      document.querySelector(".menu-link").style.marginTop = "2.19rem";
   }
}