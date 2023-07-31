window.onload = (_) => {
    // Vars
    navUl = document.querySelector("#nav-ul");
    pageNavLi = document.querySelector(".page-selected");
    links = document.querySelectorAll("#nav-ul a");
    burger = document.querySelector("#burger-menu");

    // User Clicks On A Link
    links.forEach((link) =>
        // @Room_For_Better:- Needed a loop cz onClick is out of scope across files
        link.addEventListener("click", (event) => {
            // if (event.target.classList.contains("child-nav-link")) {
            //     pageNavLi =
            //         event.target.parentElement.parentElement.previousSibling;
            // } else {
            // }
            pageNavLi = event.target;
            links.forEach((elem) => {
                elem.classList.remove("page-selected");
            });
            pageNavLi.classList.add("page-selected");
        })
    );

    // User Hovers
    navUl.addEventListener("mouseover", (_) => {
        pageNavLi.classList.remove("page-selected");
    });
    navUl.addEventListener("mouseleave", (_) => {
        // Check if User is not on home page
        if (
            window.location.href.indexOf(
                "/",
                window.location.origin.length + 1
            ) > 0 &&
            window.location.href[window.location.href.length - 1] != "/" && // for hosting on gh pages which makes the domain name the base URL
            window.location.href[window.location.href.length - 1] != "#"
        ) {
            pageNavLi.classList.add("page-selected");
        }
    });

    // Mobile Burger
    burger.addEventListener("click", () => {
        burger.classList.toggle("burger-cross");
        navUl.classList.toggle("side-nav");
    });
};

let navUl;
let pageNavLi;
let links;
let burger;
