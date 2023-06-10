import { useEffect, useState } from "react";

const useNetwork = () => {
  const [navigatorDetails, setNavigatorDetails] = useState({
    online: navigator.onLine ? "online" : "offline"
  });

  useEffect(() => {
    const onOnline = () => {
      setNavigatorDetails({ online: "online" });
    };
    const onOffline = (e) => {
      console.log(e);
      setNavigatorDetails({ online: "offline" });
    };
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    return () => {
      window.addEventListener("online", onOnline);
      window.addEventListener("offline", onOffline);
    };
  }, []);

  return navigatorDetails;
};

export default useNetwork;
