// Entrainement animation




window.addEventListener("DOMContentLoaded", () => {
    function myMove() {
        let id = null;
        const elem = document.getElementById("animate");
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
    
        function frame() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    }

   let button = document.querySelector("button");
   
   button.addEventListener("click",myMove);

//    Animation lettre une par une simple
   const h1 =document.querySelector("h1");
   const texteDisplay = "Je texte vachement";



let tempEnMls = 300;
let i =0;

const interval = setInterval(() => {
    h1.innerHTML += texteDisplay[i];
    i++;
    if (i >= texteDisplay.length ) {
        clearInterval(interval);
        // i = 0;
    }
}, tempEnMls);
//    Animation lettre une par une simple

var myNumberTween = KUTE.to('#myNumber', {number: 1550}); 

});






