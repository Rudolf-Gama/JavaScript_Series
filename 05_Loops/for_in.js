const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
/* 
 Output:
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

// -----------------------------------------------------------------------

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    //console.log(programming[key]);  // prints js,rb,p,java,cpp
    //console.log(`key ${key} - value ${programming[key]}`);
}
/*
key 0 - value js
key 1 - value rb
key 2 - value py
key 3 - value java
key 4 - value cpp
*/

//--------------------------------------------------------------------------
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(map[key]);
// }   prints nothing not works for maps for in