import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllComments() {
    return await client.fetch(groq`*[_type == "comment"]{
        _id,
        postedBy,
        comment,
    }`);
}