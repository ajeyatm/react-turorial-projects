const User = (props) => {
  return (
    <div>
      <img src={props.avatar} className='avatar' />
      <a href={props.repoLink} target='_blank'>
        {props.userName}
      </a>
    </div>
  )
}
//code splitting
//code reusability
//code isolation

export default User
