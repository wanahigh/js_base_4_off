
var quizz  = [
    {
        question : "Qui a inventé la dynamite?",

        reponse1: "John Trinit",
        reponse2:"Paul Craine",
        reponse3:  "Alfred Nobel",
        reponse4:"John Dynamite",
        correct : "Alfred Nobel"
    },
    {
        question :"Qui a inventé le téléphone?",

        reponse1:"Alexander Graham Bell",
        reponse2:"Benjamin Franklin",
        reponse3:"Thomas Edison",
        reponse4:"Ma femme",
        correct : "Thomas Edison"
    },
    {
        question :"A qui doit-on la pénicilline?",

        reponse1:"Sir Alexander Fleming",
        repons2:"Louis Pasteur",
        reponse3:"Antoine Lavoisier",
        reponse4:"Alfred Pénicilline",
        correct: "Sir Alexander Fleming"
    }

 ];

     var i=0;
     document.getElementById('bt2').onclick = function() {
         document.getElementById('quest').innerHTML = null;
         document.getElementById('bt1').innerHTML = null;
         document.getElementById('bt22').innerHTML = null;
         document.getElementById('bt3').innerHTML = null;
         document.getElementById('bt4').innerHTML = null;
         document.getElementById('quest').innerHTML += quizz[i].question;
         console.log(i);
         document.getElementById('bt1').innerHTML += quizz[i].reponse1;
         document.getElementById('bt22').innerHTML += quizz[i].reponse2;
         document.getElementById('bt3').innerHTML += quizz[i].reponse3;
         document.getElementById('bt4').innerHTML += quizz[i].reponse4;
         if (i < 4) {
             i++;
         }
         else {
             i=4;
         }
     };

var i=0;
document.getElementById('bt44').onclick = function() {
    document.getElementById('quest').innerHTML = null;
    document.getElementById('bt1').innerHTML = null;
    document.getElementById('bt22').innerHTML = null;
    document.getElementById('bt3').innerHTML = null;
    document.getElementById('bt4').innerHTML = null;
    document.getElementById('quest').innerHTML += quizz[i].question;
    console.log(i);
    document.getElementById('bt1').innerHTML += quizz[i].reponse1;
    document.getElementById('bt22').innerHTML += quizz[i].reponse2;
    document.getElementById('bt3').innerHTML += quizz[i].reponse3;
    document.getElementById('bt4').innerHTML += quizz[i].reponse4;
    if (i < 4) {
        i++;
    }
    else {
        i=4;
    }
};

