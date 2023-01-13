import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Entry from '../components/Entry'
import { useRef } from 'react'

export default function Home() {

  const titleRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Head>
        <title>Diary</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header titleRef = {titleRef}/>
      <Entry titleRef = {titleRef}/>

    </div>
  )
}