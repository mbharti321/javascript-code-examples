# Asyncronous Programming

## Syncronous and asynchronous 
- synchronous programming? > execution of operations is done sequentially. 
- asynchronous programming? > Multitasker, parallel execution of tasks
  - essential for handling 
    - time-consuming operations like 
      - network requests(API requests), 
      - file I/O, or 
      - database queries 

### Important functions
1. callback
  - passed as an argument
  - invoked when a particular task completes
    - #### TODO: what's `callback hell`?

2. setTimeout: 
  - `setTimeout(callback_function, time_to_wait)`


### Promises
- the eventual completion or failure of an asynchronous operation
- Three states: 
  - pending, fulfilled, rejected
  
-  callbacks for 
   -  success (`then()`) 
   -  and failure (`catch()`). 
   -  
    #### TODO: Get two jokes from joke API using `Promise` and check if both are same type.
          - use only this link: https://v2.jokeapi.dev/joke/Any


### async/await
- `async`: to define an asynchronous function
- `await`: pause the execution of the function
  - The await keyword can **only be** used inside an asynchronous function(i.e `async`).
  