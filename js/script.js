const amLinks = {
    "s1":"https://drive.google.com/embeddedfolderview?id=0B6ANTtDVbRt4X01sRUFMQWtYSmM#list",
    s2:"",
    s3:"",
    s4:"",
    s5:"",
}
const indusLinks = {
    "s1":"https://drive.google.com/embeddedfolderview?id=10QhOpEurO65NWLa8Lc0DGZQyW4a8wSBs#list",
    s2:"",
    s3:"",
    s4:"",
    s5:"",
}
const cciLinks = {
    "s1":"https://drive.google.com/embeddedfolderview?id=10QhOpEurO65NWLa8Lc0DGZQyW4a8wSBs#list",
    "s2":"",
    "s3":"",
    s4:"",
    s5:"",
}
const bdLinks = {
    "s1":"https://drive.google.com/embeddedfolderview?id=0B6ANTtDVbRt4X01sRUFMQWtYSmM#list",
    s2:"",
    s3:"",
    s4:"",
    s5:"",
}
const cpstLinks = {
    "s1":"https://drive.google.com/embeddedfolderview?id=10QhOpEurO65NWLa8Lc0DGZQyW4a8wSBs#list",
    s2:"",
    s3:"",
    s4:"",
}



const specialitesButtons = document.querySelectorAll(".side button")
for(i=0;i<specialitesButtons.length;i++)
specialitesButtons[i].addEventListener("click",changeDrive)

const semestresButtons = document.querySelectorAll(".container nav a")
for(i=0;i<semestresButtons.length;i++)
    semestresButtons[i].addEventListener("click",(event)=>{
        const previous = document.querySelector(".container nav a.active")
        previous.classList.remove("active");
        event.target.classList.add("active");
        changeContent(event.target);
    });



function changeDrive(b) {
    var semestre = b.target.getAttribute("aria-label")
    var specialite = b.target.parentElement
    const loading = document.querySelector("#loading")
    const drive = document.querySelector("#drive")
    loading.style.display = "block"
    drive.style.display = "none"
    changeSemestre(specialite.id,semestre)
    setTimeout(() => {
        loading.style.display = "none";
        drive.style.display = "block"
    }, 1000);
}

function waiting(){
    
}

function hideElement(id){
    const element = document.querySelector("#"+id);
    element.style.display ="none";
}
function showElement(id){
    const element = document.querySelector("#"+id);
    element.style.display ="flex";}
