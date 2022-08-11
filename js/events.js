import {
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    btnForestSound,
    btnRainSound,
    btnCoffeeShopSound,
    btnFireplaceSound,
    volumeForestSound,
    volumeRainSound,
    volumeCoffeeShopSound,
    volumeFireplaceSound,
    btnThemeLight,
    btnThemeDark
} from "./elements.js"

export default function({sound, control, theme}) {
    buttonPlay.addEventListener('click', function() {
        sound.buttonPressAudio.play();
        control.countdown();
    });
    
    buttonStop.addEventListener('click', function() {
        sound.buttonPressAudio.play();
        control.resetCountdown();
    });
    
    buttonPlus.addEventListener('click', function() {
        sound.buttonPressAudio.play();
        control.plusMinutes();
    });
    
    buttonMinus.addEventListener('click', function() {
        sound.buttonPressAudio.play();
        control.minusMinutes();
    });
    
    btnForestSound.addEventListener('click', sound.activeForestSound);
    btnRainSound.addEventListener('click', sound.activeRainSound);
    btnCoffeeShopSound.addEventListener('click', sound.activeCoffeeShopSound);
    btnFireplaceSound.addEventListener('click', sound.activeFireplaceSound);

    volumeForestSound.addEventListener('change', sound.changeVolumeForest);
    volumeRainSound.addEventListener('change', sound.changeVolumeRain);
    volumeCoffeeShopSound.addEventListener('change', sound.changeVolumeCoffeeShop);
    volumeFireplaceSound.addEventListener('change', sound.changeVolumeFireplace);

    btnThemeLight.addEventListener('click', theme.changeTheme);
    btnThemeDark.addEventListener('click', theme.changeTheme);
}