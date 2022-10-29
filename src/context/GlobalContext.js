import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const GlobalContext = ({ children }) => {
	
	
	
  const [showCart, setShowCart] = useState(false);

  const getData = async (url) => {
	  return(checkCache(url))
	  
  }
 
  const checkCache = async (url) => {
	  const local = JSON.parse(localStorage.getItem(url));
	  if(local!==null)return local
	  
		  const response = await getApiData(url)
		  localStorage.setItem(url, JSON.stringify(response));
		  return response

	  
  }
  const getApiData = async (url) => {
	  //fetch api return results
	  return {data:"dummy"}
  }
  
  
  return (
    <Context.Provider
      value={{
        getData
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = () => useContext(Context);