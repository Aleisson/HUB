let matriz = "";
for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
        
        matriz = matriz + `[${i},${j}]`

    }
    console.log(matriz);
    console.log();
    matriz = "";
}