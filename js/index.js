import { Sound } from "./sounds.js"
import { Control } from "./controls.js";
import Theme from "./theme.js"
import Events from "./events.js"
import {
    btnForestSound,
    btnRainSound,
    btnCoffeeShopSound,
    btnFireplaceSound
} from "./elements.js"

const sound = Sound({
    btnForestSound,
    btnRainSound,
    btnCoffeeShopSound,
    btnFireplaceSound
});

const control = Control();

const theme = Theme();

Events({sound, control, theme})