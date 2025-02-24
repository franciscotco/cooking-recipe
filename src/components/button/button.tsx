import React, { type ReactElement, forwardRef, ForwardedRef, ComponentPropsWithoutRef } from "react";

import { Button as Root } from "./button.styles";

export type ButtonProps = ComponentPropsWithoutRef<typeof Root>;

const Button = ({ children, ...props }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Button);
