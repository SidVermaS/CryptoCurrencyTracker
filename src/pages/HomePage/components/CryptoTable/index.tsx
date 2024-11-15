import React from "react";
import { CryptoTablePropsI } from "../../types";
import CryptoHead from "../CryptoHead";
import CryptoBody from "../CryptoBody";

const CryptoTable = (props: CryptoTablePropsI):React.JSX.Element => {
  return (
    <div className="sm:rounded-2xl border border-gray-200 overflow-hidden">
      <table className="table-fixed">
        <CryptoHead columns={props.columns} />
        <CryptoBody />
      </table>
    </div>
  );
};

export default CryptoTable;
