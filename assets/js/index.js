//Les déclarations
let tout = document.getElementsByClassName("card");
let html = document.getElementsByClassName("htmlcard");
let js = document.getElementsByClassName("jscard");
let Boostrap = document.getElementsByClassName("boocard");
let API = document.getElementsByClassName("apicard");
let canvas = document.getElementsByClassName("canvacard");
let css = document.getElementsByClassName("csscard");

// Les liens avec les fonctions
document.getElementById("TOUT").onclick = all;
document.getElementById("HTML").onclick = htmlcards;
document.getElementById("Javascript").onclick = jscards;
document.getElementById("Bootstrap").onclick = boocards;
document.getElementById("API").onclick = apicards;
document.getElementById("Canvas").onclick = canvacards;
document.getElementById("CSS").onclick = csscards;



//Bouton "TOUT"
function all() {
    if (tout.classList) {
        tout.classList.toggle("card");
    } else {
        // For IE9
        let classes = tout.className.split(" ");
        let i = classes.indexOf("card");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("card");
        tout.className = classes.join(" ");
    }
}

//Bouton "HTML"
function htmlcards() {
    if (html.classList) {
        html.classList.toggle("htmlcard");
    } else {
        // For IE9
        let classes = html.className.split(" ");
        let i = classes.indexOf("htmlcard");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("htmlcard");
        html.className = classes.join(" ");
    }
}

//Bouton "Javascript"
function jscards() {
    if (js.classList) {
        js.classList.toggle("jscard");
    } else {
        // For IE9
        let classes = js.className.split(" ");
        let i = classes.indexOf("jscard");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("jscard");
        js.className = classes.join(" ");
    }
}

//Bouton "Boostrap"
function boocards() {
    if (Boostrap.classList) {
        Boostrap.classList.toggle("boocard");
    } else {
        // For IE9
        let classes = Boostrap.className.split(" ");
        let i = classes.indexOf("boocard");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("boocard");
        Boostrap.className = classes.join(" ");
    }
}

//Bouton "API"
function apicards() {
    if (API.classList) {
        API.classList.toggle("apicard");
    } else {
        // For IE9
        let classes = API.className.split(" ");
        let i = classes.indexOf("apicard");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("apicard");
        API.className = classes.join(" ");
    }
}

//Bouton "Canvas"
function canvacards() {
    if (canvas.classList) {
        canvas.classList.toggle("canvacard");
    } else {
        // For IE9
        let classes = canvas.className.split(" ");
        let i = classes.indexOf("canvacard");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("canvacard");
        canvas.className = classes.join(" ");
    }
}

//Bouton "CSS"
function csscards() {
    if (css.classList) {
        css.classList.toggle("csscard");
    } else {
        // For IE9
        let classes = css.className.split(" ");
        let i = classes.indexOf("csscard");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("csscard");
        css.className = classes.join(" ");
    }
}