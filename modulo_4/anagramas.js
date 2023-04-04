function checkStringsAnagram(str1, str2) {

    if (str1.length !== str2.length) return false;

    let hashTable1 = {};
    let  hashTable2 = {}
    
    for (let i = 0; i < str1.length; i++) {

        if(hashTable1[str1[i]] === undefined){
            hashTable1[str1[i]] = 1;
        } else{
            hashTable1[str1[i]]++
        }


        if(hashTable2[str2[i]] === undefined){
            hashTable2[str2[i]] = 1;
        } else{
            hashTable2[str2[i]]++
        }
    }
    
    for (let i = 0; i < str1.length; i++) {
        
        if(hashTable1[str1[i]] !== hashTable2[str1[i]]){
            return false;
        }
        
    }
    return true;

}

console.log(checkStringsAnagram('attt', 'tata'));
console.log(checkStringsAnagram('arte', 'reta'));
console.log(checkStringsAnagram('caso', 'vaso'));