import React, { type ReactElement, forwardRef, ForwardedRef, ComponentPropsWithoutRef } from "react";

import { Checkbox as Root } from "./checkbox.styles";

export type CheckboxProps = Omit<ComponentPropsWithoutRef<typeof Root>, "type">;

const Checkbox = ({ children, ...props }: CheckboxProps, ref: ForwardedRef<HTMLInputElement>): ReactElement => (
  <Root {...props} ref={ref} type="checkbox">
    {children}
  </Root>
);

export default forwardRef(Checkbox);
