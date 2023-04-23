import Image from "next/image";
import { useSession } from "next-auth/react";
import SignInButton from "@/components/auth/signInButton";

export default function Login() {
    const { data: session, status } = useSession();

    return (
        <main className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full">
                <video
                    className="w-full h-full object-cover"
                    src="videos/phoneTyping.mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                />

                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
                    <div className="w-fit">
                        <div className="flex justify-center items-center w-60 p-4 gap-2">
                            <Image
                                src="/images/logo.png"
                                alt="logo"
                                width={50}
                                height={50}
                            />
                            <p className="uppercase text-white text-4xl">
                                pinit
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center  bg-white p-4 rounded-lg">
                            <SignInButton />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
