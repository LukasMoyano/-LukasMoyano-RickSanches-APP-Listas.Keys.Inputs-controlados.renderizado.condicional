import React from 'react'
import ResidentCard from './ResidentCard'



const ResidentList = ({ resident }) => {


  return (
    <section>
      {
resident.map((resident) => <ResidentCard />)
}
    </section>
  )

  export default ResidentList

//     if (location) {
//       const fetchCharacters = async () => {
//         const promises = location.residents.map((residentUrl) =>
//           axios.get(residentUrl).then((response) => response.data)
//         );

//         const charactersData = await Promise.all(promises);
//         setCharacters(charactersData);
//       };

//       fetchCharacters();
//     }
//   }, [location]);  )
}
