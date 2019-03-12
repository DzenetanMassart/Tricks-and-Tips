let js = document.querySelectorAll("#JS")
js.style.display = "block-inline";
let boo = document.querySelectorAll("#Boo")
boo.style.display = "block-inline";
let ht = document.querySelectorAll("#HTM")
ht.style.display = "block-inline";

document.querySelector("#TOUT").addEventListener("click", TOUT);
document.querySelector("#HTML").addEventListener("click", HT);
document.querySelector("#Boostrap").addEventListener("click", BOOS);
document.querySelector("#Javascript").addEventListener("click", JavS);



function TOUT() {
    document.querySelectorAll("#JS").style.display = "block-inline";
    document.querySelectorAll("Boo").style.display = "block-inline";
    document.querySelectorAll("HTM").style.display = "block-inline";
    let style_JS = window.getComputedStyle("js");
    console.log("Les #JS ont comme display : " + style_JS.getPropertyValue("display"));
    let style_Boo = window.getComputedStyle("boo");
    console.log("Les #Boo ont comme display :" + style_Boo.getPropertyValue("display"));
    let style_HTM = window.getComputedStyle("ht");
    console.log("Les #HTM ont comme display :" + style_HTM.getPropertyValue("display"));
}

function HT() {
    TOUT();
    document.querySelectorAll("#JS").style.display = "none";
    document.querySelectorAll("Boo").style.display = "none";
}

function BOOS() {
    TOUT();
    document.querySelectorAll("#JS").style.display = "none";
    document.querySelectorAll("HTM").style.display = "none";
}

function JavS() {
    TOUT();
    document.querySelectorAll("Boo").style.display = "none";
    document.querySelectorAll("HTM").style.display = "none";
}

AOS.init({
    duration: 1200,
})