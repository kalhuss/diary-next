//Import useState
import React, {useState} from 'react';
//Create a component where the user can enter their diary entry
const Entry = () => {

    //Create a state for the entry
    const [entry, setEntry] = useState("");

    //Create a function to handle the entry in typescript
    const handleEntry = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setEntry(e.target.value);
    }
    

    return (
        <div>
            <form>
                {/*Create a text input area which has a default grayed out value which says "Start typing your entry..." and then a submit button */}
                <textarea placeholder = "Start typing your entry..." onChange = {handleEntry} value = {entry} className = "font-mono w-full h-96"></textarea>
                {/* Submit button when clicked it prints the title to console */}
                <button type = "submit" className = "font-mono">Submit</button>

                
            </form>
        </div>
    )
}
export default Entry;