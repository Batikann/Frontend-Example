const toggle=document.querySelector("#togglee");
const body=document.querySelector("body");
const indicator=document.getElementById("indicator");
const mainHeaderDOM=document.getElementById("test");
const topBgDOM=document.querySelector(".white-bg");
const cardBgDOM=document.querySelectorAll(".card");
const nameDOM=document.querySelectorAll(".name-white");
const overviewDOM=document.querySelectorAll(".overview-middle-text-white");
const overviewtextDOM=document.querySelectorAll(".overview-middle-textt-white");

function active() {
    toggle.classList.toggle("active");
    if (body.classList.contains("white-body")) {
        toggle.classList.remove("toggle-white");
        toggle.classList.add("toggle-dark");
        indicator.classList.remove("indicator-2");
        indicator.classList.add("indicator");
        body.classList.remove("white-body");
        body.classList.add("dark-body");
        mainHeaderDOM.classList.remove("main-header-white");
        mainHeaderDOM.classList.add("main-header");
        topBgDOM.classList.remove("white-bg");
        topBgDOM.classList.add("dark-bg");
        cardBgDOM.forEach(p=>{
            p.classList.remove("card-white");
            p.classList.add("card-dark");
        });
        nameDOM.forEach(p=>{
            p.classList.remove("name-white");
            p.classList.add("name-dark");
        });
        overviewDOM.forEach(p=>{
            p.classList.remove("overview-middle-text-white");
            p.classList.add("overview-middle-text");
        });
        overviewtextDOM.forEach(p=>{
            p.classList.remove("overview-middle-textt-white");
            p.classList.add("overview-middle-textt");
        });

    }
    else{
        toggle.classList.remove("toggle-dark");
        toggle.classList.add("toggle-white");
        indicator.classList.remove("indicator");
        indicator.classList.add("indicator-2");
        body.classList.remove("dark-body");
        body.classList.add("white-body");
        mainHeaderDOM.classList.remove("main-header");
        mainHeaderDOM.classList.add("main-header-white");
        topBgDOM.classList.remove("dark-bg");
        topBgDOM.classList.add("white-bg");
        cardBgDOM.forEach(p=>{
            p.classList.remove("card-dark");
            p.classList.add("card-white");
        });
        cardBgDOM.forEach(p=>{
            p.classList.remove("name-white");
            p.classList.add("name-dark");
        });
        overviewDOM.forEach(p=>{
            p.classList.remove("overview-middle-text");
            p.classList.add("overview-middle-text-white");
        });
        overviewtextDOM.forEach(p=>{
            p.classList.remove("overview-middle-textt");
            p.classList.add("overview-middle-textt-white");
        });
    }
}


toggle.addEventListener("click",active);

