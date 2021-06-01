
import React from 'react'
import { getPosts } from '../../api/post/index'
import Layout from '../../components/layout'
import Post from '../../components/Post'

const IndexPage = ({ posts }) =>
  <Layout>
    <ul>
      {posts.map(p => <Post key={p.title} post={p} />)}
    </ul>
  </Layout>

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage