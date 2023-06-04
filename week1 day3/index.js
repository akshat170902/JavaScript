let lastName="Garg"
let firstName=new String("Akshat")
let date =new Date();
let date2=new Date("june 20 1998 07:15");
console.log(date2);

// array
// collection of item 

let nums=[1,2,3];
console.log(nums);
nums.push(9);
nums.unshift(7);
nums.splice(2,0,'a',5,7);
console.log(nums);
console.log(nums.indexOf('a',2));
console.log(nums.includes('b'));
let courses=[
    {no:1,naam:"Akshat"},
    {no:2,naam:"Garg"}
]
console.log(courses)


// callback fuction 
let course=courses.find(function(courses){
    return courses.naam=='Akshat'

})
console.log(course);

// arrow function 
let ca=courses.find(para=>para.naam=='Garg')
console.log(ca);


//removing elements
nums.pop();
nums.shift();
console.log(nums);
nums.splice(2,1);
console.log(nums);

//empty the array
let nums1=nums;
nums.length=0;
nums=[]
console.log(nums);
console.log(nums1);
//splice method

// combining and slicing array 
let first=[1,2,3]
let second=[4,5,6]
let comb=first.concat(second);
console.log(comb);
//slice
let newArray=comb.slice(2,4)
console.log(newArray)
let arr=comb.slice();
comb.push(9);
console.log(comb,arr);

for(let val of comb){
    console.log(val);
}
arr.forEach(num=>console.log(num))

const joined=comb.join(',');
console.log(joined);

let message='this is akshat garg'
let parts=message.split("i");
console.log(parts);

let numbers=[1,2,-1,-4];
let filtered=numbers.filter(num=>num>=0);
console.log(filtered)

let number=[7,8,9,10];
let mappings =number.map(val=>{return "student_no"+val;})
console.log(mappings);

let items=filtered.map((num)=>{
    let obj ={value:num};
    return obj;
})
console.log(items); 