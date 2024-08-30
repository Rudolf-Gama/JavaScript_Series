const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);
//output:{}  empty object


//--------------------------------functions Declaration types

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "hitesh"
    console.log(this);
}

// chai()


//----------------------------------------------------------------------

//Explicit return { } must haev return included inside curley braces

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//Implicit return ( ) it does not require a return statement 

// const addTwo = (num1, num2) =>  num1 + num2       //Eg1
// const addTwo = (num1, num2) => ( num1 + num2 )    //Eg2

//Implicit return using object{} must be wrapped in ()  i.e    ({key: value})
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))

