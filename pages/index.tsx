import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diary</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-indigo-500 text-6xl text-center'>Diary</h1>
      <div className='flex justify-center'>
        <div className = "text-2xl text-center">
          <p>Diary is a place where you can write your thoughts and feelings.</p>
        </div>
      </div>

    </div>
  )
}
