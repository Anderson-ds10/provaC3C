// CHAMADA DE ID DE INPUT
let btn = document.querySelector("#btn");
let Ia = document.querySelector("#a");
let Ib = document.querySelector("#b");
let Ic = document.querySelector("#c");
let Ix1 = document.querySelector("#x1");
let Ix2 = document.querySelector("#x2");

// FUNCAO PARA FAZER O CALCULO DA BHASKARA
function bhaskara(){
    let a = Ia.value;
    let b = Ib.value;
    let c = Ic.value;

    //CALCULO DO VALOR DE DELTA
    let delta = (b * b) - 4 * a * c;

    //CONDIÇÃO PARA VALORES DE BHASKARA
    if(a == "" || b == "" || c == ""){
        alert("Insira os valores de a, b e c");
    }else if(a == 0){
        alert("O valor de a, deve ser diferente de 0");
    }else if(delta < 0) {
        alert(`Sem raízes reais, delta = ${delta}`);
    }else{
    let x1 = (-b + Math.sqrt(delta)) / (2 * a); // CALCULA VALOR DE X1
    let x2 = (-b - Math.sqrt(delta)) / (2 * a); // CALCULA VALOR DE X2
    Ix1.value = x1;
    Ix2.value = x2;
  };
}; 

// BOTAO PARA CALCULAR
btn.onclick = () => {
    bhaskara();
};
