//Import useState
import React, { useState, useRef } from 'react';
import { FC, SetStateAction, Dispatch } from 'react'
import { pages } from "@prisma/client"
import Router from 'next/router'

interface Props {
    titleRef: React.RefObject<HTMLInputElement>;
}
//Create a component where the user can enter their diary entry
const Entry: React.FC<Props> = ({ titleRef }) => {

    const inputRef = useRef<HTMLTextAreaElement>(null);
    //Call the api to add the entry
    const addEntry = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //Get the value from the input field
        const title = titleRef.current?.value;
        const content = inputRef.current?.value;
        //Call the api
        fetch('/api/submitEntry', { method: 'POST', body: JSON.stringify({ title, content }) })
            //.then(() => Router.push('/'))
        
    }

    return (
        <div>
            <form>
                {/*Create a text input area which has a default grayed out value which says "Start typing your entry..." and then a submit button */}
                <textarea ref={inputRef} placeholder="Start typing your entry..." className="font-mono w-full h-96"></textarea>
                {/* Submit button when clicked it prints the title to console */}
                <button type="submit" className="font-mono" onClick={addEntry} >Submit</button>
            </form>
        </div>
    )
}
export default Entry