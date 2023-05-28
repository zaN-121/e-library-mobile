import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../utils/token";

const useFetchById = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `http://10.10.100.113:8080/${endpoint}`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const token = await getToken()
      const response = await axios.request({...options, headers:{Authorization: token}});
      setData(response?.data?.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  

  return { data, isLoading, error, refetch };
};

export default useFetchById;