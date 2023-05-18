import { useEffect, useState } from 'react';

export default function useClientSide() {
  const [clientSide, setClientSide] = useState(false);
  useEffect(() => {
    setClientSide(true);
  }, []);
  return clientSide;
}
