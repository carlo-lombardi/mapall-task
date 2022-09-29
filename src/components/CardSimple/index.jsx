import { useContext, useEffect, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { ItemContext } from "../../context";

const CardSimple = ({ simple }) => {
  const { deleteSimpleCell } = useContext(ItemContext);
  return (
    <div className="relative mt-8 ml-[150px] sm:ml-[148px] w-64 md:w-72 lg:w-72 xl:w-72 2xl:w-72">
      <div className="absolute h-0 -ml-[70px] mt-3 z-0 w-0 text-[#9E9E9E] inset-0">
        And
      </div>
      <div className="absolute h-9 mt-2 -ml-[19px]  sm:h-8 sm:-ml-[17px] sm:mt-3 rotate-90 z-0 w-0 border border-l-gray-[#979797] inset-0"></div>
      <div className=" justify-between py-4 w-full text-black border-l-[12px] shadow-lg border-l-blueNetwork rounded-xl">
        <div className="flex items-center">
          <p className="ml-8 w-full text-start">{simple.simpleTitle}</p>
          <span
            onClick={() => deleteSimpleCell(simple.simpleTitle)}
            className="mr-5 ml-2 cursor-pointer text-gray-500 text-2xl font-bold"
          >
            {" "}
            <BiTrashAlt />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardSimple;
