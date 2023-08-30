import { logoutUser } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hook';
import { useRouter } from 'next/router'; // Mengganti import dari 'next/navigation'
import Link from 'next/link';
import { HeroProps } from '@/common/interface/heroProps';

const Hero = ({ token, setToken }: HeroProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    // Menambahkan async
    try {
      await dispatch(logoutUser()); // Menunggu pemanggilan async selesai
      router.push('/');
      setToken('');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

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
          {token ? (
            <button
              onClick={handleLogout}
              className='bg-transparent hover:opacity-70 hover:shadow-sm active:opacity-100 rounded-lg outline outline-1 px-4 mb-2 mx-2 md:mx-1 py-2 mt-4 '
            >
              Keluar
            </button>
          ) : (
            <div className='mt-4'>
              <Link
                href='/login'
                className='bg-transparent hover:opacity-70 hover:shadow-sm active:opacity-100 rounded-lg outline outline-1 px-4 mb-2 mx-2 md:mx-1 py-2  '
              >
                Masuk
              </Link>
              <Link
                href='/register'
                className='bg-white text-primary hover:bg-slate-100 hover:shadow-sm active:bg-white rounded-lg border border-white px-4 py-2 mb-2 md:ml-2'
              >
                Daftar
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
