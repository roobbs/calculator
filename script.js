let red = document.querySelectorAll(".red");
red.forEach(btn => {
    btn.addEventListener("mouseenter", ()=> btn.style.backgroundColor = "#ff6c6c");
    btn.addEventListener("mouseleave", ()=> btn.style.backgroundColor = "");
});

let symbol = document.querySelectorAll(".symbol");
symbol.forEach(btn => {
    btn.addEventListener("mouseenter", ()=> btn.style.backgroundColor = "#6c6cff");
    btn.addEventListener("mouseleave", ()=> btn.style.backgroundColor = "");
});

let equal = document.querySelector(".lastBtn");
equal.addEventListener("mouseenter", ()=> equal.style.backgroundColor = "#37eb91");
equal.addEventListener("mouseleave", ()=> equal.style.backgroundColor= "");

let numberBtn = document.querySelectorAll(".number");
numberBtn.forEach(btn => {
    btn.addEventListener("mouseenter", ()=> btn.style.backgroundColor = "#00ccff");
    btn.addEventListener("mouseleave", ()=> btn.style.backgroundColor = "");
});
//ui 
