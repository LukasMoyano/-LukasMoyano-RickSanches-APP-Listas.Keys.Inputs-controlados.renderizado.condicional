import React from 'react';
import ResidentCard from './ResidentCard';

const ResidentList = ({ residents }) => {
  return (
    <section>
      {
      residents.map((resident, index) => 
        <ResidentCard key={index} residentUrl={resident} />
      )
      }
    </section>
  );
};

export default ResidentList;