function ordenaPessoas(pessoas) {

    function trocaPessoas(pessoas, indice1, indice2) {

        let aux = pessoas[indice1];
        pessoas[indice1] = pessoas[indice2];
        pessoas[indice2] = aux;

    }


    for (let i = 0; i < pessoas.length; i++) {
        for (let j = i + 1; j < pessoas.length; j++) {

            if (pessoas[j].idade < pessoas[i].idade) {
                trocaPessoas(pessoas, i, j);
            }

            i
            if (pessoas[j].idade == pessoas[i].idade) {
                if (pessoas[j].nome.charAt(0) < pessoas[i].nome.charAt(0)) {
                    trocaPessoas(pessoas, i, j);
                }
            }



        }

    }


    return pessoas;
}

console.log(ordenaPessoas(

    [
        { nome: "Agnaldo", idade: 30 },
        { nome: "Josefina", idade: 29 },
        { nome: "Cornélio", idade: 29 },
        { nome: "Antoniel", idade: 23 },
        { nome: "Xanthippe", idade: 26 }
    ]

));