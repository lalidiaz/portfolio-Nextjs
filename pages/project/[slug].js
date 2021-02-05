import SingleImage from '@components/SingleImage';
import React from 'react';

// utils
import { getProject, getPaths } from 'utils/getData';

const Index = ({ data }) => {
  return (
    <>
      <SingleImage data={data} />
       {data.map((element) => (
        <>
         <SingleImage name={element.name} description={element.description} />
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
      data
    }
  };
}

export default Index;
