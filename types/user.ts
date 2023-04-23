export type User = {
    _id: string;
    userName: string;
    email: string;
    avatar: {
        asset: {
            url: string;
        };
    };
};
