import React, { useContext } from "react";
import { ItemContext } from "../../context";

const Simple = () => {
  const { OptionSelected, simpleValue, simpleText } = useContext(ItemContext);
  return (
    <div className="text-black mt-4">
      <h3 className="text-2xl ">Simple</h3>
      <input
        value={simpleValue}
        onChange={simpleText}
        className="py-2 mt-8 w-80 text-center rounded-xl border border-zinc-600"
        placeholder="Insert Text"
      />
      <OptionSelected typeOfData="simple" />
    </div>
  );
};
const Complex = () => {
  const { OptionSelected, complexText, complexValue } = useContext(ItemContext);
  return (
    <div className="text-black mt-4">
      <h3 className="text-2xl ">Complex</h3>
      <input
        value={complexValue}
        onChange={complexText}
        className="py-2 mt-8 w-80 text-center rounded-xl border border-zinc-600"
        placeholder="Insert Text"
      />
      <OptionSelected typeOfData="complex" />
    </div>
  );
};

export { Simple, Complex };
