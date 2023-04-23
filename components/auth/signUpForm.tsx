const SignUpForm = () => {
    return (
        <form action="/api/user/postUser" method="post">
            <label htmlFor="userName" className="block mb-5">
                <span className="text-gray-700">User Name</span>
                <input
                    id="userName"
                    name="userName"
                    type="text"
                    className="form-input mt-1 block w-full"
                    placeholder="John Appleseed"
                />
            </label>

            <label htmlFor="email" className="block mb-5">
                <span className="text-gray-700">Email</span>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input mt-1 block w-full"
                    placeholder="your@email.com"
                />
            </label>

            <input
                type="submit"
                className="bg-purple-500 text-white font-bold py-2 px-4 rounded"
            />
        </form>
    );
};

export default SignUpForm;
