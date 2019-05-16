# Tricks and Tips

## But
Afin de ne pas perdre les logiciels en ligne et la documentation autour du code dans un ensemble de lien peu esthétique, Tricks and Tips doit offrir une interface ergonomique et attirante dans son système de gallerie.

La structure doit avoir comme base ceci
![](https://github.com/DzenetanMassart/Tricks-and-Tips/blob/master/assets/pics/visuTricksAndTipsBase.png?raw=true)

## Le fonctionnement
### Ancienne forme
La gallerie n'est qu'un block centrer au milieu de la page avec un .jumbotron de Bootstrap afin de laisser de la place au scroll et permettre une gallerie en ResponsiveDesign plus facile à éditer et exporter pour des projets annexes ! 
Les boutons "Tout","HTML",Bootstrap","Javascript",... font apparaître leurs cards respectivent en "display:none" les autres cards !

### Nouvelle forme
La gallerie n'est qu'un block centrer au milieu de la page par "section" avec un "width:95%" pour adapter la largeur en fonction de l'écran et rendre responsive l'ensemble ! Pour rendre facile à éditer,exporter mais surtout aller à l'éfficacitée, les cartes se font en javascript de cette manière:

```
//Pour créer les cartes 
let tritip = [{
        "title": "Canvimation",
        "badge": "Javascript",
        "generateur": 1,
        "img_link": "http://canvimation.github.io/assets/logo.png",
        "desc": "Créer un canvas en ligne !",
        "link": "http://canvimation.github.io/"
    },
    {
        "title": "Layoutit!",
        "badge": "Bootstrap",
        "generateur": 1,
        "img_link": "https://www.layoutit.com/img/ico128.png",
        "desc": "Créer une structure de base Bootstrap en ligne!",
        "link": "https://www.layoutit.com/build"
    }]
    
// Pour générer les cartes dans la page
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
        generate += 'wp';
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

 ```
 Gràce à cette méthode, Javascript possède déjà toutes les cartes dans une base de donnée et il peut identifier avec les badges la technologie associée à la carte !


## Les prochaines features
- Les boutons fonctionnels (Le javascript n'est pas encore fonctionnel pour les boutons),
- Les nouvelles API que nous verrons à BeCode !

