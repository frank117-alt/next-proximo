import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"


export default function Contact(){

return(

    <>

    <h1 className=" text-indigo-600  text-center text-4xl "> CONTACT</h1>
    <div className=" w-full md:w-auto  py-6  px-12 md-auto text-white   rounded-lg ">
    <form action="" class="mt-10">



<input type="hidden" name="access_key" value="" /> 
<div class="grid gap-6 sm:grid-cols-2">
  <div class="relative z-0">
    <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-l text-white-900 focus:border-indigo-400 focus:outline-none focus:ring-0" placeholder=" " />
    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
  </div>
  <div class="relative z-0">
    <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-l text-white-900 focus:border-indigo-600 focus:outline-none focus:ring-0" placeholder=" " />
    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
  </div>
  <div class="relative z-0 col-span-2">
    <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-l text-white-900 focus:border-indigo-600 focus:outline-none focus:ring-0" placeholder=""></textarea>
    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
  </div>
</div>
<button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
</form>
</div>

</>
)

}