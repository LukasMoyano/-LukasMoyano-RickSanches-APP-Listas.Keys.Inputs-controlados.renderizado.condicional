import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState()



useEffect (() => {
    axios
    .get(residentUrl)
    .then(({data}) => setResidentInfo(data))
    .catch((error) => console.log(error))
}, [])
   

  return (
    <article className='flex flex-col justify-center relative h-[400px] w-[450px]'>
        <header className=" absolute bottom-[300px] z-30   w-full " >
            <img className='mx-auto w-[200px] aspect-square rounded-full' src={residentInfo?.image} alt=""/>
            <div className="flex item-center gap-2 p-2">
            <div className="h-[10px] aspect-square bg-green-500 rounded-full">{residentInfo?.status}</div>
            </div>

        </header>
        <section className=" h-[320px] relative top-0 bg-cover w-full bg-[url(./src/assets/targeta001.png)]">
            <h3 className='top-0  absolute'>Name: {residentInfo?.name}</h3>
            <ul className='absolute'>
                <li>Species: {residentInfo?.spacies} </li>
                <li>origin:{residentInfo?.origin.name}</li>
                <li>Times Appear:{residentInfo?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard