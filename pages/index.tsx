/* eslint-disable react-hooks/exhaustive-deps */
import SignOutButton from "@/components/auth/signOutButton";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Link href="/login">
                <p>Sign In</p>
            </Link>

            <SignOutButton />

        </main>
    );
}
