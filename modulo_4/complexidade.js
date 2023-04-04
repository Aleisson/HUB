function complexidadeTempo() {
    const POSSIBILIDADES = {
        0: "O(n)",
        1: "O(n*passo)",
        2: "O(n*tamanho)",
        3: "O(n*passo*tamanho)",
        4: "O(n+passo)",
        5: "O(n+passo+tamanho)",
        6: "O((n/passo))",
        7: "O((n/passo)*tamanho)",
        8: "O((n/tamanho))",
        9: "O((n/tamanho)*passo)"
    };
    return POSSIBILIDADES[7]; // O(n), mude aqui
}

console.log(complexidadeTempo());