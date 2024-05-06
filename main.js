let minus= document.getElementById("minus");
let plus = document.getElementById("plus");
let answer = document.getElementById("answer2");
document.getElementById("plus").addEventListener("click", function(){
    showAnswer();
})

function showAnswer(){
    minus.classList.remove("hidden");
    answer.classList.remove("hidden");
    plus.classList.add("hidden");
}