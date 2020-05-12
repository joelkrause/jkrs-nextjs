import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://jkrsdev.cdn.prismic.io/api/v2'
export const accessToken = 'MC5YcTlBWlJBQUFDRUFoWmlz.77-977-9M1QHP--_vRRtXe-_vQ_vv73vv73vv71s77-9I--_ve-_vWfvv71nNu-_vSvvv73vv70577-977-977-9'

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

export const linkResolver = (doc) => {
    if (doc.type === 'post') {
      return `/posts/${doc.uid}`
    }
    return '/'
  }

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}