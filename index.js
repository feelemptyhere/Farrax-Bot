
var today = new Date();
var past = new Date(today);
past.setDate(today.getDate() - 1);

if (past > today) {
  console.log('You are on the right path');
} else {
  console.log('Its okay to get lost sometimes');
}
