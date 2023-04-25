/*
way 1: using prompt-sync
Please install prompt-sync using below command
`npm install prompt-sync`

##Source: https://sebhastian.com/javascript-console-input/#getting-user-input-from-nodejs-using-prompt-sync-module
*/
const prompt = require("prompt-sync")();
const input = prompt("What is your name? ");
console.log(`Oh, so your name is ${input}`);



/*
way 2: using readline-sync
Please install readline-sync using below command
`npm install readline-sync`
*/
const readlineSync = require('readline-sync');
const name = readlineSync.question('What is your name? ');
console.log(`Oh, so your name is ${name}`);
