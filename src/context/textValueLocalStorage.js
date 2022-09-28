import { useState, useEffect } from "react";

function useSaveLocalStorage(item, initialValue) {
  const [finalListSimple, setFinalListSimple] = useState(initialValue);
  const [finalListComplex, setFinalListComplex] = useState(initialValue);

  useEffect(() => {
    try {
      if (item === "simple") {
        const listAsObject = JSON.parse(localStorage.getItem(item));
        let listResultSimple;
        if (listAsObject === null) {
          localStorage.setItem(item, JSON.stringify(initialValue));
          listResultSimple = initialValue;
        } else {
          listResultSimple = listAsObject;
        }
        setFinalListSimple(listResultSimple);
      } else {
        const listAsObject = JSON.parse(localStorage.getItem(item));
        let listResultComplex;
        if (listAsObject === null) {
          listResultComplex = initialValue;
          localStorage.setItem(item, JSON.stringify(initialValue));
        } else {
          listResultComplex = listAsObject;
        }
        setFinalListComplex(listResultComplex);
      }
    } catch (e) {
      console.log("Error ", e);
    }
  }, []);

  return { finalListSimple, finalListComplex };
}
export { useSaveLocalStorage };
