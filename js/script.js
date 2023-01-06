const listateclas = document.querySelectorAll('.tecla');
let cont=0;
while(cont < listateclas.length){
    listateclas[cont].onclick = mostracalorias;
    cont = cont + 1;
    console.log(cont);
}

 function mostracalorias(){
     const listateclas = document.querySelector('.tecla').value;
     alert(listateclas);

 }

// function calculo(){
//     const teclas = document.querySelector('.tecla').value;
//     alert(teclas);
    
// };

// teclado.addEventListener('click',calculo);

