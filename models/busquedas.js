

class Busquedas
{
	historial = ['Tegucigalpa', 'Madrid', 'San José'];

	constructor()
	{
		//TODO: leer DB si existe
	}

	async ciudad(lugar = '')
	{
		//petición http
		console.log(lugar);

		return []; //Regresar los lugares que coincida 
	}
}

module.exports = Busquedas;