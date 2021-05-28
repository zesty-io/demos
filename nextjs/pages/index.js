import Head from 'next/head'
import Link from 'next/link'


export default function Home(props) {
  console.log(props.data);
  return (
    <layout>
      <Head>
        <title>Zesty.io NextJS Demo</title>
      </Head>

      <main>
        <h1 >
          Base homepage- doc links to come
        </h1>
        <h4>Demos</h4>
        <ul>
            <li><a href="search-example">Search Example</a> with ZFlix movies</li>
        </ul>
        <div sx={{variant: 'containers.page'}}>
      <h1>ZFlix with Nextjs</h1>
      <h3>Fetching data</h3>

      <p><a target="_blank" href="https://nextjs.org/learn/basics/data-fetching/getstaticprops-details"><strong>getStaticPros</strong></a> Next.js will run this function at build time. Whatever your return as props will be passed into the exported page.</p>

      <p> <a target="_blank" href="https://nextjs.org/learn/basics/data-fetching/request-time"><strong>getServerSideProps</strong></a> This will be called at runtime during every request. So unlike getStaticProps, you will have the runtime data like query params, HTTP headers, and the req and res objects from API handlers.</p>

      <p> <a target="_blank" href="https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation"><strong>getStaticPaths</strong></a> This will be called at runtime during every request. So unlike getStaticProps, you will have the runtime data like query params, HTTP headers, and the req and res objects from API handlers.</p>

      <h4>Here we are fetching with nextjs `getServerSideProps` to Zflix `http://4q6k83l9-dev.preview.zesty.io/-/gql/movies_and_shows.json` API and mapping through to display image, title, and description</h4>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {props.data.map(data => (
          <div sx={{width: '33%', p: 3}}>
            <Link key={data.id} href="/notes/[id]" as={`/notes/${data.uri}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{data.title}</strong>
          <img
              height="auto"
              width="200px"
              max-width="auto"
              src={data.film_logo}
            />
                <p>  {data.meta_description}</p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>

      </main>

      </layout>
  )
}


export async function getServerSideProps() {
  const res = await fetch('http://4q6k83l9-dev.preview.zesty.io/-/gql/movies_and_shows.json')
  let data = await res.json()
  console.log(data);
  if(!data.ok){
    console.error('data not found')
  }
  return {
    props: {
      data: data
    }
  }
}
