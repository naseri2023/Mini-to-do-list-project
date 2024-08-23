let onKeyDown = document.getElementById("bodyClass")
let key = document.getElementById("key")
let keyCode = document.getElementById("keyCode")
let code = document.getElementById("code")
let locationKey = document.getElementById("location")


onKeyDown.addEventListener("keydown",function (event) {
    event.preventDefault()
    key.innerHTML = event.key
    keyCode.innerHTML = event.keyCode
    code.innerHTML = event.code
    locationKey.innerHTML = event.location
})


