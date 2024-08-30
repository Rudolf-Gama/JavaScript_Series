// const tinderUser = new Object()  //using constructor method singleton object
const tinderUser = {}              // using literals no singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
                            // (target,obj1,obj2,...)   copies all objects into the target


const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));     // return all keys of object
// console.log(Object.values(tinderUser));   //return all values of object
// console.log(Object.entries(tinderUser));   //return key-value pair of all objects

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Destructing of object


const course = {
    coursename: "js in english",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//to acces a key of objects
const {courseInstructor} = course
//to access key of objects by giving an alias naming like instructor and therafter using it 
const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

//Eg of Json file 

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {}
]
