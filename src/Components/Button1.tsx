import React from 'react'
import {useRouter} from 'next/navigation'

function Button1() {
  const router = useRouter()
  return (
    <div>
        <button className='bg-orange-600 rounded-2xl p-2 text-white' onClick={()=>{router.push('/contactUs')}}>{"Let\'s get started"} </button>
    </div> 
  )
}

export default Button1
