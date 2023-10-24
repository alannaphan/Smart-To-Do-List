import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/suggest',
  params: {
    query: 'korean fried chicken',
    number: '10'
  },
  headers: {
    'X-RapidAPI-Key': '6a2f06b1e5msha387154f97797fbp15121ejsn69559ed70522',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.results.length);
} catch (error) {
	console.error(error);
}
