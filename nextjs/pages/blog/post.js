import React from 'react'
import { getPost } from '../../api/post/index'
import Layout from '../../components/layout'

// const Wrapper = styled.div`
//   padding: 3rem;
//   max-width: 750px;
//   margin: 0 auto;
//   @media (max-width: 750px) {
//     width: 100%;
//     padding: 1rem;
//   }
//   h1 {
//     color: #222;
//     font-weight: bold;
//     font-size: 1.75rem;
//     line-height: 35px;
//     font-family: "PT Sans", sans-serif;
//     text-transform: capitalize;
//     margin: 0;
//   }
//   p {
//     line-height: 28px;
//     color: #666;
//     font-family: "PT Sans", sans-serif;
//   }
//   .code{
//     background: gray;
//     padding: 20px;
//     white-space: pre-wrap;
//     word-wrap: break-word;
//     max-width: 100%;
//     overflow: scroll;
//     line-height: 170%;
//   }
// `

const PostPage = ({ post }) =>
  <Layout>

      <h1>
        {post.title}
      </h1>
      <div className='text-container' dangerouslySetInnerHTML={{ __html: post._meta_description }} />
      <hr />
      <div>
        <p>The data that is being fetched is using a Parsley custom endpoint. Below is the Parsley syntax used.

        </p>
        <a href='' target='_blank'>View the Parsley source file here.</a><br />
        <a href='' target='_blank'>View Next.js source file here</a><br />
        <a href={`https://4q6k83l9-dev.preview.zesty.io/my/custom/endpoint.json?path=${post.path_part}`} target='_blank'>Live JSON link here</a>
        <hr />
        <div className='code'>
        &#123;&#123; if &#123;get_var.path&#125; &#125;&#125;

[&#123;&#123;each movies_and_shows as show where path_part LIKE '&#123;get_var.path&#125;
' &#125;&#125; &#123;&#123;show.toJSON()&#125;&#125; &#123;&#123;if &#123;show._length&#125; != &#123;show._num&#125; &#125;&#125;, &#123;&#123;end-if&#125;&#125; &#123;&#123;end-each&#125;&#125;]
&#123;&#123;else&#125;&#125;
[&#123;&#123;each movies_and_shows as show limit &#123;get_var.limit&#125; &#125;&#125; &#123;&#123;show.toJSON()&#125;&#125; &#123;&#123;if &#123;show._length&#125; != &#123;show._num&#125; &#125;&#125;, &#123;&#123;end-if&#125;&#125; &#123;&#123;end-each&#125;&#125;]
&#123;&#123;end-if&#125;&#125;
        </div>
      </div>

  </Layout>

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug)
  console.log(query)
  const json = await res.json()
  return {
    post: json[0]
  }
}

export default PostPage