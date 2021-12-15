import {getAvailableDoctors} from './University.mjs'

async function run(){
	console.log(await getAvailableDoctors());
}

run();