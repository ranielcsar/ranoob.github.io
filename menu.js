const abrirMenu = (abrir) => {

   abrir ?
   document.querySelector('.menu-container').innerHTML = menuMobile() : 
   document.querySelector('.menu-container').innerHTML = menuIcon();

}

const menuIcon = () => (
   `
      <div class="menu-icon" onclick="abrirMenu(true)">
         <div class="menu-icon__bar"></div>
         <div class="menu-icon__bar"></div>
         <div class="menu-icon__bar"></div>
      </div>
   `
);

const menuMobile = () => (
   `
      <div class="menu">
         <div class="menu__close-button" onclick="abrirMenu(false)"></div>

         <nav class="menu__links">
            <a target="_blank" href="https://github.com/ranielcsar">Github</a>          
            <a target="_blank" href="https://codepen.io/ranielcsar">Codepen</a>
            <a target="_blank" href="https://codesandbox.io/u/ranielcsar/sandboxes">CodeSandbox</a>  
         </nav>

         <footer> 
            <div class="coracoes">
               <div class="coracao-metade"></div>
               <div class="coracao"></div>
               <div class="coracao"></div>
            </div>
         </footer>
      </div>
   `
);

const menuDesktop = () => (
   `
      <div class="menu__desktop">

         <nav class="menu__desktop--links">
            <a target="_blank" href="https://github.com/ranielcsar">Github</a>          
            <a target="_blank" href="https://codepen.io/ranielcsar">Codepen</a>
            <a target="_blank" href="https://codesandbox.io/u/ranielcsar/sandboxes">CodeSandbox</a>  
         </nav>
         
      </div>
   `
);

const init = () => {
   let menu = window.innerWidth > 760 ? menuDesktop() : menuIcon();

   document.querySelector('.menu-container').innerHTML = menu;
}

window.addEventListener('resize', init);

init();
