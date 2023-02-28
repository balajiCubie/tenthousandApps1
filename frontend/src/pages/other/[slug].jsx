import React from 'react'

// Sanity
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 't0tgcmpy',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false
})

export async function getServerSideProps(context) {
  const slug = context.params.slug;

  const post = await client.fetch(`*[_type == "others" && slug.current == $slug][0]`, {slug})

  return {
    props: {
      post
    }
  }
}

// export async function getStaticProps(context) {
//   const { slug = "" } = context.params

//   const post = await client.fetch(`
//     *[_type == "post" ][0]
//   `, { slug })

//   return {
//     props: {
//       post
//     }
//   }
// }

const slug = ({ post }) => {

  console.log(post)

  return (
    <div>{post?.name}</div>
  )
}

export default slug
