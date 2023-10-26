const axios = require('axios');
require('dotenv').config();

// API key template
const axiosTemplate = (url, params, host) => {
  return axios.get(url, {
          params,
          headers: {
          'X-RapidAPI-Key': process.env.API_KEY,
          'X-RapidAPI-Host': host
          }
        })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        })
}

//--- retrieve food API
const food = (text) => {
  const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/suggest';
  const params = { query: text, number: '10' };
  const host = 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
  const axiosResponse = axiosTemplate(url, params, host);

  return axiosResponse
  .then((response) => {
    console.log('food length: ', response.results.length);

    if (response.results.length !== 0) {
      return 'food'
    }
    else {
      return false;
    }
  })
}

// ----- retrieve book API
const book = (text) => {
  const url = 'https://book-finder1.p.rapidapi.com/api/search';
  const params = { title: `${text}`, results_per_page: '2', page: '1' };
  const host = 'book-finder1.p.rapidapi.com';
  const axiosResponse = axiosTemplate(url, params, host);

  return axiosResponse
  .then((response) => {
    console.log('book length: ', response.results.length);

    if (response.results.length !== 0) {
      return 'book';
    }
    else {
      return false;
    }
  })
}

// ------ retrieve movie API
const movie = (text) => {
  const url = 'https://movie-database-alternative.p.rapidapi.com/';
  const params = { s: `${text}`, r: 'json', page: '1' };
  const host = 'movie-database-alternative.p.rapidapi.com';
  const axiosResponse = axiosTemplate(url, params, host);

  return axiosResponse
  .then((response) => {
    console.log('is movie: ', response.Response);

    if (response.Response === 'True') {
      return 'movie';
    }
    else {
      return false;
    }
  })
}


const getCategory = str => {
  const b = book(str);
  const m = movie(str);
  const f = food(str);

  console.log(f,b,m);

  return Promise.all([b,m,f]).then(responses => {
    console.log(responses);
    if (responses[0]) {
      return 1;
    } else if (responses[1]) {
      return 2;
    } else if (responses[2]) {
      return 3;
    } else {
      console.log("all apis gave false, default to product");
      return 4;
    }
  })

}

// const text = 'Django Unchained';


// getCategory(text).then(category_id => {
//   console.log('the algo determined the category id is: ', category_id);
//   // pg.query(INSERT INTO table items VALUES ())
// });


module.exports = getCategory;
