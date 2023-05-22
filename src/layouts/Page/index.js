import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Blue3d, Floating, Navbar } from '@/components';
import PWA from '../PWA';

/**
 * @param {{
 * children: import('react').ReactElement,
 * storage: import('@/@type/features').FeaturesStorage
 * }}
 * */
function Page({ children, storage }) {
  return (
    <>
      <PWA />
      <Floating storage={storage} />
      <Navbar storage={storage} />
      <Blue3d />
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => {
          if (typeof window !== 'undefined')
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <motion.main
          key={children.key}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default Page;
