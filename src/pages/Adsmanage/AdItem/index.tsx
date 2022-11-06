import useAdsData from 'hooks/useAdsData';
import React from 'react';
import AdItem from './AdItem';

const AdItems = () => {
  const filterItem = useAdsData();
  return (
    <>
      {filterItem.map((data, index) => (
        <AdItem key={index} data={data} />
      ))}
    </>
  );
};

export default AdItems;
