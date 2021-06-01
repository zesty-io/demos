import React from 'react'
import Link from 'next/link'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
      <Link href={`/blog/${post._path_part}`}>
      <a>
        <h3>{post.title}</h3>
      </a>
    </Link>
  </Wrapper>
);

export default PostItem
