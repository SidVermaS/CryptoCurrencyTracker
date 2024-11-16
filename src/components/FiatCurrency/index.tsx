import React from "react";
import { FiatCurrencyPropsI } from "./types";

const FiatCurrency = (props: FiatCurrencyPropsI): React.JSX.Element => {
  return (
    <div className="flex items-center">
      <img className="rounded-full w-5 h-5" src={props.image} />
      <div className=" text-gray-800">{props.code}</div>
    </div>
  );
};

export default FiatCurrency;
