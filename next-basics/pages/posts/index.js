import Link from 'next/link'

export async function getStaticProps() {
  let posts = []
  let err = null

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts = await res.json()
  } catch (error) {
    err = 'Something went wrong'
  }

  return {
    props: {
      posts: posts,
      err: err,
      isLoading: !err & !posts.length,
    },
  }
}

const Posts = (props) => {
  if (props.isLoading) return <div>Loading..</div>
  if (props.err) return <div>{err}</div>
  return (
    <div>
      <h2>Posts </h2>
      <ul>
        {props.posts?.map((p) => (
          <li>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
