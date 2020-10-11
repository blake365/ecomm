import React from "react";

// import "./button.styles.scss";

import { CustomButtonContainer } from './custome-button.styles'

const CustomButton = ({children, ...props}
) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
