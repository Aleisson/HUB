function maiorQue(x, lst){
    return lst.filter(elem => elem >= x);
  }
const result = maiorQue(15,  [ 10, 16, 9, 15, 2, 20]);
console.log(result);
