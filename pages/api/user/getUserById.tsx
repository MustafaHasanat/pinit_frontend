import { client } from "@/utils/sanity/client";
import { userQuery } from "@/utils/sanity/user";

export async function getUserById(req: any, res: any) {
    const { id } = req.body

    try {
        const users = await client.fetch(userQuery(id));
        return res.status(200).json({ message: "Got user data!", users });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: `Couldn't get the user`, err });
    }
}
