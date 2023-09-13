import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
      <Footer />
    </>
  );
}
