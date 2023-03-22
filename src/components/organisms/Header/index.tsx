import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { HeaderWrapper } from './style';
import UserTag from '../../atoms/UserTag';
import { colors } from '../../../global/styles/colors';
import { Label } from '../../../styles/base';

const Header = (props: any) => (
  <HeaderWrapper>
    <UserTag label="Caio Liste" icon={<PersonIcon fontSize="large" htmlColor={colors.white} />} />
    <Label size={24} color={colors.white} bold >{props.title}</Label>
    <div>

    </div>
  </HeaderWrapper>
);

export default Header;
