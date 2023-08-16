import React from 'react';
import ResidentCard from './ResidentCard';
import Pagination from './Pagination';

export const ResidentList = ({ residents }) => {

  const [currentPage, setcurrentPage] = useState(1)

  const RESIDENTS_PER_PAGE = 9

  //CANTIDAD TOTAL DE PAGUINAS
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

  //Residentes que se muestran por paguina actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
  const sliceEnd = sliceEnd + RESIDENTS_PER_PAGE
  const residentsInPage = residents.slice(sliceStart, sliceEnd)

  //generacion de las paguinas que se van a mostrar
  const pages = []
  for(let i = 1; i <= totalPages; i++){
    pages.push(i)
  }



  return (
    <section>
      <section className='grid  grid-cols-1 gap-28'>
        {
          residents.map((resident) =>
            <ResidentCard key={resident} residentUrl={resident} />
          )
        }
      </section>
      <Pagination />>
    </section>

  );
};

export default ResidentList;