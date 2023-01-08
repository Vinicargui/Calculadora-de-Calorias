const listateclas = document.querySelectorAll('.tecla');
console.log(listateclas)
const input1 = document.querySelector('#visor');
//input1.textContent = mostrarCalorias;

 function mostrarCalorias(idvalue){
input1.value = document.querySelector(idvalue).value;

 }
 

let cont=0;
 while(cont < listateclas.length){
     const tecla = listateclas[cont];
     let valores = tecla.classList[1];
     const idvalores = `.tecla ${valores}`;
     console.log(idvalores);
     tecla.onclick = function (){
         mostrarCalorias(idvalores);
     };
     cont = cont + 1;
 }
    
//  function valorcalorias(idtecla){
     ''
     
//     alert(document.querySelector(idtecla).value);
     

//  }
 
//  function mostra(){

//  }

//  function tecla (num){
//      document.querySelector('#visor').value = document.querySelector('#visor').value + num;

//  }
 

// function calculo(){
//     const teclas = document.querySelector('.tecla').value;
//     alert(teclas);
    
// };

// teclado.addEventListener('click',calculo);

