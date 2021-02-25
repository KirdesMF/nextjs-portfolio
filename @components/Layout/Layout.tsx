import { motion } from 'framer-motion';

type LayoutProps = {
   children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
   const { children } = props;
   return (
      <motion.main role="main" animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         {children}
      </motion.main>
   );
}
