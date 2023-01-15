import { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../prisma/prisma"

export default async function deleteEntry(req: NextApiRequest, res: NextApiResponse) {
    
    //Only allow DELETE requests
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' })
        return
    }

    //Get the id from the request
    const { id } : { id: number} = JSON.parse(req.body)

    //Delete the entry
    const deletedEntry = await prisma.pages.delete({
        where: {
            id: id
        },
    }).catch((err) => {
        console.log(err)
        res.status(500).json({ message: 'Error deleting entry' })
    })

    return res.status(200).json({ deleteEntry})
}