import Image from "next/image";

const LogoBlock = ({ size }: { size: number }) => {
    return (
        <div className={`flex justify-center items-center w-${size} p-4 gap-2`}>
            <Image
                src="/images/logo.png"
                alt="logo"
                width={size}
                height={size}
            />
            <p className="uppercase text-4xl">pinit</p>
        </div>
    );
};

export default LogoBlock;
