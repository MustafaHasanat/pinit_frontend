/* eslint-disable react-hooks/exhaustive-deps */
import SignUpForm from "@/components/auth/signUpForm";
import { Pin } from "@/types/pin";
import { getAllPins } from "@/utils/sanity/pin";

export const getStaticProps = async (): Promise<{
    props: { pins: Pin[] };
}> => {
    const pins = await getAllPins();

    return {
        props: { pins },
    };
};

export default function Pins() {
    return (
        <div>
            pins goes here

            <SignUpForm />
        </div>
    );
}
