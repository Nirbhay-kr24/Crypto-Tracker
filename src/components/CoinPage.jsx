import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";

const CoinPage = () => {
  const { cryptoId } = useParams();
  const [coinDetails, setCoinDetails] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [period, setPeriod] = useState("10");
  const [error, setError] = useState(null);

  const { currentCurrency } = useContext(CryptoContext);

  if (!cryptoId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Error: No CryptoCurrency ID provided</p>
      </div>
    );
  }

  const requestOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-gWe3xMvTZWJVXf8NQLRFEgUE",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const detailsRes = await fetch(
          `https://api.coingecko.com/api/v3/coins/${cryptoId}`,
          requestOptions
        );
        if (!detailsRes.ok) {
          throw new Error(
            `Error fetching coin details: ${detailsRes.statusText}`
          );
        }
        setCoinDetails(await detailsRes.json());

        const chartRes = await fetch(
          `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=${currentCurrency.name}&days=${period}&interval=daily`,
          requestOptions
        );

        console.log("Request options:", requestOptions);

        if (!chartRes.ok) {
          throw new Error(`Error fetching chart data: ${chartRes.statusText}`);
        }

        setChartData(await chartRes.json());
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchData();
  }, [currentCurrency, cryptoId, period]);

  if (error) {
    return (
      <div className=" min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>{error}</p>
      </div>
    );
  }
  if (!coinDetails || !chartData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/90 text-white px-4 sm:px-[5%] md:px-[8%] py-6">
      <div className="flex flex-col items-center md:flex-row gap-4 mb-6 bg-gray-800/30 backdrop-blur-lg p-4 rounded-xl border border-emerald-500/20">
        <img
          src={coinDetails.image?.large}
          alt={coinDetails.name}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-1"
        />

        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {coinDetails.name}
            <span className="text-xl md:text-2xl ml-2 text-cyan-400/80 block mt-1">
              ({coinDetails.symbol?.toUpperCase()})
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
