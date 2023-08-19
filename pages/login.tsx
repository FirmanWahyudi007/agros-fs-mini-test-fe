import Story from '@/components/Section/Story';
import { NextPage } from 'next';
import Head from 'next/head';

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
            <h1 className='font-bold text-xl md:text-3xl'>Masuk Sekarang</h1>
            <p className='mt-6 font-normal text-sm md:text-base'>
              Masuk dan nikmati fitur kami
            </p>
          </div>
          {/* Form Login */}
          <div className='w-full'>
            <div className='flex flex-row justify-center gap-2'>
              <div className='w-full lg:w-1/2'>
                <label
                  htmlFor='email'
                  className='text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                  placeholder='Masukan email'
                />
              </div>
              <div className='w-full lg:w-1/2'>
                <label
                  htmlFor='password'
                  className='text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                  placeholder='Masukan password'
                />
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              {/* button full w-full */}
              <button className='bg-primary text-white hover:bg-opacity-70 hover:shadow-sm active:bg-opacity-100 rounded-lg border border-white px-4 py-2 mt-3 mb-2 md:mt-4 w-full text-left font-bold text-lg'>
                Masuk Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
      <Story />
      <div className='mb-[60px]'></div>
    </>
  );
};

export default About;
