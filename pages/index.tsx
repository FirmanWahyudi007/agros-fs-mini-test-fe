import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/components/Section/Hero';
import Introduction from '@/components/Section/Introduction';
import Story from '@/components/Section/Story';
import Patner from '@/components/Section/Patner';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>agros-fs-mini-test-fe</title>
        <meta name='description' content='Generated by Create Next Stack.' />
      </Head>
      <Hero />
      <Introduction />
      <Story />
      <Patner />
    </>
  );
};

export default Index;
