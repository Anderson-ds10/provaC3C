// CHAMADA DE ID DE INPUT
let num = document.querySelector("#num");
let btn = document.querySelector("#btn");
let resul = document.querySelector("#res");

function contar(){
    //CRIA UMA ARRAY CONFORME VALOR DO INPUT
    let contador = num.value;
    let lista = [];
    for(let conta = 1; conta <= contador; conta++){
        lista.push(conta);
    }

    // FAZ A MODIFICAÇÃO NA ARRAY NOS MULTIPLOS DE 5 e 9
    for(let i = 1; i <= lista.length; i++){
        if(i %5 == 0){  
            lista[i-1] = " Luidy ";
        };
        if(i %9 == 0){
            lista[i-1] = " Moura ";
        };
        if(i %5 == 0 && i %9 == 0){
            lista[i-1] = " Luidy Moura ";
        };
    };
    resul.innerHTML += `${lista}, `;
};

// // BOTÃO PARA EXECUTAR A VERIFICAÇÃO
btn.onclick = () => {
    contar();
}