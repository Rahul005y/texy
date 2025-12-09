console.log("1")
console.log("2")

setTimeout(function() {
   console.log("4") 
}, 0);

console.log("3")


let teken = new Promise(function(resolve, reject) {
    let num = Math.floor(Math.random() * 10);
    if (num > 5) {
        resolve(`number is greater than ${num}`);
    } else {
        reject(`number is less than ${num}`);
    }
});


teken.then(function(val){
  console.log(val)
})
.catch(function(val){
  console.log(val)
})

