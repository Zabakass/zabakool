console.log('Hello world');
let name = 'Mosh'; // string literal
console.log(name);

// cannot be reserved keyword ala let let etc
// should be meaningful and avoid a,b,c1, example etc!
// cannot start with a number (1name)
// cannnot contain a space or hyphen (-)
// camel notation / name variables / CASE SENSITIVE ( let firstName let FirstName)

let firstName = 'Eesnimi';
let lastName = 'Perenimi';
console.log(firstName);
console.log(lastName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate); (Viskab errori, kontrolli ispect- source- index.js)

// let name, name on string siis. Best practice- Default on const, let on ainult siis, kui pead andma sellele uue väärtuse.

let nimi = 'Mosh'; //String literal
let age= 30; // Number literal
let isApproved = false // Boolean literal
let eesNimi = undefined;
let selectedColor = null; // või red, siis kui tahad muuta väärtust

let minuNimi = 'Anu'
let vanus = 23
let person = {
    minuNimi: 'Anu',
    vanus: 23
}
// Dot notation 
person.name= 'John';

// Bracket Notation
let selection ='name';
person[selection] = 'Anna'
console.log(person,vanus);

let selectedColors = ['red', 'blue'];
selectedColors[2] = '1';
console.log(selectedColors);

//performing a task
function greet(name, lastName) {
    console.log ('Tere täitsa hästi said hakkama! ' + name + ' ' + lastName);
}

// argument on see väärtus
greet('Mari', 'Kalkun'); 
greet('Jaanus','Kana');


//calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));

