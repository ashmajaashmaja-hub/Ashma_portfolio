console.log("Welcome to Ashma's Portfolio!");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function() {
        console.log("Navigated to " + this.textContent);
    });
});