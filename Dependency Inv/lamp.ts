import Ilamp from "./Ilamp";

export default class Lamp implements Ilamp{

    status: boolean;

    constructor() {
      this.status = true;
    }

    turnOn() {
        this.status = true;
        console.log('Lamp is ON');
    }

    turnOff() {
        this.status = false;
        console.log('Lamp is OFF');
    }

    getStatus(): boolean {
        return this.status;
    }
}