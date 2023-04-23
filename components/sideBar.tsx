import SignOutButton from "@/components/auth/signOutButton";
import Link from "next/link";
import { useSession } from "next-auth/react";

const SideBar = () => {
    const { data: session, status } = useSession();

    return (
        <div>
            <Link href="/login">
                <p>Sign In</p>
            </Link>

            {status}

            <SignOutButton />
        </div>
    );
}

export default SideBar;