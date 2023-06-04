
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

