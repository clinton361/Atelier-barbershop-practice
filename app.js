const nav = document.querySelector('.navbar');
const navBrand = document.querySelector('.navbar-brand');
const navIcons = document.getElementById('nav-icon');
const navLinks = document.querySelectorAll('.nav-link');

function scrollNav(){
    if(window.scrollY >= 86){
     nav.classList.add('bg-light');
     nav.classList.add('shadow-lg');
     navBrand.classList.add('black');
     navIcons.classList.add('black');
     navLinks.forEach(navLink => {
      navLink.classList.add('black');
     })
    }else if(window.scrollY < 86){
     nav.classList.remove('bg-light');
     nav.classList.remove('shadow-lg');
     navBrand.classList.remove('black');
     navIcons.classList.remove('black');
     navLinks.forEach(navLink => {
      navLink.classList.remove('black');
      // navLink.classList.add('white');
     })
    }
}

function scrollNavSmallScreen(){
    if(window.scrollY >= 86){
      nav.classList.add('bg-light');
      navBrand.classList.add('black');
      navIcons.classList.add('black');
      navLinks.forEach(navLink => {
      navLink.classList.add('black');
      })
   }else if(window.scrollY < 86){
      nav.classList.remove('bg-light');
      navBrand.classList.remove('black');
      navIcons.classList.remove('black');
   }
}

const mediaQuery = window.matchMedia('(min-width: 992px)');

function handleMediaQueryChange(e) {
    if (e.matches) {
        // Add the scroll event listener if the media query matches
        window.addEventListener('scroll', scrollNav);
    } else {
        // Remove the scroll event listener if the media query does not match
        window.removeEventListener('scroll', scrollNav);
        // Reset styles
        nav.classList.remove('bg-light');
        navBrand.classList.remove('black');
        navIcons.classList.remove('black');
        navLinks.forEach(navLink => {
            navLink.classList.remove('black');
            navLink.classList.add('white');
        });
    }
}

// Initial check
handleMediaQueryChange(mediaQuery);

// Listen for changes in the viewport size
mediaQuery.addEventListener('change', handleMediaQueryChange);


// For Toggling Menu icon
const burger = document.querySelector('.bi-list');

function iconToggler(){
  burger.classList.toggle('bi-x')
}





// For Animated Number on Scroll
const counters = document.querySelectorAll('.counter h3 span');
const container = document.getElementById('results');

let activated = false;

window.addEventListener("scroll", () => {
    if(
        pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false
    ){
        counters.forEach(counter => {
            counter.innerText = 0;

            let count = 0;

            function updateCount() {
                const target = parseInt(counter.dataset.count);

                if(count < target){
                    count = count + 3;

                    counter.innerText = count;

                    setTimeout(updateCount, 1);
                }else {
                    counter.innerText = target;
                }
            }
            updateCount();

            activated = true;
        });
    } else if(
        pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true
    ) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});