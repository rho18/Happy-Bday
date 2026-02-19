function checkAnswer() {

  var correctAnswer = "chopper";  // ✨ Chopper

  var userAnswer = document
    .getElementById("answer")
    .value
    .toLowerCase();

  if (userAnswer === correctAnswer) {
    window.location.href = "letter.html";
  } else {
    document.getElementById("result").innerHTML =
      "Try again baby 😝";
  }
}

function nextPage() {
  window.location.href = "birthday.html";
}


