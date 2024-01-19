const myinput=document.getElementById("myinput")
const ourHeader=document.getElementById("ourHeader")

myinput.addEventListener("input", amazingFunction)

function amazingFunction() {
    if (myinput.value) {
        ourHeader.innerText=myinput.value + "is cool"
    } else {
        ourHeader.innerText= 'please enter a name'
    }
}
