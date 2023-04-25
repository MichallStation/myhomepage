import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Ball3d from '@/components/Ball3d';
import Navbar from '@/components/Navbar';
import Floating from '@/components/Floating';

/** @param {{children: import('react').ReactElement, storage: import('@/features/@features').FeaturesStorage}}  */
function Page({  children, storage }) {
  // const { lang = 'en' } = storage.current
  return(
    <>
      <Navbar storage={storage} />
      <Ball3d />
      <Floating storage={storage} />
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => {
          if (typeof window !== 'undefined') window.scrollTo({ top: 0 });
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
    </>,
  );
}

export default Page;
