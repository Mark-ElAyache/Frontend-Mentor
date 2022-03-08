function expandAnswer(n) {
    let answer = document.getElementsByClassName("answer")[n];
    let question = document.getElementsByClassName("question")[n];
    let arrow = document.getElementsByClassName("arrow")[n];

    answer.classList.toggle("expand-answer");
    question.classList.toggle("expanded-question");
    arrow.classList.toggle("rotate-arrow");
}