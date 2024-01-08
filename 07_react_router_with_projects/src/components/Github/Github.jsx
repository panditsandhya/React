import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/panditsandhya')
  //   .then(response => response.json())
  //   .then(data =>{
  //     console.log(data);
  //     setData(data)
  //   })
  
  // }, [])
  
  return (
    <div className='text-center bg-blue-800 text-white p-4 text-3xl'>Github Name: {data.name} 
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/panditsandhya')
  return response.json()
} 

