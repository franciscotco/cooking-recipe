import React, { type ReactElement, forwardRef, ForwardedRef, ComponentPropsWithoutRef } from "react";

import { Label as Root } from "./label.styles";

export type LabelProps = ComponentPropsWithoutRef<typeof Root>;

const Label = ({ children, ...props }: LabelProps, ref: ForwardedRef<HTMLLabelElement>): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Label);
