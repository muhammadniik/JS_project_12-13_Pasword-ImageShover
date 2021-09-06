const inpust = document.getElementById("input");

function showsicon(id) {
    if (id == "eye") {
        document.getElementById("eye").classList.remove("active");
        document.getElementById("eyeSlash").classList.remove("active");
        inpust.type = 'password';
    } else {

        document.getElementById("eyeSlash").classList.add("active");
        document.getElementById("eye").classList.add("active");
        inpust.type = 'text';
    }
    // document.getElementById(`${id}`).classList.toggle('active');


}
let i = false;

function bigImage(man) {
    man.classList.toggle("active");
    if (i == false) {
        man.childNodes[1].style.display = "block";


        i = true;
    } else {
        man.childNodes[1].style.display = "none";

        i = false;
    }


}