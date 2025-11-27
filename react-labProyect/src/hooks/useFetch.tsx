import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);
  return { data, loading };
}
