function getTotalBooksCount(books) {

  return helper(books)
  
}
function helper(books){
  
  return Object.values(books).length
}
function getTotalAccountsCount(accounts) {
    return accounts.length
}



//returns the number of books that are checked out */
function getBooksBorrowedCount(books) {
 let booksCheckedOut = books.filter(
  (book) =>
   book.borrows.filter((record) => record.returned === false).length > 0
 );
 return booksCheckedOut.length;
}






function getMostCommonGenres(books) {
  let result = [];
  let bookGenres= books.map((book)=>book.genre);
  bookGenres.map((genre)=>{
    let doesExist = result.findIndex((e)=> e.name === genre);
    if (doesExist >= 0){
      result[doesExist].count++
    } else{
      result.push({name:genre, count:1})
    }
  })
  result.sort((a,b)=> b.count -a.count)
  return result.slice(0,5);
 
}



 function getMostPopularBooks(books) {
 return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}       



function getMostPopularAuthors(books, authors) {
 let newArray = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.map((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  newArray.push(theAuthor);
 });
 return newArray.sort((a, b) => b.count - a.count).slice(0, 5);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
