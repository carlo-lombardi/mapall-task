import React, { useState } from "react";
import { useSaveLocalStorage } from "./textValueLocalStorage";

const ItemContext = React.createContext();

function ItemProvider(props) {
  const [listToDisplaySimple, setListToDisplaySimple] = useState([]);
  const [listToDisplayComplex, setListToDisplayComplex] = useState([]);
  const [simpleValue, setSimpleValue] = useState("");
  const [complexValue, setComplexValue] = useState("");
  const [complexChildValue, setComplexChildValue] = useState("");
  const [simple, setSimple] = useState(false);
  const [complex, setComplex] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showChildModal, setShowChildModal] = useState(false);

  const simpleText = (e) => {
    const simpleTextValue = e.target;
    setSimpleValue(simpleTextValue.value);
  };

  const complexText = (e) => {
    const simpleComplexValue = e.target.value;
    setComplexValue(simpleComplexValue);
  };
  const complexChildText = (e) => {
    const complexValue = e.target.value;
    setComplexChildValue(complexValue);
  };

  const openChildModal = () => {
    setShowChildModal(true);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setSimple(false);
    setComplex(false);
  };
  const closeChildModal = () => {
    setShowChildModal(false);
  };

  const simpleOptions = () => {
    setSimple(true);
  };
  const complexOptions = () => {
    setComplex(true);
  };

  const deleteSimpleCell = (e) => {
    const findTheSimpleCellIndex = listToDisplaySimple.findIndex(
      (index) => index.simple === simpleValue
    );
    const newListSimple = [...listToDisplaySimple];
    newListSimple.splice(findTheSimpleCellIndex);
    setListToDisplaySimple(newListSimple);
    localStorage.setItem("simple", JSON.stringify(newListSimple));
  };

  const deleteComplexCell = (e) => {
    const findTheComplexCellIndex = listToDisplayComplex.findIndex(
      (index) => index.complex === complexValue
    );
    const newListComplex = [...listToDisplayComplex];
    newListComplex.splice(findTheComplexCellIndex);
    setListToDisplayComplex(newListComplex);
    localStorage.setItem("complex", JSON.stringify(newListComplex));
  };

  const onClickChildOutisdeClose = (e) => {
    const container = e.target;
    ("childContainer" === container.id ||
      "cancel-child-button" === container.id) &&
      closeChildModal();
  };

  const onClickOutisdeClose = (e) => {
    const container = e.target;
    ("container" === container.id || "cancel-button" === container.id) &&
      closeModal();
  };

  const OptionSelected = ({ typeOfData }) => {
    const { finalListSimple, finalListComplex } = useSaveLocalStorage(
      typeOfData,
      []
    );
    const saveData = () => {
      if (typeOfData === "simple") {
        finalListSimple.push({ simple: simpleValue });
        setListToDisplaySimple(finalListSimple);
        localStorage.setItem(typeOfData, JSON.stringify(finalListSimple));
      } else {
        finalListComplex.push({ complex: [{ title: complexValue }] });

        setListToDisplayComplex(finalListComplex);
        localStorage.setItem(typeOfData, JSON.stringify(finalListComplex));
      }
      setShowModal(false);
      setSimple(false);
      setComplex(false);
    };

    return (
      <div className="mt-4 py-2 rounded-xl bg-blueNetwork">
        <button onClick={saveData}>Save</button>
      </div>
    );
  };
  const OptionChildSelected = ({ typeOfData }) => {
    const { finalListComplex } = useSaveLocalStorage(typeOfData, []);
    const saveChildData = (e) => {
      if (typeOfData === "complex") {
        finalListComplex.forEach((item) => {});
      }
    };
    return (
      <div>
        <button
          className="w-full py-2 mt-4 rounded-xl bg-blueNetwork"
          onClick={saveChildData}
        >
          Save
        </button>
      </div>
    );
  };
  return (
    <ItemContext.Provider
      value={{
        openModal,
        closeModal,
        onClickOutisdeClose,
        onClickChildOutisdeClose,
        simpleOptions,
        complexOptions,
        OptionSelected,
        setSimpleValue,
        simpleText,
        complexText,
        setListToDisplaySimple,
        deleteSimpleCell,
        deleteComplexCell,
        openChildModal,
        complexChildText,
        OptionChildSelected,
        complexChildValue,
        showChildModal,
        showModal,
        simple,
        complex,
        listToDisplaySimple,
        listToDisplayComplex,
        simpleValue,
        complexValue,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
}

export { ItemContext, ItemProvider };
