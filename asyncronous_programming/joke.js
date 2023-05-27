// TODO: Get two jokes from joke API using `Promise` and check if both are same type.
// - use only this link: https://v2.jokeapi.dev/joke/Any

const axios = require("axios");

// function fetchJoke() {
//   return axios.get('https://v2.jokeapi.dev/joke/Any')
//     .then(response => response.data);
// }

function fetchJoke() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://v2.jokeapi.dev/joke/Any")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}


function getTwoJokes() {
  return Promise.all([fetchJoke(), fetchJoke()]);
}

getTwoJokes()
  .then((jokes) => {
    const [joke1, joke2] = jokes;
    console.log("Joke 1:", joke1);
    console.log("Joke 2:", joke2);

    if (joke1.type === joke2.type) {
      console.log("Both jokes are of the same type:", joke1.type);
    } else {
      console.log("Jokes are of different types.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });




































  
// const axios = require('axios');

// function fetchJoke(callback) {
//   const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

//   axios.get(apiUrl)
//     .then(response => {
//       const joke = response.data;
//       callback(joke);
//     })
//     .catch(error => {
//       callback(null, error);
//     });
// }

// function fetchSecondJoke(callback) {
//   fetchJoke(callback);
// }

// fetchJoke((joke1, error) => {
//   if (error) {
//     console.error('Error fetching joke 1:', error);
//   } else {
//     console.log('Joke 1:', joke1);

//     fetchSecondJoke((joke2, error) => {
//       if (error) {
//         console.error('Error fetching joke 2:', error);
//       } else {
//         console.log('Joke 2:', joke2);

//         if (joke1.type === joke2.type) {
//           console.log('Both jokes are of the same type:', joke1.type);
//         } else {
//           console.log('Jokes are of different types.');
//         }
//       }
//     });
//   }
// });
