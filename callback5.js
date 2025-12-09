function userdata(user, fun1) {
    console.log("userdata fetching....");

    setTimeout(() => {
        console.log(user);
        fun1({ username: "rakesh", age: 20, usrid: "1234h" });
    }, 1000);
}

function userpost(userid, fun3) {
    setTimeout(() => {
        fun3({ post1: "img1", post2: "img2" });
    }, 2000);
}

userdata("rohit", function (userdetails) {
    console.log("Age:", userdetails.age);
    console.log("post fetching....");

    userpost(userdetails.userid,function(postdetails){
        console.log(postdetails.post1)
    })
    
});
