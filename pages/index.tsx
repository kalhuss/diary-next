import React from 'react';
import { pages} from '@prisma/client';
import prisma from "../prisma/prisma"
import { FC } from 'react';
import DisplayCard from '../components/DisplayCard';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Header from '../components/Header';

interface EntryProps {
    entries: pages[];
}

const HomePage: FC<EntryProps> = ({ entries }) => {

    const router = useRouter()

    return (
        <div>
            <Header/>
            <Link href = "/createEntry">
                <button className = "font-mono" onClick={() => router.push('/createEntry')}>Create</button>
            </Link>
            <DisplayCard entries={entries}/>
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
