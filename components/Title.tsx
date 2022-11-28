import { useState } from 'react';
//Create a component which is just the title which is a input field when clicked on it is editable and when clicked off it is not editable
const Title = () => {
    //Create a state for the title
    const [title, setTitle] = useState("");
    //Create a state for the editable boolean
    const [editable, setEditable] = useState(false);
    //Create a function to handle the title in typescript
    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    //Create a function to handle the editable boolean
    const handleEditable = () => {
        setEditable(!editable);
    }
    return (
        <div>
            {/*Create a input field which has a default grayed out value which says "Enter your title here" and then a submit button */}
            <input placeholder = "Enter your title here" onChange = {handleTitle} value = {title} className = "font-mono text-2xl w-96 focus:outline-none text-center" onClick = {handleEditable} readOnly = {!editable}></input>
        </div>
    )
}
export default Title;