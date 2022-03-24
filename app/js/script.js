console.log("javascript loaded");

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