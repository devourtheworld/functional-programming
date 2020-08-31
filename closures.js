// closures that function with body that has access to variables defined
// in outside function

// example of clusures
let me = 'Brude Wayne';
function greetMe(){
    console.log('Hello, ' + me + '!');
}
me = 'Batman';
// Hello, Batman!
greetMe();