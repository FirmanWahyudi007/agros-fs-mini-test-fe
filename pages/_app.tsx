import { AppProps } from 'next/app';
import '@/styles/globals.css';
import Layout from '@/components/layouts/Layout';
import { interFont } from '@/styles/font';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            --Inter-font: ${interFont.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
