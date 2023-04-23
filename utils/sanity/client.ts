import { createClient } from "next-sanity";
// import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "fryled7j",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-04-01",
    token: process.env.SANITY_APP_TOKEN,
});

// const builder = imageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);
