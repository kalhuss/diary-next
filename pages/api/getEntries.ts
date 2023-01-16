import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../prisma/prisma"

// Get by id
export default async function getEntries(req: NextApiRequest, res: NextApiResponse){
    const { id } = req.query
    const entry = await prisma.pages.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(entry)

}