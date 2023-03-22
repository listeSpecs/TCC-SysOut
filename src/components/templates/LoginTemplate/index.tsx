import React from "react";
import { colors } from "../../../global/styles/colors";
import { Label, Spacing, Wrapper } from "../../../styles/base";
import LoginForm from "../../molecules/LoginForm";

const LoginTemplate = (props: any) => {
  console.log(props);
  return (
    <Wrapper
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Label bold size={44} color={colors.black}>
          Login
        </Label>

        <Spacing size={8} />

        <LoginForm handleLogin={props.handleLogin} />
      </div>
    </Wrapper>
  );
};

export default LoginTemplate;
