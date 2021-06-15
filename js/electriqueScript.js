const automatiqueLinks = {
    "s1":"https://drive.google.com/embeddedfolderview?id=10QhOpEurO65NWLa8Lc0DGZQyW4a8wSBs#list",
    "s2":"",
    "s3":"",
    s4:"",
    s5:"",
}
const electroniqueLinks = {
    "s1":"https://drive.google.com/embeddedfolderview?id=0B6ANTtDVbRt4X01sRUFMQWtYSmM#list",
    s2:"",
    s3:"",
    s4:"",
    s5:"",
}
const electrotechniqueLinks = {
    "s1":"https://drive.google.com/embeddedfolderview?id=10QhOpEurO65NWLa8Lc0DGZQyW4a8wSBs#list",
    s2:"",
    s3:"",
    s4:"",
    s5:"",
}
hideElement("electronique");
hideElement("electrotechnique");

function changeContent(trigger){
    var speciality = trigger.getAttribute("aria-label")
    const driveDisplay = document.querySelector(".main-content")
    console.log(speciality)
    switch(speciality){
        case "automatique":
            hideElement("electronique");
            hideElement("electrotechnique");
            showElement("automatique");
            break;
        case "electrotechnique":
            hideElement("electronique");
            showElement("electrotechnique");
            hideElement("automatique");
            break;
        case "electronique":
            showElement("electronique");
            hideElement("electrotechnique");
            hideElement("automatique");
            break;
    }
}

function changeSemestre(specialite,semestre) {
    const body = document.querySelector(".second iframe")
    console.log(automatiqueLinks[semestre])
    switch (specialite.id) {
        case "automatique":
            body.src = automatiqueLinks[semestre]
            break;
        case "electronique":
            body.src = electroniqueLinks[semestre]
            break;
        case "electrotechnique":
            body.src = electroniqueLinks[semestre]
            break;
        case "imsi":
            body.src = imsiLinks[semestre]
            break;
        case "cpst":
            body.src = cpstLinks[semestre]
            break;
        case "energetique":
            body.src = energetiqueLinks[semestre]
            break;
        case "productique":
            body.src = productiqueLinks[semestre]
            break;
        case "cci":
            body.src = cciLinks[semestre]
            break;
        case "bd":
            body.src = bdLinks[semestre]
            break;
        case "am":
            body.src = amLinks[semestre]
            break;
        case "indus":
            body.src = indusLinks[semestre]
            break;
    }
}

