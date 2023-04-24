import { User } from "@/types/user";
import Image from "next/image";

const UserProfile = ({
    user: { _id, userName, email, avatar },
}: {
    user: User;
}) => {
    return (
        <div>
            {userName}
            {avatar && (
                <Image
                    src={avatar.asset.url}
                    alt={userName}
                    width={100}
                    height={100}
                />
            )}
        </div>
    );
};

export default UserProfile;
