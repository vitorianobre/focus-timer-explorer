import {
    minutes,
    seconds,
    buttonPlay,
    buttonPlus,
    buttonMinus
} from "./elements.js"

export function Control() {
    let currentSeconds = Number(seconds.textContent);
    let currentMinutes = Number(minutes.textContent);
    let idSetTimeout;

    function updateDisplay(minutesDisplay, secondsDisplay) {
        minutes.textContent = String(minutesDisplay).padStart(2, '0');
        seconds.textContent = String(secondsDisplay).padStart(2, '0');
    }
    
    function updateCurrentCountdown(minutes) {
        currentMinutes = minutes;
    }
    
    function disabledControls() {
        buttonPlay.disabled = true;
        buttonPlus.disabled = true;
        buttonMinus.disabled = true;
    }
    
    function enabledControls() {
        buttonPlay.disabled = false;
        buttonPlus.disabled = false;
        buttonMinus.disabled = false;
    }
    
    function countdown() {
        idSetTimeout = setTimeout(function() {
            disabledControls();
            let minutes = document.querySelector('.minutes');
            let seconds = document.querySelector('.seconds');
    
            if (minutes.textContent == 0 && seconds.textContent == 0) {
                sound.kitchenTimer.play();
                return
            }
    
            if (seconds.textContent == 0) {
                seconds.textContent = 60;
                minutes.textContent = Number(minutes.textContent) - 1;
            }
    
            seconds.textContent = (Number(seconds.textContent) - 1);
    
            updateDisplay(minutes.textContent, seconds.textContent)
    
            countdown();
        }, 1000)
    }
    
    function resetCountdown() {
        clearTimeout(idSetTimeout);
        updateDisplay(currentMinutes, currentSeconds)
        enabledControls();
    }
    
    function plusMinutes() {
        let newMinutes = Number(minutes.textContent) + 5;
    
        updateCurrentCountdown(newMinutes);
        updateDisplay(newMinutes, currentSeconds);
    }
    
    function minusMinutes() {
        if (minutes.textContent == 0) return
    
        let newMinutes = Number(minutes.textContent) - 5;
    
        if (newMinutes < 0) newMinutes = 0
        
        updateCurrentCountdown(newMinutes);
        updateDisplay(newMinutes, currentSeconds);
    }

    return {
        countdown,
        resetCountdown,
        plusMinutes,
        minusMinutes
    }
}