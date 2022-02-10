/*
Functional closures can get overly attached. Set them straight!
Why doesn't greet_abe() actually greet Abe?
*/

let nameAbe = 'Abe';
let greet_abe = function () {
    return "Hello, " + nameAbe + '!';
};
let nameBen = 'Ben';
let greet_ben = function () {
    return "Hello, " + nameBen + '!';
};