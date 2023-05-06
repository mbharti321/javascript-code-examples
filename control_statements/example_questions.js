// if else
const age = "18";

if (age === 18) {
  console.log('You are old enough to vote.');
} else {
  console.log('Sorry, you are not old enough to vote yet.');
}

// switch
let dayOfWeek = 'Monday';
// dayOfWeek = 'Mon';

switch (dayOfWeek) {
  case 'Monday':
    console.log('Today is Monday');
  case 'Tuesday':
    console.log('Today is Tuesday');
    break;
  case 'Wednesday':
    console.log('Today is Wednesday');
    break;
  default:
    console.log('Today is some other day');
    break;
}


// ~~~~~~~~~~~for loop
for (let i = 0; i < 10; i += 2) {
    console.log(i);
  }