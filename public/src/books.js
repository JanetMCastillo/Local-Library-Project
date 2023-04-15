function findAuthorById(authors, id) {
 return authors.find((author)=>author.id===id)
}

function findBookById(books, id) {
  return books.find((book)=>book.id===id)
}

  function partitionBooksByBorrowedStatus(books) {
    let chkdOut=[];
    let available= [];
    const status= [];
    books.forEach((book)=>{
      if (book.borrows[0].returned === false){
       return chkdOut.push(book);
    } else {
      available.push(book)
    }
    });
      status.push(chkdOut);
      status.push(available);
    return status;
  }

 //push "returned" into books array
function getBorrowersForBook(book, accounts) {
  let newArray=[];
  let borrowsArray= book.borrows;
  borrowsArray.forEach(borrow=>{ 
    let account = accounts.find(acc => acc.id === borrow.id); 
  let object= account
   object['returned']= borrow.returned
   newArray.push(object)
  })
return newArray.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
