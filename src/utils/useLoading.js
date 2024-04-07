import { createContext, useContext, useState } from "react";
import Loading from "../components/loading/Loading";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  const oneShotLoading = () => {
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 1500);
  };
  return (
    <LoadingContext.Provider value={{ startLoading, stopLoading, oneShotLoading }}>
      {loading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;

export const useLoading = () => {
  return useContext(LoadingContext);
};
