import React from 'react';
import AdHeader from './AdHeader';
import AdItems from './AdItem';
import { Contents, Section } from './styles';

const AdsManage = () => {
  return (
    <Contents>
      <AdHeader />
      <Section>
        <AdItems />
      </Section>
    </Contents>
  );
};

export default AdsManage;
