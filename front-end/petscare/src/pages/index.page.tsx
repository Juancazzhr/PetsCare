import Head from 'next/head'
import Slider from '../components/home/carousel/Slider'
import Nosotros from '../components/home/nosotros'
import {Servicios}  from '../components/home/servicios/Servicios'
import { Ubicacion } from '../components/home/ubicacion/Ubicacion'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pets Care</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slider />
        <Servicios />
        <Nosotros/>
        <Ubicacion />
      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  return {
      props: {
          
      }
  }
}

