import React from 'react';
import ResidentCard from './ResidentCard';

export const ResidentList = ({ residents }) => {
  return (
    <section>
      <section className='grid  grid-cols-1 gap-28'>
        {
          residents.map((resident) =>
            <ResidentCard key={resident} residentUrl={resident} />
          )
        }
      </section>
    </section>

  );
};

export default ResidentList;