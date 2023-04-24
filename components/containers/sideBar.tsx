import SignOutButton from "@/components/auth/signOutButton";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { sidebarActions } from "@/utils/store";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";
import LogoBlock from "../widgets/logoBlock";
import { Fragment } from "react";
import constants from "@/utils/constants";

const notActiveStyle =
    "flex items-center px-6 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";

const activeStyle =
    "flex items-center px-6 gap-3 text-gray-500 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

const SideBar = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const closeNavBar = () => {
        dispatch(sidebarActions.setSidebarIsOpen(false));
    };

    return (
        router.asPath !== "/login" &&
        router.asPath !== "/signup" && (
            <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
                <div className="flex flex-col">
                    <Link
                        href="/"
                        className="flex px-5 gap-2 my-6 pt-1 items-center"
                        onClick={closeNavBar}
                    >
                        <LogoBlock size={30} />
                    </Link>

                    <div className="flex flex-col gap-5">
                        <Link
                            href="/"
                            className={
                                router.asPath === "/"
                                    ? activeStyle
                                    : notActiveStyle
                            }
                            onClick={closeNavBar}
                        >
                            <RiHomeFill />
                            Home
                        </Link>

                        <h3 className="mt-2 px-5 text-base 2xl:text-xl">
                            Discover Categories
                        </h3>

                        {constants.categories.map((cat, index) => {
                            return (
                                <Fragment key={`cat number:${index}`}>
                                    <Link
                                        href={`/category/${cat.id}`}
                                        className={
                                            router.asPath ===
                                            `/category/${cat.id}`
                                                ? activeStyle
                                                : notActiveStyle
                                        }
                                        onClick={closeNavBar}
                                    >
                                        {cat.name}
                                    </Link>
                                </Fragment>
                            );
                        })}
                    </div>
                </div>

                <Link href="/login">
                <p>Sign In</p>
            </Link>

            <SignOutButton />
            </div>
        )
    );
};

export default SideBar;
