import { useContext } from "react";
import ErrorMsg from "./utils/ErrorMsg";
import { BookContext } from "../context";
import PageWrapper from "./layout/PageWrapper";
import BackButton from "./utils/BackButton";

const DetailsScreen = () => {
  const { selectedBook } = useContext(BookContext);

  if (!selectedBook) {
    return <ErrorMsg error={"No Book Selected"} />;
  }


  return (
    <PageWrapper>
    <h1>Details</h1>
    
    <div style={{display:"flex"}}>
      <img height={300} width={200} src={selectedBook.formats["image/jpeg"]} alt={selectedBook.title} />
      <div className="book-info">
        <h1 style={{marginTop:"0"}}>{selectedBook.title}</h1>
        <h2>
          Authors:{" "}
          {selectedBook.authors.map((author: any) => author.name).join(", ")}
        </h2>
        <p>Subjects: {selectedBook.subjects.join(", ") || "-"}</p>
        <p>Bookshelves: {selectedBook.bookshelves.join(", ") || "-"}</p>
        <p>Languages: {selectedBook.languages.join(", ") || "-"}</p>
        <p>Download Count: {selectedBook.download_count || "-"}</p>
      </div>
    </div>
    <BackButton/>
    </PageWrapper>
  );
};

export default DetailsScreen;
