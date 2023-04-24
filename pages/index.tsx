/* eslint-disable react-hooks/exhaustive-deps */
import { Pin } from "@/types/pin";
import { getAllPins } from "@/utils/sanity/pin";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navbarActions } from "@/utils/store";
import Navbar from "@/components/containers/navbar";

export const getStaticProps = async (): Promise<{
    props: { pins: Pin[] };
}> => {
    const pins = await getAllPins();

    return {
        props: { pins },
    };
};

export default function Pins() {
    const dispatch = useDispatch();

    return (
        <div className="px-2 md:px-5">
            <div className="bg-gray-50">
                <Navbar />
            </div>

            <div className="h-full">
                
            </div>
        </div>
    );
}
