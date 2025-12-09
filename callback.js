
let h1 =document.querySelector("h1")

// h1.addEventListener("click",function(){

//     console.log("jhii")
// })


function pickup(addr, takepickup){

    

      setTimeout( function() {

        takepickup( "takeauto" , function(){

        console.log("there")
     })

    }, 2000);

}

 pickup("address",function(val,f1){
 
  f1();

    console.log('new york ')
 })


   