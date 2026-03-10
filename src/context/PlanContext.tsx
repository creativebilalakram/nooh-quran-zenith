import { createContext, useContext, useState, ReactNode } from "react";

type PlanContextType = {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
};

const PlanContext = createContext<PlanContextType>({ selectedPlan: "", setSelectedPlan: () => {} });

export const usePlan = () => useContext(PlanContext);

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPlan, setSelectedPlan] = useState("");
  return (
    <PlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </PlanContext.Provider>
  );
};
