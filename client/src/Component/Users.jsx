

const Users = ({list}) => {
  return (
    <div>
        {list.map((contact,index)=>(
            <div key={index}>
                <h1>First Name: {contact.firstName}</h1>
                <h1>Last Name: {contact.lastName}</h1>
                <h1>Email: {contact.email}</h1>
                
               
            </div>
        ))}
    </div>
  )
}

export default Users