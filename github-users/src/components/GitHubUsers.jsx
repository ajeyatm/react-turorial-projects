import React, { useState, useEffect } from 'react'
import User from './User'

const GITHUB_API = 'https://api.github.com/users'

const GitHubUsers = () => {
  /**
   * i need to use the api
   *i hv take the url/api and pass it to some special function
   *i wl take the response/result from the special function ,
   * i wl store it in state variable
   * i wl use that state variable to display content on the screen/ui
   */
  const [users, setUsers] = useState([])

  function getGitHubUsers() {
    fetch(GITHUB_API)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setUsers(data) //GitHubUsers
      })
      .catch((err) => {
        console.log(err)
      })
  }

  async function getUsers() {
    try {
      const res = await fetch(GITHUB_API)
      const data = await res.json()
      setUsers(data)
    } catch (err) {
      console.log(err)
    }
  }

  //   const getUsers= async ()=>{
  //     try {
  //         const res = await fetch(GITHUB_API)
  //         const data = await res.json()
  //         setUsers(data)
  //       } catch (err) {
  //         console.log(err)
  //       }
  //   }

  useEffect(() => {
    // getGitHubUsers()
    getUsers()
  }, [])

  return (
    <div>
      <h2>GitHub Users</h2>
      {users.map((item, index) => (
        <User
          key={index}
          repoLink={item.html_url}
          avatar={item.avatar_url}
          userName={item.login}
        />
      ))}
    </div>
  )
}

export default GitHubUsers
