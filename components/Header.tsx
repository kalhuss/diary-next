import Title from './Title';
import React, {useRef} from 'react';
import Link from 'next/link'
import HomePage from '../pages'
import { useRouter } from 'next/router'

const Header: React.FC = ({}) => {

    const date = new Date();
    const router = useRouter()
    
    return (
        <div className = "flex justify-between font-mono p-5 text-xl">
            <div className='flex gap-10'>
            <Link href = "/">
                <button className = 'transition ease-in-out hover:scale-110 duration-300' onClick={() => router.push('/')}>Home</button>
            </Link>
            <Link href = "/createEntry">
                <button className = 'transition ease-in-out hover:scale-110 duration-300' onClick={() => router.push('/createEntry')}>Create</button>
            </Link>
            </div>
            <div className='text-xl'> Your Diary </div>
            <div>{ date.getDate() } / { date.getMonth() + 1 } / { date.getFullYear() }</div>
        </div>
    )
}

export default Header;