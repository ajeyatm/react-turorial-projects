import axios from 'axios'
import useSWR from 'swr'

import './App.css'

const usersApi = 'http://localhost:3000/mock/users'
//https://jsonplaceholder.typicode.com/users

const fetcher = (url) => axios.get(url).then((res) => res.data)

const useUsers = (key) => {
  const { data, error } = useSWR(key, fetcher, {
    refreshInterval: 4000,
  })
  return {
    users: data,
    error, //error:error
    isLoading: !data && !error,
  }
}

function App() {
  const { users, error, isLoading } = useUsers(usersApi)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className='App'>
      <h2>Users</h2>

      <div className='user-wrapper'>
        {users?.map((user, index) => (
          <div className='user' key={index}>
            <div>
              <strong>{user.name}</strong>
            </div>
            <div>
              <a href={`mailto:${user.email}`} className='email-link'>
                {user.email}
              </a>
            </div>
            <div>{user.phone}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
