import { Inter } from 'next/font/google'
import Header from '@/components/header'
import { useEffect, useState } from 'react'
import BallInput from '@/components/widgets/ballInput'


export default function Login() {

  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")

  var signInWithEmail = () => {
  }
  return (
    <div>
      <Header selectedPage={"login"} />
      <div className="absolute w-full h-full bg-transparent z-40">
        <div id="login-window" className="animate-fadeIn">
          <div className="absolute h-screen">
            <img src="./images/back.jpg" alt="" className=" object-center h-full object-cover" />
          </div>
          <div className="absolute w-full h-[100vh] pt-64 bg-gray-700/75">
            <div className='w-fit h-full container mx-auto flex flex-col justify-between'>
              <div id="signInArea" className='pt-28'>
                <div className="sm:flex w-fit h-fit p-4 justify-start">
                  <div className=' w-48 h-12 flex items-center text-3xl text-white'>Email: </div>

                  <BallInput inputType='text' inputValue={emailAddress} setInputValue={setEmailAddress} />
                </div>
                <div className="sm:flex w-fit h-fit p-4 justify-start">
                  <div className=' w-48 h-12 flex items-center text-3xl text-white'>Password: </div>
                  <BallInput inputType='password' inputValue={password} setInputValue={setPassword} />
                </div>
              </div>

              <div id='signInGroup' className='pb-40'>
                <div className="flex w-full h-20 p-4">
                  <button className="w-full h-full bg-white hover:bg-blue-100 border-blue-300 border-4 rounded-full text-black text-xl transition duration-500 shadow-md shadow-blue-400"
                    onClick={signInWithEmail}
                  >SignIn with Email</button>
                </div>
                <div className="flex w-full h-20 p-4 bottom-4">
                  <button className="w-full h-full bg-blue-500 hover:bg-blue-300 border-blue-300 border-4 rounded-full text-white text-xl transition duration-500 shadow-md shadow-blue-400">SignUp with Google Account</button>
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>


    </div>

  )
}
