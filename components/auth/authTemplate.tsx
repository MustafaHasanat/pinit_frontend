import { ReactNode } from "react";

const AuthTemplate = ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex justify-start items-center flex-col h-screen w-screen">
            <div className="relative w-full h-full">
                <video
                    className="w-full h-full object-cover"
                    src="videos/phoneTyping.mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                />
            </div>

            <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
                {children}
            </div>
        </main>
    );
};

export default AuthTemplate;
