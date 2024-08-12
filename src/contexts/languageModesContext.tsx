"use client";

import React, { createContext, useContext, ReactNode } from 'react';

interface Mode {
  language: string;
  modes: string[];
}

interface ModesContextType {
  modes: Mode[];
}

const ModesContext = createContext<ModesContextType | undefined>(undefined);

export const ModesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  

  return (
    <ModesContext.Provider value={{ modes }}>
      {children}
    </ModesContext.Provider>
  );
};

export const useModes = () => {
  const context = useContext(ModesContext);
  if (context === undefined) {
    throw new Error('useModes must be used within a ModesProvider');
  }
  return context;
};
