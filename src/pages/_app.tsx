import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { Cairo } from 'next/font/google';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
const queryClient = new QueryClient();
const cairo = Cairo({ subsets: ['latin'] });
export default function App({ Component, pageProps }: AppProps) {
  const token = getCookie('token');
  const [, setUserData] = useLocalStorage('user', {});

  axios.defaults.headers.common.Authorization = token;

  useEffect(() => {
    if (!token) {
      setUserData({});
    }
  }, [token]);

  return (
    <QueryClientProvider client={queryClient}>
      <main className={cairo.className}>
        <div className='relative'>
          <Navbar />

          <Component {...pageProps} />

          <Footer />
        </div>
      </main>
    </QueryClientProvider>
  );
}
