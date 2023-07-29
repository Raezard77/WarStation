window.onload = (_) => {
    const burger = document.querySelector("#burger-menu");
    const navLinks = document.querySelector("#nav-ul");
    
    burger.addEventListener("click", () => {
        burger.classList.toggle("burger-cross");
        navLinks.classList.toggle("side-nav");
    });
    
    const ele = document.querySelector('#nav-ul li a:first-child')
    ele.classList.add("page-selected")
    navLinks.addEventListener("mouseover", _ => ele.classList.remove("page-selected"))
    navLinks.addEventListener("mouseleave", _ => ele.classList.add("page-selected"))
};
// window.location.pathname