import React from 'react';
import { getPost } from '../../api/posts';
import Layout from '../../components/Layout';
import DeveloperHint from '../../components/DeveloperHint'
import styles from './Blog.module.css'



const PostPage = ({ post }) => (
  <Layout>
    <div className={styles.Blog}>
      <h1>{post.title}</h1>
      <div
        className='text-container'
        dangerouslySetInnerHTML={{ __html: post._meta_description }}
      />
      <hr />
      <DeveloperHint>
      <div>
        <p>
          The data that is being fetched is using a Parsley custom endpoint.
          Below is the Parsley syntax used.
        </p>
        <a href='' target='_blank'>
          View the Parsley source file here.
        </a>
        <br />
        <a href='' target='_blank'>
          View Next.js source file here
        </a>
        <br />
        <a
          href={`https://4q6k83l9-dev.preview.zesty.io/my/custom/endpoint.json?path=${post.path_part}`}
          target='_blank'
        >
          Live JSON link here
        </a>
        <hr />

          <div className='code'>
            &#123;&#123; if &#123;get_var.path&#125; &#125;&#125;
            [&#123;&#123;each movies_and_shows as show where path_part LIKE
            '&#123;get_var.path&#125; ' &#125;&#125;
            &#123;&#123;show.toJSON()&#125;&#125; &#123;&#123;if
            &#123;show._length&#125; != &#123;show._num&#125; &#125;&#125;,
            &#123;&#123;end-if&#125;&#125; &#123;&#123;end-each&#125;&#125;]
            &#123;&#123;else&#125;&#125; [&#123;&#123;each movies_and_shows as
            show limit &#123;get_var.limit&#125; &#125;&#125;
            &#123;&#123;show.toJSON()&#125;&#125; &#123;&#123;if
            &#123;show._length&#125; != &#123;show._num&#125; &#125;&#125;,
            &#123;&#123;end-if&#125;&#125; &#123;&#123;end-each&#125;&#125;]
            &#123;&#123;end-if&#125;&#125;
          </div>
      </div>
        </DeveloperHint>
    </div>
  </Layout>
);

export async function getServerSideProps({ params }) {
  const res = await getPost(params.post);
  console.log(params);
  const json = await res.json();
  return {
    props: {
      post: json[0],
    },
  };
}

export default PostPage;
