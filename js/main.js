function sayHello (){
    return "Hi"
}

function setH1(string) {
    var h1 = document.querySelector('h1')
    h1.innerText = string
}

function showGreeting() {
    setH1(sayHello("Phil"))
}

var button = document.querySelector('button')
button.addEventListener('click', showGreeting)