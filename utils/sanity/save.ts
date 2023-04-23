import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllSave() {
    return await client.fetch(groq`*[_type == "save"]{
        _id,
        postedBy,
        userId,
    }`);
}
