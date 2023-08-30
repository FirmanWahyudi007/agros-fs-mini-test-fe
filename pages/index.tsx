import { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@/components/Section/Hero';
import Introduction from '@/components/Section/Introduction';
import Story from '@/components/Section/Story';
import Patner from '@/components/Section/Patner';
import { useEffect, useState } from 'react';

const Index: NextPage = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = window.localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Agros</title>
        <meta name='description' content='Agros Mini Test Fullstack' />
      </Head>

      <Hero token={token} setToken={setToken} />
      <Introduction />
      <Story />
      <Patner token={token} />
    </>
  );
};

export default Index;
