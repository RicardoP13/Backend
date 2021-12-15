import Ilamp from "./lamp";

export default class Button {

    constructor(protected lamp: Ilamp) {
    }

    onButtonListener() {
        if (this.lamp.getStatus()) {
            this.lamp.turnOff()
        } else {
            this.lamp.turnOn();
        }
    }
}