import Title from './Title';
import React, {useRef} from 'react';
import Link from 'next/link'

interface Props {
    titleRef: React.RefObject<HTMLInputElement>;
}

//Create a header component
const Header: React.FC<Props> = ({ titleRef }) => {

    const date = new Date();
    

    return (
        <div className = "flex justify-between">
            <button className="font-mono">Home</button>
            <Title titleRef = {titleRef}/>
            <div className = "font-mono">{date.getDate()} / {date.getMonth()} / {date.getFullYear()}</div>
        </div>
    )
    }
export default Header;