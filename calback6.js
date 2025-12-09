function userdata(user, fun1) {
    console.log("userdata fetching....");

    setTimeout(() => {
        console.log("User:", user);
        fun1({ username: "rakesh", age: 20, usrid: "1234h" });
    }, 1000);
}

function userpost(userid, fun2) {
    console.log("Fetching posts for user:", userid);

    setTimeout(() => {
        fun2(["img1.png", "img2.png", "img3.png"]);
    }, 1500);
}

function usercomments(post, fun3) {
    console.log("Fetching comments for:", post);

    setTimeout(() => {
        fun3(["nice!", "awesome!", "😍"]);
    }, 1200);
}

userdata("rohit", function(userdetails) {
    console.log("Age:", userdetails.age);

    userpost(userdetails.usrid, function(posts) {
        console.log("Posts:", posts);

        usercomments(posts[0], function(comments) {
            console.log("Comments on first post:", comments);
        });
    });
});
