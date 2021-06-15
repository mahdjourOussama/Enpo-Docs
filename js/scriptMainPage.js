const hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click', (e) => {
    let btn = e.target;
    let nav = document.querySelector(".navigation-bar")
    let bigNavContainer = document.querySelector(".big-nav-container")
    let state = btn.getAttribute("state")
    nav.classList.toggle("open")
    if (state === "closed") {
        e.target.src = "./pics/close.png"
        btn.setAttribute("state", "open");
        bigNavContainer.classList.add("header-hamburger-active")
        nav.classList.add("hamburger-nav-active")
    } else {
        e.target.src = "./pics/hamburger-menu.png"
        btn.setAttribute("state", "closed");
        bigNavContainer.classList.remove("header-hamburger-active")
        nav.classList.remove("hamburger-nav-active")
    }
})