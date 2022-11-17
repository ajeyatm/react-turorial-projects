export async function getStaticPaths() {
  let posts = []

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts = await res.json()
  } catch (error) {}

  return {
    paths: posts.map((p) => ({
      params: { id: `${p.id}` },
    })),
    // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params }) {
  console.log(params)
  let post = {}
  let err = null

  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
    post = await res.json()
  } catch (error) {
    err = 'Something went wrong'
  }

  return {
    props: {
      post: post,
      err: err,
      isLoading: !err & !post,
    },
  }
}

const Post = (props) => {
  if (props.isLoading) return <div>Loading..</div>
  if (props.err) return <div>{err}</div>
  return (
    <div>
      <div>Post Id - {props.post.id}</div>
      <div>Post Title - {props.post.title}</div>
      <div>Post Body - {props.post.body}</div>
    </div>
  )
}

export default Post
