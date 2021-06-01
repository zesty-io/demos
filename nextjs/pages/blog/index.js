
import React from 'react'
import DeveloperHint from '../../components/DeveloperHint'
import Layout from '../../components/Layout/'
import { getPosts } from '../../api/posts'
import Post from '../../components/Post'


const IndexPage = ({  posts }) => (
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

export default IndexPage