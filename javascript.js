function toggleDarkMode() {
    elms = document.querySelectorAll("*");
    for(i=0; i<elms.length; i++) {
        elms[i].classList.toggle("darkMode");
    }
}
