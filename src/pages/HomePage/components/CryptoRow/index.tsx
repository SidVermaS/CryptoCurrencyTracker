import React from "react";
import { CryptoCurrencyI } from "../../../../types/store/currencies";

const CryptoRow = (props: CryptoCurrencyI):React.JSX.Element => {
  
  return (
    <tr>
      <td>{props.name}</td>
    </tr>
  );
};

export default CryptoRow;
