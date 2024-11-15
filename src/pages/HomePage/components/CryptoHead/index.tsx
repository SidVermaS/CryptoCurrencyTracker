import React from "react";
import { CryptoHeadPropsI } from "../../types";

const CryptoHead = (props: CryptoHeadPropsI): React.JSX.Element => {
  return (
    <thead>
      <tr>
        {props.columns.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

export default CryptoHead;
