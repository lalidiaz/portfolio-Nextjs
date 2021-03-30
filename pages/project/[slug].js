import DetailProject from "@components/DetailProject";
import React from "react";
import Head from "next/head";

// utils
import { getProject, getPaths } from "utils/getData";

const Index = ({ data }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/code.png" />
        <title>Project</title>
      </Head>
      {data.map((element) => (
        <>
          <DetailProject
            name={element.name}
            description={element.description}
            image={element.image}
            techStack={element.techStack}
            githubLink={element.githubLink}
            url={element.url}
            type={element.type}
          />
        </>
      ))}
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getPaths();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const path = params.slug;
  const data = await getProject(path);

  return {
    props: {
      data,
    },
  };
}

export default Index;
