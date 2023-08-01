import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCustomerData(url);
  }, [url]);

  const fetchCustomerData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setIsPending(false);
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setError(error);
      setIsPending(false);
    }
  };
  return { data, isPending, error };
};

export default useGet;
