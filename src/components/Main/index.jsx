import { useContext } from "react";
import { ItemContext } from "../../context";
import CardComplex from "../CardComplex";
import CardSimple from "../CardSimple";
import Popup from "../Popup";

const Main = () => {
  const { openModal } = useContext(ItemContext);
  return (
    <main className="relative md:h-full lg:h-full xl:h-full 2xl:h-full 2xl:w-full border shadow-2xl">
      <div className="absolute z-0 w-0 left-[115px] -mt-2 border border-l-gray-[#979797] inset-20 "></div>
      <button className="text-zinc-50 bg-blueNetwork mr-64 sm:mr-64 md:mr-64 2xl:mr-64 mt-10 py-1 px-10 rounded-2xl ">
        Network
      </button>
      <CardSimple />
      <CardComplex />
      <button
        className="py-2 px-4 mt-4 mb-10 mr-64 shadow-lg shadow-slate-500/50 before:content-['+'] text-white rounded-full  bg-blueNetwork"
        onClick={openModal}
      ></button>
      <Popup />
    </main>
  );
};

export default Main;
