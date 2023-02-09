import { client } from '@/.tina/__generated__/client'



const getGlobalContent = async () => {
  const globalContent = await client.queries.global({ relativePath: 'global.json' })
  return {
    data: globalContent.data,
    query: globalContent.query,
    variables: globalContent.variables,
  }
}

export { getGlobalContent }
