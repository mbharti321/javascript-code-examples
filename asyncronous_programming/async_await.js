function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        // Simulating a successful response
        resolve(data);
        // Simulating an error
        // reject(new Error('Failed to fetch data.'));
      }, 2000);
    });
  }
  
  // Using async/await
  async function fetchAsyncData() {
    try {
      const data = await fetchData();
      console.log('Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchAsyncData();
  
  

//   // Function that returns a Promise that resolves after a specified delay
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   // Function that prints a message after a delay
//   async function printMessage(message, delayMs) {
//     await delay(delayMs);
//     console.log(message);
//   }
  
//   // Function to run two functions simultaneously
//   async function runSimultaneously() {
//     // Start both functions concurrently
//     const function1 = printMessage('Function 1', 2000);
//     const function2 = printMessage('Function 2', 3000);
  
//     // Wait for both functions to complete
//     await Promise.all([function1, function2]);
  
//     console.log('Both functions completed');
//   }
  
//   // Run the functions simultaneously
//   runSimultaneously();
  