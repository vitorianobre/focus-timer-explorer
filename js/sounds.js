import {
    volumeForestSound,
    volumeRainSound,
    volumeCoffeeShopSound,
    volumeFireplaceSound
} from "./elements.js"

export function Sound({
    btnForestSound,
    btnRainSound,
    btnCoffeeShopSound,
    btnFireplaceSound
}) {
    const forestSound = new Audio("sounds/Floresta.mp3");
    const rainSound = new Audio("sounds/Chuva.mp3");
    const coffeeShopSound = new Audio("sounds/Cafeteria.mp3");
    const fireplaceSound = new Audio("sounds/Lareira.mp3");

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

    function activeForestSound() {
        buttonPressAudio.play();
        btnForestSound.classList.toggle("active-button")
        volumeForestSound.classList.toggle("active-button")

        if (btnForestSound.classList.contains("active-button")) {
            forestSound.play();
            forestSound.loop = true;
            volumeForestSound.value = 50;
            changeVolumeForest();
        } else {
            forestSound.pause();
            volumeForestSound.value = 0;
        }
    }

    function activeRainSound() {
        buttonPressAudio.play();
        btnRainSound.classList.toggle("active-button")
        volumeRainSound.classList.toggle("active-button")

        if (btnRainSound.classList.contains("active-button")) {
            rainSound.play();
            rainSound.loop = true;
            volumeRainSound.value = 50;
            changeVolumeRain();
        } else {
            rainSound.pause();
            volumeRainSound.value = 0;
        }
    }

    function activeCoffeeShopSound() {
        buttonPressAudio.play();
        btnCoffeeShopSound.classList.toggle("active-button")
        volumeCoffeeShopSound.classList.toggle("active-button")

        if (btnCoffeeShopSound.classList.contains("active-button")) {
            coffeeShopSound.play();
            coffeeShopSound.loop = true;
            volumeCoffeeShopSound.value = 50;
            changeVolumeCoffeeShop();
        } else {
            coffeeShopSound.pause();
            volumeCoffeeShopSound.value = 0;
        }
    }

    function activeFireplaceSound() {
        buttonPressAudio.play();
        btnFireplaceSound.classList.toggle("active-button")
        volumeFireplaceSound.classList.toggle("active-button")

        if (btnFireplaceSound.classList.contains("active-button")) {
            fireplaceSound.play();
            fireplaceSound.loop = true;
            volumeFireplaceSound.value = 50;
            changeVolumeFireplace();
        } else {
            fireplaceSound.pause();
            volumeFireplaceSound.value = 0;
        }
    }

    function changeVolumeForest() {
        forestSound.volume = volumeForestSound.value / 100;
    }

    function changeVolumeRain() {
        rainSound.volume = volumeRainSound.value / 100;
    }

    function changeVolumeCoffeeShop() {
        coffeeShopSound.volume = volumeCoffeeShopSound.value / 100;
    }

    function changeVolumeFireplace() {
        fireplaceSound.volume = volumeFireplaceSound.value / 100;
    }

    return {
        activeForestSound,
        activeRainSound,
        activeCoffeeShopSound,
        activeFireplaceSound,
        buttonPressAudio,
        kitchenTimer,
        changeVolumeForest,
        changeVolumeRain,
        changeVolumeCoffeeShop,
        changeVolumeFireplace
    }
}