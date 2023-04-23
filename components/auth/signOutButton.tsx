import { signOut } from "next-auth/react";

const SignOutButton = () => {
    const signOutHandler = () => {
        signOut();
    };

    return (
        <button
            onClick={() => {
                signOutHandler();
            }}
            className="flex w-full h-full justify-around items-center"
        >
            <p>Sign out</p>
        </button>
    );
};

export default SignOutButton;
