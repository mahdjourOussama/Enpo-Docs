const imsiLinks = {
    "s1":"https://drive.google.com/embeddedfolderview?id=10QhOpEurO65NWLa8Lc0DGZQyW4a8wSBs#list",
    "s2":"",
    "s3":"",
    "s4":"",
    "s5":"",
}

function changeContent(trigger){
    return;
    var speciality = trigger.getAttribute("aria-label")
    const driveDisplay = document.querySelector(".main-content")
    console.log(speciality)
    switch(speciality){
        case "imsi":
            showElement("imsi");
            break;
    }
}

function changeSemestre(specialite, semestre) {
    const body = document.querySelector(".second iframe");
    switch (specialite.id) {
        case "imsi":
            body.src = imsiLinks[semestre];
            break;
    }
}
