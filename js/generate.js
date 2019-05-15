let generate = " ";

for (let ii = 0; ii < tt.length; ii++) {
    generate += '<div class="card"> <h4 class = "card-title" >' + tt[ii] +
        '< /h4> <span class = "badge" >' +
        tt[ii].badge +
        '< /span>';
    if (tt[ii].generateur === 1) {
        generate += '<span class = "generateur" > Generateur < /span>'
    }
    generate += 'img class = "card-img-top"src =' +
        tt[ii].img_link +
        'alt =' +
        "Canvimation" +
        '> <div class = "card-body" > <p class = "card-text" >' +
        tt[ii].desc +
        '</p><a href =' +
        tt[ii].link +
        'class = "btn btn-primary" > Lien < /a> < /div > </div>';

}


document.getElementById("generate").innerHTML = generate;