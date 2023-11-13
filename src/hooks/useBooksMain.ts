import { useEffect, useState } from "react";
import { getBooks } from "../apis/baseAPIRequest";
import { useLocation } from "react-router";

const useBooksMain = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();

  const { search } = location;

  const searchParams = new URLSearchParams(search);

  const searchTerm = searchParams.get("filter");


  const getBooksData = async () => {
    setLoading(true);
    try {
      const response = await getBooks(searchTerm || "");
      setBooks(response.data.results);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooksData();
  }, [searchTerm]);

  return { books, loading, error, getBooksData };
};

export default useBooksMain;
