import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main className='layout-container'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
