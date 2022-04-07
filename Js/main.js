

let scrollToTop = document.querySelector(".to-top");

let Navbar = document.querySelector(".navbar-nav");

// Navbar Fixed && Scroll To Top 
window.onscroll = ()=>{
    
    this.scrollY > 100? Navbar.classList.add("show") :   Navbar.classList.remove("show");

    this.scrollY > 500? scrollToTop.classList.add("show") : scrollToTop.classList.remove("show");


}
scrollToTop.onclick = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Que Questions 
let headQuestions = document.querySelectorAll(".group-questions > .head ");

let titleQuestions = document.querySelectorAll(".group-questions > .title");

headQuestions.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        e.currentTarget.classList.toggle("show");

        e.currentTarget.nextElementSibling.classList.toggle("show");
    });
});


const allLinks = document.querySelectorAll(".links li");

    allLinks.forEach((link)=>{
        link.addEventListener("click" , (e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    let toggle = document.querySelector(".toggle");

const Links = document.querySelector(".links");

toggle.addEventListener("click" , (e) =>{
    e.preventDefault();
    Links.classList.toggle("show")
})