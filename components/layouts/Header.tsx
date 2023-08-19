import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { menuItems } from '@/common/constant/menu';
import NavItem from '@/components/NavLink/NavItem';

const Header = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const isActive = (path: string) => (router.pathname === path ? true : false);

  return (
    <header className='bg-white absolute top-0 left-0 w-full flex items-center z-10 navbar-fixed'>
      <div className='container'>
        <div className='flex items-center relative justify-between py-5 lg:py-0'>
          <div className='px-4'>
            <Link href='/'>
              <Image
                src='icon/logo-brand.svg'
                width={167}
                height={33.39}
                alt='logo'
                className='ml-6 lg:ml-[139px]'
              />
            </Link>
          </div>
          <div className='px-4 flex items-center mr-28'>
            {/* Mobile Button Start */}
            <div className='block absolute right-4 lg:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  //svg close
                  <Image
                    src='icon/close-icon.svg'
                    width={24}
                    height={24}
                    alt='close'
                  />
                ) : (
                  <Image
                    src='icon/menu-icon.svg'
                    width={24}
                    height={24}
                    alt='menu'
                  />
                )}
              </button>
            </div>
            {/* Mobile Button End */}
            <nav
              className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block 
              lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none  ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className='block lg:flex'>
                {menuItems.map((item, index) => (
                  <li className='group' key={index}>
                    <NavItem
                      text={item.title}
                      href={item.href}
                      active={isActive(item.href)}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
