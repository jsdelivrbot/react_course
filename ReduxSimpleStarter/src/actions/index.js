export function selectBook(book) {
    //return an action object with type prop
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

