window.addEventListener('DOMContentLoaded', () => {
   const slider = tns({
      container: '.carousel__inner',
      items: 1,
      slideBy: 'page',
      speed: 500,
      autoplay: true,
      controls: false,
      autoplayButtonOutput: false,
      navContainer: '.nav-carousel',
      navAsThumbnails: true
   });

   document.querySelector('.prev').addEventListener('click', () => {
      slider.goTo('prev');
   });

   document.querySelector('.next').addEventListener('click', () => {
      slider.goTo('next');
   });


})