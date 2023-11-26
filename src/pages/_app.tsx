import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { Toaster } from 'react-hot-toast';
import { ConfigProvider } from 'antd';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const token = getCookie('token');
  axios.defaults.headers.common.Authorization = token;
  return (
    <ConfigProvider direction='rtl'>
      <QueryClientProvider client={queryClient}>
        <Toaster
          toastOptions={{
            style: {
              borderRadius: '10px',
              background: 'black',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 'semibold',
            },
          }}
          position='bottom-right'
        />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </ConfigProvider>
  );
}
