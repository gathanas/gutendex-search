import { BooksListProps } from "../types";
import Book from "./Book";
import ErrorMsg from "./utils/ErrorMsg";
import Loader from "./utils/Loader";

const BooksList: React.FC<BooksListProps> = ({ books, loading, error }) => {
  if (error) {
    return <ErrorMsg error={error ?? "Error"} />
  }

  if (loading) {
    return <Loader/>
  }

  if (books.length === 0) {
    return <ErrorMsg error={"No books found"}/>
  }

  return books.map((book) => {
    return <Book key={book.id} data={book} />;
  });
};

export default BooksList;
