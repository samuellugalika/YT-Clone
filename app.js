const menuBtn = document.querySelectorAll("#menu-btn");
const screenOverlay = document.querySelector(".screen-overlay");
const themeBtn = document.querySelector("#theme-btn i ");

if (localStorage.getItem("darkMode") === "enabled"){
    document.body.classList.add("dark-mode");
    themeBtn.classList.replace("bi-moon", "bi-brightness-high")
}
else{ 
    themeBtn.classList.replace("bi-brightness-high", "bi-moon");
}

themeBtn.addEventListener("click", ()=>{
    const isDarkmode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkmode ? "enabled" : "disabled");
    themeBtn.classList.toggle("bi-brightness-high", isDarkmode );
    themeBtn.classList.toggle("bi-moon", !isDarkmode );
})

menuBtn.forEach(button => {
    button.addEventListener("click", ()=>{
        document.body.classList.toggle("sidebar-hidden");
    });
})

screenOverlay.addEventListener("click", ()=>{
    document.body.classList.toggle("sidebar-hidden");
});

if(window.innerWidth >= 768){
    document.body.classList.remove("sidebar-hidden")
}