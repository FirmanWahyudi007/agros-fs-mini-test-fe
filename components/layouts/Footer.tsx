import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer
      className='w-full bg-transparent text-gray-100 py-3 md:py-1'
      style={{
        backgroundImage: 'url(/Footer.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-col md:flex-row items-center justify-between m-5 lg:px-4 px-10'>
        <Link href='/'>
          <Image
            src='icon/logo-white.svg'
            width={75.45}
            height={13.31}
            alt='logo'
            className='ml-6 lg:ml-[139px] md:mb-0'
          />
        </Link>
        <div className='w-[259.43px] h-[1px] bg-gray-100 hidden xl:block'></div>
        <h2 className='font-light text-base md:text-xs mb-2 md:mb-0'>
          PT ANTAR GLOBAL PROSPERO © 2021.{' '}
          <span className='text-center block md:inline-block'>
            All rights reserved.
          </span>
        </h2>
        <h2 className='font-light text-base md:text-xs cursor-pointer mb-2 md:mb-0'>
          SYARAT & KETENTUAN
        </h2>
        <h2 className='font-light text-base md:text-xs cursor-pointer'>
          KEBIJAKAN PRIVASI
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
