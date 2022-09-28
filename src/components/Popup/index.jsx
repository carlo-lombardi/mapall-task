import React, { useContext } from "react";
import { Complex, Simple } from "../SimpleOrComplex";
import { ItemContext } from "../../context";

const Popup = () => {
  const {
    onClickOutisdeClose,
    simpleOptions,
    complexOptions,
    simple,
    complex,
    showModal,
  } = useContext(ItemContext);
  if (!showModal) return null;

  return (
    <div
      id="container"
      onClick={onClickOutisdeClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white h-60 w-96 p-2 rounded ">
        <div className="">
          <span className=" py-2 border-b-4 border-b-blueNetwork text-black">
            Add a new Cell
          </span>
          <span
            id="cancel-button"
            onClick={onClickOutisdeClose}
            className="absolute cursor-pointer ml-28 -mt-2 text-2xl"
          >
            x
          </span>
        </div>
        {simple && <Simple />}
        {complex && <Complex />}
        {!simple && !complex && (
          <>
            <h3 className="mt-4 text-2xl ">
              Is this a Simple cell or a complex cell ?
            </h3>
            <div className=" ml-8 mt-4 justify-between max-w-xs text-white">
              <button
                onClick={simpleOptions}
                className="py-2 px-10 rounded-xl bg-stone-400"
              >
                Simple
              </button>
              <button
                onClick={complexOptions}
                className="py-2 px-10 rounded-xl bg-red-900"
              >
                Complex
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
