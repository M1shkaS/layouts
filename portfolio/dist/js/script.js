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

   //!Forms
   const forms = document.querySelectorAll('form')

   const postData = async function (url, data) {
      const res = await fetch(url, {
         method: 'POST',
         body: data,
         headers: { 'Content-type': 'application/json' }
      });

      if (!res.ok) {
         throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
      }

      return await res.text();
   }

   forms.forEach(form => {
      form.addEventListener('submit', event => {
         event.preventDefault();

         new Toast({
            title: 'Подождите',
            text: 'Сообщение отправляется',
            theme: 'warning',
            autohide: true,
            interval: 2000
         });

         const formData = new FormData(form);
         const toastWarning = document.querySelector('.toast_warning');

         postData('../dist/mailer/smart.php', JSON.stringify(Object.fromEntries(formData.entries())))
            .then(data => {
               toastWarning.remove();

               new Toast({
                  title: 'Отлично',
                  text: 'Сообщение отправлено',
                  theme: 'success',
                  autohide: true,
                  interval: 5000
               });
            })
            .catch((error) => {

               toastWarning.remove();
               console.log(error);
               new Toast({
                  title: 'Ошибка',
                  text: 'Что-то пошло не так',
                  theme: 'danger',
                  autohide: true,
                  interval: 5000
               });
            })
            .finally(() => form.reset());
      })
   })


})