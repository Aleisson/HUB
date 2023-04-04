function maisFrequente(lst) {

    const teste = lst.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {})


    return teste;

}

console.log(maisFrequente([20, 80, 80, 10, 20]));