import React from 'react';
import { pages} from '@prisma/client';
import prisma from "../prisma/prisma"
import { NextPage } from 'next';
import DisplayCard from '../components/DisplayCard';
import Header from '../components/Header';

interface EntryProps {
    entries: pages[];
}

const HomePage: NextPage<EntryProps> = ({ entries }) => {

    return (
        <div>
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
