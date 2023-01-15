import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { pages} from '@prisma/client';
import { FC } from 'react';
import prisma from '../prisma/prisma';
import Link from 'next/link';
import router from 'next/router';

interface EntryProps {
    entries: pages[];
}


const DisplayCard: FC<EntryProps> = ({ entries }) => {

    const deleteEntry = async (id: number) => {
        fetch('/api/deleteEntry', { method: 'POST', body: JSON.stringify({ id }) })
            .then(() => router.push('/'))
    }

    return (
        <div className = "grid grid-cols-4 gap-6 font-mono">
            {entries.map((entry) => (
                <div className="bg-white p-6 rounded-lg shadow-lg w-auto mb-6 cursor-default flex group hover:drop-shadow-md">
                    <div className = "flex-col">
                        <h1 className="text-2xl font-medium">{entry.title}</h1>
                        <p className="text-gray-600">{entry.createdAt.toString().substring(0, entry.createdAt.toString().indexOf('T'))}</p>
                        {entry.createdAt !== entry.updatedAt && <p className="text-gray-600">Last updated: {entry.updatedAt.toString().substring(0, entry.updatedAt.toString().indexOf('T'))}</p>}
                    </div>
                    <div className = "flex ml-auto gap-4">
                        <Link key={entry.id} href={`/${entry.id}`}>
                            <img src = "/editIcon.svg" className="w-6 h-6 mt-6 ml-auto my-auto hidden group-hover:block transition ease-in-out hover:scale-110 duration-300"/>
                        </Link>
                        <img onClick = {e => deleteEntry(entry.id)} src = "/deleteIcon.svg" className="w-6 h-6 mt-6 ml-auto my-auto hidden group-hover:block transition ease-in-out hover:scale-110 duration-300"/>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default DisplayCard;