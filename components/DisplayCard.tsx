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

    return (
        <div>
            {entries.map((entry) => (
                <div className="bg-white p-6 rounded-lg shadow-lg w-auto mb-6 cursor-default flex">
                    <div className = "flex-col">
                        <h1 className="text-2xl font-medium">{entry.title}</h1>
                        <p className="text-gray-600">{entry.createdAt.toString().substring(0, entry.createdAt.toString().indexOf('T'))}</p>
                        {entry.createdAt !== entry.updatedAt && <p className="text-gray-600">Last updated: {entry.updatedAt.toString().substring(0, entry.updatedAt.toString().indexOf('T'))}</p>}
                    </div>
                    <div className = "flex ml-auto gap-4 ">
                        <Link key={entry.id} href={`/${entry.id}`}>
                            <button className="bg-blue-500 text-white p-2 rounded-lg shadow-lg w-auto mt-6 ml-auto my-auto">Edit</button>
                        </Link>
                        <button className="bg-red-500 text-white p-2 rounded-lg shadow-lg w-auto mt-6 ml-auto my-auto">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default DisplayCard;