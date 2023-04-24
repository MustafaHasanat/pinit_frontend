/* eslint-disable react-hooks/exhaustive-deps */
import UserProfile from "@/components/containers/userProfile";
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
): Promise<{ props: { user: User } }> => {
    const id = context.params.id;

    const user = await getUserById(id);

    return {
        props: { user },
    };
};

const User = ({ user }: { user: User }) => {
    return (
        <div>
            <UserProfile user={user} />
        </div>
    );
};

export default User;
