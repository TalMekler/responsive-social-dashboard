const toggle_btn = document.querySelector("header .theme-switcher .switcher-wrapper");
const toggle_circle = document.querySelector("header .theme-switcher .switcher-wrapper .switcher-toggle")

toggle_btn.addEventListener("click", changeTheme);

function changeTheme(){
    document.querySelector("body").classList.toggle("light-theme");
    toggle_circle.classList.toggle("dark-theme");
    toggle_circle.classList.toggle("light-theme");
}