function rotateBall() {

    let id =null;
    let pos=0;
    let cinta=document.getElementById('cinta');
    let fondo_respuesta= document.getElementById('fondo_respuesta');
    let opacityFondo=0;
    let opacityResp=0;
    
    fondo_respuesta.style.opacity = 0 + '%';
    respuesta.style.opacity = 0 + '%';

    giveAnswer();

    id=setInterval(frameStep,10);


    function frameStep() {

        
        if (pos == -3840) {
            
            clearInterval(id);

        } else if(pos < -1500 && pos > -2700) {

            pos=pos-12;
            cinta.style.left = pos + "px";

         } else if(pos < -2700 && pos > -3730) {

            pos=pos-5;
            cinta.style.left = pos + "px";

         } else if(pos < -3740 && pos >= -3840) {

            pos=pos-1;
            cinta.style.left = pos + "px"; 

            opacityFondo= opacityFondo + 2;
            fondo_respuesta.style.opacity = opacityFondo + '%';

            opacityResp = opacityResp + 1;
            respuesta.style.opacity = opacityResp + '%';
         
         } else {

            pos=pos-20;
            cinta.style.left = pos + "px";
         }

    }
    
}

function giveAnswer() {

    let respuesta=document.getElementById('respuesta');
    let number=4;

    number= Math.floor(Math.random()*11);

    switch (number) {
        
        case 0: 
            respuesta.innerHTML = 'Si, definitivamente';    
            break;
        
        case 1:
            respuesta.innerHTML = 'No, ni cerca';
            break;

        case 2:
            respuesta.innerHTML = 'Quizás...';
            break;

        case 3:
            respuesta.innerHTML = 'Estas loco?';
            break;    

        case 4:
            respuesta.innerHTML = 'Pena deberia darte';
            break;

        case 5:
            respuesta.innerHTML = 'emmm no...';
            break;

        case 6:
            respuesta.innerHTML = 'Si, pero en 10 años';
            break;  

        case 7:
            respuesta.innerHTML = 'Si...en tus sueños';
            break;    

        case 8:
            respuesta.innerHTML = 'Probablemente';
            break;

        case 9:
            respuesta.innerHTML = 'Creo que no';
            break;

        case 10:
            respuesta.innerHTML = 'Depende de ti';
            break;  
    }

}

function evaluateInput() {

     let pregunta= document.getElementById('pregunta').value;
     let respuesta=document.getElementById('respuesta');
     let fondoRespuesta=document.getElementById('fondo_respuesta');

     pregunta==''? (
    
     fondoRespuesta.style.opacity = 100 + '%',    
     respuesta.style.opacity = 100 + '%',
     respuesta.innerHTML = '¿Cual es tu pregunta?' 
     ) :

     rotateBall();
    
 }