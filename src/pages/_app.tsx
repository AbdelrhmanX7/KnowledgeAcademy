import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { getCookie } from 'cookies-next';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const token = getCookie('token');
  axios.defaults.headers.common.Authorization = token;

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </QueryClientProvider>
  );
}
