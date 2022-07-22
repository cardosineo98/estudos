let btn = document.querySelector("button");

function msg() {
    console.log("Clicou em Min");
}

btn1.addEventListener("click",msg);

btn2.addEventListener("click", function() {
    btn1.removeEventListener("click", msg);
})