const buttonArray = document.querySelectorAll(".side button")
for(i=0;i<buttonArray.length;i++)
    buttonArray[i].addEventListener("click",changeDrive)

function changeContent(trigger){
    var f = trigger.getAttribute("aria-label")
    const body = document.querySelector(".main-content")
    switch(f){
        case "first speciality":
            body.innerHTML ="hello world"
            break;
        case "second speciality":
            body.innerHTML ="hello world2"
            break;
        case "third speciality":
            body.innerHTML ="hello third"
            break;
    }
}

function changeDrive(b) {
    const body = document.querySelector(".second iframe")
    var f = b.target.getAttribute("aria-label")
    switch(f){
        case "s1":
            body.src ="https://drive.google.com/embeddedfolderview?id=152b4FVvDaqmN5aKTj5KjNytEv35Bnq4M#list"
            break;
        case "s2":
            body.innerHTML ="hello world2"
            break;
        case "s3":
            body.innerHTML ="hello third"
            break;
    }
}
