import React from 'react';
import Menu from '../../Menu';
import Header from '../../Header';
import { Wrapper } from '../../../styles/base';
import MenuGenerico from '../../MenuGenerico';

const TecnicosTemplate = (props: any) => {
  return (
    <>
      <Header title="Técnicos" />

      <Wrapper>
        <MenuGenerico />
      </Wrapper>
    </>
  );
};

export default TecnicosTemplate;
