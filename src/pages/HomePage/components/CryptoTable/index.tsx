import React from "react";
import { CryptoTablePropsI } from "../../types";
import { useSelector } from "react-redux";
import { RootStateI } from "../../../../store/store";
import CryptoRow from "../CryptoRow";

const CryptoTable = (props: CryptoTablePropsI):React.JSX.Element => {
  const { cryptoCurrencies } = useSelector(
    (state: RootStateI) => state.currencies
  );

  console.log('111 CryptoTable',cryptoCurrencies.length);
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            {props.columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cryptoCurrencies.map((cryptoCurrency) => (
            <CryptoRow key={cryptoCurrency.id} {...cryptoCurrency} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
