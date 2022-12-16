// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | {
      success: boolean
      profile?: {
        username: string //'ajeya',
        userid: string //'12345',
        email: string //'ajeya@gmail.com',
        isAdmin: boolean //true|false
      }
      message?: string
    }
  | any

type ReqBody = { username: string; password: string }

enum EHttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //   if (req.method !== EHttpMethods.GET) {
  //     res.status(405).json({ success: false, message: 'Method Not Allowed' })
  //     return
  //   }
  //   const { username, password } = req.body as ReqBody
  //   if (username && password && username === 'ajeya' && password === 'ajeya123') {
  //     res.status(200).json({
  //       success: true,
  //       profile: {
  //         username: 'ajeya',
  //         userid: '12345',
  //         email: 'ajeya@gmail.com',
  //         isAdmin: true,
  //       },
  //     })
  //     return
  //   }

  //   res.status(401).json({ success: false })
  //   return

  try {
    switch (req.method) {
      case 'POST':
        // Do some GET stuff
        const { username, password } = req.body as ReqBody
        if (
          username &&
          password &&
          username === 'ajeya' &&
          password === 'ajeya123'
        ) {
          res.status(200).json({
            success: true,
            profile: {
              username: 'ajeya',
              userid: '12345',
              email: 'ajeya@gmail.com',
              isAdmin: true,
            },
            message: 'Login Success!!',
          })
        } else {
          res
            .status(401)
            .json({ success: false, message: 'Login credentials are wrong!!' })
        }
        break

      default:
        // No Matched Method
        if (!res.headersSent)
          res
            .status(405)
            .json({ success: false, message: 'Method Not Allowed' })
        break
    }
  } catch (e) {
    // Unprocessable Entity
    res.status(422).send(e)
  }
}
