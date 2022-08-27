// CHAMADA DE ID DE INPUT
let nota = document.querySelector("#nota");
let nome = document.querySelector("#nome")
let btn = document.querySelector("#btn");

// FUNÇÃO PARA AVALIAR A NOTA DO ALUNO E GERAR RESULTADO
function avaliacaoNota(){
    var notaAluno = nota.value;
    var nomeAluno = nome.value;

    if(notaAluno == "" || nomeAluno == ""){
        alert("Adicione uma nota e um nome para o aluno!")
    }else if(notaAluno > 37){
        alert("Aluno Aprovado!")
        if(notaAluno % 5 == 3 || notaAluno % 5 == 4){
        notaAluno = (Math.ceil(notaAluno / 5)) * 5;
        }
        res.innerHTML = `O aluno ${nomeAluno} tirou ${notaAluno} e está APROVADO!!!`
    }else{
        alert("Aluno reprovado!")
        res.innerHTML = `O aluno ${nomeAluno} tirou ${notaAluno} e está REPROVADO!`
    }
}

// BOTÃO PARA EXECUTAR A VERIFICAÇÃO
btn.onclick = () => {
    avaliacaoNota()
};
