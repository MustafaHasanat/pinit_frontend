import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useSession } from "next-auth/react";
// import { client } from "@/utils/client";

const SignInButton = () => {
    const { data: session } = useSession();

    const signInHandler = () => {
        // signIn("google", { callbackUrl: "http://localhost:3000" }).then(() => {
        //     console.log(session);
        // });

        // const data = {
        //     _id: "",
        //     _type: "user",
        //     userName: session?.user?.name,
        //     email: session?.user?.email,
        //     avatar: session?.user?.image,
        // };

       

        // client.fetch(
        //     `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}`,
        //     {
        //         method: "post",
        //         headers: {
        //             "Content-type": "application/json",
        //             Authorization: `Bearer ${tokenWithWriteAccess}`,
        //         },
        //         body: JSON.stringify({ doc }),
        //     }
        // );
    };

    return (
        <button
            onClick={() => {
                signInHandler();
            }}
            className="flex w-full h-full justify-around items-center"
        >
            <FcGoogle size={30} />
            <p>Sign in with Google</p>
        </button>
    );
};

export default SignInButton;
