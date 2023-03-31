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

    generate += '<a class="card carte"  href="' + tt.link + '" target="_blank" title="'+tt.title+'">';
      generate += '<span class="badge rounded-pill ';

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
            if (tt.img_link != "nope") {
                generate += '<img class="card-img-top" src="' +
                    tt.img_link +
                    '" title="' +
                    tt.title +
                    '" alt="' +
                    tt.title +
                    '" >';
            } else { }
            generate += '<div class="card-body">';
            generate += '<h3 class="card-title">' + tt.title + '</h3>';
            generate += '<p class="card-text">' + tt.desc + '</p>';
            generate += '<span class="lien">' + tt.link + '</span>';
            if (tt.generateur === 1) {
                generate += '<span class="generateur">Generateur</span>';
            }
            generate += '</div>';

            generate += '</a>';
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

        generate += '<a class="card carte" href="' + tt.link + '" target="_blank" title="'+tt.title+'">';
           generate += '<span class="badge rounded-pill ';

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
            if (tt.img_link != "nope") {
                generate += '<img class="card-img-top" src="' +
                    tt.img_link +
                    '" title="' +
                    tt.title +
                    '" alt="' +
                    tt.title +
                    '" >';
            } else { }
            generate += '<div class="card-body">';
            generate += '<h3 class="card-title">' + tt.title + '</h3>';
            generate += '<p class="card-text">' + tt.desc + '</p>';
            generate += '<span class="lien">' + tt.link + '</span>';
            if (tt.generateur === 1) {
                generate += '<span class="generateur">Generateur</span>';
            }
            generate += '</div>';

            generate += '</a>';
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
            generate += '<a class="card carte " href="' + tt.link + '" target="_blank" title="'+tt.title+'">';
                        generate += '<span class="badge rounded-pill ' + tt.badge + '">' + tt.badge + '</span>';

            if (tt.img_link != "nope") {
                generate += '<img class="card-img-top" src="' +
                    tt.img_link +
                    '" title="' +
                    tt.title +
                    '" alt="' +
                    tt.title +
                    '" >';
            } else { }
            generate += '<div class="card-body">';
            generate += '<h3 class="card-title">' + tt.title + '</h3>';
            generate += '<p class="card-text">' + tt.desc + '</p>';
            generate += '<span class="lien">' + tt.link + '</span>';
            if (tt.generateur === 1) {
                generate += '<span class="generateur">Generateur</span>';
            }
            generate += '</div>';

            generate += '</a>';
        }
        document.getElementById("generate").innerHTML = generate;
    }
}


//La fonction du boutons des générateurs
function generators() {
    let generate = " ";
    for (let ii = 0; ii < tritip.length; ii++) {
        let tt = (tritip[ii]);
        generate += '<a class="card carte " href="' + tt.link + '" target="_blank" title="'+tt.title+'">';
                            generate += '<span class="badge rounded-pill '+tt.badge+'">' + tt.badge + '</span>';
                if (tt.img_link != "nope") {
                generate += '<img class="card-img-top" src="' +
                    tt.img_link +
                    '" title="' +
                    tt.title +
                    '" alt="' +
                    tt.title +
                    '" >';
            } else {}
            generate += '<div class="card-body">';
            generate += '<h3 class="card-title">' + tt.title + '</h3>';
        generate += '<p class="card-text">' + tt.desc + '</p>';

        generate += '<span class="lien">' + tt.link + '</span>';

            if (tt.generateur === 1) {
                generate += '<span class="generateur">Generateur</span>';
        }
                    generate += '</div>';

            generate += '</a>';
    }
    document.getElementById("generate").innerHTML = generate;
}