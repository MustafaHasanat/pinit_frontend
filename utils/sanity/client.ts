import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "fryled7j",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-04-01",
    token: process.env.SANITY_APP_TOKEN,
});
