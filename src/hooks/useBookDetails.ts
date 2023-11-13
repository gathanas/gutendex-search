import { useEffect, useState } from "react";
import { getBookById } from "../apis/baseAPIRequest";
import { useParams } from "react-router";

const useBookDetails = () => {
  const { id = "" } = useParams();

  const [book, setBook] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getBookDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getBookById(id);
      setBook(response.data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id !== "") {
      getBookDetails();
    }
  }, []);

  return { book, loading, error };
};

export default useBookDetails;
