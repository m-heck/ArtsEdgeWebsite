console.log("javascript loaded");

/* ============= TOGGLE MENU ============= */
const navMenu = document.getElementById('navigation');
const navOpen = document.getElementById('open-menu');
const navClose = document.getElementById('close-menu');

/* shows menu */
if (navOpen) {
    navOpen.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navOpen.classList.add('hide-toggle');
    });
};

/* hides menu */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navOpen.classList.remove('hide-toggle');
    })
}

/* ============= HIDE MENU ON LINK-CLICK ============= */
const links = document.querySelectorAll('.menu-icon');

links.forEach(n => console.log(n));

function hideMenu() {
    const navMenu = document.getElementById('navigation');
    navMenu.classList.remove('show-menu');
    navOpen.classList.remove('hide-toggle');
}

links.forEach(n => n.addEventListener('click', hideMenu));

/* ============= TRANSITIONS ============= */
/* Fade in */

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  //threshold: 1, // waits for the entire thing to be in the screen
  //rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

/* slide in */
const sliders = document.querySelectorAll('.slide-in');
sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})

/* ============= PARALLAX ============= */
if (true) {
    console.log('large screen');
    let title_text = document.getElementById('title-text');

    window.addEventListener('scroll', function() {
      var value = window.scrollY;

      title_text.style.left = value * .25 + 'px';
    })
  }