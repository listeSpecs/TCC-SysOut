import styled from "styled-components";
import { colors } from "../global/styles/colors";

interface Props {
  size?: number;
  justify?: "center" | "space-evenly" | "space-around" | "space-between";
  background?: string;
  color?: string;
  bold?: boolean;
  block?: boolean;
}

export const Label = styled.span<Props>`
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  color: ${({ color }) => color || colors.gray};
  font-weight: ${({ bold }) => (bold ? 450 : 300)};
  display: ${({ block }) => (block ? "block" : "inline")};
`;

export const Row = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: center;
  background: ${({ background }) => background || "transparent"};
`;

export const Column = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: center;
  background: ${({ background }) => background || "transparent"};
`;

export const FormWrapper = styled.div`
  min-width: 580px;
  max-width: 1080px;
`;

export const Wrapper = styled.div`
  padding: 0 36px;
  height: 100vh;
  background-color: ${colors.background};
`;

export const Spacing = styled.div<Props>`
  padding: ${({ size }) => (size ? `${size}px` : "4px")};
  background: transparent;
`;
