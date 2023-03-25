import styled from 'styled-components';
import { colors } from '../../global/styles/colors';
import { Row } from '../../styles/base';

export const HeaderWrapper = styled(Row)`
  justify-content: space-between;
  padding: 24px;
  background-color: ${colors.utilitary};

  > span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
  }
`;
