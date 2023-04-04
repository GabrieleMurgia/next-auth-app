import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
   const { data: session, status: loading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (loading !== 'loading' && !session) {
      router.push('/auth/signin');
    }
  }, [session, loading, router]);

  return (
    <>
      {/* Contenuto della pagina Home */}
    </>
  );
};

export default Home;