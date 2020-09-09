import { Variants, Variant } from 'framer-motion';
import { createHexMapShapeHexagons } from 'utils/hexagons/helpers';

type TPathCoordinates = {
   MX: number;
   MY: number;
   LX: number;
   LY: number;
};
function setCoordinatesPath(coordinates: TPathCoordinates) {
   const { MX, MY, LX, LY } = coordinates;
   return `M${MX} ${MY} L ${LX} ${LY}`;
}

const SIZE = {
   width: 200,
   height: 200,
};

const ORIGIN = {
   x: SIZE.width / 2,
   y: SIZE.height / 2,
};

const VIEWBOX = `0 0 ${SIZE.width} ${SIZE.height}`;

const HEX_SIZE = 25;
const RADIUS = 1;
const HEXMAP = createHexMapShapeHexagons(RADIUS);

const LENGTH_PATH = 20;
const LENGTH_MID_PATH = 28;
const PADDING_PATH = 15;

const TOP_PATH_COORD: TPathCoordinates = {
   MX: ORIGIN.x - LENGTH_PATH,
   MY: ORIGIN.y - PADDING_PATH,
   LX: ORIGIN.x + LENGTH_PATH,
   LY: ORIGIN.y - PADDING_PATH,
};

const MID_PATH_COORD: TPathCoordinates = {
   MX: ORIGIN.x - LENGTH_MID_PATH,
   MY: ORIGIN.y,
   LX: ORIGIN.x + LENGTH_MID_PATH,
   LY: ORIGIN.y,
};

const BOT_PATH_COORD: TPathCoordinates = {
   MX: ORIGIN.x - LENGTH_PATH,
   MY: ORIGIN.y + PADDING_PATH,
   LX: ORIGIN.x + LENGTH_PATH,
   LY: ORIGIN.y + PADDING_PATH,
};

const TOP_PATH_MORPH: TPathCoordinates = {
   MX: TOP_PATH_COORD.MX + 5,
   MY: TOP_PATH_COORD.MY + 2,
   LX: BOT_PATH_COORD.LX - 5,
   LY: BOT_PATH_COORD.LY - 2,
};

const BOT_PATH_MORPH: TPathCoordinates = {
   MX: BOT_PATH_COORD.MX + 5,
   MY: BOT_PATH_COORD.MY - 2,
   LX: TOP_PATH_COORD.LX - 5,
   LY: TOP_PATH_COORD.LY + 2,
};

const topPathVariants: Variants = {
   initial: {
      d: setCoordinatesPath(TOP_PATH_COORD),
   },
   open: {
      d: setCoordinatesPath(TOP_PATH_MORPH),

      transition: {
         ease: 'backInOut',
         duration: 0.5,
         delay: 0.5,
      },
   },
   closed: {
      d: setCoordinatesPath(TOP_PATH_COORD),
      transition: {
         ease: 'backInOut',
         duration: 0.5,
      },
   },
};

const botPathVariants: Variants = {
   initial: {
      d: setCoordinatesPath(BOT_PATH_COORD),
   },
   open: {
      d: setCoordinatesPath(BOT_PATH_MORPH),
      transition: {
         ease: 'backInOut',
         duration: 0.5,
         delay: 0.5,
      },
   },
   closed: {
      d: setCoordinatesPath(BOT_PATH_COORD),
      transition: {
         ease: 'backInOut',
         duration: 0.5,
      },
   },
};

const midPathVariants: Variants = {
   initial: {
      d: setCoordinatesPath(MID_PATH_COORD),
      opacity: 1,
      x: 0,
   },

   open: {
      opacity: 0,
      x: [0, -20],
      transition: {
         ease: 'anticipate',
         duration: 0.5,
      },
   },
   closed: {
      opacity: 1,
      x: [20, 0],
      transition: {
         ease: 'backOut',
         duration: 0.5,
         delay: 0.5,
      },
   },
};

type THexesManu = {
   delay: number;
   isOpen: boolean;
   color: string;
};

const hexesTransition = (i: number): Variant => ({
   transition: {
      delay: i * 0.02,
      ease: 'anticipate',
      duration: 0.8,
   },
});

function hexesMenuVariants({ delay, isOpen, color }: THexesManu): Variants {
   const variants: Variants = {
      initial: {
         opacity: 0,
         fill: color,
         stroke: color,
      },
   };

   if (isOpen) {
      return {
         ...variants,
         onHoverStart: {
            opacity: 0.2,
            rotateY: 360,
            scale: [1, 1.2, 0.8],
            fill: color,
            stroke: color,
            ...hexesTransition(delay),
         },
         onHoverEnd: {
            opacity: 0.2,
            fill: color,
            stroke: color,
            rotateY: -360,
            scale: [0.8, 1.2, 1],
            ...hexesTransition(delay),
         },
         onTap: {
            opacity: 0.2,
            rotateY: 360,
            scale: [1, 1.2, 0.8],
            fill: color,
            stroke: color,
            ...hexesTransition(delay),
         },
      };
   } else {
      return {
         ...variants,
         onHoverStart: {
            opacity: 0.5,
            rotateY: -360,
            scale: [1, 1.2, 0.8],
            fill: color,
            stroke: color,
            ...hexesTransition(delay),
         },
         onHoverEnd: {
            opacity: 0,
            rotateY: 0,
            fill: color,
            stroke: color,
            ...hexesTransition(delay),
         },
         onTap: {
            opacity: 0.2,
            rotateY: 360,
            scale: [1, 1.2, 0.8],
            fill: color,
            stroke: color,
            ...hexesTransition(delay),
         },
      };
   }
}

export const menuSettings = {
   VIEWBOX,
   ORIGIN,
   burger: {
      topPathVariants,
      midPathVariants,
      botPathVariants,
   },
   hexes: {
      hexesMenuVariants,
      HEX_SIZE,
      HEXMAP,
   },
};
