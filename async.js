
async function bhai(){
   let res = await fetch(`https://randomuser.me/api/`)
    let ans = await res.json()
    console.log(ans)


    let result = ans.results[0].location.city;
  console.log("City:", result);

   let result2 =ans.results[0].name
     console.log("name:", result2);

     let result3 =ans.results[0].location
     console.log("location:", result3);

        let result4 =ans.results[0].location.coordinates

     console.log("coordinates:", result4);
}
 
bhai();
    