const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.score-wrapper')

form.addEventListener('submit', e => {
    e.preventDefault();

    scrollTo(0, 0);

    let score = 0;
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    let output = 0; 
    const timer = setInterval(() => {
        result.querySelector('span').textContent = ` ${output}% `;
        if (score === output) {
           clearInterval(timer); 
        } else {
           output++; 
        }
    }, 20);

  
    result.style.display = 'flex';
});