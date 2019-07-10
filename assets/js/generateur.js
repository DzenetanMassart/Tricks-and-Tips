let generate = " ";

/*
|===================|
|L'affichage de base|
|===================|
*/
for (let ii = 0; ii < tritip.length; ii++) {

    let tt = (tritip[ii]);

    generate += '<a href="' + tt.link + '" target="_blank"><div class="card"> <h4 class = "card-title">' +
        tt.title +
        '</h4> <span class = "badge';

    if (tt.badge === "Javascript") {
        generate += ' Javascript';
    } else if (tt.badge === "CSS") {
        generate += ' CSS';
    } else if (tt.badge === "HTML") {
        generate += ' HTML';
    } else if (tt.badge === "Bootstrap") {
        generate += ' Bootstrap';
    } else if (tt.badge === "WordPress") {
        generate += ' WordPress';
    } else if (tt.badge === "React") {
        generate += ' React';
    } else if (tt.badge === "PHP") {
        generate += ' PHP';
    } else {
        generate += '';
    }

    generate += '">' +
        tt.badge +
        '</span>';
    if (tt.generateur === 1) {
        generate += '<span class = "generateur" > Generateur </span>'
    }
    if (tt.img_link != "nope") {
        generate += '<img class = "card-img-top"src ="' +
            tt.img_link +
            '" alt ="' +
            tt.title +
            '" >'
    } else {}

    generate += '<div class = "card-body"> <p class = "card-text"><span>' +
        tt.desc +
        '</span></p></div></div></a>';

}
document.getElementById("generate").innerHTML += generate;

/*
|================================|
|Les différents boutons du header|
|================================|
*/
document.getElementById("TOUT").addEventListener("click", tout);

document.getElementById("HTML").addEventListener("click", function() { gen("HTML"); });
//Programmation
document.getElementById("CSS").addEventListener("click", function() { gen("CSS"); });
document.getElementById("Bootstrap").addEventListener("click", function() { gen("Bootstrap"); });
document.getElementById("WordPress").addEventListener("click", function() { gen("WordPress"); });
//Esthétique
document.getElementById("JS").addEventListener("click", function() { gen("Javascript"); });
document.getElementById("React").addEventListener("click", function() { gen("React"); });
document.getElementById("PHP").addEventListener("click", function() { gen("PHP"); });

document.getElementById("Autre").addEventListener("click", function() { gen(""); });

document.getElementById("Gen").addEventListener("click", generators);


/*
|=========================|
|Les fonctions des boutons|
|=========================|
*/


//La fonction du bouton "tout"
function tout() {
    let generate = " ";

    for (let ii = 0; ii < tritip.length; ii++) {

        let tt = (tritip[ii]);

        generate += '<a href="' + tt.link + '" target="_blank"><div class="card"> <h4 class = "card-title">' +
            tt.title +
            '</h4> <span class = "badge';

        if (tt.badge === "Javascript") {
            generate += ' Javascript';
        } else if (tt.badge === "CSS") {
            generate += ' CSS';
        } else if (tt.badge === "HTML") {
            generate += ' HTML';
        } else if (tt.badge === "Bootstrap") {
            generate += ' Bootstrap';
        } else if (tt.badge === "WordPress") {
            generate += ' WordPress';
        } else if (tt.badge === "React") {
            generate += ' React';
        } else if (tt.badge === "PHP") {
            generate += ' PHP';
        } else {
            generate += '';
        }

        generate += '">' +
            tt.badge +
            '</span>';
        if (tt.generateur === 1) {
            generate += '<span class = "generateur" > Generateur </span>'
        }
        if (tt.img_link != "nope") {
            generate += '<img class = "card-img-top"src ="' +
                tt.img_link +
                '" alt ="' +
                tt.title +
                '" >'
        } else {}

        generate += '<div class = "card-body"> <p class = "card-text"><span>' +
            tt.desc +
            '</span></p></div></div></a>';
    }
    document.getElementById("generate").innerHTML = generate;


}


// La fonction qui lit les boutons d'affichage spécifique en fonction du badge
function gen(nom) {;
    document.title = "Tricks and Tips-" + nom;
    let generate = " ";

    for (let ii = 0; ii < tritip.length; ii++) {
        let tt = (tritip[ii]);

        if (tt.badge === nom) {
            generate += '<a href="' + tt.link + '" target="_blank"><div class="card"> <h4 class = "card-title">' +
                tt.title +
                '</h4> <span class = "badge ';
            generate += nom;
            generate += '">' +
                tt.badge +
                '</span>';
            if (tt.generateur === 1) {
                generate += '<span class = "generateur" > Generateur </span>'
            }
            if (tt.img_link != "nope") {
                generate += '<img class = "card-img-top"src ="' +
                    tt.img_link +
                    '" alt ="' +
                    tt.title +
                    '" >'
            } else {}

            generate += '<div class = "card-body"> <p class = "card-text"><span>' +
                tt.desc +
                '</span></p></div></div></a>';
        }

    }
    document.getElementById("generate").innerHTML = generate;

}


//La fonction du boutons des générateurs
function generators() {
    let generate = " ";

    for (let ii = 0; ii < tritip.length; ii++) {
        let tt = (tritip[ii]);

        if (tt.generateur === 1) {

            generate += '<a href="' + tt.link + '"><div class="card"> <h4 class = "card-title">' +
                tt.title +
                '</h4> <span class = "badge';

            if (tt.badge === "Javascript") {
                generate += ' js';
            } else if (tt.badge === "CSS") {
                generate += ' css';
            } else if (tt.badge === "HTML") {
                generate += ' html';
            } else if (tt.badge === "Bootstrap") {
                generate += ' bootstrap';
            } else if (tt.badge === "WordPress") {
                generate += ' wp';
            } else if (tt.badge === "React") {
                generate += ' react';
            } else if (tt.badge === "PHP") {
                generate += ' php';
            } else {
                generate += '';
            }

            generate += '">' +
                tt.badge +
                '</span>';
            generate += '<span class = "generateur" > Generateur </span>'
            if (tt.img_link != "nope") {
                generate += '<img class = "card-img-top"src ="' +
                    tt.img_link +
                    '" alt ="' +
                    tt.title +
                    '" >'
            } else {}

            generate += '<div class = "card-body"> <p class = "card-text"><span>' +
                tt.desc +
                '</span></p></div></div></a>';

        }

    }
    document.getElementById("generate").innerHTML = generate;
}