import { client } from '@/.tina/__generated__/client'



const getTinaContent = async (collection, contentFile) => {
  const globalContent = await client.queries[collection]({ relativePath: contentFile })
  return {
    data: globalContent.data,
    query: globalContent.query,
    variables: globalContent.variables,
  }
}

export { getTinaContent }
