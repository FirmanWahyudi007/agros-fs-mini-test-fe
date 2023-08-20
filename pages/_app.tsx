import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '@/styles/globals.css';
import Layout from '@/components/layouts/Layout';
import { interFont } from '@/styles/font';
import store from '@/redux/store';
import { Toaster } from 'react-hot-toast';

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
      <Provider store={store}>
        <Layout>
          <Toaster position='top-right' reverseOrder={false} />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default App;
