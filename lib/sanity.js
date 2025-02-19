import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function fetchTeam(limit = 10) {
  const query = `*[_type == "team" && status == "Live"] | order(order asc) [0...${limit}] {
    _id,
    name,
    position,
    "image": image.asset->url,
    bio,
    experience,
    email,
    phone,
    location,
    "slug": slug.current,
    status,
    accreditations,
    fracsUrl,
    ifsmUrl,
    order
  }`;

  return await client.fetch(query);
}

export async function fetchMemberBySlug(slug) {
  const query = `*[_type == "team" && slug.current == $slug][0] {
    _id,
    name,
    position,
    "image": image.asset->url,
    bio,
    experience,
    email,
    phone,
    location,
    "slug": slug.current,
    status,
    accreditations,
    fracsUrl,
    ifsmUrl,
    order
  }`;

  return await client.fetch(query, { slug });
}
