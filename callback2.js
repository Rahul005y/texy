let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    let add = addcalculator(5, 4);
    let sub = subcalculator(5, 4);

    console.log(add);
    console.log(sub);
});

function addcalculator(a, b) {
    return a + b;
}

function subcalculator(a, b) {
    return a - b;
}
