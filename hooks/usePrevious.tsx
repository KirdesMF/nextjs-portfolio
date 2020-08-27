import React, { useRef, useEffect } from 'react';

export default function usePrevious(value: URLType) {
   const ref = useRef<URLType>(null!);

   useEffect(() => {
      ref.current = value;
   }, [value]);
   return ref.current;
}
