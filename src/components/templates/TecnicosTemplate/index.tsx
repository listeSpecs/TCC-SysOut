import React from 'react';
import Menu from '../../molecules/Menu';
import Header from '../../organisms/Header';
import { Wrapper } from '../../../styles/base';
import MenuTecnicos from '../../molecules/MenuTecnicos';

const TecnicosTemplate = (props: any) => {
  return (
    <>
      <Header title="Técnicos" />

      <Wrapper>
        <MenuTecnicos />
      </Wrapper>
    </>
  );
};

export default TecnicosTemplate;
