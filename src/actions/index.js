export function selectBook(book) {
  // selectBook is and ActionCreator, it needs to return an action,
  // an object withe a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
