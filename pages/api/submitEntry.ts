import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../prisma/prisma"

export default async function submitEntry(req: NextApiRequest, res: NextApiResponse){
    //Only allow POST requests
    if(req.method !== "POST"){
        return res.status(405).json({message: "Method not allowed"})
    }

    //Get the title and content from the request body
    const {title, content} : {title: string, content: string} = JSON.parse(req.body)
    console.log(title, content)
    //If no title or content is provided, return an error
    if(!title || !content){
        return res.status(400).json({message: "Please provide a title and content"})
    }

    //Add the entry to the database
    const entry = await prisma.pages.create({
        data: {
            title: title,
            content: content
        },
    }).catch((err) => {
        return res.status(500).json({message: "Error adding entry to database"})
    })

    //Return the entry
    return res.status(200).json(entry)
}