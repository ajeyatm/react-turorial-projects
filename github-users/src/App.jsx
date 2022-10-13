import { useState, useEffect } from 'react'
import './App.css'
import User from './components/User'

const me = {
  avatar: 'https://avatars.githubusercontent.com/u/65631574?v=4',
  userName: 'ajeya',
  repoLink: 'https://github.com/ajeyatm/',
}

function App() {
  const [users, setUsers] = useState([])
  /**
   * i need to use the api
   *i hv take the url/api and pass it to some special function
   *i wl take the response/result from the special function ,
   * i wl store it in state variable
   * i wl use that state variable to display content on the screen/ui
   */
  const GITHUB_API = 'https://api.github.com/users'

  useEffect(() => {
    fetch(GITHUB_API)
      .then((res) => res.json())
      .then((data) => {
        // console.log('success==>', data)
        setUsers(data)
      })
      .catch((err) => {
        console.log('failure==>', err)
      })
  }, [])

  return (
    <div>
      <User user={me} key={me.login} />

      <User
        user={{
          avatar: 'https://avatars.githubusercontent.com/u/112887113?v=4',
          userName: 'amit',
          repoLink: 'https://github.com/amitsharmasatna/',
        }}
        key={'amit'}
      />
      <div className='App'>
        {users.map((item, ind) => (
          <User
            user={{
              avatar: item.avatar_url,
              repoLink: item.html_url,
              userName: item.login,
            }}
            key={ind}
          />
        ))}
      </div>
    </div>
  )
}

export default App
