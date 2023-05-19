function fetchData(callback) {
    // Simulating an asynchronous operation, for say an api call
    setTimeout(() => {
      const data = 'Some data';
      callback(data);
    }, 3000);
  }
  
  function processData(data) {
    console.log('Processed data:', data);
  }
  
  fetchData(processData);