import { BooksListProps } from "../types";
import Book from "./Book";

const BooksList: React.FC<BooksListProps> = ({ books, loading, error }) => {
  if (error) {
    return <div>Error! {error?.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (books.length === 0) {
    return <div>No books found</div>;
  }

  return books.map((book) => {
    return <Book key={book.id} data={book} />;
  });
};

export default BooksList;
