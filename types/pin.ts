import { Save } from "./save";
import { Comment } from "./comment";

export type Pin = {
    _id: string;
    title: string;
    about: string;
    destination: string;
    category: string;
    userId: string;
    postedBy: string;
    comment: Comment[];
    save: Save[];
    image: {
        asset: {
            url: string;
        };
    };
};
