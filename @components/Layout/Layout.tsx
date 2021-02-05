import { motion, Orchestration, Repeat, Tween } from 'framer-motion';
import { CSSLayout } from './Layout.styles';

const transition: Orchestration | Repeat | Tween = {
   when: 'beforeChildren',
   duration: 1,
};

const endTransition: Orchestration | Repeat | Tween = {
   when: 'afterChildren',
   duration: 1,
};

type LayoutProps = {
   children: React.ReactNode;
   name: keyof typeof CSSLayout;
};

export function Layout(props: LayoutProps) {
   const { children, name } = props;
   const className = CSSLayout[name];

   return (
      <motion.section
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, transition: transition }}
         exit={{ opacity: 0, transition: endTransition }}
         className={`${className}`}
      >
         {children}
      </motion.section>
   );
}
