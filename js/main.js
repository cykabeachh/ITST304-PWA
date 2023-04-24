const words = [
    "javascript",
    "html",
    "css",
    "jquery",
    "react",
    "angular",
    "vue",
    "node",
    "express",
    "mongodb",
  ];
  
  let word, scrambledWord;
  
  const wordDisplay = document.getElementById("word");
  const answerInput = document.getElementById("answer");
  const submitButton = document.getElementById("submit");
  const resultDisplay = document.getElementById("result");
  const newWordButton = document.getElementById("new-word");
  
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  function scrambleWord(word) {
    const letters = word.split("");
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join("");
  }
  
  function updateWordDisplay() {
    wordDisplay.innerHTML = scrambledWord;
  }
  
  function checkAnswer() {
    const answer = answerInput.value.toLowerCase();
    if (answer === word) {
      resultDisplay.innerHTML = "Correct!";
      resultDisplay.classList.add("correct");
      resultDisplay.classList.remove("incorrect");
    } else {
      resultDisplay.innerHTML = "Incorrect!";
      resultDisplay.classList.add("incorrect");
      resultDisplay.classList.remove("correct");
    }
  }
  
  function newWord() {
    word = getRandomWord();
    scrambledWord = scrambleWord(word);
    updateWordDisplay();
    answerInput.value = "";
    resultDisplay.innerHTML = "";
    resultDisplay.classList.remove("correct", "incorrect");
  }
  
  submitButton.addEventListener("click", checkAnswer);
  newWordButton.addEventListener("click", newWord);
  
  newWord(); // generate initial word
  
  // listen for "enter" key press in answer input
  answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // prevent form submission
      checkAnswer();
    }
  });
  