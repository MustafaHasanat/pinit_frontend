import { Pin } from "@/types/pin";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllPins() {
    return await client.fetch(groq`*[_type == "pin"]{
        _id,
        title,
        about,
        destination,
        category,
        image,
        userId,
        postedBy,
        save,
        comment
    }`);
}

export async function getPinById(id: string): Promise<Pin> {
    const pin = await client.fetch(groq`*[_type == "pin" && _id == "${id}"]{
        _id,
        title,
        about,
        destination,
        category,
        image,
        userId,
        postedBy,
        save,
        comment
    }`);

    return pin[0];
}
