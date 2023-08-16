import React from 'react';
import ResidentCard from './ResidentCard';

const ResidentList = ({ residents }) => {
  return (
    <section>
      {residents.map((resident, index) => (
        <ResidentCard key={index} residentUrl={resident} />
      ))}
    </section>
  );
};

export default ResidentList;




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
