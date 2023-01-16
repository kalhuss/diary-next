import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { pages} from '@prisma/client';
import prisma from "../prisma/prisma"
import { useRef } from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Entry from '../components/Entry';

const EntryPage: NextPage<{ entries: pages,}> = ({ entries }) => {

    const titleRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.value = entries.title;
        }
    }, [titleRef.current?.value]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = entries.content;
        }
    }, [inputRef.current?.value]);

    return (
        <div className='font-mono'>
            <Header/>
            <div className = "flex flex-col items-center w-full font-mono">
                <div className = 'text-3xl p-5 w-full'>
                    <Title titleRef = { titleRef }/>
                </div>
                <div className='w-3/4 mt-5'>
                    <Entry titleRef = {titleRef} inputRef = {inputRef} id = {entries.id}/>
                </div>
            </div>
            
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