document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = {
        q1: 'a', q2: 'b', q3: 'b', q4: 'a', q5: 'a',
        q6: 'b', q7: 'c', q8: 'a', q9: 'a', q10: 'c'
    };

    let score = 0;
    const formData = new FormData(event.target);
    
    formData.forEach((value, key) => {
        if (answers[key] === value) {
            score++;
        }
    });

    document.getElementById('score').textContent = `You scored ${score} out of 10!`;
    document.getElementById('scorecard').classList.remove('hidden');
});
