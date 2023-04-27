// console.log("Hello World From Javascript");

// let a='Akshat'
// console.log(a)
// a=9
// console.log(a)
// let b=10
// var c=10
// var c=7
// //let b=6// error
// const num=12
// num=13

// {//object literal
//     let b=7
//     console.log(b)
// }
// console.log(b);

// let rectangle={
//     length:1,
//     breadth:2,
//     draw: function(){
//         console.log("draw")
//     }
// }
// console.log(rectangle)

// factory function
function createRectangle(l=0,b=0){
    let rectangle={
        length:l,
        breadth:b,
        draw: function(){
            console.log("draw")
        }
    }
    return rectangle;
};

let rectObj1=createRectangle();

// constructor function
// PascalNotation

function RectangleCreation(len,bre){
    this.length=len;//points to the cur object
    this.breadth=bre;
    this.draw=function(){
        console.log("construct draw");
    }
}

// object creation using constructor function 
let rectangleObj=new RectangleCreation(0,0);
rectangleObj.color='yellow'
console.log(rectangleObj);
delete rectangleObj.color
console.log(rectangleObj);

let Rectangle1=new Function(
    'length','breadth',
`this.length=length;
this.breadth=breadth;
this.draw=function(){
    console.log('construct draw');
}`);
let rect=new Rectangle1(2,3)
console.log(rect)
//factory function 

// function createRectangle(len, bre) {

//     const rectangle = {
//         length: len,
//         breadth:bre ,

//         draw() {
//             console.log('drawing rectangle');
//         }
// //     };
//     return rectangle;
// }

// let rectangleObj1 = createRectangle(5, 4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }

// Rectangle.

// //object creation using constrcutor function
// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length', 'breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw= function() {
//     console.log('drawing');
// }`);

// //object creation using Rectangle1
// let rect = new Rectangle1(2,3);

// rect.length;

// console.log(rect);


// rectangle.length;
// rectangle.breadth;

// rectangle.draw();

// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);

// console.log(a);

// let a = {value:10 };

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);

let rectangle = {
    length:2,
    breadth:4
};

//for-in loop 
// for(let key in rectangle ) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for-of loop
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }

// if('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }


//object - colone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//Object Cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

//Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);

// src.a++;

// console.log(dest);
