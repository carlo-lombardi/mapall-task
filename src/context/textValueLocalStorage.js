import React, { useState, useEffect } from "react";

function useSaveLocalStorage(item, initialValue) {
  const services = "SERVICES";
  const [listResultMerge, setListResultMerge] = useState(initialValue);

  useEffect(() => {
    try {
      if (item === "simple") {
        const listAsObject = JSON.parse(localStorage.getItem(services));
        let listResultSimple;
        if (listAsObject === null) {
          localStorage.setItem(services, JSON.stringify(initialValue));
          listResultSimple = initialValue;
        } else {
          listResultSimple = listAsObject;
        }
        setListResultMerge(listResultSimple);
      } else {
        const listAsObject = JSON.parse(localStorage.getItem(services));
        let listResultComplex;
        if (listAsObject === null) {
          listResultComplex = initialValue;
          localStorage.setItem(services, JSON.stringify(initialValue));
        } else {
          listResultComplex = listAsObject;
        }
        setListResultMerge(listResultComplex);
      }
    } catch (e) {
      console.log("Error ", e);
    }
  }, []);

  return { listResultMerge };
}
export { useSaveLocalStorage };
