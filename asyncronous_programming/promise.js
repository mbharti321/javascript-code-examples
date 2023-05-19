function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = "Some data";
      resolve(data);
    }, 2000);
  });
}

function processData(data) {
  console.log("Processed data:", data);
}

fetchData()
  .then(processData)
  .catch((error) => console.error("Error:", error));
