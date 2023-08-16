import axios from 'axios'
import React, { useEffect } from 'react'

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
        <header>
            <img src={residentInfo?.image} alt=""/>
            <div>
            <div classename="el boton rojito">{residentInfo?.status}</div>
            </div>

        </header>
        <section>
            <h3>{residentInfo?.name}</h3>
            <url>
                <li>Species: {residentInfo?.name} </li>
                <li>origin:{residentInfo?.origin.name}</li>
                <li>Times Appear:{residentInfo?.episodo.length}</li>
            </url>
        </section>
    </article>
  )
}

export default ResidentCard