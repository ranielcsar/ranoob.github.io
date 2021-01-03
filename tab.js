function switchTab(evt, id) {
   var tabcontent, tablinks;

   tabcontent = document.getElementsByClassName("tabcontent");
   for (let content of tabcontent) {
      content.style.display = "none";
   }

   tablinks = document.getElementsByClassName("tablinks");
   for (let link of tablinks) {
      link.className = link.className.replace(" active", "");
   }

   document.getElementById(id).style.display = "flex";
   evt.currentTarget.className += " active";
} 