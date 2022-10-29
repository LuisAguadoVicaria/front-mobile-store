import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const GlobalContext = ({ children }) => {
  const [cartProductCount, setCartProductCount] = useState(0);

  const getData = async (url) => {
    return checkCache(url);
  };

  const checkCache = async (url) => {
    const local = JSON.parse(localStorage.getItem(url));
    if (local !== null) return local;

    const response = await getApiData(url);
    localStorage.setItem(url, JSON.stringify(response));
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

    return { error: "Error de servidor" };
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

      // Save it in the local storage
      localStorage.setItem("cart_count", JSON.stringify(parsedResponse.count));

      return parsedResponse.count;
    } catch (error) {
      return { error: "Error de servidor" };
    }

    return { error: "Error de servidor" };
  };
  
  const getCartCount = () => {
    const local = JSON.parse(localStorage.getItem("cart_count"));
    return local !== null ? 0 : local;
  };

  return (
    <Context.Provider
      value={{
        getCartCount,
        getData,
        postApiCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => useContext(Context);
