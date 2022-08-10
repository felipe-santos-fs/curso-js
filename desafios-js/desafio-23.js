function mediaPonderada(codAluno, nota1, nota2, nota3) {
    mediaNotas = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10

    if(mediaNotas >= 5) {
        console.log(`Aluno ${codAluno} aprovado com média ${mediaNotas}`)
    } else if(mediaNotas < 5) {
    console.log(`Aluno ${codAluno} reprovado com média ${mediaNotas}`)
    }
}

mediaPonderada(234, 4, 2, 9)