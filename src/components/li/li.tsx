import React, { type ReactElement, forwardRef, ForwardedRef, ComponentPropsWithoutRef } from "react";

import { Li as Root } from "./li.styles";

export type LiProps = ComponentPropsWithoutRef<typeof Root>;

const Li = ({ children, ...props }: LiProps, ref: ForwardedRef<HTMLLIElement>): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Li);
