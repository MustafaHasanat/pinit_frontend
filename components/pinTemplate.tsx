import { Pin } from "@/types/pin";

const PinTemplate = ({
    pin: {
        _id,
        title,
        about,
        destination,
        category,
        userId,
        postedBy,
        comment,
        save,
        image,
    },
}: {
    pin: Pin;
}) => {
    return <div>pin</div>;
};

export default PinTemplate;
