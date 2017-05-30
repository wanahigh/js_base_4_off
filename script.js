
var tab  = [
    {
        "question" : "Qui a inventé la dynamite?",
        "choix"  : [
            "John Trinit",
            "Paul Craine",
            "Alfred Nobel",
            "John Dynamite"
        ],
        "correct" : "Alfred Nobel"
    },
    {
        "question" :"Qui a inventé le téléphone?",
        "choix"       :   [
            "Alexander Graham Bell",
            "Benjamin Franklin",
            "Thomas Edison",
            "Ma femme"
        ],
        "correct" : "Thomas Edison"
    },
    {
        "question" :"A qui doit-on la pénicilline?",
        "choix"       :   [
            "Sir Alexander Fleming",
            "Louis Pasteur",
            "Antoine Lavoisier",
            "Alfred Pénicilline"
        ],
        "correct" : "Sir Alexander Fleming"
    },
    {
        "question" :"Qui a inventé la boîte de conserve?",
        "choix"       :   [
            " Joseph Cugnot",
            "Auguste Denayrouze",
            "Cédan Laboite",
            "Nicolas Appert"
        ],
        "correct" : "Nicolas Appert"
    }    ];

 {
  function QR() {
      for (var i = 0; i < tab.length; i++)
        document.getElementById('quest').innerHTML = tab[i].question;
        document.getElementById('bt1').innerHTML = tab[i].choix[0];
        document.getElementById('bt22').innerHTML = tab[i].choix[1];
        document.getElementById('bt3').innerHTML = tab[i].choix[2];
        document.getElementById('bt4').innerHTML = tab[i].choix[3];
    }
}






