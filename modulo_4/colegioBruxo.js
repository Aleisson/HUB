function listFirstCopy(bookshelf){
  let dict = {};
  for (let i = 0; i < bookshelf.length; i++) {
    
    if(dict[bookshelf[i]] === undefined){
        dict[bookshelf[i]] = i;
    }
    
    
  }

  return bookshelf.map( elem => dict[elem]);
}

console.log(listFirstCopy( [10, 3, 5, 3, 10, 1] ));