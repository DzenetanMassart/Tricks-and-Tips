let generate = " ";



for (let ii = 0; ii < tritip.length; ii++) {
    let tt = (tritip[ii]);
    generate += '<div class="card"> <h4 class = "card-title">' +
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
        '</span></p><a href =' +
        tt.link +
        'class="btn btn-primary">Lien</a> </div></div>';
}

document.getElementById("generate").innerHTML += generate;