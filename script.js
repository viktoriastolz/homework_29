"use strict";

let timeRemaining = 85;

function updateTimerDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            if (timeRemaining <= 0) {
                clearInterval(interval); 
                document.getElementById('timer').classList.add('finished');
                resolve('Таймер завершено!');
            } else {
                timeRemaining--;
                updateTimerDisplay();
            }
        }, 1000);
    });
}

async function runTimer() {
    try {
        const result = await startTimer();
        alert(result);
    } catch (error) {
        console.error('Помилка:', error);
    }
}

runTimer();
