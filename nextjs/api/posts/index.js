// import fetch from 'isomorphic-fetch'

export function getPosts () {
  return fetch('https://4q6k83l9-dev.preview.zesty.io/my/custom/endpoint.json?limit=5')
}

export function getPost (slug) {
  return fetch(`https://4q6k83l9-dev.preview.zesty.io/my/custom/endpoint.json?path=${slug}`)
}