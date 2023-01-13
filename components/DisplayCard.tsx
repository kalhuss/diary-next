import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { pages} from '@prisma/client';
import { FC } from 'react';
import prisma from '../prisma/prisma';
import Link from 'next/link';

interface EntryProps {
    entries: pages[];
}


const DisplayCard: FC<EntryProps> = ({ entries }) => {
    return (
        <div>
            {entries.map((entry) => (
                <Link key={entry.id} href={`/${entry.id}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg w-auto mb-6 cursor-pointer">
                        <h1 className="text-2xl font-medium">{entry.title}</h1>
                        <p className="text-gray-600">{entry.createdAt.toString().substring(0, entry.createdAt.toString().indexOf('T'))}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}


export default DisplayCard;