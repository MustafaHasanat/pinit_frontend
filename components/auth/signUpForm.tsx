import { useRouter } from "next/router";

const SignUpForm = () => {
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await fetch("/api/user/postUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userName: event.target.userName.value,
                    email: event.target.email.value,
                }),
            });

            console.log(response);
            router.push("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName" className="block mb-5">
                <span className="text-white">User Name</span>
                <input
                    id="userName"
                    name="userName"
                    type="text"
                    className="form-input mt-1 block w-full p-2"
                    placeholder="John Appleseed"
                />
            </label>

            <label htmlFor="email" className="block mb-5">
                <span className="text-white">Email</span>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input mt-1 block w-full p-2"
                    placeholder="your@email.com"
                />
            </label>

            {/* <label htmlFor="avatar" className="block mb-5">
                <span className="text-white">Avatar</span>
                <input
                    id="avatar"
                    name="avatar"
                    type="file"
                    className="form-input mt-1 block w-full text-white"
                />
            </label> */}

            <input
                type="submit"
                className="bg-white text-black font-bold py-2 px-4 rounded w-full"
            />
        </form>
    );
};

export default SignUpForm;
