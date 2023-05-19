function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = "Some data";
    callback(data);
  }, 2000);
}

function processData(data) {
  const currentTime = new Date();
  console.log("\ncurrentTime1:", currentTime);

  console.log("its javascript, no body waits here.\nProcessed data:", data);
}

const currentTime = new Date();
console.log("currentTime1:", currentTime);
fetchData(processData);

console.log("last:   im not waiting for others~~~~~~~~~~~~");
