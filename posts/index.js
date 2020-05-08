const botaoVoltar = document.querySelector('.btn-voltar');
const botaoTopo = document.querySelector('#voltar-topo');

const fixarBotao = () => {
   const condicaoScroll = document.body.scrollTop > 350 || document.documentElement.scrollTop > 350;

   if (window.innerWidth > 1000)
   { 
      if (condicaoScroll)
      {
         botaoVoltar.classList.add('fixar');
      } else {
         botaoVoltar.classList.remove('fixar');
      }
   } else {

      if (condicaoScroll)
      {
         botaoTopo.classList.add('btn-voltar-topo');
      } else {
         botaoTopo.classList.remove('btn-voltar-topo');
      }
   }
   
}

window.onscroll = function() { fixarBotao() };