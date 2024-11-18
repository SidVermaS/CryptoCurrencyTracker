import React from 'react';
import useScreenWidth from '../../hooks/useScreenWidth';
import { breakpoints } from '../../consts/responsive';
import useTheme from '../../hooks/useTheme';

const useNavBar = () => {
  const { width } = useScreenWidth();
  const [isSearchIconClicked, setIsSearchIconClicked] =
    React.useState<boolean>(false);
  const { theme, updateTheme } = useTheme();
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
    theme,
    updateTheme,
    updateIsSearchIconClicked,
    width,
  };
};

export default useNavBar;
