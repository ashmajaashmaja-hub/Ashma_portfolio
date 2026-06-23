document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();

document.querySelector(this.getAttribute('href'))
.scrollIntoView({
behavior: 'smooth'
});
});
});

window.addEventListener('scroll', () => {

const cards = document.querySelectorAll(
'.skill-card,.achievement-card,.interest-card,.timeline-card'
);

cards.forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});

});
