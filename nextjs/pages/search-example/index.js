import Layout from '../../components/layout'
import { useState } from 'react';
import Head from 'next/head'

function Posts(props) {
    const [searchVal,setSearchVal] = useState('');

    let filteredArticles = props.articles
    
    if(searchVal != ''){
        filteredArticles = filteredArticles.filter( article => {
            if(article.title.toLowerCase().includes(searchVal)){
                return true
            }
        })
    }
    
    return (
        <Layout>
             <Head>
                <title>Search Example</title>
            </Head>
           
            <div className="fake-google-header">
                <img src="/google-logo.png" width="200" alt="Google" />
                
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchVal}
                    onChange={e => setSearchVal(e.target.value)}
                    />
                    <p>This NextJS example uses an endpoint automatically generating from a Zesty.io content instance <a  target="_blank" href="https://4q6k83l9-dev.preview.zesty.io/-/gql/movies_and_shows.json">https://4q6k83l9-dev.preview.zesty.io/-/gql/movies_and_shows.json</a> to load the data, 
                    and uses a javascript array filter to power the search. Data is preloaded using a NextJS function <a target="_blank" href="https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation">getStaticProps</a> </p>
            </div>
            <div className="results">
          {filteredArticles.map((art) => (
            <div key={art.zuid} className="result">
                <div className="imageThumb">
                    <img src={art.poster} alt={art.title} />
                </div>
                <div className="resultsText">
                    <h4><a href={art.path_full}>{art.title}</a></h4>
                    <p>{art.description.replace(/(<([^>]+)>)/gi, "").substring(0,200)}</p>
                    <a className="path" href={art.uri}>{art.uri}</a> - <a className="cached" href={art.uri}>Cached</a>
                </div>
            </div> 
          ))}
            </div>
          <style jsx>{`
            .results {
                padding-top: 90px;  
                margin: 3rem auto 6rem;
            }
            .imageThumb {
                overflow: hidden;
                min-width: 120px;
                height: 80px;
                flex-grow: 3;
                margin-right: 10px;
                border: 2px solid #2736D1;
            }
            .resultsText{
                flex-grow: 1;
            }
            .imageThumb img {
                width: 150px;
                margin-left: -15px;
            }
            .result {
                font-family: Verdana, Arial, sans-serif;
                margin-bottom: 30px;
                display: flex;
            }
            h4 {
                margin: 0;
                line-height: 14px; 
                margin-bottom: 4px;
            }
            .fake-google-header{
                position: fixed;
                width: 100%;
                top: 0px;
                left: 0px;
                border-bottom: 2px grey solid;
                padding: 20px;
                display: flex;
                background: white;
            }
            .fake-google-header input, .fake-google-header p {
                margin: auto 30px;
            }
            .fake-google-header p{
                color: grey
            }
            p {
                font-size: 14px;
                margin: 0;
            }
            h4 a { 
                color: #2736D1;
                font-size: 18px;
            }
            a.path {
                color: #34A853;
                font-size: 14px; 
            }
            a.cached {
                color: #2736D1;
                font-size: 14px; 
            }
            `}</style>
        </Layout>
      )
  }


export async function getStaticProps() {
    let res = await fetch('https://4q6k83l9-dev.preview.zesty.io/-/gql/movies_and_shows.json')
    let data = await res.json()
     
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
        props: { 
            articles: [...data], 
        }, 
    }
  }

  export default Posts