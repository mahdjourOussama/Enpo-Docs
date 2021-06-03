const productiqueLinks = {
    "s1":"https://drive.google.com/embeddedfolderview?id=10QhOpEurO65NWLa8#list",
    "s2":"",
    "s3":"",
    s4:"",
    s5:"",
}
const energetiqueLinks = {
    "s1":"https://drive.google.com/embeddedfolderview?id=10QhOpEurO65NWLa8Lc0DGZQyW4a8wSBs#list",
    "s2":"",
    "s3":"",
    s4:"",
    s5:"",
}
hideElement("productique");

function changeContent(trigger){
    var speciality = trigger.getAttribute("aria-label")
    const driveDisplay = document.querySelector(".main-content")
    console.log(speciality)
    switch(speciality){
        case "productique":
            hideElement("energetique");
            showElement("productique");
            break;
        case "energetique":
            hideElement("productique");
            showElement("energetique");
            break;
    }
    changeSemestre(speciality,"s1")
    console.log(speciality.id)
}

function changeSemestre(specialite,semestre) {
    const body = document.querySelector(".second iframe")
    switch (specialite) {
        case "energetique":
            body.src = energetiqueLinks[semestre]
            break;
        case "productique":
            body.src = productiqueLinks[semestre]
            break;
    }
}

