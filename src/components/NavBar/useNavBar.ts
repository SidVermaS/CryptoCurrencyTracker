import React from 'react';
import useScreenWidth from '../../hooks/useScreenWidth';
import { breakpoints } from '../../consts/responsive';

const useNavBar = () => {
  const { width } = useScreenWidth();
  const [isSearchIconClicked, setIsSearchIconClicked] =
    React.useState<boolean>(false);
  const updateIsSearchIconClicked = React.useCallback(
    (value: boolean) => {
      setIsSearchIconClicked(value);
    },
    [setIsSearchIconClicked],
  );
  React.useEffect(() => {
    if (width > breakpoints.md) {
      setIsSearchIconClicked(false);
    }
  }, [width]);
  return {
    isSearchIconClicked,
    updateIsSearchIconClicked,
    width,
  };
};

export default useNavBar;
