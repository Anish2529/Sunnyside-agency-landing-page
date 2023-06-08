const menu = document.querySelector(".open")
const close = document.querySelector(".close")
const mobile = document.querySelector(".active-nav")

menu.addEventListener("click",() =>{

        mobile.style.display = "flex"
        menu.style.display = "none"
        close.style.display = "block"

})
close.addEventListener("click",() =>{

    mobile.style.display = "none"
    menu.style.display = "block"
    close.style.display = "none"

})
