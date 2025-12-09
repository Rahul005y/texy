let btn = document.querySelector("#btn");

function fetchdata(data, fun1) {

    // fun1 receives 2 arguments -> val, fun2
    fun1(
        { user: "rohit", age: 20, gen: "male" },

        function (val) {
            console.log(val.user); // now val is available
        }
    );

    console.log(data);
}

fetchdata(
    { user: "rohit", age: 20, gen: "male" },

    function (val, fun2) {

        // fun2 should receive val to use inside fun2
        fun2(val);

        console.log("hi");
    }
);
