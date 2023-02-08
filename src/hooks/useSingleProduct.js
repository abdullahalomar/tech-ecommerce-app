import { useState, useEffect } from 'react';
import axios from 'axios';
import base64 from 'react-native-base64';

const useSingleProduct = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.create({
          baseURL: `https://api.sohojearning.com/wp-json/wc/v3/products/${id}`,
          headers: {
            Authorization: 'Basic ' + base64.encode('ck_574b2af8429dd6c6160c97563a05bf7d62989134:cs_861c205b566b235d1b35fa7f9e335796a6e0df64'),
          },
        }).get();
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
};

export default useSingleProduct;
