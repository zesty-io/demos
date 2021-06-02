
<img src="https://user-images.githubusercontent.com/729972/119580790-fc7ff680-bd75-11eb-9990-5110e5a3ae04.png" alt="NextJS Logo" width="200"/> <img src="https://user-images.githubusercontent.com/729972/119580602-8da29d80-bd75-11eb-8c2a-557f50c69051.png" alt="Plus Sign" width="200"/> <img src="https://user-images.githubusercontent.com/729972/119579922-4f58ae80-bd74-11eb-9178-8e6e7c7e3ae7.png" alt="Zesty.io Logo" width="200"/>

## Zesty.io Next JS Demo

Nuxt is the React framework for server side rendering static pages built with React https://nextjs.org/

This demo assumes you to know React and have some familiarity with NextJS

## Zesty.io Examples in this Demo

- Static page generation with Zesty.io Content via `getStaticProps` using the zesty content model endpoints


## Running this Example Locally

The example assume you can use a terminal and have node and npm installed.

1. Clone the Repo to a local folder
2. Open terminal at root folder
3. Run `npm install`
4. Run `npm run dev`
5. Open `localhost:3000` in your browser

## Deploying NextJS app to Google Cloud Run

Prereqs: 
- Install GCloud tools https://cloud.google.com/sdk/docs/install and auth from the command line.
- Know your google cloud project name (our is `zesty-dev`) and replace `[your-project]` reference with that

Look into `package.json` under scripts you will see 

```
    "build-container": "gcloud builds submit --tag gcr.io/zesty-dev/nextjs-zflix --project zesty-dev",
    "deploy-cloud-run": "gcloud run deploy nextjs-zflix --image gcr.io/zesty-dev/nextjs-zflix --project zesty-dev --min-instances 1 --platform managed --set-env-vars [env=prod] --region us-central1",
    "deploy": "npm run build-container && npm run deploy-cloud-run"
```

The first line builds a docker image and pushes it to gcp. Its neccesary becasue cloud run deploys a docker image. `npm run build-container` executes it.

`gcloud builds submit --tag gcr.io/[your-project]/nextjs-zflix --project [your-project]`

The second line actually deploys the service to cloud run. Note important flags 
- `--min-instances 1` keeps one instance running, this is good for faster response times but costs more money
- `--platform managed` deploys to the GCP service
- `--set-env-vars [env=prod]` used to determine what env values to load, good for staged vs. published content switches 
- `--region us-central1` where you deploy to see all here https://cloud.google.com/compute/docs/regions-zones

`gcloud run deploy nextjs-zflix --image gcr.io/[your-project]/nextjs-zflix --project [your-project] --min-instances 1 --platform managed --set-env-vars [env=prod] --region us-central1``

---

If you are part of the Zesty.io dev team you can deploy using: `npm run deploy`


