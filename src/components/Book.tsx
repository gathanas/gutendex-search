import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookProps } from "../types";
import { BookContext } from "../context";

interface BookCompProps {
  data: BookProps;
}

const Book: React.FC<BookCompProps> = ({ data }) => {
  
    const navigate = useNavigate();
  
    const {setSelectedBook} = useContext(BookContext);

    const seeBookDetails = () => {

        setSelectedBook(data);
        navigate(`/books/${data.id}`);

    }

    return (
    <div onClick={seeBookDetails} className="book-wrapper">
      <img
        height={300}
        width={200}
        src={data.formats["image/jpeg"]}
        alt={data.title}
      />
      <div className="book-wrapper-content">
        <h1>{data.title}</h1>
        <h2>{data.authors.map((author) => author.name).join(' & ')}</h2>
        <p>{data.copyright}</p>
      </div>
    </div>
  );
};

export default Book;
