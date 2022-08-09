require('dotenv').config();
require('colors');
const {
	inquirerMenu,
	pause,
	leerInput,
	listarLugares
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

				//Buscar los lugares
				const lugares = await busquedas.ciudad(lugar);

				//Seleccionar el lugar
				const name = await listarLugares(lugares);
				const lugarSel = lugares.find(l => l.name === name);

				//Clima

				//Mostrar resultados
				console.log('\nInformación de la ciudad\n'.green);
				console.log('Ciudad:' + lugarSel.name);
				console.log('Latitud:' + lugarSel.lat);
				console.log('Longitud:' + lugarSel.lng);
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