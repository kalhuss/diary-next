import Head from 'next/head'
import Header from '../components/Header'
import Entry from '../components/Entry'
import { useRef } from 'react'
import Title from '../components/Title'

const CreateEntry: React.FC = ({}) => {

  const titleRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div>
      <Head>
        <title>Diary</title>
        <meta name="description" content="Diary app" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>
      <div className = 'flex flex-col items-center w-full font-mono'>
        <div className = 'text-3xl p-5 w-full'>
          <Title titleRef = { titleRef }/>
        </div>
        <div className='w-3/4 mt-5'>
          <Entry titleRef = {titleRef} inputRef = {inputRef} />
        </div>
      </div>

    </div>
  )
}

export default CreateEntry;
