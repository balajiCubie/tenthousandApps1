import React from 'react'
import { PortableText } from '@portabletext/react'

// Sanity
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 't0tgcmpy',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false
})

export async function getServerSideProps(context) {
  const slug = context.params.slug

  const post = await client.fetch(`*[_type == "math" && slug.current == $slug][0]`, { slug })

  return {
    props: {
      post
    }
  }
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }

      return (
        <img
        alt={value.alt || ' '}
        loading='lazy'
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
        )
    }
  }
}

const slug = ({ post }) => {


  // const post_ref = client.fetch('*[_type == "math" && references(^._id)]{title}')

  // console.log(post_ref)

  // console.log(post?.reference1._ref)
  // console.log(post?.reference2._ref)
  // console.log(post?.reference3._ref)

  return (
    <div>
      <h2 className='mt-5 text-center'>{post?.name}</h2>
      <p className='text-center'>{post?.typCal}</p>

      <div className='container m-auto'>
        <iframe
          src={post?.iframe}
          className='w-100 mt-3'
          style={{ height: 'auto', minHeight: '775px' }}
          scrolling='no'
        ></iframe>
      </div>

      {/* <p className='container m-auto'>{post?.content}</p> */}

      <div className='p-5 m-3'>
        <PortableText value={post?.content} components={ptComponents} />
      </div>

      <div className='my-3'>Related</div>
    </div>
  )
}

export default slug
