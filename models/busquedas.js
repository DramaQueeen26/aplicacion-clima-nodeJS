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
			const instance = axios.create({
				baseURL: 'http://api.positionstack.com/v1/forward',
				params: {
					'access_key': 'f32e9c12c4229b0521c9f54bde86b41e',
					'query': lugar,
					'limit': 5
				}
			});

			const r = await instance.get()
			console.log(r.data)

			return []; //Regresar los lugares que coincida 
		
		}catch(error){
			console.log('No se encontró el lugar');
		}
	}
}

module.exports = Busquedas;