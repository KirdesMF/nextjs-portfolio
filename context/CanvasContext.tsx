import { useContext, useState, createContext } from 'react';

type CanvasCtx = {
   setColor: (value: string) => void;
   color: string;
};

const CanvasContext = createContext<CanvasCtx>({} as CanvasCtx);

function CanvasContextProvider({ children }: { children: React.ReactNode }) {
   const [color, setColor] = useState<string>('');

   const values: CanvasCtx = {
      setColor,
      color,
   };

   return (
      <CanvasContext.Provider value={values}>{children}</CanvasContext.Provider>
   );
}

const useCanvasContext = () => useContext(CanvasContext);

export { CanvasContextProvider, useCanvasContext };
