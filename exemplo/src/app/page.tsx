"use client"

import {useRouter} from "next/navigation"


export default function Home(){
  const router = useRouter() 
  
  const redireciona = ()=>{
      router.push("/login")
  }
  
  return(
    <div className="w-screen h-screen bg-personalizado flex items-center justify-center">
      <div>
        <h1>Clique no botão abaixo para ir para login</h1>
        <input
        type="button"
        value="Login"
        onClick={redireciona}
        className="p-4 bg-red-500 text-white rounded-xl shadow-sm"
        />
      </div>
    </div>
  )
}

//Colocar no page.tsx (home)