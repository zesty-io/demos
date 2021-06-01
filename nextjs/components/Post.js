import React from 'react'
import Link from 'next/link'


const PostItem = ({ post }) => (

    <Link route='post' href={{ slug: post._path_part }}>
      <a>
        <h3>{post.title}</h3>
      </a>
    </Link>

)

export default PostItem