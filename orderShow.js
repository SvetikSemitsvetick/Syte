let divList = document.querySelectorAll(".itm");

divList.forEach(function(div) {
    div.addEventListener("mouseenter", function() {
        this.classList.add("active"); 
   });
});

let iList = document.querySelectorAll(".arrow");

iList.forEach(function(i) {
    i.addEventListener("mouseenter", function() {
        this.classList.add("active");
    });
});
