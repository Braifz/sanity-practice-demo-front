import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import { createClient } from "next-sanity";

export default function Home({ foods }) {
  return (
    <Layout>
      <Cards foods={foods} />
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
