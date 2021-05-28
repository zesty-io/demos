import Head from 'next/head'

export default function Home() {
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

      </main>  
  
      </layout>
  )
}
