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
            <a href="#">Currículo</a>
            <a href="#">Contatos</a>  
            <a href="#">Github</a>          
         </nav>

         <div class="menu__footer">
            <div class="menu__footer-img"></div>
            <p>RANOOB</p>
            <p>2020 ©</p>
         </div>
      </div>
   `
);

const menuDesktop = () => (
   `
      <div class="menu__desktop">

         <nav class="menu__desktop--links">
            <a href="#">Currículo</a>
            <a href="#">Contatos</a>  
            <a href="#">Github</a>          
         </nav>
         
      </div>
   `
);

const init = () => {
   let menu = window.innerWidth > 760 ? menuDesktop() : menuIcon();

   document.querySelector('.menu-container').innerHTML = menu;
}

init();