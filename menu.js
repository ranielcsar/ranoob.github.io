const openMenu = (open) => {

   open ?
   document.querySelector('.menu-container').innerHTML = mobileMenu() : 
   document.querySelector('.menu-container').innerHTML = menuIcon();

}

const menuIcon = () => (
   `
      <div class="menu-icon" onclick="openMenu(true)">
         <div class="menu-icon__bar"></div>
         <div class="menu-icon__bar"></div>
         <div class="menu-icon__bar"></div>
      </div>
   `
);

const mobileMenu = () => (
   `
      <div class="menu">
         <div class="menu__close-button" onclick="openMenu(false)"></div>

         <nav class="menu__links">
            <a target="_blank" href="https://github.com/ranielcsar">Github</a>          
            <a target="_blank" href="https://www.linkedin.com/in/raniel-c%C3%A9sar-5bb0991a3/">Linkedin</a>
         </nav>

         <footer> 
            <div class="hearts">
               <div class="half-heart"></div>
               <div class="heart"></div>
               <div class="heart"></div>
            </div>
         </footer>
      </div>
   `
);

const desktopMenu = () => (
   `
      <div class="menu__desktop">

         <nav class="menu__desktop--links">
            <a target="_blank" href="https://github.com/ranielcsar">Github</a>          
            <a target="_blank" href="https://www.linkedin.com/in/raniel-c%C3%A9sar-5bb0991a3/">Linkedin</a>
         </nav>
         
      </div>
   `
);

const init = () => {
   let menu = window.innerWidth > 760 ? desktopMenu() : menuIcon();

   document.querySelector('.menu-container').innerHTML = menu;
}

window.addEventListener('resize', init);

init();
