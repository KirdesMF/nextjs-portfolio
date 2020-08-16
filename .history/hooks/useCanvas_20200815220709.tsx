import { useRef, useEffect } from 'react';

type TCanvasState = {
   canvasWidth: number;
   canvasHeight: number;
   ctx: CanvasRenderingContext2D;
   clearCanvas: () => void;
};

function useCanvas() {
   const canvasRef = useRef<HTMLCanvasElement>(null!);
   const canvasState = useRef<TCanvasState>(null!);

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      const canvasWidth = (canvas.width = window.innerWidth);
      const canvasHeight = (canvas.height = window.innerHeight);

      const clearCanvas = () => {
         ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      };

      canvasState.current = { canvasWidth, canvasHeight, clearCanvas, ctx };

      const onResize = () => {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', onResize);

      return () => window.removeEventListener('resize', onResize);
   }, []);
   return [canvasRef, canvasState];
}

export default useCanvas;
