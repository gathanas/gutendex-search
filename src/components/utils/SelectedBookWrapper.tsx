import { ReactElement, useState } from "react";
import { BookContext } from "../../context";
import { BookProps } from "../../types";

const SelectedBookWrapper:React.FC<{children:ReactElement}> = (props) => {
  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null);

  return (
    <BookContext.Provider value={{ selectedBook, setSelectedBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default SelectedBookWrapper;
