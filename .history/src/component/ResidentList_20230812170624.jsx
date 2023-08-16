import React from 'react';
import ResidentCard from './ResidentCard';

export const ResidentList = ({ residents }) => {
  return (
    <section>
      {
      residents.map((resident) => 
        <ResidentCard key={resident} residentUrl={resident} />
      )
      }
    </section>
  );
};

export default ResidentList;