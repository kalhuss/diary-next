//Create an updateEntry function that takes in an id and updates the values within the database

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/prisma'

export default async function updateEntry(req: NextApiRequest, res: NextApiResponse){
    //Only allow POST requests
    if(req.method !== "POST"){
        return res.status(405).json({message: "Method not allowed"})
    }

    //Get the id, title and content from the request body and the id from the query
    const {id, titleData, contentData} : {id: number, titleData: string, contentData: string} = JSON.parse(req.body)

    //If no id, title or content is provided, return an error
    if(!id || !titleData || !contentData){
        return res.status(400).json({message: "Please provide a title and content"})
    }

    //Update the entry in the database
    const entry = await prisma.pages.update({
        where: {
            id: id
        },
        data: {
            title: titleData,
            content: contentData
        },
    }).catch((err) => {
        console.log(err)
        return res.status(500).json({message: "Error updating entry in database"})
    })

    //Return the entry
    return res.status(200).json(entry)
}

