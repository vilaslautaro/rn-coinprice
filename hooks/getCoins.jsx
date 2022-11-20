import { useEffect, useState } from "react";
import { fetchCoins } from "../services/fetchCoins";

const getCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchCoins().then(res => setCoins(res));
  }, []);

  return coins;
};

export default getCoins;
