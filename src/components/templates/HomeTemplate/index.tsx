import React from 'react';
import Menu from '../../molecules/Menu';
import Header from '../../organisms/Header';
import { Wrapper } from '../../../styles/base';

const HomeTemplate = () => {
  return (
    <>
      <Header title="Menu" />

      <Wrapper>
        <Menu />
      </Wrapper>
    </>
  );
};

export default HomeTemplate;
