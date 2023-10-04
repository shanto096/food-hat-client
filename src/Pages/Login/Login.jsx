
import {  useContext, useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthContextProvider';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';




const Login = () => {
  
const {createLogin} =useContext(AuthContext)
    
    const [disabled, setDisabled]= useState(true)
    





  useEffect(()=>{
    loadCaptchaEnginge(6);
  },[])


    const handleToLogin = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createLogin(email, password)
        .then(result =>{  
          const userLogged = result.user;
          console.log(userLogged);
        })
        .catch(error => {
          console.log(error.message); 
        })
      
      

    }


    const handleCaptcha = (e)=>{
      const user_captcha_value = e.target.value
      console.log(user_captcha_value);
      if (validateCaptcha(user_captcha_value)) {
        setDisabled(false)
     }

     else {
         setDisabled(true)
     }
    }
  return (
    
      <div className="hero min-h-screen   ">
        <div className="hero-content flex-col justify-center border-[2px] p-10 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleToLogin}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input onBlur={handleCaptcha}
                  type="text"
                  name='captcha'
                  placeholder="Inter you Captcha"
                  className="input input-bordered"
           
                />
                

              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} className='btn btn-primary' type="submit" value={'Login'} />
              </div>
              <p className='text-center text-sm'>Don't have an Account please <Link className='text-primary' to={'/register'}>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default Login;
