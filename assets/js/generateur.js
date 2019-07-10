let generate = " ";

//La génération de base
for (let ii = 0; ii < tritip.length; ii++) {

    let tt = (tritip[ii]);

    generate += '<a href="' + tt.link + '"><div class="card"> <h4 class = "card-title">' +
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

//Les boutons du header

document.getElementById("TOUT").addEventListener("click", tout);

document.getElementById("HTML").addEventListener("click", function() { gen("HTML"); });

document.getElementById("CSS").addEventListener("click", function() { gen("CSS"); });
document.getElementById("Bootstrap").addEventListener("click", function() { gen("Bootstrap"); });
document.getElementById("WordPress").addEventListener("click", function() { gen("WordPress"); });

document.getElementById("JS").addEventListener("click", function() { gen("Javascript"); });
document.getElementById("React").addEventListener("click", function() { gen("React"); });
document.getElementById("PHP").addEventListener("click", function() { gen("PHP"); });
document.getElementById("Autre").addEventListener("click", function() { gen(""); });

document.getElementById("Gen").addEventListener("click", generators);


//Les fonctions du boutons
function tout() {
    let generate = " ";

    for (let ii = 0; ii < tritip.length; ii++) {

        let tt = (tritip[ii]);

        generate += '<a href="' + tt.link + '"><div class="card"> <h4 class = "card-title">' +
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



function gen(a) {;
    let generate = " ";

    for (let ii = 0; ii < tritip.length; ii++) {
        let tt = (tritip[ii]);

        if (tt.badge === a) {
            generate += '<a href="' + tt.link + '"><div class="card"> <h4 class = "card-title">' +
                tt.title +
                '</h4> <span class = "badge ';
            generate += a;
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