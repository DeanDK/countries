import { useContext } from "react";

export const useAPI = <T>(ctx: React.Context<T>) => {
  const context = useContext(ctx);

  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }

  return context;
};
