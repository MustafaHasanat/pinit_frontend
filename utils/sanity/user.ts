import { User } from "@/types/user";
import { client } from "./client";
import { groq } from "next-sanity";

export const usersQuery = groq`*[_type == "user"]{
    _id,
    userName,
    email,
    avatar {
        asset->{
            ...,
            url
        }
    }
}`;

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

export const userQuery = (id: string) => groq`*[_type == "user" && _id == "${id}"]{
    _id,
    userName,
    email,
    avatar {
        asset->{
            ...,
            url
        }
    }
}`;

export async function getUserById(id: string): Promise<User> {
    const user = await client.fetch(groq`*[_type == "user" && _id == "${id}"]{
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

    return user[0];
}
