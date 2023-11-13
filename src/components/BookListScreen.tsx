import SearchBar from "./SearchBar";
import BooksList from "./BooksList";
import useBooksMain from "../hooks/useBooksMain";
import PageWrapper from "./layout/PageWrapper";


const BookListScreen = () => {

  const { books, loading, error } = useBooksMain();

  return (
    <PageWrapper>
      <SearchBar />
      <div className="books-container">
        <BooksList books={books} loading={loading} error={error} />
      </div>
    </PageWrapper>
  );
}

export default BookListScreen;
