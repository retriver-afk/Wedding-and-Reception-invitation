console.log("Weeding website loaded sucessfully");
/* =========================
   PHASE 3.11 - SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    '.details, .location, .rsvp, .final-message'
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add('reveal');
    revealObserver.observe(element);
});