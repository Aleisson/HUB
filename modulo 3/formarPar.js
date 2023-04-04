function formarPar(arr) {

    let cont = 0;
    const arrayResult = [];
    for (let z = 0; z < arr.length; z++) {
        for (let i = 0; i < arr[z].length; i++) {
            for (let j = i + 1; j < arr[z].length; j++) {

                if (arr[z][i].split(" ").at(1) === "D") {
                    if (arr[z][j].split(" ").at(0) === arr[z][i].split(" ").at(0)
                        && arr[z][j].split(" ").at(1) === "E") {
                        arr[z][i] = "P";
                        arr[z][j] = "P";
                        cont++;
                    }
                }
                if (arr[z][i].split(" ").at(1) === "E") {
                    if (arr[z][j].split(" ").at(0) === arr[z][i].split(" ").at(0)
                        && arr[z][j].split(" ").at(1) === "D") {
                        arr[z][i] = "P";
                        arr[z][j] = "P";
                        cont++;
                    }
                }
            }
           
        }
        arrayResult.push(cont);
        cont = 0;
    }


    return arrayResult;
}


console.log(formarPar([['40 D', '41 E', '41 D', '40 E'], ['38 E', '38 E', '40 D', '38 D', '40 D', '37 E']]))