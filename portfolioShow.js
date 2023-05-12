
let divPortfolio = document.querySelectorAll(".card-portfolio");

divPortfolio.forEach(function(div) {
    div.addEventListener("mouseenter", function() {
        this.classList.add("active");
    });
});

divPortfolio.forEach(function(div) {
    div.addEventListener("mouseleave", function() {
        this.classList.remove("active");
    });
});
