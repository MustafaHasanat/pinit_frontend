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

export const userQuery = (
    id: string
) => groq`*[_type == "user" && _id == "${id}"]{
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

export async function getUserByEmail(email: string): Promise<User> {
    const user =
        await client.fetch(groq`*[_type == "user" && email == "${email}"]{
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

export async function createUser(userName: string, email: string) {
    try {
        await fetch("/api/user/postUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName,
                email,
            }),
        });
    } catch (err) {
        console.log(err);
    }
}
