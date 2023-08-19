import Service from '@/components/Service';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Agros</title>
        <meta name='description' content='Agros Mini Test Fullstack' />
      </Head>
      <section className='mt-14'>
        <div className='w-full md:w-10/12 mx-auto'>
          <div className='max-w-full mb-8'>
            <h1 className='font-bold text-xl md:text-3xl'>
              Tentang AGROS Indonesia
            </h1>
          </div>
          <div className='flex flex-wrap justify-center '>
            <Image
              src='/layanan/Logo.png'
              width={384}
              height={369}
              alt='logo'
            />
            <p className='w-full mt-6 font-normal text-sm md:text-base text-center'>
              Terinspirasi dari arah mata angin yang membawa pada satu
              destinasi, Agros akan terus bergerak menciptakan pemerataan
              ekonomi sehingga bisa menjadi penghubung para stakeholders dalam
              aktivitas muatan berat, mulai dari shipper, transporter, driver,
              mitra pemeliharan, seller dan buyer intermoda yang menjangkau
              seluruh penjuru Nusantara.
            </p>
          </div>
          <div className='my-[60px]'>
            <Service />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
