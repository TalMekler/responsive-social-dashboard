const toggle_btn = document.querySelector("header .theme-switcher .switcher-wrapper");
const toggle_circle = document.querySelector("header .theme-switcher .switcher-wrapper .switcher-toggle")

toggle_btn.addEventListener("click", changeTheme);
setThemeAtTheStart();

function changeTheme() {
    document.querySelector("body").classList.toggle("light-theme");
    toggle_circle.classList.toggle("dark-theme");
    toggle_circle.classList.toggle("light-theme");
    changeLocalTheme();
}

// SAVE THEME
var saved_theme = localStorage.getItem("theme");
if (saved_theme == null) {
    localStorage.setItem("theme", "dark-theme");
}
function changeLocalTheme() {
    if (localStorage.getItem("theme") == 'dark-theme') {
        localStorage.setItem("theme", "light-theme");
    } else {
        localStorage.setItem("theme", "dark-theme");
    }
}

function setThemeAtTheStart() {
    if (localStorage.getItem("theme") == 'dark-theme') {
        document.querySelector("body").classList.remove("light-theme");
        toggle_circle.classList.add("dark-theme");
        toggle_circle.classList.remove("light-theme");
    }
    if (localStorage.getItem("theme") == 'light-theme'){
        document.querySelector("body").classList.add("light-theme");
        toggle_circle.classList.remove("dark-theme");
        toggle_circle.classList.add("light-theme");
    }
}