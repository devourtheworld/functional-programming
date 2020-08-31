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


// example 1

function sendRequest(){
    let requestID = '123';
    $.ajax({
        url: '/myUrl',
        success: function(response){
            alert('Request ' + requestID + 'returned')
        }
    });
}

// example 2

function init(){
    let name = 'Mozilla';
    function displayName(){
        console.log('My name is ' + name);  // My name is Mozilla
    }
    displayName();
}
init();

// example 3

function makeFunc(){
    let name = 'Mozilla2';
    function displayName(){
        console.log('My name is ' + name); // My name is Mozilla2
    }
    return displayName;
}
let myFunc = makeFunc();
myFunc();