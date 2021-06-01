
import React from 'react'
import Footer from '../../components/Footer'
import Layout from '../../components/layout'
import { getPosts } from '../../api/posts'
import Post from '../../components/Post'

const IndexPage = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map((p) => (
        <Post key={p.title} post={p} />
      ))}
    </ul>
    <Footer>
      <p>
        <strong>Zesty.io Hint:</strong>
      </p>
    </Footer>
  </Layout>
);

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage