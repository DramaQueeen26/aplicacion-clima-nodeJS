const axios = require('axios');

class Busquedas
{
	historial = ['Tegucigalpa', 'Madrid', 'San José'];

	constructor()
	{
		//TODO: leer DB si existe
	}

	async ciudad(lugar = '')
	{
		try{
			//petición http
			const r = await axios.get('https://reqres.in/api/users?page=2');
			console.log(r.data)

			return []; //Regresar los lugares que coincida 
		
		}catch(error){
			console.log('No se encontró el lugar');
		}
	}
}

module.exports = Busquedas;