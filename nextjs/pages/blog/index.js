import React from 'react';
import DeveloperHint from '../../components/DeveloperHint';
import Layout from '../../components/Layout/';
import { getPosts } from '../../api/posts';
import Post from '../../components/Post';

const IndexPage = ({ posts }) => (
  <Layout>
    <ul>
      {console.log(posts)}
      {posts.map((p) => (
        <Post key={p.title} post={p} />
      ))}
    </ul>
    <DeveloperHint>
      <p>
        <strong>Zesty.io Hint:</strong>
        This NextJS example uses{' '}
        <a
          target='_blank'
          href='https://4q6k83l9-dev.preview.zesty.io/my/custom/endpoint.json?limit=5'
        >
          <strong>Custom API Endpoint</strong>
        </a>{' '}
        to load the data, and uses a javascript array map to power the search.
        Data is preloaded using a NextJS function{' '}
        <a
          title='getServerSideProps'
          target='_blank'
          href='https://nextjs.org/learn/basics/data-fetching/request-time'
        >
          <strong>getServerSideProps</strong>
        </a>{' '}
      </p>
    </DeveloperHint>
  </Layout>
);

export async function getServerSideProps() {
  const res = await getPosts();
  console.log(res);
  const json = await res.json();
  return {
    props: {
      posts: json,
    },
  };
}

export default IndexPage;
