import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthContextProvider";
import { useNavigate } from "react-router-dom";


const GoogleSingin = () => {
    const { googleSingUp} =useContext(AuthContext)
    const navigate = useNavigate()

    const googleSing = ()=>{
        googleSingUp()
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);

            const saveData = {name:user.displayName, email:user.email}
            // ...
            fetch("http://localhost:5000/users",{
          method:"POST",
         headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(saveData)
        })
        navigate('/')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
          });
    }

    return (
        <div className="  ">
            <button onClick={googleSing} className=" bg-yellow-300 h-10 w-10 rounded-full border-[2PX]font-bold text-3xl bo">G</button>
        </div>
    );
};

export default GoogleSingin;