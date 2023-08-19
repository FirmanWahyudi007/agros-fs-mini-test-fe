import Story from '@/components/Section/Story';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Agros</title>
        <meta name='description' content='Agros Mini Test Fullstack' />
      </Head>
      <section className='mt-14'>
        <div className='w-full md:w-10/12 mx-auto bg-white rounded-xl  shadow-lg py-7 px-11'>
          <div className=' mb-8'>
            <h1 className='font-bold text-xl md:text-3xl'>Perbarui Profil</h1>
          </div>
          {/* Form Login */}
          <div className='w-full'>
            <div className='flex flex-row justify-center gap-5'>
              <div className='w-full lg:w-1/2'>
                <label
                  htmlFor='name'
                  className='text-sm font-medium text-gray-700'
                >
                  Nama Lengkap Kerabat
                </label>
                <input
                  id='name'
                  type='text'
                  className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                  placeholder='Masukan nama'
                />
              </div>
              <div className='w-full lg:w-1/2'>
                <label
                  htmlFor='city'
                  className='text-sm font-medium text-gray-700'
                >
                  Asal Kota
                </label>
                <input
                  id='city'
                  type='text'
                  className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                  placeholder='Masukan asal kota'
                />
              </div>
            </div>
            <div className='flex flex-row justify-center gap-5'>
              <div className='w-full lg:w-1/2'>
                <label
                  htmlFor='email'
                  className='text-sm font-medium text-gray-400'
                >
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                  placeholder='Masukan email'
                  disabled
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
                Perbaharui Sekarang
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
