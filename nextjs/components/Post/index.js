import React from 'react';
import Link from 'next/link';
import styles from './Post.module.css';

const PostItem = ({ post }) => (
  <div className={styles.Post}>
    <Link href={`/blog/${post._path_part}`}>
      <a>
        <h3>{post.title}</h3>
      </a>
    </Link>
  </div>
);

export default PostItem;
