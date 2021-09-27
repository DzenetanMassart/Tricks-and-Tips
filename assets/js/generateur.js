let generate = " ";

/*
|==========================================|
|La détection du type de logiciel à montrer|
|==========================================|
*/
const url_o = window.location.href;
let url_result = url_o.substring(url_o.lastIndexOf("#") + 1);
console.log(url_o)
console.log(url_result);

document.addEventListener("DOMContentLoaded", function() {
    if (url_result === "") { tout; };
    if (url_result === "HTML") { gen("HTML"); };
    if (url_result === "CSS") { gen("CSS"); };
    if (url_result === "Bootstrap") { gen("Bootstrap"); };
    if (url_result === "WordPress") { gen("WordPress"); };
    if (url_result === "Javascript") { gen("Javascript"); };
    if (url_result === "React") { gen("Ract"); };
    if (url_result === "PHP") { gen("PHP"); };
    if (url_result === "GEN") { generators(); };

});
/*
|===================|
|L'affichage de base|
|===================|
*/

for (let ii = 0; ii < tritip.length; ii++) {

    let tt = (tritip[ii]);

    generate += '<a href="' + tt.link + '" target="_blank"><div class="row ensemble"><div class="col-12"><div class="row"><div class="col-8 part_un">';
    generate += '<h3 class="text-center">' + tt.title + '</h3>';
    generate += ' <p>' + tt.desc + '</p></div><div class="col-md-4 part_deux ' + tt.badge + '">';

    generate += '<h4 class="badge ';

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
        '</h4>';
    if (tt.generateur === 1) {
        generate += '<span class="generateur">Generateur</span>';
    }
    if (tt.img_link != "nope") {
        generate += '<img src="' +
            tt.img_link +
            '" title="' +
            tt.title +
            '" alt="' +
            tt.title +
            '" >';
    } else {}

    generate += '</div></div></div></div></a>';
}
document.getElementById("generate").innerHTML = generate;







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

document.getElementById("Gen").addEventListener("click", function() { generators(); });


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

        generate += '<a href="' + tt.link + '" target="_blank" ><div class="row ensemble"><div class="col-12"><div class="row"><div class="col-8 part_un"> <h3 class="text-center">' +
            tt.title + '</h3> <p>' + tt.desc + '</p></div><div class="col-md-4 part_deux ' + tt.badge + '">';
        generate += '<h4 class="badge ';

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
            '</h4>';
        if (tt.generateur === 1) {
            generate += '<span class="generateur">Generateur</span>';
        }
        if (tt.img_link != "nope") {
            generate += '<img src="' +
                tt.img_link +
                '" title="' +
                tt.title +
                '" alt="' +
                tt.title +
                '" >';
        } else {}

        generate += '</div></div></div></div></a>';
    }
    document.getElementById("generate").innerHTML = generate;
}


// La fonction qui lit les boutons d'affichage spécifique en fonction du badge
function gen(nom) {
    document.title = "Tricks and Tips-" + nom;

    let generate = " ";

    for (let ii = 0; ii < tritip.length; ii++) {

        let tt = (tritip[ii]);
        if (tt.badge === nom) {
            generate += '<a href="' + tt.link + '" target="_blank" ><div class="row ensemble"><div class="col-12"><div class="row"><div class="col-8 part_un"> <h3 class="text-center">' +
                tt.title + '</h3> <p>' + tt.desc + '</p></div><div class="col-md-4 part_deux ' + tt.badge + '">';
            generate += '<h4 class="badge ' + nom + '">' + nom + '</h4>';

            if (tt.generateur === 1) {
                generate += '<span class="generateur">Generateur</span>';
            }
            if (tt.img_link != "nope") {
                generate += '<img src="' +
                    tt.img_link +
                    '" title="' +
                    tt.title +
                    '" alt="' +
                    tt.title +
                    '"> ';
            } else {}

            generate += '</div></div></div></div></a>';
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
            generate += '<a href="' + tt.link + '" target="_blank" ><div class="row ensemble"><div class="col-12"><div class="row"><div class="col-8 part_un"> <h3 class="text-center">' +
                tt.title + '</h3> <p>' + tt.desc + '</p></div><div class="col-md-4 part_deux ' + tt.badge + '">';
            generate += '<h4 class="badge ' + tt.badge + '">' + tt.badge + '</h4>';

            if (tt.generateur === 1) {
                generate += '<span class="generateur">Generateur</span>';
            }
            if (tt.img_link != "nope") {
                generate += '<img  src="' +
                    tt.img_link +
                    '" title="' +
                    tt.title +
                    '" alt="' +
                    tt.title +
                    '" >';
            } else {}

            generate += '</div></div></div></div></a>';
        }
    }
    document.getElementById("generate").innerHTML = generate;
}