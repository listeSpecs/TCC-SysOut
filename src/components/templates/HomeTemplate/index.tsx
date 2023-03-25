import React from 'react';
import Menu from '../../Menu';
import Header from '../../Header';
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
