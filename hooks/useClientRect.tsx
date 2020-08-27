import { useCallback, useState } from 'react';

function useClientRect() {
   const [rect, setRect] = useState<ClientRect>(null!);

   const ref = useCallback((node: Element | null) => {
      if (node !== null) {
         setRect(node.getBoundingClientRect());
      }
   }, []);

   return [rect, ref] as const;
}

export default useClientRect;
