import React, { useCallback, useEffect, useState } from 'react'

const GeneratePass = () => {
        const [password,setPassword] = useState("")
        const [length,setLength] = useState(12)
        const [numberAllowed, setNumberAllowed] = useState(false)
        const [charAllowed, setCharAllowed] = useState(false)



        const generatePassword = useCallback(() => {
            let pass = "";
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            if (numberAllowed) {str += "0123456789";}
            if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

            for (let i = 0; i < length; i++) {
                let randomIndex = Math.floor(Math.random() * str.length + 1);
                pass =pass+str.charAt(randomIndex)
                
             
            }
            setPassword(pass)
            
            
        },[length,numberAllowed,charAllowed,setPassword])

        useEffect(generatePassword,[length,numberAllowed,charAllowed,generatePassword])
       


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-200'>
        <h1 className=''>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type="text"
            value={password}
            placeholder='Password'
            readOnly
             />
             <button onClick={copyPassToClip}
             className='text-white outline-none bg-blue-700 rounded-md px-4 py-1 shrink-0'>Copy</button>
        </div>
       
        <div className='flex text-md gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{ setLength(e.target.value)}}
            />
            <label >Length:{length}  </label>

        </div>
        <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            onChange={()=>{
                setNumberAllowed((prev)=>!prev)
            }}
             />
             <label >Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={()=>{
                setCharAllowed((prev)=>!prev)
            }}
             />
             <label >Character</label>
        </div>
        </div>




    </div>
   
  )
}

export default GeneratePass;