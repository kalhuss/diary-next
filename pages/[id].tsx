import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { pages} from '@prisma/client';
import prisma from "../prisma/prisma"
import { useRouter } from 'next/router'

const EntryPage: NextPage<{ entries: pages}> = ({ entries }) => {
    const router = useRouter()

    return (
        <div>
            <h1>{entries.title}</h1>
            <p>{entries.content}</p>
            <button className="font-mono" onClick={() => router.push('/')}>Go Back</button>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) =>{
    
    const id = context.params?.id

    const entries = await prisma.pages.findFirst({
        where: {
            id: parseInt(id as string)
        }
    });

    return {
        props: {
            entries: JSON.parse(JSON.stringify(entries))
        }
    }
    
}

export default EntryPage;