import { getAllUsers } from "@/utils/sanity/user";
import { User } from "@/types/user";
import { Fragment } from "react";
import Link from "next/link";

export const getStaticProps = async (): Promise<{
    props: { users: User[] };
}> => {
    const users = await getAllUsers();

    return {
        props: { users },
    };
};

const Users = ({ users }: { users: User[] }) => {
    return (
        <div>
            {users.map((user) => {
                return (
                    <Fragment key={`user number: ${user._id}`}>
                        <Link href={`/users/${user._id}`}>{user.userName}</Link>
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Users;
