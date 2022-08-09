require('dotenv').config();
require('colors');
const {
	inquirerMenu,
	pause,
	leerInput
	} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {
	
	const busquedas = new Busquedas();
	let opt;

	do{
		//Llamar el menú de inquirer
		opt = await inquirerMenu();
		
		//La opción que elija el usuario

		switch(opt){
			case 1:

				//Mostrar mensaje
				const lugar = await leerInput('Ciudad:');
				await busquedas.ciudad(lugar);
				
				//Buscar los lugares

				//Seleccionar el lugar

				//Clima

				//Mostrar resultados
				console.log('\nInformación de la ciudad\n'.green);
				console.log('Ciudad:');
				console.log('Latitud:');
				console.log('Longitud:');
				console.log('Temperatura:');
				console.log('Mínima:');
				console.log('Máxima:');

			break;
			case 2:



			break;
		}


		if(opt !== 0) await pause();

	}while(opt !== 0);
	
}

main();