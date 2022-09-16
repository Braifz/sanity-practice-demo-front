import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { createClient } from "next-sanity";

export default function Home({ foods }) {
  return (
    <Layout>
      <h1 className="text-2xl red-300">hello!</h1>
      {foods.length > 0 && (
        <ul>
          {foods.map((food) => (
            <div key={food._id}>
              <li>{food?.name}</li>
              <Image
                src={food.imageUrl}
                height="150px"
                width="150px"
                alt="image-food"
              />
            </div>
          ))}
        </ul>
      )}
    </Layout>
  );
}

const client = createClient({
  projectId: "5ji2eyhl",
  dataset: "production",
  apiVersion: "2022-09-15",
  useCdn: false,
});

export async function getStaticProps() {
  const foods = await client.fetch(`*[_type == "food"]{
    name,
    "imageUrl": image.asset->url
  }`);

  return {
    props: {
      foods,
    },
  };
}
