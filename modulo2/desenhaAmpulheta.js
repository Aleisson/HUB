function desenhaAmpulheta(n) {
    let str = "";
    for (var i = 0; i < n; i++) {
        str = "";
        for (var j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                str += "*";
            } else if ((j === i) || (i+j === n-1)) {
                str += "*";
            } else {
                str += " ";
            }
        }
        console.log(str);
    }

}

desenhaAmpulheta(7);
console.log("-------------- ----------------")
desenhaAmpulheta(5);
console.log("-------------- ----------------")
desenhaAmpulheta(18);
console.log("-------------- ----------------")
desenhaAmpulheta(21);
