import React from "react";

function useLocalStorage(itemName, inicialValue){

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItems;
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(inicialValue));
      parsedItems = inicialValue;
  
    }else{
      parsedItems = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsedItems);
  
    const saveItem = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
  
      setItem(newItems);
    }
  
    return [item,saveItem];
  
  }

  export {useLocalStorage};