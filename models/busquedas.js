const fs = require('fs');
const axios = require('axios');

class Busquedas
{
	historial = [];
	dbPath = './db/database.json';

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

	agregarHistorial(lugar = "")
	{
		if(this.historial.includes(lugar)){
			return;
		}

		this.historial.unshift(lugar);

		// GuardarDB
		this.guardarDB();
	}

	guardarDB()
	{	
		const payload = {
			historial: this.historial
		};

		fs.writeFileSync(this.dbPath, JSON.stringify(payload))
	}
}

module.exports = Busquedas;