let generate = " ";



for (let ii = 0; ii < 15; ii++) {
    let tt = (tritip[ii]);
    console.log(tt);

    generate += '<div class="card"> <h4 class = "card-title">' +

        tt.title +
        '</h4> <span class = "badge">' +
        tt.badge +
        '</span>';
    if (tt.generateur === 1) {
        generate += '<span class = "generateur" > Generateur </span>'
    }
    generate += '<img class = "card-img-top"src ="' +
        tt.img_link +
        '" alt ="' +
        tt.title +
        '" > <div class = "card-body"> <p class = "card-text">' +
        tt.desc +
        '</p><a href =' +
        tt.link +
        'class = "btn btn-primary"> Lien </a> </div > </div>';
}

document.getElementById("generate").innerHTML += generate;