import React from 'react';
import { colors } from '../../../global/styles/colors';
import { Label, Row, Spacing } from '../../../styles/base';

interface Props {
  label: string,
  icon: any
}

const UserTag = ({ label, icon }: Props) => (
  <Row>
    {icon}
    <Spacing />
    <Label color={colors.white} size={18}>{label}</Label>
  </Row>
);

export default UserTag;
