import { cookies } from "next/headers";
import Form from "../Form/Form";
import Login from "../Login/Login";




const UserCheck = () => {

  const user = cookies()?.get('user')?.value;
    
  const userData = user ? JSON.parse(user) : null;

  
  return (
    <div>
        {user ?
            <Form userData={userData} />
            :
            <Login />
        }
    </div>
  )

}

export default UserCheck
