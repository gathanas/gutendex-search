import React, { Dispatch, SetStateAction } from "react";
import { BookProps } from "./types";

export const BookContext = React.createContext<{
  selectedBook: BookProps | null;
  setSelectedBook: Dispatch<SetStateAction<BookProps | null>>;
}>({
  selectedBook:null,
  setSelectedBook:()=>{},
});
