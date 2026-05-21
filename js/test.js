const scores = [10,23,30,5,10];
const grades = {math:90, english:75,science:88};




const prices1 = [250,120,80];
const prices2 = [500,60,340];
const prices3 = [90,45,200,150];


const applyToArray= (arr,func)=>{
    func(arr);
    
};

const getTotal= (prices) => {
    let sum=0;
    for(const i of prices){
        sum+=i;
    }
    return sum;
};
const getCount=(arr)=>{
    arr.length;
};


const forEachItem=(arr,action)=>{
    for(let i=0; i<arr.length ; i++){
        console.log(action(arr[i]));
    }
};

const double = (a)=> 2*a;
const square = (a) => a*a;
const disc = (a) => 0.9*a;

// forEachItem(prices1,double)
// forEachItem(prices1,square)
// forEachItem(prices1,disc)


const employees = [
    { name: "Alice",  age: 28, department: "Engineering", salary: 75000 },
    { name: "Bob",    age: 35, department: "Marketing",   salary: 60000 },
    { name: "Carol",  age: 24, department: "Engineering", salary: 70000 },
    { name: "Dave",   age: 42, department: "Marketing",   salary: 80000 },
    { name: "Eve",    age: 30, department: "Engineering", salary: 90000 },
    { name: "Frank",  age: 26, department: "Design",      salary: 55000 },
];


// console.log(employees.map((item)=>item.name));
// console.log(employees.filter((item)=>(item.age>27)).map((a)=>a.name));
// console.log(employees.filter((item)=>(item.department=="Engineering")).map((a)=>a.name));
// let total=employees.map((a)=>a.salary).reduce((a,b)=>(a+b));
// console.log(total);
// console.log(total/employees.length);

// let accumulator={};

// console.log(employees.reduce((a,b)=>{
//     if(b.department in a){
//         a[b.department].push(b.name);
//     }
//     else{
//         a[b.department]=[b.name];
//     }
//     return a;

// },{}));

// const car={
//     brand: "Toyota",
//     model: "Camry",
//     year: 2024,
// };

// Object.freeze(car);
// car.year = 2026;
// car.color = "red";
// console.log(car.year , car.color);



// const createCounter=()=>{
    
//     let count=0;
//     return ()=>{
//         count++;    
//         console.log(count);
//     }    ;
// };



// const counter = createCounter();
// counter();
// counter();
// counter();

// function calculate(a,b,callback){
//     console.log(callback(a,b));
// }

// calculate(10,5,(a,b)=>a+b);
// calculate(10,5,(a,b)=>a-b);
// calculate(10,5,(a,b)=>a*b);
// const users = [{ name: "Alex" }, { name: "Sam" }];

// const copy = structuredClone(users);

// copy[0].name = "John";

// console.log(users[0].name);



// const state = {
//   user: {
//     name: "Alex",
//     address: {
//       city: "Kochi"
//     }
//   }
// };

// let {user}={...state};
// let {name,address}=user;
// let {city}={...address};
// console.log(address);
// console.log(city);
// city="Banglore";
// address={city:city};
// user={name:name,address:address};
// state2={user:user};

// console.log(state);
// console.log(state2);


function add(a){
    return (b)=>a+b;
}

console.log(add(1)(2));