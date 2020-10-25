import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TagManager from 'react-gtm-module'

const usePageTracking = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({
        gtmId: 'GTM-MMZW99B'
      });
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      window.dataLayer.push({
        event: 'pageview',
        page: {
          url: `${location.pathname}${location.search}`
        }
      })
    }
  }, [initialized, location]);
};

export default usePageTracking;