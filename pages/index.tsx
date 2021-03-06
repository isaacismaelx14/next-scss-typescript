import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Scss and Typescript</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <h1>Next Scss and Typescript</h1>
        <h2>Start with your new awesome project</h2>
        <p>Remember change the project's name in your package.json</p>
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          background-color: #0a1019;
          color: #fff;
        }

        h1 {
          font-size: 3.5rem;
        }

        h2 {
          font-size: 2.0rem;
          margin-bottom: 1rem;
          font-weight: 100;
        }

        p {
          font-size: 0.8rem;
        }
        `}</style> 
    </>
 );
}

export default Home
