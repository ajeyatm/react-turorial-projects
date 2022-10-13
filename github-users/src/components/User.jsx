const User = (props) => {
  return (
    <div key={props.user.repoLink}>
      <img src={props.user.avatar} className='avatar' />
      <a href={props.user.repoLink} target='_blank'>
        {props.user.userName}
      </a>
    </div>
  )
}
//code splitting
//code reusability
//code isolation

export default User
