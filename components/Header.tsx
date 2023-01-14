import Title from './Title';
import React, {useRef} from 'react';
import Link from 'next/link'
import HomePage from '../pages'
import { useRouter } from 'next/router'

const Header: React.FC = ({}) => {

    const date = new Date();
    const router = useRouter()
    
    return (
        <div className = "flex justify-between">
            <Link href = "/">
                <button className = "font-mono" onClick={() => router.push('/')}>Home</button>
            </Link>
            <div className = "font-mono">{ date.getDate() } / { date.getMonth() + 1 } / { date.getFullYear() }</div>
        </div>
    )
}

export default Header;