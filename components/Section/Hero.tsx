import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  return (
    <section className='mt-14 mb-1'>
      <div
        className='w-full md:w-10/12 md:h-[236px] bg-transparent rounded-xl mx-auto'
        style={{
          backgroundImage: 'url(Hero.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className='ml-5 pt-8 text-white'>
          <h1 className='font-bold text-3xl xl:text-4xl'>
            Selamat datang, Kerabat!
          </h1>
          <p className='max-w-3xl mt-4 font-light text-sm md:text-base'>
            Kami hadir dengan membawakan solusi terbaik untuk kebutuhan logistik
            Anda. Melayani dengan sepenuh hati untuk kenyaman Anda dan keamanan
            barang sampai pada tujuan. Silakan melakukan pendaftaran untuk dapat
            menikmati layanan kami.
          </p>
          <button
            onClick={() => router.push('/login')}
            className='bg-transparent hover:opacity-70 hover:shadow-sm active:opacity-100 rounded-lg outline outline-1 px-4 mb-2 mx-2 md:mx-1 py-2 mt-3 md:mt-4'
          >
            Masuk
          </button>
          <button
            onClick={() => router.push('/register')}
            className='bg-white text-primary hover:bg-slate-100 hover:shadow-sm active:bg-white rounded-lg border border-white px-4 py-2 mt-3 mb-2 md:mt-4 md:ml-2'
          >
            Daftar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
