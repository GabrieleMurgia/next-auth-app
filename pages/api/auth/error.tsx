import { useRouter } from 'next/router';
import { Text, Button } from '@mantine/core';

const Error = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <Text>C'è stato un errore durante il processo di autenticazione: {error}</Text>
      <Button onClick={() => router.push('/auth/signin')}>Torna alla pagina di accesso</Button>
    </div>
  );
};

export default Error;