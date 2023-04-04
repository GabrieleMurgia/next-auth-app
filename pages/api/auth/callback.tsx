import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Text } from '@mantine/core';

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return <Text>Autenticazione in corso, attendere...</Text>;
};

export default Callback;