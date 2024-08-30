// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
}
//output is 1,2,3,4,5


const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
//output is H,e,l,l,o,w,o,r,l,d,! 


//----------------------------------------------------------------------

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/



for(const [key] of map) {
   // console.log(key);
}
/*
IN
USA
Fr
*/


//Destruct of Array as key and values from maps
for(const [key,values] of map){
   // console.log(`${key} : ${values}`)
}
/*
IN : India
USA : United States of America
Fr : France
*/

//----------------------------------------------------------------------


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);  
}  
//  TypeError: myObject is not iterable ....Not true with objects can't access it using for of
