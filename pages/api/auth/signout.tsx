import { signOut } from 'next-auth/react';
import { Button, Title } from '@mantine/core';

const SignOut = () => {
  return (
    <div>
      <Title>Logout</Title>
      <Button onClick={() => signOut()}>Esci</Button>
    </div>
  );
};

export default SignOut;