import { useRef, useEffect } from 'react';

export default function usePrevious(value: string) {
   const ref = useRef<string>(null!);

   useEffect(() => {
      ref.current = value;
   }, [value]);
   return ref.current;
}
