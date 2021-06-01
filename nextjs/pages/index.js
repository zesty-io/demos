import Head from 'next/head';
import DeveloperHint from '../components/DeveloperHint';

export default function Home(props) {
  console.log(props.data);

  return (
    <>
      <Head>
        <title>Zesty.io NextJS Demo</title>
      </Head>

      <main className='container'>
        <h1>ZFlix with Nextjs</h1>
        <h3>Fetching data</h3>
        <div className='container-grid'>
          <div className='card-container'>
            {props.data.map((data, index) => (
              <div className='card'>
                <a target='_blank' href={data.poster}>
                  <div className='card-content'>
                    <h1>{data.title}</h1>
                    <img
                      height='auto'
                      width='200px'
                      max-width='auto'
                      src={data.film_logo}
                    />
                    <p> {data.meta_description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <DeveloperHint>
        <p>
          <strong>Zesty.io Hint:</strong>
          <a
            title='getstaticprops-details'
            target='_blank'
            href='https://nextjs.org/learn/basics/data-fetching/getstaticprops-details'
          >
            <strong>getStaticPros</strong>
          </a>{' '}
          Next.js will run this function at build time. Whatever your return as
          props will be passed into the exported page.
          <a
            title='getServerSideProps'
            target='_blank'
            href='https://nextjs.org/learn/basics/data-fetching/request-time'
          >
            <strong>getServerSideProps</strong>
          </a>{' '}
          This will be called at runtime during every request. So unlike
          getStaticProps, you will have the runtime data like query params, HTTP
          headers, and the req and res objects from API handlers.{' '}
          <a
            title='getStaticPaths'
            target='_blank'
            href='https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation'
          >
            <strong>getStaticPaths</strong>
          </a>{' '}
          This will be called at runtime during every request. So unlike
          getStaticProps, you will have the runtime data like query params, HTTP
          headers, and the req and res objects from API handlers. Here we are
          fetching with nextjs `getServerSideProps` to Zflix{' '}
          <strong>
            <a
              target='_blank'
              href=' http://4q6k83l9-dev.preview.zesty.io/-/gql/movies_and_shows.json'
            >
              API from Zesty.io{' '}
            </a>
          </strong>{' '}
          API and mapping through to display image, title, and description
        </p>
      </DeveloperHint>

      <style jsx>{`
        .container {
          width: 100%;
          background-color: #f2f4fb;
          display: flex;
          flex-direction: column;
          padding: 32px;
          height: 100vh;
        }
        .container-grid {
          align-self: center;
        }
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, auto));
          gap: 32px;
        }

        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          background-color: #efefef;
          padding: 16px;
          border-radius: 15px;
          box-shadow: 0px 10px 15px -5px rgb(0 0 0 / 65%);
          transition: all 0.2s ease-in-out;
        }

        .card:hover {
          transform: scale(1.1);
        }
        .card-content {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    'http://4q6k83l9-dev.preview.zesty.io/-/gql/movies_and_shows.json'
  );
  let data = await res.json();
  console.log(data);
  if (!data.ok) {
    console.error('data not found');
  }
  return {
    props: {
      data: data,
    },
  };
}
