const hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click', (e) => {
    let btn = e.target;
    let nav = document.querySelector(".navigation-bar")
    let state = btn.getAttribute("state")
    nav.classList.toggle("open")
    if (state === "closed") {
        e.target.src = "./pics/close.png"
        btn.setAttribute("state", "open");
    } else {
        e.target.src = "./pics/hamburger-menu.png"
        btn.setAttribute("state", "closed");
    }
})
