import { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@/components/Section/Hero';
import Introduction from '@/components/Section/Introduction';
import Story from '@/components/Section/Story';
import Patner from '@/components/Section/Patner';
import { useRouter } from 'next/navigation';

const Index: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Agros</title>
        <meta name='description' content='Agros Mini Test Fullstack' />
      </Head>

      <Hero />
      <Introduction />
      <Story />
      <Patner />
    </>
  );
};

export default Index;
