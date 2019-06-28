let generate = " ";

//La génération de base
for (let ii = 0; ii < tritip.length; ii++) {

    let tt = (tritip[ii]);

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
    if (tt.generateur === 1) {
        generate += '<span class = "generateur" > Generateur </span>'
    }
    generate += '<img class = "card-img-top"src ="' +
        tt.img_link +
        '" alt ="' +
        tt.title +
        '" > <div class = "card-body"> <p class = "card-text"><span>' +
        tt.desc +
        '</span></p></div></div></a>';

}
document.getElementById("generate").innerHTML += generate;

//Les boutons du header

document.getElementById("TOUT").addEventListener("click", tout);

document.getElementById("HTML").addEventListener("click", html);

document.getElementById("CSS").addEventListener("click", css);
document.getElementById("Bootstrap").addEventListener("click", bs);
document.getElementById("WordPress").addEventListener("click", wp);

document.getElementById("JS").addEventListener("click", js);
document.getElementById("React").addEventListener("click", react);
document.getElementById("PHP").addEventListener("click", php);

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
        if (tt.generateur === 1) {
            generate += '<span class = "generateur" > Generateur </span>'
        }
        generate += '<img class = "card-img-top"src ="' +
            tt.img_link +
            '" alt ="' +
            tt.title +
            '" > <div class = "card-body"> <p class = "card-text"><span>' +
            tt.desc +
            '</span></p></div></div></a>';

    }
    document.getElementById("generate").innerHTML = generate;


}



function html() {;
    let generate = " ";

    for (let ii = 0; ii < tritip.length; ii++) {
        let tt = (tritip[ii]);

        if (tt.badge === "HTML") {
            generate += '<a href="' + tt.link + '"><div class="card"> <h4 class = "card-title">' +
                tt.title +
                '</h4> <span class = "badge';
            generate += ' html';
            generate += '">' +
                tt.badge +
                '</span>';
            if (tt.generateur === 1) {
                generate += '<span class = "generateur" > Generateur </span>'
            }
            generate += '<img class = "card-img-top"src ="' +
                tt.img_link +
                '" alt ="' +
                tt.title +
                '" > <div class = "card-body"> <p class = "card-text"><span>' +
                tt.desc +
                '</span></p></div></div></a>';

        }

    }
    document.getElementById("generate").innerHTML = generate;

}

function css() {;

    let generate = " ";
    for (let ii = 0; ii < tritip.length; ii++) {
        let tt = (tritip[ii]);

        if (tt.badge === "CSS") {
            generate += '<a href="' + tt.link + '"><div class="card"> <h4 class = "card-title">' +
                tt.title +
                '</h4> <span class = "badge';
            generate += ' css';

            generate += '">' +
                tt.badge +
                '</span>';
            if (tt.generateur === 1) {
                generate += '<span class = "generateur" > Generateur </span>'
            }
            generate += '<img class = "card-img-top"src ="' +
                tt.img_link +
                '" alt ="' +
                tt.title +
                '" > <div class = "card-body"> <p class = "card-text"><span>' +
                tt.desc +
                '</span></p></div></div> </a>';

        }

    }
    document.getElementById("generate").innerHTML = generate;

}

function bs() {;

    let generate = " ";
    for (let ii = 0; ii < tritip.length; ii++) {
        let tt = (tritip[ii]);

        if (tt.badge === "Bootstrap") {
            generate += '<a href="' + tt.link + '"><div class="card"> <h4 class = "card-title">' +
                tt.title +
                '</h4> <span class = "badge';
            generate += ' bootstrap';

            generate += '">' +
                tt.badge +
                '</span>';
            if (tt.generateur === 1) {
                generate += '<span class = "generateur" > Generateur </span>'
            }
            generate += '<img class = "card-img-top"src ="' +
                tt.img_link +
                '" alt ="' +
                tt.title +
                '" > <div class = "card-body"> <p class = "card-text"><span>' +
                tt.desc +
                '</span></p></div></div></a>';

        }

    }
    document.getElementById("generate").innerHTML = generate;

}

function wp() {;

    let generate = " ";
    for (let ii = 0; ii < tritip.length; ii++) {
        let tt = (tritip[ii]);

        if (tt.badge === "WordPress") {
            generate += '<a href="' + tt.link + '"><div class="card"> <h4 class = "card-title">' +
                tt.title +
                '</h4> <span class = "badge';

            generate += ' wp';

            generate += '">' +
                tt.badge +
                '</span>';
            if (tt.generateur === 1) {
                generate += '<span class = "generateur" > Generateur </span>'
            }
            generate += '<img class = "card-img-top"src ="' +
                tt.img_link +
                '" alt ="' +
                tt.title +
                '" > <div class = "card-body"> <p class = "card-text"><span>' +
                tt.desc +
                '</span></p></div></div></a>';
        }

    }
    document.getElementById("generate").innerHTML = generate;

}

function js() {;

    let generate = " ";
    for (let ii = 0; ii < tritip.length; ii++) {
        let tt = (tritip[ii]);

        if (tt.badge === "Javascript") {
            generate += '<a href="' + tt.link + '"><div class="card"> <h4 class = "card-title">' +
                tt.title +
                '</h4> <span class = "badge';

            generate += ' js';

            generate += '">' +
                tt.badge +
                '</span>';
            if (tt.generateur === 1) {
                generate += '<span class = "generateur" > Generateur </span>'
            }
            generate += '<img class = "card-img-top"src ="' +
                tt.img_link +
                '" alt ="' +
                tt.title +
                '" > <div class = "card-body"> <p class = "card-text"><span>' +
                tt.desc +
                '</span></p></div></div></a>';

        }

    }
    document.getElementById("generate").innerHTML = generate;

}

function react() {;
    let generate = " ";

    for (let ii = 0; ii < tritip.length; ii++) {
        let tt = (tritip[ii]);

        if (tt.badge === "React") {
            generate += '<a href="' + tt.link + '"><div class="card"> <h4 class = "card-title">' +
                tt.title +
                '</h4> <span class = "badge';
            generate += ' react';

            generate += '">' +
                tt.badge +
                '</span>';
            if (tt.generateur === 1) {
                generate += '<span class = "generateur" > Generateur </span>'
            }
            generate += '<img class = "card-img-top"src ="' +
                tt.img_link +
                '" alt ="' +
                tt.title +
                '" > <div class = "card-body"> <p class = "card-text"><span>' +
                tt.desc +
                '</span></p></div></div></a>';

        }

    }
    document.getElementById("generate").innerHTML = generate;

}

function php() {
    let generate = " ";

    for (let ii = 0; ii < tritip.length; ii++) {
        let tt = (tritip[ii]);

        if (tt.badge === "PHP") {

            generate += '<a href="' + tt.link + '"><div class="card"> <h4 class = "card-title">' +
                tt.title +
                '</h4> <span class = "badge';

            generate += ' php';

            generate += '">' +
                tt.badge +
                '</span>';
            if (tt.generateur === 1) {
                generate += '<span class = "generateur" > Generateur </span>'
            }
            generate += '<img class = "card-img-top"src ="' +
                tt.img_link +
                '" alt ="' +
                tt.title +
                '" > <div class = "card-body"> <p class = "card-text"><span>' +
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
            generate += '<img class = "card-img-top"src ="' +
                tt.img_link +
                '" alt ="' +
                tt.title +
                '" > <div class = "card-body"> <p class = "card-text"><span>' +
                tt.desc +
                '</span></p></div></div></a>';

        }

    }
    document.getElementById("generate").innerHTML = generate;
}