const minutesTime = document.querySelector('.minutes input');
const secondsTime = document.querySelector('.seconds input');

const startingTime = (minutesTime, secondsTime) => {
    return minutesTime * 60 + Number(secondsTime);
}

const timeCounter = (startSeconds, currentSeconds) => {
    return remainingSeconds = startSeconds - currentSeconds;
}

const timeCounterAdaptor = (seconds) => {
    return remainingTime = {
        remainingTimeMinutes: Math.floor(seconds / 60),
        remainingTimeSeconds: seconds % 60,
    }
}

const addLidingZero = (startingSecondsTime) => {
    const time = startingSecondsTime;
    return time >= 10 ? time : `0${time}`;
}


const startButton = document.querySelector('.start');
let isTimerActive = false;
function handleTimerWrapper() {
    if (isTimerActive === true) {
        isTimerActive = false
        return
    }
    isTimerActive = true;
}


let isEditMode = false;

function handleTimer() {
    if (isEditMode) {
        isEditMode = false;
        minutesTime.disabled = true
        secondsTime.disabled = true
    }

    if (isTimerActive) {
        return;
    }
    
    let counterSeconds = startingTime(minutesTime.value, secondsTime.value);

    let timer = setInterval(() => {
        const time = timeCounterAdaptor(counterSeconds);
        minutesTime.value = addLidingZero(time.remainingTimeMinutes);
        secondsTime.value = addLidingZero(time.remainingTimeSeconds);
        if (counterSeconds === 0) {

            clearInterval(timer)
            let r = document.querySelector('.ring');
            r.classList.add('ending')
        }
        counterSeconds--;
    }, 1000)

    isTimerActive = true;
};



startButton.addEventListener('click', handleTimer);


const settingsButton = document.querySelector('.settings');

const handleSettings = () => {
    isEditMode = true;
    minutesTime.disabled = false
    secondsTime.disabled = false
}
settingsButton.addEventListener('click', handleSettings);
