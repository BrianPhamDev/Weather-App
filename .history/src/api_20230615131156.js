const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=dsa';

const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7c9121d45mshdcde5e635b4459bp10eef3jsn15a90c034057',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch(`${url}`, geoApiOptions).then(response => response.json()).then(response => console.log(response)).catch(err => console.log(err);)
