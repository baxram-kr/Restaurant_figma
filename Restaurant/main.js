        /* ------------- PRELOADER ------------- */
        let loader = document.querySelector('.preloader');

        window.addEventListener('load', function() {
            loader.style.display = 'none';
        })
        
        /* ------------- SCROLL TO TOP BUTTON CHANGE ------------- */

        function showScrollToTopBtn() {
            if (document.body.scrollTop > 400 || 
            document.documentElement.scrollTop > 400) {
                document.getElementById('scrollTop').style.opacity = '1';
            } else {
                document.getElementById('scrollTop').style.opacity = '0';
            }
        }
        window.addEventListener('scroll', showScrollToTopBtn);

        /* ------------- CHANGE HEADER ON SCROLL ------------- */
        let nav = document.querySelector('nav');

        function changeHeader() {
            if (document.body.scrollTop > 145 || 
            document.documentElement.scrollTop > 145) {
                nav.classList.add('change-header');
            }                  
            else {
                 nav.classList.remove('change-header');
            }
        }
        window.addEventListener('scroll', changeHeader);

        
        /* ------------- TOGGLE NAVIGATION ------------- */
        let navMenu = document.getElementById('nav-menu');
        let navigation = document.querySelector('nav');
        let navToggle = document.getElementById('nav-toggle');
        let navClose = document.getElementById('nav-close');

        function showNav() {
            navMenu.style.display = 'flex';
            navigation.style.height = '320px';
        }
        function hideNav() {
            navMenu.style.display = 'none';
            navigation.style.height = '80px';
        }

        /* HIDE NAV WHEN GO TO SECTION */
        const navLinks = document.querySelectorAll('.nav-list li a');

        function removeNav() {
            if ($(window).width() < 880) {
                navMenu.style.display = 'none';
                navigation.style.height = '80px';
            }
        }
        navLinks.forEach(link => link.addEventListener('click', removeNav))

      
        /* ----------------- SWIPER ----------------- */
        const swiper = new Swiper('.swiper', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: 'true',
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: 'true',
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                // when window width is >= 320px
                880: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                // when window width is >= 570px
                570: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    width: 480
                }
            }
        });

        /* ----------------- SCROLL TO ----------------- */
        function scrollToTop() {
            window.scrollTo(0, 0);
        }

        function scrollToAbout() {
            //   window.scrollTo(0, 620);
            var about = document.querySelector('.about');
            about.scrollIntoView();
        }         

        /* ----------------- SCROLL REVEAL ----------------- */
        const inViewport = (entries, observer) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
            });
        }

        const Obs = new IntersectionObserver(inViewport);
        const obsOptions = {};

        const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
        ELs_inViewport.forEach(EL => {
            Obs.observe(EL, obsOptions);
        });

        /* ----------------- TOGGLE DAY/NIGHT MODE ----------------- */
        let moon = document.getElementById('moon');
        let sun = document.getElementById('sun');
        let root = document.querySelector(':root');

        function changeToDark() {
            moon.style.visibility = 'hidden';
            moon.style.opacity = '0';
            sun.style.visibility = 'visible';
            sun.style.opacity = '1';

            // RESET PROPERTIES
            root.style.setProperty('--text-color', '#fff');
            root.style.setProperty('--dark-color', '#fda8e3');
            root.style.setProperty('--bg-color', '#610580');
            root.style.setProperty('--hover-color', '#00BCD4');
            root.style.setProperty('--header-change-color', '#9d19c9d7');
            root.style.setProperty('--bg-color-header', '#610580d3');
        }

        function changeToLight() {
            moon.style.visibility = 'visible';
            moon.style.opacity = '1';
            sun.style.visibility = 'hidden';
            sun.style.opacity = '0';

            // RESET PROPERTIES
            root.style.setProperty('--text-color', '#000');
            root.style.setProperty('--dark-color', '#450050');
            root.style.setProperty('--bg-color', '#eba4d4');
            root.style.setProperty('--hover-color', '#049395');
            root.style.setProperty('--header-change-color', '#b17ca0d7');
            root.style.setProperty('--bg-color-header', '#eba4d4d3');
        }