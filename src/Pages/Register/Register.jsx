import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContextProvider";


const Register = () => {
    const {createRegister, updateUser} = useContext(AuthContext)

    const handleToRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const PhotoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.email.value;
        console.log(name,PhotoUrl, email, password);
        createRegister( email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            // ...
            updateUser(name, PhotoUrl)
            .then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              console.log(error);
            });

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
          });
    }


  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col border-[2px] rounded-md p-10 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border-[1px] ">
          <form onSubmit={handleToRegister} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name='photo'
                placeholder="PhotoURL"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              
              <input type="submit" className="btn btn-primary" value={'Register'} />
            </div>
            <p className="text-center text-sm">
              Have an Account please{" "}
              <Link className="text-primary" to={"/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
