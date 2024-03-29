import React, { useState, useRef } from 'react';
import Router from 'next/router'

interface Props {
    titleRef: React.RefObject<HTMLInputElement>;
    inputRef: React.RefObject<HTMLTextAreaElement>;
    id?: number;
}

const Entry: React.FC<Props> = ({ titleRef, inputRef, id}) => {

    const addOrUpdateEntry = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        //Get the value from the input field
        const title = titleRef.current?.value;
        const content = inputRef.current?.value;

        //If the title or content is empty, return
        if (!title || !content) return;
        
        if (id) {
            //Call the api to update the entry
            fetch('/api/updateEntry', { method: 'POST', body: JSON.stringify({ id, title, content }) })
                .then(() => Router.push('/'))
        } else {
            //Call the api to add the entry
            fetch('/api/submitEntry', { method: 'POST', body: JSON.stringify({ title, content }) })
                .then(() => Router.push('/'))
        }
    }


    return (
        <div>
            <form className='flex flex-col items-center'>
                <textarea ref={inputRef} placeholder="Start typing your entry..." className="font-mono w-full h-96 p-5 text-lg"></textarea>
                <button type="submit" className="font-mono mt-5 rounded p-1 text-lg bg-slate-100 w-min hover:bg-slate-300" onClick={addOrUpdateEntry} >{id ? "Update" : "Submit"}</button>
                </form>
        </div>
    )
}

export default Entry