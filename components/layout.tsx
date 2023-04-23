/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SideBar from "./sideBar";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }: { children: JSX.Element }) => {
    const [toggleSideBar, setToggleSideBar] = useState(false);

    return (
        <main className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
            <div className="hidden md:flex h-screen flex-initial">
                <SideBar />
            </div>

            <div className="flex md:hidden flex-row">
                <HiMenu
                    fontSize={40}
                    className="cursor-pointer"
                    onClick={() => {
                        setToggleSideBar(false);
                    }}
                />
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                    />
                </Link>

                <Link href={`/users/{}`}>
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                    />
                </Link>
            </div>

            {children}
        </main>
    );
};

export default Layout;
