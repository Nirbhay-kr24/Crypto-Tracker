import React, { createContext, useState, useEffect } from "react";

export const CryptoContext = createContext();


const CryptoContextProvider = (props) => {
    
const [cryptoList, setCryptoList] = useState([]);
const [filteredCryptos, setFilteredCryptos] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [currentCurrency, setCurrentCurrency] = useState({
  name: "USD",
  symbol: "$",
});

// API - CG-gWe3xMvTZWJVXf8NQLRFEgUE

const fetchCryptoData = async () =>{
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-gWe3xMvTZWJVXf8NQLRFEgUE'}
      };

      try{
        const res = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency.name}`,
            options
        );
        const data = await res.json();
        setCryptoList(data); 
    } catch (err) {
        console.error("Failed to fetch crypto data:", err);
    }
      }

    // REFETCH WHEN CURRENCY CHANGES
    useEffect(() => {
        fetchCryptoData();
      }, [currentCurrency]);
      
    // Re-filter when raw crypto list or search term changes
      useEffect(() => {
        if (searchTerm.trim() !== "") {
            setFilteredCryptos(cryptoList);
        }
        else{
            setFilteredCryptos(
            cryptoList.filter((c) =>
              c.name.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        }
    }, [cryptoList, searchTerm]);


    const contextValue = {
        cryptoList,
        filteredCryptos,
        currentCurrency,
        setCurrentCurrency,
        searchTerm,
        setSearchTerm,
  };

  return (
    <CryptoContext.Provider value={contextValue}>
      {props.children}
    </CryptoContext.Provider>
  );
};


export default CryptoContextProvider;
