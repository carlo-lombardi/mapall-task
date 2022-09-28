import { useContext, useEffect, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { ItemContext } from "../../context";

const CardComplex = (e) => {
  const [newData, setNewData] = useState([]);
  const {
    listToDisplayComplex,
    deleteComplexCell,
    onClickChildOutisdeClose,
    openChildModal,
    showChildModal,
    OptionChildSelected,
    complexChildValue,
    complexChildText,
  } = useContext(ItemContext);

  // useEffect(() => {
  //   const newDataStorage = JSON.parse(localStorage.getItem("complex"));
  //   setNewData(newDataStorage);
  // }, [listToDisplayComplex]);

  return (
    <>
      {listToDisplayComplex?.map((e, key) => {
        return (
          <div
            key={key}
            className="relative ml-[150px] sm:ml-[148px] w-64 mt-8 md:w-72 lg:w-72 xl:w-72 2xl:w-72"
          >
            <div className="absolute h-0 -ml-[70px] mt-20 z-0 w-0 text-[#9E9E9E] inset-0">
              And
            </div>
            <div className="absolute z-0 w-0 left-[64px] sm:left-[64px] mt-2 border border-l-gray-[#979797] inset-10"></div>
            <div className="absolute h-8 mt-20 -ml-[19px] md:-ml-[17px] md:mt-20 rotate-90 z-0 w-0 border border-l-gray-[#979797] inset-0"></div>
            <div className=" justify-between py-4 w-full text-black border-l-[12px] shadow-lg border-l-blueNetwork rounded-xl">
              <div className="flex items-center">
                <p className="ml-4 pl-2 py-1 text-start border border-gray-300 w-full rounded-md">
                  {e.complex[0]?.title}
                </p>
                <span
                  onClick={deleteComplexCell}
                  className="cursor-pointer mr-5 ml-2 text-gray-500 text-2xl font-bold"
                >
                  {" "}
                  <BiTrashAlt />{" "}
                </span>
              </div>
              {e.complex && (
                <>
                  <div className="relative flex items-center w-[170px] ml-16 mt-4 border border-gray-300 rounded-md">
                    <div className="absolute h-0 -ml-8 mt-2 z-0 w-0 text-xs text-[#9E9E9E] inset-0">
                      Or
                    </div>
                    <div className="absolute h-3 -ml-[8px] mt-3 rotate-90 z-0 w-0 border border-l-gray-[#979797] inset-0"></div>
                    <p className="w-[150px] py-1 text-start pl-2">
                      {e.complex[0]?.title}
                    </p>
                    <span className="mr-4 text-gray-500 text-2xl font-bold">
                      {" "}
                      <BiTrashAlt />{" "}
                    </span>
                  </div>
                  <div className="relative flex items-center w-[170px] ml-16 mt-4 border border-gray-300 rounded-md">
                    <div className="absolute h-0 -ml-8 mt-2 z-0 w-0 text-xs text-[#9E9E9E] inset-0">
                      Or
                    </div>

                    <div className="absolute h-3 -ml-[8px] mt-3 rotate-90 z-0 w-0 border border-l-gray-[#979797] inset-0"></div>
                    <p className="w-[150px] py-1 text-start pl-2">
                      {e.complex[0]?.title}
                    </p>
                    <span className="mr-4 text-gray-500 text-2xl font-bold">
                      {" "}
                      <BiTrashAlt />{" "}
                    </span>
                  </div>
                </>
              )}
              <div>
                <button
                  onClick={openChildModal}
                  className="flex ml-10 mt-4 py-0 px-2 shadow-lg shadow-slate-500/50 before:content-['+'] text-white rounded-full  bg-blueNetwork"
                ></button>
              </div>
              {showChildModal && (
                <div
                  id="childContainer"
                  onClick={onClickChildOutisdeClose}
                  className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
                >
                  <div className="bg-white h-44 w-96 p-2 rounded ">
                    <div className="">
                      <span className=" py-2 border-b-4 border-b-blueNetwork text-black">
                        Add a new Cell
                      </span>
                      <span
                        id="cancel-child-button"
                        onClick={onClickChildOutisdeClose}
                        className="absolute cursor-pointer ml-28 -mt-2 text-2xl"
                      >
                        x
                      </span>
                      <div className="text-black ">
                        <input
                          value={complexChildValue}
                          onChange={complexChildText}
                          className="py-2 mt-10 w-80 text-center rounded-xl border border-zinc-600"
                          placeholder="Insert Text"
                        />
                        <OptionChildSelected typeOfData="complex" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardComplex;
