/* eslint-disable react-hooks/exhaustive-deps */
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { sidebarActions } from "@/utils/store";
import LogoBlock from "../widgets/logoBlock";
import { IoPersonCircleSharp } from "react-icons/io5";

const Header = () => {
    const dispatch = useDispatch();
    const { data: session, status } = useSession();

    return (
        <header className="p-2 w-full flex flex-row justify-between items-center shadow-md">
            <HiMenu
                fontSize={40}
                className="cursor-pointer"
                onClick={() => {
                    dispatch(sidebarActions.setSidebarIsOpen(true));
                }}
            />
            <Link href="/">
                <LogoBlock size={50} />
            </Link>

            <Link href="/">
                {session && session.user ? (
                    <Image
                        src={`${session.user.image}`}
                        alt="logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                ) : (
                    <IoPersonCircleSharp size={50} />
                )}
            </Link>
        </header>
    );
};

export default Header;
