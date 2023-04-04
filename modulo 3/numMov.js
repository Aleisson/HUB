function numMov(lst1, lst2){
    let difX = Math.abs(lst1[0] - lst2[0])
    let difY = Math.abs(lst1[1] - lst2[1])
    if(lst1[0] == lst2[0] && lst1[1] == lst2[1])
    return 0
    else if(lst1[0] == lst2[0] || lst1[1] == lst2[1] || difX == difY)
    return 1
    else
    return 2
        
}
console.log("Mesmo Ponto");
console.log(numMov([3, 3], [3, 3]));
console.log("Mesma Linha");
console.log(numMov([4, 5], [4, 8]));
console.log("Mesma Coluna");
console.log(numMov([3, 8], [4, 8]));
console.log("Mesma Diagonal Principal");
console.log(numMov([3, 3], [4, 4]));
console.log("Mesma Diagonal Secundária");
console.log(numMov([5, 4], [3, 6]));
console.log("Dois movimentos");
console.log(numMov([4, 4], [8, 5]));
function numMov(casaIni, casaFin) {
    //Mesmo ponto;
    if (casaIni[0] === casaFin[0] && casaIni[1] === casaFin[1]) {
        console.log("Mesmo Ponto");
        return 0;
    }
    //mesma linha
    if (casaIni[0] === casaFin[0] && casaIni[1] !== casaFin[1]) {
        console.log("Mesma Linha");
        return 1;
    }
    //mesma coluena
    if (casaIni[0] !== casaFin[0] && casaIni[1] === casaFin[1]) {
        console.log("Mesma Coluna");
        return 1;
    }
    //mesma digonal principal
    if (casaIni[0] === casaIni[1] && casaFin[0] === casaFin[1]) {
        console.log("Mesma Diagonal Principal");
        return 1;
    }
    //mesma diagonal secundaria
    if (casaIni[0] + casaIni[1] === 9 && casaFin[0] + casaFin[1] === 9) {
        console.log("Mesma Diagonal Secundária");
        return 1;
    }
    if (casaIni[0] !== casaFin[0] && casaIni[1] !== casaFin[1]) {
        console.log("Dois movimentos");
        return 2;
    }

}