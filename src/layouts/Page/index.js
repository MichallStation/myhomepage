import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Ball3d from '@/components/Ball3d';
import Navbar from '@/components/Navbar';
import SEO from '../SEO';

/** @param {{children: import('react').ReactElement}}  */
function Page({ lang = 'en', children }) {
  return (
    <>
      <SEO />
      <Navbar lang={lang} />
      <Ball3d />
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
    </>
  );
}

export default Page;
