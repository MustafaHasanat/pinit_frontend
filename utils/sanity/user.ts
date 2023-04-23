import { User } from "@/types/user";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getAllUsers(): Promise<User[]> {
    return await client.fetch(groq`*[_type == "user"]{
        _id,
        userName,
        email,
        avatar {
            asset->{
                ...,
                url
            }
        }
    }`);
}

export async function getUserById(id: string): Promise<User[]> {
    return await client.fetch(groq`*[_type == "user" && _id == "${id}"]{
        _id,
        userName,
        email,
        avatar {
            asset->{
                ...,
                url
            }
        }
    }`);
}
