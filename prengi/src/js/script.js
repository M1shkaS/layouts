window.addEventListener('DOMContentLoaded', () => {
   const slider = tns({
      container: '.carousel__inner',
      items: 1,
      slideBy: 'page',
      speed: 500,
      autoplay: false,
      controls: false,
      // nav: false,
      navContainer: '.nav-carousel',
      navAsThumbnails: true
   });

   document.querySelector('.prev').addEventListener('click', () => {
      slider.goTo('prev');
   });

   document.querySelector('.next').addEventListener('click', () => {
      slider.goTo('next');
   });

   // const carouselTabs = document.querySelectorAll('.nav-carousel-tab');
   // const carouselItems = document.querySelectorAll('.tns-item');

   // carouselTabs.forEach(tab => {
   //    tab.addEventListener('click', (e) => {
   //       const target = e.target;

   //       carouselTabs.forEach((item, idx) => {
   //          if (item == target) {
   //             carouselItems.forEach(slide => {
   //                slide.classList.remove('tns-slide-active')
   //             })
   //             carouselItems[idx].classList.add('.tns-slide-active')
   //          }
   //       })

   //    })
   // })
})