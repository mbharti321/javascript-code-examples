// function loop1() {
//     return new Promise((resolve, reject) => {
//       let count1 = 0;
//       const interval1 = setInterval(() => {
//         console.log('Loop 1:', count1);
//         count1++;
//         if (count1 === 10) {
//           clearInterval(interval1);
//           resolve();
//         }
//       }, 1000);
//     });
//   }

//   function loop2() {
//     return new Promise((resolve, reject) => {
//       let count2 = 0;
//       const interval2 = setInterval(() => {
//         console.log('Loop 2: ', count2);
//         count2++;
//         if (count2 === 10) {
//           clearInterval(interval2);
//           resolve();
//         }
//       }, 1500);
//     });
//   }

//   async function runLoops() {
//     await Promise.all([loop1(), loop2()]);
//     console.log('Both loops completed.');
//   }

//   runLoops();
function fetchData() {
    let data;
  
    setTimeout(() => {
      data = 'Data fetched successfully';
    }, 2000);
  
    return data;
  }
  
  const result = fetchData();
  console.log(result);
  


  function loop1() {
    for (let i = 1; i <= 10; i++) {
      setTimeout(() => {
        console.log('Loop 1:', i);
      }, 2000);
    }
  }
  
  function loop2() {
    for (let i = 1; i <= 20; i++) {
      setTimeout(() => {
        console.log('Loop 2:', i);
      }, 500);
    }
  }
  
  loop1();
  loop2();
  