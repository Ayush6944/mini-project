import React,{useState} from "react";
import { Link } from "react-router-dom";
// import save from "../../db/connect";


export default function Signup(){

    const[user,setUser]=useState({
        name:"",number:"",address:"",gender:"",email: "",password:""});

    let name,value;

    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    } 

    const PostData= async () =>{
        e.preventDefault();

        const {name,number,address,gender,email,password}= user;
    }





    // div<h1>sigun ip</h1></div>/
    return(
    <section class=" bg-orange-200 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 overflow-scroll">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src='logo.png' alt="logo"/>
          SHOPSPOT
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#"  method="POST" >

                    <div>
                         <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                         <input type="name" name="name"  value={user.name} onChange={handleInputs}  id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ayush"  required="1"/>
                    </div>
                    <div>
                         <label for="Number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                         <input type="number" name="number"  value={user.number} onChange={handleInputs}  id="number" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9999999999" required="1"/>
                    </div>
                    <div>
                         <label for="Address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                         <input type="address" name="address"  value={user.address}
                     onChange={handleInputs}  id="address" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="k.p-1,Greater Noida" required="1"/>
                    </div>
                    <label htmlFor="gender" className="p-4">Gender</label>
                    <div class="inline-flex">
    <input class="" type="radio"  value={user.gender} onChange={handleInputs}  id="male" name="gender" />
    <label class="hover:bg-orange-400 text-gray-800 font-semibold py-2 px-4 cursor-pointer rounded-l" for="male">Male</label>
    <input class type="radio"  value={user.gender} onChange={handleInputs}  id="female"  name="gender" />
    <label class="hover:bg-orange-400 text-gray-800 font-semibold py-2 px-4 cursor-pointer" for="female">Female</label>
    <input class="" type="radio"  value={user.gender} onChange={handleInputs}  id="non-binary"  name="gender" />
    <label class=" hover:bg-orange-400 text-gray-800 font-semibold py-2 px-4 cursor-pointer rounded-r" onClick='bg-orange-400' for="non-binary">other</label>
  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email"  value={user.email}
                 onChange={handleInputs}  id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="1"/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password"  value={user.password}
                 onChange={handleInputs}  id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password"  value={user.cpassword}
                 onChange={handleInputs}  id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="1"/>
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" onClick={PostData} class="w-full text-black  bg-orange-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> <Link to='/login'>Create an account</Link></button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    )
}