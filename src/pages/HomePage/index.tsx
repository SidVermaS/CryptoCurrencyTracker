import React from "react";
import CryptoTable from "./components/CryptoTable";
import useHomePage from "./useHomePage";
import { cryptoTableColumns } from "./consts";

const HomePage = (): React.JSX.Element => {
  const {} = useHomePage();
  return (
    <div className="flex items-center justify-center min-h-screen sm:py-7 md:py-10">
      <CryptoTable columns={cryptoTableColumns} />
    </div>
  );
};
export default HomePage;
