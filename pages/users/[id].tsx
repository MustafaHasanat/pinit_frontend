/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { User } from "@/types/user";
import { getAllUsers, getUserById } from "@/utils/sanity/user";

export const getStaticPaths = async () => {
    const users = await getAllUsers();

    const paths = users.map((user: User) => {
        return {
            params: { id: user._id },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (
    context: any
): Promise<{ props: { user: User[] } }> => {
    const id = context.params.id;

    const user = await getUserById(id);

    return {
        props: { user },
    };
};

const UserProfile = ({ user }: { user: User[] }) => {
    const { _id, userName, email, avatar } = user[0];

    return (
        <div>
            {userName}
            {avatar && (
                <Image
                    src={avatar.asset.url}
                    alt={userName}
                    width={100}
                    height={100}
                />
            )}
        </div>
    );
};

export default UserProfile;
