import React, { useEffect, useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fetchDataByUrl } from '@/db';

function CardInternal({
  children,
  lang = 'en',
  url,
  thumbnailHighContrast,
  ...props
}) {
  const [data, setData] = useState();

  useEffect(() => {
    fetchDataByUrl(url, lang).then((d) => setData(d));
  }, [lang, url]);

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        title={data?.title || data?.name}
        p={0}
        m={0}
        variant="unstyled"
        display="block"
        boxShadow="lg"
        pos="relative"
        borderRadius="lg"
        maxW={['100%', '320px']}
        minH="160px"
        backgroundColor="holder"
        backgroundSize="cover"
        // backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundImage={data?.thumbnail || data?.url || data?.src}
        border={thumbnailHighContrast && '2px solid'}
        {...props}
      />
      <Text textAlign="center">{data?.title || data?.name}</Text>
    </motion.div>
  );
}

export default CardInternal;
