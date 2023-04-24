/* eslint-disable react-hooks/exhaustive-deps */
import { Pin } from "@/types/pin";
import { getAllPins, getPinById } from "@/utils/sanity/pin";
import PinTemplate from "@/components/widgets/pinTemplate";

export const getStaticPaths = async () => {
    const pins = await getAllPins();

    const paths = pins.map((pin: Pin) => {
        return {
            params: { id: pin._id },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (
    context: any
): Promise<{ props: { pin: Pin } }> => {
    const id = context.params.id;

    const pin = await getPinById(id);

    return {
        props: { pin },
    };
};

const Pin = ({ pin }: { pin: Pin }) => {
    return <PinTemplate pin={pin} />;
};

export default Pin;
