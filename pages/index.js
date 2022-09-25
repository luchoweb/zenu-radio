import Head from 'next/head'
import Layout from './layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zenú Radio &bull; Noticias</title>
        <meta name="description" content="Noticias de Montería, Córdoba y el mundo en vivo." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <p>Home</p>
      </Layout>
    </>
  )
}
