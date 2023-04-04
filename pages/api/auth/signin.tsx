import { signIn } from 'next-auth/react';
import { Button, Title } from '@mantine/core';

const SignIn = () => {
  return (
    <div>
      <Title>Accedi</Title>
      <Button onClick={() => signIn('google')}>Accedi con Google</Button>
    </div>
  );
};

export default SignIn;