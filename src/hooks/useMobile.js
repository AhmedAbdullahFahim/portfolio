import { useState, useEffect } from 'react';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const userAgent = navigator.userAgent;
      const width = window.innerWidth;
      
      // Check for mobile devices
      const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) || width <= 768;
      
      // Check for tablet
      const tabletCheck = width > 768 && width <= 1024;
      
      setIsMobile(mobileCheck);
      setIsTablet(tabletCheck);
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  return { isMobile, isTablet, isDesktop: !isMobile && !isTablet };
}; 