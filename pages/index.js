import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Micro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1 className='container mx-auto mt-4 font-bold underline' >This My First Page</h1>
      </main>
    </div>
  )
}
