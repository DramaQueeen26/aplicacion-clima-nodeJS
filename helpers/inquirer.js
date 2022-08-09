const inquirer = require('inquirer');
require('colors');

const questions = [
	{
		type: 'list',
		name: 'opt',
		message: '¿Qué desea hacer?',
		choices: [
			{
				value: 1,
				name: `${'1.'.green} Buscar ciudad`
			},
			{
				value: 2,
				name: `${'2.'.green} Historial`
			},
			{
				value: 0,
				name: `${'0.'.green} Salir`
			}
		]
	}
];

const inquirerMenu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.white );
    console.log('==========================\n'.green);

    const {opt} = await inquirer.prompt(questions);

    return opt;
}

const pause = async() => {

	question = [
		{
			type: 'input',
			name: 'enter',
			message: `Presione ${'ENTER'.green} para continuar`
		}
	];
	console.log('\n');
	await inquirer.prompt(question);

}

const leerInput = async(message) => {

	const question = [{

		type: 'input',
		name: 'desc',
		message,
		validate(value){
			if(value.length === 0){
				return 'Por favor ingrese un valor';
			}
			return true;
		}

	}];

	const {desc} = await inquirer.prompt(question);

	return desc;

}

const listarLugares = async(lugares = []) => {

	const choices = lugares.map((lugar, i) => { //Es como reestructurar el arreglo a conveniencia

		const idx = `${i + 1}.`.green;

		return{
			value: lugar.name,
			name: `${idx} ${lugar.name}`
		}
	});

	choices.unshift({
		value: '0',
		name: '0. '.green + 'Cancelar'
	});

	const preguntas = [{
		type: 'list',
		name: 'name',
		message: 'Seleccione el lugar:',
		choices
	}];

	const {name} = await inquirer.prompt(preguntas);

	return name;
}

module.exports = { 
    inquirerMenu,
    pause,
    leerInput,
    listarLugares
}