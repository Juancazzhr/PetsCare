import Nosotros from '../components/home/nosotros'
import Head from 'next/head'
//import { Inter } from 'next/font/google'


//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pets Care</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main /* className={ ${inter.className}} */>
        <div>
          <p>
            Get started Pets Care&nbsp;
          </p>
          <Nosotros/>
        </div>
      </main>
    </>
  )
}
