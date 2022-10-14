import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'

export default function Blog({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <PortableText value={post.body} />
        </div>
      ))}
    </div>
  )
}

const client = createClient({
  projectId: 'ldf2dulz',
  dataset: 'production',
  apiVersion: '2022-10-13',
  useCdn: false,
})

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`)

  return {
    props: {
      posts,
    },
  }
}
