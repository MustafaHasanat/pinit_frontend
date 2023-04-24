import constants from "@/utils/constants";

interface CategoryProps {
    id: string;
    name: string;
}

export const getStaticPaths = async () => {
    const paths = constants.categories.map((cat: CategoryProps) => {
        return {
            params: { id: cat.id },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: any) => {
    const id = context.params.id;

    return {
        props: { id },
    };
};

const Category = ({ id }: CategoryProps) => {
    return <div>{id}</div>;
};

export default Category;
