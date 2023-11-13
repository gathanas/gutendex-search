import axios from "axios";

const baseAPIRequest = axios.create({
  baseURL: "https://gutendex.com/",
});

export const getBooks = (searchTerm:string) => {
  return baseAPIRequest.get(`/books?search=${searchTerm}`);
};