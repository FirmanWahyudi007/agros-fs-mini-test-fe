import { LayoutProps } from '@/common/interface/layoutProps';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='layout-container'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
