function findAccountById(accounts, id) {
  return accounts.find((accounts)=> accounts.id === id);
   
  }
  
    function sortAccountsByLastName(accounts) {
    return accounts.sort((account1, account2) => (account1.name.last > account2.name.last ? 1 :-1));
  }
  
  function getTotalNumberOfBorrows(account, books) {
    return books.reduce((total, book) => { //
      
      return (
        total + book.borrows.filter(borrow => borrow.id === account.id)
          .reduce((totalBorrows, borrow) => totalBorrows + 1, 0) 
      );
    }, 0);
  }
  
  
  function getBooksPossessedByAccount(account, books, authors) {
    //Initialze a return array
    let booksHeld=[];
    //check for the account id in the borrows arrays
    books.forEach(book => {
      let borrowArray = book.borrows;
      if (borrowArray.find(borrow => borrow.id === account.id && borrow.returned === false)) {
        booksHeld.push(book);
      }
    })
    
    booksHeld.forEach(book=>{
      let author = authors.find(person => person.id === book.authorId);
      book['author'] = author;
    })
    return booksHeld;
    
  }
  
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
