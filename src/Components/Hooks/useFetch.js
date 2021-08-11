import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState();
  useEffect(() => {
    try {
      async function getData() {
        const resp = await fetch(
          "https://www.breakingbadapi.com/api/characters"
        );
        setData(await resp.json());
      }
      getData();
    } catch (e) {
      console.log(e);
    }
  }, [data]);
  return data;
};

export default useFetch;
