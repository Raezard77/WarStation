window.onload = (_) => {
    const burger = document.querySelector("#burger-menu");
    const navLinks = document.querySelector("#nav-ul");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        navLinks.classList.toggle("shown");
    });
};
