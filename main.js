let items = document.querySelectorAll(".accordion");

items.forEach( item => {
    item.addEventListener('click', function(){
        const answers = item.querySelector(".answer");
        answers.classList.toggle("hidden");

        const questions = item.querySelector(".question");
        const textColor = questions.querySelector("p");
        textColor.classList.toggle("text-gray-600")
        
        const plus = item.querySelector(".plus");
        const minus = item.querySelector(".minus");
        plus.classList.toggle("hidden");
        minus.classList.toggle("hidden");

    })
});