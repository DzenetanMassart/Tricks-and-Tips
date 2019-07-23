let lang = document.getElementById("search_lang");
document.getElementById("search_ok").addEventListener('click', search);

function search() {
    if (lang.value === 'javascript') {
        window.open('https://developer.mozilla.org/fr/search?q=' + document.getElementById("search_input").value + '&topic=js');
    } else if (lang.value === 'php') {
        window.open('https://www.php.net/manual-lookup.php?pattern=' + document.getElementById("search_input").value + '&scope=quickref');
    } else if (lang.value === 'css') {
        window.open('https://css-tricks.com/?s=' + document.getElementById("search_input").value + '&orderby=relevance&post_type=post%2Cpage%2Cguide');
    } else if (lang.value === 'html') {
        window.open('https://developer.mozilla.org/fr/search?q=' + document.getElementById("search_input").value + '&topic=html');
    } else {
        document.getElementById("search_input").value = "Choisissez une techno' !"
    }
}