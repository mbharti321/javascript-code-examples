function fetchData(callback) {
    // this data might come from API, which takes time
  const data =
    "Some data, which require in callback and not available beforehand";

  console.log("Before callback.......\n");
  callback(data);
  console.log("\nAfter callback.......\n");
}

function processData(data) {
  console.log("Executing callback\nProcessed data:", data);
}

//   const currentTime = new Date();
//   console.log("currentTime1:", currentTime);
fetchData(processData);

//   console.log("last:   im not waiting for others~~~~~~~~~~~~");
