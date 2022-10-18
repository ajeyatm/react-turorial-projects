import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
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
  const [searchKey, setSearchKey] = useState(null)

  const inputRef = useRef()

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
      console.log('resp from fetch: =', res)
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

  const getUsersByAxios = async () => {
    try {
      const res = await axios.get(GITHUB_API)
      console.log('resp from axios: =', res.data)
      setUsers(res.data)
    } catch (error) {
      console.log(err)
    }
  }

  useEffect(() => {
    // getGitHubUsers()
    // getUsers()
    getUsersByAxios()
  }, [])

  return (
    <div>
      <h2>GitHub Users</h2>
      <div className='searchBarWrapper'>
        <input
          type='text'
          className='searchBar'
          placeholder='Search By Name'
          // onChange={(e) => {
          //   setSearchKey(e.target.value)
          // }}
          ref={inputRef}
        />
        <button
          onClick={() => {
            console.log(inputRef)
            // setSearchKey(inputRef.current.value)
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            inputRef.current.value = ''
            setSearchKey(null)
          }}
        >
          Reset
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {users
          .filter((user, index) => {
            // if(searchKey=== null || searchKey==='') return true
            if (!searchKey) return true //if searchKey is empty , then return all users

            // console.log('searchKey==', searchKey)
            // console.log('item.login==', item.login)
            return user.login.startsWith(searchKey) //boolean
          })
          .map((item, index) => (
            <User
              key={index}
              repoLink={item.html_url}
              avatar={item.avatar_url}
              userName={item.login}
            />
          ))}
      </div>
    </div>
  )
}

export default GitHubUsers
