import React, { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {

  const [data, setData] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
      "http://localhost:3000/api/v1/data"
      );

      setData(result.data.message);
    };

    fetchData();
  }, []);


  return (<div>{data}</div>)
}

export default App
