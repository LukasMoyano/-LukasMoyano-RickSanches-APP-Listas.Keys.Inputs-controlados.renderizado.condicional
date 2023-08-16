import axios from 'axios'
import React, { useEffect } from 'react'

const ResidentCard = (residentUrl) => {



useEffect (() => {
    axios.get(resisident)
    .then(({data}) => serResidentInfo(data))
    .catch((error) => console.log(error))
}, [])

    
    )

  return (
    <article>
        <header>
            <img src={residentInfo?.image} alt=""/>>
            
        </header>
        <section>
            <h3>{residentInfo?.name}</h3>
            <url>
                <li>                </li>
                <li>                </li>

                <li>                </li>

            </url>
        </section>
    </article>
  )
}

export default ResidentCard