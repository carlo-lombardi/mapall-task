import React, { useState } from "react";
import { useSaveLocalStorage } from "./textValueLocalStorage";

const ItemContext = React.createContext();

function ItemProvider(props) {
  const [listResultMerge, setListResultMerge] = useState([]);
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
  const deleteSimpleCell = (text) => {
    console.log(text);
    const findTheSimpleCellIndex = listResultMerge.findIndex(
      (index) => index.simpleTitle === text
    );
    const newListSimple = [...listResultMerge];
    newListSimple.splice(findTheSimpleCellIndex, 1);
    setListResultMerge(newListSimple);
    localStorage.setItem("SERVICES", JSON.stringify(newListSimple));
  };
  const deleteComplexCell = (text) => {
    const findTheComplexCellIndex = listResultMerge.findIndex(
      (index) => index.complex?.title === text
    );
    const newListComplex = [...listResultMerge];
    newListComplex.splice(findTheComplexCellIndex, 1);
    // newListComplex.filter((e) => e.complex?.title !== text);
    console.log("findTheComplexCellIndex", findTheComplexCellIndex);
    setListResultMerge(newListComplex);
    localStorage.setItem("SERVICES", JSON.stringify(newListComplex));
  };

  const deleteChildComplex = (text, parent) => {
    const result = [...listResultMerge];
    const complexParent = result.find((e) => e.complex?.title === parent);
    console.log(complexParent);
    complexParent.complex.childValue = complexParent.complex.childValue.filter(
      (y) => y !== text
    );
    setListResultMerge(result);
    localStorage.setItem("SERVICES", JSON.stringify(result));
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
    setSimpleValue("");
    setComplexValue("");
  };

  const OptionSelected = ({ typeOfData }) => {
    const { listResultMerge } = useSaveLocalStorage(typeOfData, []);
    const saveData = () => {
      const result = [...listResultMerge];
      if (typeOfData === "simple") {
        result.push({ simpleTitle: simpleValue });
        setListResultMerge(result);
      } else {
        result.push({ complex: { title: complexValue, childValue: [] } });
        setListResultMerge(result);
      }
      localStorage.setItem("SERVICES", JSON.stringify(result));
      setShowModal(false);
      setSimple(false);
      setComplex(false);
      setSimpleValue("");
      setComplexValue("");
    };
    return (
      <div
        onClick={saveData}
        className="text-white cursor-pointer mt-4 py-2 rounded-xl bg-blueNetwork"
      >
        <button>Save</button>
      </div>
    );
  };

  const OptionChildSelected = () => {
    const saveChildData = (e) => {
      const result = [...listResultMerge];
      const parent = result.find((e) => e.complex?.title === complexValue);
      parent.complex.childValue.push(complexChildValue);
      localStorage.setItem("SERVICES", JSON.stringify(result));
      setListResultMerge(result);
      setShowChildModal(false);
      setComplexChildValue("");
    };

    return (
      <div
        className="text-white w-full cursor-pointer py-2 mt-4 rounded-xl bg-blueNetwork"
        onClick={saveChildData}
      >
        <button>Save</button>
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
        deleteSimpleCell,
        deleteComplexCell,
        openChildModal,
        complexChildText,
        OptionChildSelected,
        deleteChildComplex,
        setListResultMerge,
        setComplexValue,
        listResultMerge,
        complexChildValue,
        showChildModal,
        showModal,
        simple,
        complex,
        simpleValue,
        complexValue,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
}

export { ItemContext, ItemProvider };
