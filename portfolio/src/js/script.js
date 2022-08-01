window.addEventListener('DOMContentLoaded', () => {
   //!Menu
   function openMenu(selectorMenu, activeClass) {
      const menu = document.querySelector(selectorMenu);
      menu.classList.add(activeClass);
      document.body.style.overflow = 'hidden';
   }
   function closeMenu(selectorMenu, activeClass) {
      const menu = document.querySelector(selectorMenu);
      menu.classList.remove(activeClass);
      document.body.style.overflow = '';
   }


   function menu(selectorBtnBurger, selectorMenu, selectorCloseMenu, activeClass) {
      const targetMenuBtn = document.querySelector(selectorBtnBurger),
         menu = document.querySelector(selectorMenu),
         btnCloseMenu = document.querySelector(selectorCloseMenu);

      targetMenuBtn.addEventListener('click', () => {
         openMenu(selectorMenu, activeClass);
      });

      btnCloseMenu.addEventListener('click', () => {
         closeMenu(selectorMenu, activeClass);
      });

      menu.addEventListener('click', (e) => {
         const target = e.target;

         if (target && target.classList.contains('menu__overlay')) {
            closeMenu(selectorMenu, activeClass)
         }
      });

      document.addEventListener('keydown', event => {
         if (event.code === 'Escape') closeMenu(selectorMenu, activeClass);;
      });

   }

   menu('.humburger', '.menu', '.menu__close', 'active');

   //!Present

   function setPresent(selectorPresents, selectorPresentLine) {
      const presents = document.querySelectorAll(selectorPresents),
         linePresent = document.querySelectorAll(selectorPresentLine);

      presents.forEach((item, idx) => {
         const present = item.textContent.replace(/\D/g, '');
         linePresent[idx].style.width = present + '%';
      })
   }

   setPresent(".skills__progress-percent", '.skills__progress-line span')


   //!scroll

   let anchors = document.querySelectorAll('nav a[href*="#"]');

   anchors.forEach(item => {
      item.addEventListener('click', function (e) {
         e.preventDefault();
         let anchorId = this.getAttribute('href');
         document.querySelector(anchorId).scrollIntoView({
            behavior: 'smooth', block: 'start'
         });
         closeMenu('.menu', 'active');
      })
   })


})