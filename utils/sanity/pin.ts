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
