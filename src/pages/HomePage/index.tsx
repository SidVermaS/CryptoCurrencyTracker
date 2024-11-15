import React from "react";
import CryptoTable from "./components/CryptoTable";
import useHomePage from "./useHomePage";

const HomePage = (): React.JSX.Element => {
  const {cryptoTableColumns} = useHomePage();
  return (
    <div className="flex items-center justify-center min-h-screen sm:py-4 md:py-10">
      <CryptoTable columns={cryptoTableColumns} />
    </div>
  );
};
export default HomePage;
