/* eslint-disable react-hooks/exhaustive-deps */
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useSession } from "next-auth/react";
import { createUser, getUserByEmail } from "@/utils/sanity/user";
import { client } from "@/utils/sanity/client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const SignInButton = ({ text }: { text: string }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const signInHandler = () => {
        signIn();
    };

    useEffect(() => {
        const signInMock = async () => {
            if (session && session.user) {
                const user = await getUserByEmail(`${session.user.email}`);

                console.log("=======");
                console.log(user);

                if (user === undefined) {
                    // create one in sanity
                    await createUser(
                        `${session.user.name}`,
                        `${session.user.email}`
                    );
                }
            }
        };
        signInMock();
    }, [session]);

    return (
        <button
            onClick={() => {
                signInHandler();
            }}
            className="flex w-full h-full justify-around items-center gap-3"
        >
            <FcGoogle size={30} />
            <p>{text}</p>
        </button>
    );
};

export default SignInButton;
