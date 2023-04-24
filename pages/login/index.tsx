import AuthTemplate from "@/components/auth/authTemplate";
import SignInButton from "@/components/auth/signInButton";
import SignOutButton from "@/components/auth/signOutButton";
import LogoBlock from "@/components/widgets/logoBlock";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Login() {
    const { data: session, status } = useSession();
    
    return (
        <AuthTemplate>
            <div className="w-fit text-white">
                <LogoBlock size={50} />

                <div className="flex flex-col justify-center items-center text-black bg-white p-4 rounded-lg">
                    <SignInButton text="Sign in with Google" />
                </div>
            </div>

            <div className="flex flex-row text-white gap-2 p-5">
                <p>{"Don't have an account?"}</p>

                <Link href="/signup" className="font-bold">
                    Create new one
                </Link>
            </div>

            <div className="text-white">
                <SignOutButton />
                {status}
            </div>
        </AuthTemplate>
    );
}
