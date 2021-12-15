import Lamp from './lamp';
import Button from './button';

const lamp = new Lamp();
const button = new Button(lamp);

button.onButtonListener();
button.onButtonListener();