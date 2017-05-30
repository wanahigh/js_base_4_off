
var tab =      {
        question : "Qui a inventé la dynamite?",
        choix : [
            "John Trinit",
            "Paul Craine",
            "Alfred Nobel",
            "John Dynamite"
        ],
        correct : "Alfred Nobel",


    },
    {
        question : "Qui a inventé la dynamite?",
        choix : [
            "John Trinit",
            "Paul Craine",
            "Alfred Nobel",
            "John Dynamite"
        ],
        correct : "Alfred Nobel",


];

function StyleCss() {


    for (var i=0 ; i < tab.length ;i++) {
        if((tab[i].type).includes("css")){
            var livres=document.getElementById('book').innerHTML += tab[i].title
                +"</br>"+tab[i].author+"</br>"+tab[i].link+"</br>"+tab[i].type;
        }
    }
}




function StyleJS() {


    for (var i=0 ; i < tab.length ;i++) {
        if((tab[i].type).includes("js")){


            var livres=document.getElementById('book').innerHTML += tab[i].title
                +"</br>"+tab[i].author+"</br>"+tab[i].link+"</br>"+tab[i].type;
        }
    }
}

