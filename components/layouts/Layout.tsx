import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

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
