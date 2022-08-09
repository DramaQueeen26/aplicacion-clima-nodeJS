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
					'access_key': process.env.GEO_KEY,
					'query': lugar,
					'limit': 5
				}
			});

			const r = await instance.get();

			return r.data.data.map(lugar => ({
				name: lugar.label,
				lat: lugar.latitude,
				lon: lugar.longitude
			}));
		
		}catch(error){
			console.log('No se encontró el lugar');
		}
	}

	async clima(lat, lon)
	{
		try{
			
			//petición http
			const instance = axios.create({
				baseURL: 'https://api.openweathermap.org/data/2.5/weather',
				params: {
					'lat': lat,
					'lon': lon,
					'appid': process.env.OPENWEATHER_KEY,
					'units': 'metric',
					'lang': 'es'
				}
			});

			const r = await instance.get();

			return {
				desc: r.data.weather[0].description,
				min: r.data.main.temp_min,
				max: r.data.main.temp_max,
				temp: r.data.main.temp
			};
			

		}catch(error){
			return "No se encontró el lugar";
		}
	}
}

module.exports = Busquedas;