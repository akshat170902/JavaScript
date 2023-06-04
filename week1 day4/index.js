
//function declaration
function run(){


    console.log("running")
}
run();

//named function assignment
let stand=function walk(){
    console.log("walking");
};
stand();
//anonymous function assignment 
let jump=function(){
    console.log("jumping");
}
jump();

function sum(a,b){
    console.log(arguments);
    let total=0;
    for(let value of arguments){
        total+=value;
    }
    return total;
}

function sum2(num,value,...arg){
    console.log(arg);
}
let ans=sum2(1,2,3,4,5,6,7);
console.log(ans); 

function interest(p,r=6,t=1){
    return p*r*t/100;
}
console.log(interest(1000,undefined,8));

let person={
    fName:'Akshat',
    Lname:'Garg',
    get fullName(){
        return `${person.fName} ${person.Lname}`
    },
    set fullName(value){
        console.log(typeof(value));
    

        if(typeof(value) !== 'string'){
            console.log(typeof(value));
            throw new Error("you have not sent a string ");
        }
        let parts=value.split(' ') ;
        this.fName=parts[0];
        this.Lname=parts[1];
    }
}
try{
    person.fullName='true';
}
catch(e){
    alert(e);
}

console.log(person.fullName);
{
    var a=5;
}
console.log(a);
{
    var a=6;
}
console.log(a);

// Reduce 
let arr=[1,2,3,4];
let totalSum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(totalSum);