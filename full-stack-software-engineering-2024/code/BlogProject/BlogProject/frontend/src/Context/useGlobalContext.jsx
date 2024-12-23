import { useContext } from "react";
import globalContext from "./contextProvider";

const useGlobalContext = () => {
  return useContext(globalContext);
};

export default useGlobalContext;
