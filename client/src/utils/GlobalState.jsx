import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";

const GbContext = createContext();
const { Provider } = GbContext;

const GbProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    games: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGbContext = () => {
  return useContext(GbContext);
};

export { GbProvider, useGbContext };
