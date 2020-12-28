//u can delete these comments, they explain the code
function toggleDarkMode() {
    elms = document.querySelectorAll("*");//queryselector all returns a list of all the elements with that class/that name.
    for(i=0; i<elms.length; i++) {//well loop through each element
        elms[i].classList.toggle("darkMode");//and toggle the darkMode class.
    }
}
