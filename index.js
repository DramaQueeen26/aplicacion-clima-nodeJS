const {
	inquirerMenu,
	pause,
	leerInput
	} = require('./helpers/inquirer');

const main = async() => {
	
	let opt;
	
	do{

		opt = await inquirerMenu();
		console.log('Ha seleccionado la opción ' + opt);

		if(opt !== 0) await pause();

	}while(opt !== 0);
	
}

main();