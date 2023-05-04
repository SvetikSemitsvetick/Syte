
// Получаем список всех элементов <div> на странице
let divList = document.querySelectorAll(".itm");

// Добавляем обработчик события "mouseenter" для каждого элемента <div>
divList.forEach(function(div) {
    div.addEventListener("mouseenter", function() {
        this.classList.add("active"); // Добавляем класс "active" к текущему элементу
    });
});

let iList = document.querySelectorAll(".arrow");
//let c = 0
// Добавляем обработчик события "mouseenter" для каждого элемента <div>
iList.forEach(function(i) {
    i.addEventListener("mouseenter", function() {
        this.classList.add("active");
        //c += 1 // Добавляем класс "active" к текущему элементу
    });
});

//let itm = document.querySelector('.itm')

//let $promise{c} = new Promise((resolve, reject) => {
//    divList[c].addEventListener('mouseover', () => {
//        resolve
//    })
//})
