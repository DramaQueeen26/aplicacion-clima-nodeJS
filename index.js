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
				if(name === '0') continue;
				const lugarSel = lugares.find(l => l.name === name);

				//Guardar lugar
				busquedas.agregarHistorial(lugarSel.name);

				//Clima
				const {desc, min, max, temp} = await busquedas.clima(lugarSel.lat, lugarSel.lon);

				//Mostrar resultados
				console.log('\nInformación de la ciudad\n'.green);
				console.log('Ciudad:', lugarSel.name.green);
				console.log('Latitud:', lugarSel.lat);
				console.log('Longitud:', lugarSel.lon);
				console.log('Temperatura:', temp);
				console.log('Mínima:', min);
				console.log('Máxima:', max);
				console.log('Cómo está el clima:', desc.green);

			break;
			
			case 2:
				
				busquedas.historial.forEach((lugar, i) => {
					const idx = `${i + 1}.`.green;
					console.log(`${idx} ${lugar}`)
				});

			break;
		}


		if(opt !== 0) await pause();

	}while(opt !== 0);
	
}

main();