import {
    btnThemeLight,
    btnThemeDark
} from "./elements.js"

export default function() {
    function changeTheme() {
        btnThemeLight.classList.toggle('hide');
        btnThemeDark.classList.toggle('hide');

        document.querySelector('body').classList.toggle('dark')
        document.querySelector('.controls').classList.toggle('dark')
        document.querySelector('.wrapper-button-sound').classList.toggle('dark')
        
        for (const element of (document.querySelectorAll('.timer span'))) {
            element.classList.toggle('dark')
        }
        
        for (const element of (document.querySelectorAll('.button-sound'))) {
            element.classList.toggle('dark')
        }
    }

    return {
        changeTheme
    }
}