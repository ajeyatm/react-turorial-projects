import { useRouter } from 'next/router'

const Product = () => {
  const router = useRouter()
  console.log(router)

  return <div>Your are watching - {router.query.id} </div>
}

export default Product
