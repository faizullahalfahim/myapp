import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [appsdata, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get("/appsData.json")
      .then((res) => {
        setAppsData(res.data || []);
      })
      .catch((err) => {
        setError("Unable to load app data.");
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  return { appsdata, loading, error };
};

export default useApps;