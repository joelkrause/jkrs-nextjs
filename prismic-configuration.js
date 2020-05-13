import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://jkrs.cdn.prismic.io/api/v2'
export const accessToken = 'MC5YcnZmZkJFQUFDUUEwdW56.77-9HA_vv71D77-977-9fiXvv73vv70t77-9e--_vVDvv73vv73vv70I77-9T1gMT--_vQ3vv713F--_vQI'

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