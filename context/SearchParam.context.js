import { createContext, useState } from "react";

export const ParamContext = createContext();

export const SearchParamProvider = ({ children }) => {
  const [paramSearch, setParamSearch] = useState("");

  return (
    <ParamContext value={{ paramSearch, setParamSearch }}>
      {children}
    </ParamContext>
  );
};
