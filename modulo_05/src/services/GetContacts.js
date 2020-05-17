const baseUrl = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1';

async function getData(api) {
	const response = await fetch(baseUrl + api, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json'
		},
	});
	
	return response.json(); // parses JSON response into native JavaScript objects
}

export default getData;