import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { pages} from '@prisma/client';
import prisma from "../prisma/prisma"
import { useRouter } from 'next/router'
import { useState } from 'react';
import Header from '../components/Header';

const EntryPage: NextPage<{ entries: pages,}> = ({ entries }) => {
    const router = useRouter()

    const [edit, isEdit] = useState(false)
    const [title, setTitle] = useState(entries.title);
    const [content, setContent] = useState(entries.content);

    const updateEntry = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        //Get the values
        const id = entries.id;
        const titleData = title;
        const contentData = content;

        //If the id, title or content is empty, return
        if (!id || !titleData || !contentData) return;
        //Call the api
        fetch('/api/updateEntry', { method: 'POST', body: JSON.stringify({ id, titleData, contentData }) })
            .then(() => router.push('/'))
        
    }

    return (
        <div>
            <Header/>
            {edit ?(
                <div className = "flex flex-col">
                    <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}/>
                    <button className = "font-mono" onClick={() => isEdit(!edit)}>Cancel</button>
                    <button className = "font-mono" onClick={updateEntry}>Update</button>
                </div>
            ) : (
                <div className = "flex flex-col">
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <button className="font-mono" onClick={() => isEdit(!edit)}>Edit</button>
                </div>
            )}
            
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