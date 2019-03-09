var d = new Date();
document.write(d + '<br>');
var hours = d.getHours();

/* function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);
 */

 var n = prompt("Enter a number", "")
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

document.write(Math.PI + '<br>');
document.write(Math.LN2 + '<br>');
document.write(Math.LN10 + '<br>');
document.write(Math.E + '<br>');

var person = [];
person["name"] = "John";
person["age"] = 46;

var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);

var courses = new Array(3);
courses[0] = "HTML"

var course = new Array()
courses[0] = 'HTML'

var courses = ['HTML', 'CSS']

var courses = new Array("HTTP", "CSS", "JS");

simba = {category: "lion", gender: "male"}

function human(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
    this.changeName = function (name) {
        this.name = name;
    }
    this.yearOfBirth = bornYear;
}

function bornYear() {
    return 2019 - this.age;
}

var p1 = new human("John", 43, "green");
var p2 = new human("Amy", 21, "red");

var person = {
    name: "John", age: 31,
    favColor: "green", height: 183
};

var x = person.age;
var y = person['age'];
var z = person.name.length;

var result = confirm("Do you really want to leave this page?");
if (result == true){
  alert("Thank you for visiting.");
} else {
  alert("Thanks for staying with us.");
}

prompt_sample("Please enter your name");

var i = 0;
do {
  document.write('do while: ' + i + '<br>');
  i++;
} while(i<=5);

var i = 0;
while (i<=5) {
  document.write('while: ' + i + '<br>');
  i++;
}

for (i=0; i<=5; i++) {
  document.write('for: ' + i + "<br>");
}

a = 1;
switch (a) {
  case 1:
    document.write('1<br>');
    break;
  case 2:
    document.write('2<br>');
    break;
  default:
    document.write('other<br>');
}
var myNum1 = 10;
var myNum2 = 10;
if (myNum1 < myNum2) {
  alert("JavaScript is not easy to learn.");
} else if (myNum1 == myNum2) {
  alert("JavaScripttttttttt");
} else {
  alert("JavaScript is easy to learn.");
}

// This is a single line comment
document.write("<h1>Hello World!</h1>");
var x = 100;
document.write(x + '<br>');

var y = 55.55;
document.write(y + '<br>');

var name = 'John';
var text = "My name is John Smith";
var text2 = "My name is \n'John'";
document.write(text2 + '<br>')

var isActive = true;
var isHoliday = false;

var x = 10 + 5;
var y = x * 2
document.write(y + '<br>');

age = 20;
var isAdult = (age < 18) ? "Too young": "Old enough";

var x = '50';
var y = '100';
document.write(x + y + '<br>');

function prompt_sample(text) {
  var user = prompt(text);
  alert(user);
}
