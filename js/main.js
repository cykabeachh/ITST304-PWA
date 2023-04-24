const quizForm = document.querySelector('#quiz-form');
const submitButton = document.querySelector('#submit-btn');
const resultDiv = document.querySelector('#result');

const correctAnswer = 'a';

submitButton.addEventListener('click', (e) => {
	e.preventDefault();

	const selectedAnswer = quizForm.elements.answer.value;

	if (selectedAnswer === correctAnswer) {
		resultDiv.innerHTML = 'Correct!';
		resultDiv.style.color = 'green';
	} else {
		resultDiv.innerHTML = 'Incorrect. The correct answer is 1896.';
		resultDiv.style.color = 'red';
	}
});
