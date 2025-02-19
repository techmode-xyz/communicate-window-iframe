import { FC, PropsWithChildren, useEffect } from "react";
import useCommunication from "../store/useCommunication";

const CommunicationProvider: FC<PropsWithChildren> = ({ children }) => {
  const setData = useCommunication((state) => state.setData);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== "YOUR_SITE_URL") return;
      const { key, value } = e.data;
      setData(key, value);
    };

    window.addEventListener("message", handler);
    return () => {
      window.removeEventListener("message", handler);
    };
  }, []);

  return <>{children}</>;
};

export default CommunicationProvider;
