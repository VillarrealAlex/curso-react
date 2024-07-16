import React from "react";

function useLocalStorage(itemName, inicialValue){
  const [item, setItem] = React.useState(inicialValue);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(inicialValue));
          parsedItems = inicialValue;
          setItem(parsedItems);
        } else {
          parsedItems = JSON.parse(localStorageItem);
          setItem(parsedItems);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [] );
  
    const saveItem = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
  
      setItem(newItems);
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  
  }

  export {useLocalStorage};