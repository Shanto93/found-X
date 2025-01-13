import { MeiliSearch } from 'meilisearch'

// Initialize the MeiliSearch client
const meiliClient = new MeiliSearch({
  host: process.env.MEILISEARCH_HOST || 'http://localhost:7700',
  apiKey: process.env.MEILISEARCH_API_KEY,
})

export default meiliClient