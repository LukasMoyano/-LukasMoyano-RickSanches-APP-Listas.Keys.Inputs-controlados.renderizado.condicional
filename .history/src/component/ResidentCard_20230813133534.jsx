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
    <article>
        <header className='w-[300px]'>
            <img src={residentInfo?.image} alt=""/>
            <div className="flex item-center gap-2 p-2">
            <div className="h-[10px] aspect-square bg-green-500 rounded-full">{residentInfo?.status}</div>
            </div>

        </header>
        <section className=" bg-[url(./src/assets/targeta001.png)]">
            <h3>Name: {residentInfo?.name}</h3>
            <url>
                <li>Species: {residentInfo?.spacies} </li>
                <li>origin:{residentInfo?.origin.name}</li>
                <li>Times Appear:{residentInfo?.episode.length}</li>
            </url>
        </section>
    </article>
  )
}

export default ResidentCard