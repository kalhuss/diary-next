import React from 'react';
import { pages} from '@prisma/client';
import prisma from "../prisma/prisma"
import { NextPage } from 'next';
import DisplayCard from '../components/DisplayCard';
import Header from '../components/Header';
import Head from 'next/head';

interface EntryProps {
    entries: pages[];
}

const HomePage: NextPage<EntryProps> = ({ entries }) => {

    return (
        <div>
            <Head>
                <title>Diary</title>
                <meta name="description" content="Diary app" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <div className = "p-5">
                <DisplayCard entries={entries}/>
            </div>
        </div>
    )
}

export async function getServerSideProps(){
    const entries = await prisma.pages.findMany();
    return {
        props: {
            entries: JSON.parse(JSON.stringify(entries))
        }
    }
}

export default HomePage;
