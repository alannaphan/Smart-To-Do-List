const axios = require('axios');

//--- retrieve food API

axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/suggest',{
    params: {
      query: 'korean fried chicken',
      number: '10'
    },
    headers: {
      'X-RapidAPI-Key': '6a2f06b1e5msha387154f97797fbp15121ejsn69559ed70522',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  })
  .then((response) => {
    console.log(response.data.results.length) // if length = 0, then no book
  })
  .catch((error) => {
    console.log(error);
  })

//---- retrieve movie API
axios.get('https://movie-database-alternative.p.rapidapi.com/',{
    params: {
      s: 'avengers',
      r: 'json',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': '6a2f06b1e5msha387154f97797fbp15121ejsn69559ed70522',
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
  })
  .then((response) => {
    console.log(response.data.Response); // Response = True or False
  })
  .catch((error) => {
    console.log(error);
  })

// ----- retrieve book API
axios.get('https://book-finder1.p.rapidapi.com/api/search',{
    params: {
      title: 'harry potter',
      results_per_page: '2',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': '6a2f06b1e5msha387154f97797fbp15121ejsn69559ed70522',
      'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
    }
  })
  .then((response) => {
    console.log(response.data.results.length) // if length = 0, then no book
  })
  .catch((error) => {
    console.log(error);
  })

// ---- retrieve product API ------ please use this one sparingly because I do not have many uses for it

// axios.get('https://amazon-price1.p.rapidapi.com/search',{
//   params: {
//     keywords: 'korean fried chicken',
//     marketplace: 'ES'
//   },
//   headers: {
//     'X-RapidAPI-Key': '6a2f06b1e5msha387154f97797fbp15121ejsn69559ed70522',
//     'X-RapidAPI-Host': 'amazon-price1.p.rapidapi.com'
//   }
//   })
//   .then((response) => {
// 	console.log(Object.keys(response.data).length); // returns 0 for length if no match
//   })
//   .catch((error) => {
//     console.log(error);
//   })
