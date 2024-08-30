
(function learn(){
    console.log("rude")
})();

//; to end the execution of the above function if not mentioned it causes error

//To avoid pollution of global scope the function is wrapped inside the () to have its own scope and executed immmediately.

(()=>{
  console.log("Atticus");
})();

