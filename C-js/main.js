// learning function in js

// const ans=(a,b) =>{
//     return a+b;

// }

// console.log(ans(2,3));
// console.log(1+"1"-1);

// const square= (num) => console.log(num*num);
// square(65);

// trying callback function passed inside a function as argument

function mainfunction(a,b,takingb){
    console.log('function a was called');
    // calling another function
 return takingb(a,b);
}

// writing call back function (call back means merging two function )
function callbaack() {
    console.log("callback calling maverick");
}

const sub=(a,b) => a-b;

    console.log(mainfunction(2,4,sub));
    
// call back hell giving a wait time of function to call
          