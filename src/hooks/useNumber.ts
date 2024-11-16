import React from 'react';

const useNumber = () => {
  const formatNumber = React.useCallback((num: number) => {
    if (Math.abs(num) >= 1e12) {
      return (num / 1e12).toFixed(1) + 'T';
    } else if (Math.abs(num) >= 1e9) {
      return (num / 1e9).toFixed(1) + 'B';
    } else if (Math.abs(num) >= 1e6) {
      return (num / 1e6).toFixed(1) + 'M';
    } else if (Math.abs(num) >= 1e3) {
      return (num / 1e3).toFixed(1) + 'K';
    } else {
      return num.toFixed(1);
    }
  }, []);
  return {
    formatNumber,
  };
};

export default useNumber;
