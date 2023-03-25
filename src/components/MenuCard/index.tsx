import React from "react";
import { colors } from "../../global/styles/colors";
import { Label, Spacing } from "../../styles/base";
import { CardButton } from "./style";

const MenuCard = (props: any) => (
  <CardButton type="button" onClick={props.onClick}>
    {props.icon}
    <Spacing />
    <Label color={colors.black} bold size={18}>
      {props.label}
    </Label>
  </CardButton>
);

export default MenuCard;
