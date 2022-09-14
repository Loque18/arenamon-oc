import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import defaultData from "../videos";

const api_key = "$2b$10$a6yHKVFLYZzI7qNdpMBG3.U5YUjdSq4/6oDNYnc9Nmq2j8IOpAJni";
const bin_id = "6321f73ae13e6063dca7deea";

const useFetchVideos = () => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `https://api.jsonbin.io/v3/b/${bin_id}`,
          headers: {
            "X-Master-Key": api_key,
          },
        });

        console.log(response.data);
        setData(response.data.record);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return { data };
};

export default useFetchVideos;
