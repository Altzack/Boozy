import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 1224 });

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
  };
};

export const DesktopOnly = ({ children }) => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 1224 });
  return isDesktop ? children : null;
};
export const MobileOnly = ({ children }) => {
  const isMobile = useMediaQuery({ maxDeviceWidth: 1224 });
  return isMobile ? children : null;
};
