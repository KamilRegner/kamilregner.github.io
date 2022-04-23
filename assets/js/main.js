$(document).ready(() => {
   menu();
   // gallery();
});

function menu() {
   $("#button_menu").on("click", () => {
      $("#button_menu").toggleClass("active");
      $("#section_menu").toggleClass("active");
   });
}

function gallery() {
   setInterval(() => {
      opacityDown('gallery');

      let src = "/assets/image/webp/gallery/0";
      src += getRandomArbitrary(1, 9);
      src += ".webp";
      document.getElementById('gallery').setAttribute("src", src);
      console.log(src);

      opacityUp('gallery');
   }, 5000);
}

function opacityUp(id) {
   for (let index = 0; index < 100; index++) {
      document.getElementById(id).style.opacity = index;
      console.log(index);
      setTimeout(()=>{}, 100);
   }
}

function opacityDown(id) {
   for (let index = 100; index > 0; index--) {
      document.getElementById(id).style.opacity = index;
      setTimeout(()=>{}, 100);
   }
}

function getRandomArbitrary(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}
