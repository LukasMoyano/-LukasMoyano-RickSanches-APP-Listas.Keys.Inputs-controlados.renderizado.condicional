import React from 'react';
import ResidentCard from './ResidentCard';

export const ResidentList = ({ residents }) => {
  return (
    <main>
    <section className='grid  grid-cols-1 gap-28'>
      {
      residents.map((resident) => 
        <ResidentCard key={resident} residentUrl={resident} />
      )
      }
    </section>
    </main>
      
  );
};

export default ResidentList;