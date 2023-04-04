function containsDuplicates(arr) {
    let hashTable = {};
    arr.forEach(e => {
        hashTable[e] = true;
    });

    if (arr.length > Object.values(hashTable).length) return true;
    return false;
}

console.log(containsDuplicates([1, 1, 2, 3, 4, 4]))