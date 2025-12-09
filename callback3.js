let btn = document.querySelector("#btn");

function showtime(val ,f1){
    f1();
        
    console.log(val);
    console.log("show time");
}

btn.addEventListener("click", function () {
    setTimeout(() => {
        showtime("hero",function () {
            console.log("something big f1");
        });
    }, 1000);
});
