// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",         //name is taken as "name" string default
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",        //symbol in objects using []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   //access using dot for if key is not wrapped in " " .eg name
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  //access using [] if key is string  .egn "full name"
// console.log(JsUser[mySym])        //access of symbol is done using []

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)             //frezzes the object no more manipulation ca be done 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);     //this keyword to access the object withint he scope
}

console.log(JsUser.greeting());    
console.log(JsUser.greetingTwo());