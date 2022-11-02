import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const GlobalContext = ({ children }) => {
  const getCartCount = () => {
    const local = localStorage.getItem("cart_count");
	if(local === null) return 0;
    return local;
  };

  const [search, setSearch] = useState(null);
  const [cartCount, setCartCount] = useState(getCartCount());

  const setCart = (count) => {
    const sum = count + parseInt(getCartCount());
    setCartCount(sum);
    localStorage.setItem("cart_count", JSON.stringify(sum));
  };

  const getData = async (url) => {
    return checkCache(url);
  };

  const checkCache = async (url) => {
    const local = JSON.parse(localStorage.getItem(url));

    const currentDate = new Date();
    if (
      local !== null 
      
    ){
		
		if(currentDate - Date.parse(local["date"]) < 60 * 60 * 1000){
      return local["res"];
		}
	  
	}

    const response = await getApiData(url);
    localStorage.setItem(
      url,
      JSON.stringify({ res: response, date: currentDate })
    );
    return response;
  };

  const getApiData = async (url) => {
    try {
      const apiData = await fetch(
        "https://front-test-api.herokuapp.com/api/" + url,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const parsedApiData = apiData.json();

      return parsedApiData;
    } catch (error) {
      return { error: "Error de servidor" };
    }

    //return { error: "Error de servidor" };
  };

  // body: { id: 0001, colorCode: 1, storageCode: 2 }
  // returns: Integer => CartCount
  const postApiCart = async (body) => {
    try {
      const response = await fetch(
        "https://front-test-api.herokuapp.com/api/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const parsedResponse = response.json();
      return parsedResponse;
    } catch (error) {
      return { error: "Error de servidor" };
    }

    //return { error: "Error de servidor" };
  };

  return (
    <Context.Provider
      value={{
        getCartCount,
        getData,
        postApiCart,
        setSearch,
        search,
        setCart,
        cartCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => useContext(Context);
