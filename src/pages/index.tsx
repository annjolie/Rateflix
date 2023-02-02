import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <meta name="RATEFLIX" content="technical test for ipGlobal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ann Jolie Lourido" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </>
  );
}
