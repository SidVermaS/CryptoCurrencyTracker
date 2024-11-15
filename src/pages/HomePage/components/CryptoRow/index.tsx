import React from "react";
import AvatarInfo from "../../../../components/AvatarInfo";
import { CryptoRowPropsI } from "../../types";

const CryptoRow = (props: CryptoRowPropsI): React.JSX.Element => {
  return (
    <tr>
      <td >
        <AvatarInfo {...props} />
      </td>
      <td>{props.current_price}</td>
      <td>{props.market_cap}</td>
      <td>{props.price_change_percentage_24h}</td>
    </tr>
  );
};

export default CryptoRow;
