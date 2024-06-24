import { cookies } from "next/headers";
import Navbar from "./Navbar"




const NavbarContainer = () => {

    const user = cookies()?.get('user')?.value;
      
    const userData = user ? JSON.parse(user) : null;


  return (
    <div>
      <Navbar user={userData} />
    </div>
  )
}

export default NavbarContainer
