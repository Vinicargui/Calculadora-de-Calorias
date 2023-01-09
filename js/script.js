const teclas = document.querySelectorAll('.tecla');
const input = document.querySelector('#visor');


teclas.forEach((tecla) => {
  tecla.addEventListener('click', (tecla)=> {
    handleSelecionar(tecla.currentTarget);
    // console.log(+e.currentTarget.value);
   somar();
   
}) 

});

function handleSelecionar(e){
  e.classList.toggle("selecionado");
 if(e.hasAttribute("checked")){
   //  e.classList.remove("selecionado");
     e.removeAttribute("checked");
 }else{
   // e.classList.add('selecionado'); 
    e.setAttribute("checked",true);
    // console.log(e.hasAttribute("checked"));
 }
}

function somar(){
    let soma = 0;
   
    const checados = document.querySelectorAll('[checked]')
    checados.forEach((checado) => {
    soma = soma + +checado.value;
    // console.log(checado.value);
    })
    input.value = soma;
};











//input1.textContent = mostrarCalorias;

//  function mostrarCalorias(idvalue){
//     const input1 = document.getElementById('#visor');
//    input1.value = document.querySelector(idvalue);

//  }
 

// let cont=0;
//  while(cont < listateclas.length){
//      const tecla = listateclas[cont];
//      let idtecla = tecla.classList[1];
//      //const idvalores = `.tecla ${valores}`;
//     // const valorr = idvalores.value;
//      tecla.onclick = function(){
//          mostrarCalorias(idtecla);
//      };
    
//      cont = cont + 1;
//      console.log(cont)
     
//  }
//  console.log(input1)
    
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

