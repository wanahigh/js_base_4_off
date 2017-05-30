
var tab = [
    {
        question: 'quel age du commandant ?',
        reponses1: '42',
        reponses2: '87',
        reponses3: '65',
        reponses4: '26'
    },
    {
        question: 'quel age a la terre ?',
        reponses1: '13 milliard d.année',
        reponses2: '80K ans',
        reponses3: '20 000 lieu sous les mer',
        reponses4: 'gerard'

    },
    {
        question: 'la durée de vie d.CD ?',
        reponses1: '13 milliard d.année',
        reponses2: '80K ans',
        reponses3: '20 000 lieu sous les mer',
        reponses4: '10 ans'
    }

] ;

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

