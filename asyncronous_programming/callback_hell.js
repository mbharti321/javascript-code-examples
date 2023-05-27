asyncFunction1((error, result1) => {
  if (error) {
    console.error("Error:", error);
  } else {
    asyncFunction2(result1, (error, result2) => {
      if (error) {
        console.error("Error:", error);
      } else {
        asyncFunction3(result2, (error, result3) => {
          if (error) {
            console.error("Error:", error);
          } else {
            // ... more nested callbacks
          }
        });
      }
    });
  }
});
