import { client } from "@/utils/sanity/client";
import { usersQuery } from "@/utils/sanity/user";

export async function getAllUsers(req: any, res: any) {
    try {
        const users = await client.fetch(usersQuery);
        return res.status(200).json({ message: "Got users list!", users });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: `Couldn't get users`, err });
    }
}
