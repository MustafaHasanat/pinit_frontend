/* eslint-disable react-hooks/exhaustive-deps */
import SideBar from "./sideBar";
import Header from "./header";
import { useSelector, useDispatch } from "react-redux";
import { sidebarActions } from "@/utils/store";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useRef } from "react";

const Layout = ({ children }: { children: JSX.Element }) => {
    const dispatch = useDispatch();
    const sidebarIsOpened = useSelector(
        (state: any) => state.sidebarReducer.sidebarIsOpened
    );

    // const scrollRef = useRef(null);

    // useEffect(() => {
    //     if (scrollRef && scrollRef.current) scrollRef.current.scrollTo(0, 0);
    // }, []);

    return (
        <main className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
            <div className="hidden md:flex h-screen flex-initial">
                <SideBar />
            </div>

            <div className="flex md:hidden flex-row">
                <Header />

                {sidebarIsOpened && (
                    <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
                        <div className="absolute w-full flex justify-end items-center p-2">
                            <AiFillCloseCircle
                                fontSize={30}
                                className="cursor-pointer"
                                onClick={() =>
                                    dispatch(
                                        sidebarActions.setSidebarIsOpen(false)
                                    )
                                }
                            />
                        </div>
                        <SideBar />
                    </div>
                )}
            </div>

            {/* <div className="pb-2 flex-1 h-screen overflow-y-scroll"></div> */}

            {children}
        </main>
    );
};

export default Layout;
