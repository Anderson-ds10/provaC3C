// CHAMADA DE ID DE INPUT E LABEL
let lado1 = document.querySelector("#lado1");
let lado2 = document.querySelector("#lado2");
let lado3 = document.querySelector("#lado3");
let l1 = document.querySelector("#l1");
let l2 = document.querySelector("#l2");
let l3 = document.querySelector("#l3");
let btn = document.querySelector("#btn");

// FUNCAO PARA RECONHECER QUAL TIPO DE TRIÂNGULO
function reconheceTriangulo(){
    let valorLado1 = lado1.value;
    let valorLado2 = lado2.value;
    let valorLado3 = lado3.value;

    // PARA CHECAR SE TODOS VALORES ESTÃO PREENCHIDOS
    if(valorLado1 == "" || valorLado2 == "" || valorLado3 == ""){
        alert("É preciso preencher todos os lados!!!");
    }
    //RECONHECE A FORMA DO TRIÂNGULO
    else if(valorLado1 == valorLado2 && valorLado2 == valorLado3){
        alert("Seu triângulo é um Equilátero: Os três lados são iguais");
    }else if(valorLado1 == valorLado2 || valorLado2 == valorLado3 || valorLado1 == valorLado3){
        alert("Seu triângulo é um Isósceles: Dois lados iguais.");
    }else if(valorLado1 != valorLado2 && valorLado2 != valorLado3 && valorLado1 != valorLado3){
       alert("Seu triângulo é um Escaleno: Todos os lados são diferentes");
    };
};

// BOTAO PARA FAZER ENVIO DA QUESTÃO E FOCO NO ELEMENTO NÃO PREENCHIDO
btn.onclick = () => {
    reconheceTriangulo();
    if(lado1.value == "" && lado2.value != ""){
        lado1.focus();
    }else if(lado2.value == "" && lado1.value != ""){
        lado2.focus();
    }else if(lado3.value == "" && lado1.value != "" || lado2.value != ""){
        lado3.focus();
    };
};

// DEIXAR CAIXA 1 NÃO PREENCHIDA EM VERMELHO
lado1.onblur = () => {
    if(lado1.value == ""){
        lado1.style = "border-color: #FF0000";
        l1.style = "color: #FF0000";
    }else{
        lado1.style = "border-color: none";
        l1.style = "color: #000000";
    };
};
// DEIXAR CAIXA 1 NÃO PREENCHIDA EM VERMELHO
lado2.onblur = () => {
    if(lado2.value == ""){
        lado2.style = "border-color: #FF0000";
        l2.style = "color: #FF0000";
    }else{
        lado2.style = "border-color: none";
        l2.style = "color: #000000";
    };
};
// DEIXAR CAIXA 1 NÃO PREENCHIDA EM VERMELHO
lado3.onblur = () => {
    if(lado3.value == ""){
        lado3.style = "border-color: #FF0000";
        l3.style = "color: #FF0000";
    }else{
        lado3.style = "border-color: none";
        l3.style = "color: #000000";
    };
};