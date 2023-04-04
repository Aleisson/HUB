function descriptografar(inicio, arr) {

    let stringFinal = [];
    let verifica = inicio;
    let i = 0;
    while (verifica !== -1 && i < arr.length) {
        stringFinal.push(arr[verifica].split("_").at(0));
        verifica = parseInt(arr[verifica].split("_").at(1));
        if (verifica > arr.length - 1) {
            return "erro";
        }
        i++;
    }

    if (verifica === -1) {
        return stringFinal.join(" ");
    }
    return "erro";
}

console.log(descriptografar(3, ['sensacional_2', 'demais_-1', 'é_1 ', 'voce_2', 'melhor_1', 'gratidao_0']))
console.log(descriptografar(3, ['nao_2', 'vai_7', 'que_1 ', 'sera_2', 'melhor_1', 'gratiluz_0']))