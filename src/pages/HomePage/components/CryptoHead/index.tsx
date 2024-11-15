import React from "react";
import { CryptoHeadPropsI } from "../../types";

const CryptoHead = (props: CryptoHeadPropsI): React.JSX.Element => {
  return (
    <thead>
      <tr  className="mx-10">
        {props.columns.map((column, index) => (
          <th key={index} className={`${column.className} py-3 text-sm font-normal text-gray-600`}>{column.title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default React.memo(CryptoHead);
