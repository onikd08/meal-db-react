import { useEffect, useState } from "react";

export const useDataLoader = (URL) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setData(data);
    };
    loadData();
  }, [URL]);

  return [data, setData];
};
