/*
joke_category = {
  Programming: 0,
  Misc: 0,
  Dark: 0,
  Pun: 0,
  Spooky: 0,
  Christmas: 0,
};

for loop 20 times{
    //get one joke for this api
    //check category of joke
    //increment count for that in joke_category
}

print joke_category at last
*/

// Initialize joke categories and set their initial count to 0
const jokeCategories = {
  Programming: 0,
  Misc: 0,
  Dark: 0,
  Pun: 0,
  Spooky: 0,
  Christmas: 0,
};

const axios = require("axios");

// Function to fetch jokes
async function fetchJoke() {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Function to fetch jokes and count the categories
async function fetchJokesAndCountCategories() {
  // Fetch 20 jokes
  for (let i = 0; i < 20; i++) {
    try {
      // Fetch a joke
      const joke = await fetchJoke();
      console.log(joke.category + ": " + joke.joke);

      const category = joke.category;

      // Check if the joke has a valid category
      if (category && jokeCategories.hasOwnProperty(category)) {
        // Increment the count for the category
        jokeCategories[category]++;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Print the joke categories and their counts
  console.log(jokeCategories);
}

// Call the main function to fetch jokes and count categories
fetchJokesAndCountCategories();

// const https = require("https");
// Function to fetch a joke from the jokeapi
// function fetchJoke() {
//   return new Promise((resolve, reject) => {
//     https
//       .get("https://v2.jokeapi.dev/joke/Any", (res) => {
//         let data = "";

//         res.on("data", (chunk) => {
//           data += chunk;
//         });

//         res.on("end", () => {
//           const joke = JSON.parse(data);
//           resolve(joke);
//         });
//       })
//       .on("error", (error) => {
//         reject(error);
//       });
//   });
// }
